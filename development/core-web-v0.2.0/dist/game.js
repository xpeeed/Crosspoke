"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialState = exports.PRESETS = void 0;
exports.blinds = blinds;
exports.reduce = reduce;
exports.view = view;
const quiz_1 = require("./quiz");
exports.PRESETS = { Quick: { stack: 1000, handsPerLevel: 3 }, Standard: { stack: 2000, handsPerLevel: 3 }, 'Deep Stack': { stack: 4000, handsPerLevel: 4 } };
const LADDER = [[25, 50], [50, 100], [100, 200], [200, 400], [300, 600], [500, 1000], [750, 1500], [1000, 2000], [1500, 3000], [2000, 4000], [3000, 6000]];
function blinds(preset, completedHands) { if (!Object.hasOwn(exports.PRESETS, preset) || !Number.isSafeInteger(completedHands) || completedHands < 0)
    throw Error('INVALID_BLINDS'); const n = exports.PRESETS[preset].handsPerLevel, i = Math.floor(completedHands / n); const b = LADDER[Math.min(i, LADDER.length - 1)]; const factor = 2 ** Math.max(0, i - LADDER.length + 1); if (!Number.isSafeInteger(b[1] * factor))
    throw Error('BLIND_OVERFLOW'); return { level: i + 1, small: b[0] * factor, big: b[1] * factor, handsUntilIncrease: n - completedHands % n }; }
const initialState = () => ({ schemaVersion: 1, version: 0, game: null, history: {}, outbox: [], reports: [], lastCommandId: null });
exports.initialState = initialState;
const requireIt = (ok, why) => { if (!ok)
    throw Error(why); };
function reduce(previous, cmd, env) {
    if (previous.lastCommandId === cmd.id)
        return previous;
    requireIt(previous.schemaVersion === 1, 'UNSUPPORTED_SAVE');
    requireIt(cmd.expectedVersion === previous.version, 'STALE_STATE');
    requireIt(!!cmd.id, 'COMMAND_ID_REQUIRED');
    const s = structuredClone(previous), a = cmd.action, now = env.now();
    let g = s.game;
    const emit = (type, details) => { if (!env.telemetry || !g)
        return; s.outbox.push({ eventId: env.id(), sessionId: g.id, handId: g.hand.id, questionId: g.hand.question.id, questionRevision: g.hand.question.revision, datasetVersion: g.datasetVersion, mode: g.mode, preset: g.preset, initialPlayers: g.initialPlayers, activePlayers: g.activePlayers, phase: g.hand.phase, elapsedMs: g.activeElapsedMs, timestamp: now, eventSchemaVersion: 1, type, details }); };
    const setNext = (allowRepeat = false) => { if (!g)
        throw Error('NO_GAME'); const sel = (0, quiz_1.selectQuestion)(env.dataset, g.mode, s.history, g.seen, g.blocked, env.random, allowRepeat); if (sel.kind !== 'selected') {
        g.waiting = sel.kind;
        g.pendingNext = true;
        return;
    } g.datasetVersion = env.dataset.datasetVersion; g.hand = { id: env.id(), question: sel.question, phase: 'question', reason: 'normal' }; g.pendingNext = false; g.waiting = null; g.seen.push(sel.question.id); const h = s.history[sel.question.id]; s.history[sel.question.id] = { shownCount: (h?.shownCount ?? 0) + 1, lastShownAt: now }; emit('question_shown'); };
    const active = () => { requireIt(g?.status === 'active', 'GAME_NOT_ACTIVE'); return g; };
    const playing = () => { const x = active(); requireIt(!x.pendingNext, 'WAITING_FOR_QUESTION'); return x; };
    if (a.type === 'ackEvents') {
        s.outbox = s.outbox.filter(e => !a.ids.includes(e.eventId));
    }
    else if (a.type === 'start') {
        requireIt(!g || g.status === 'finished' || g.status === 'abandoned', 'ACTIVE_GAME_EXISTS');
        requireIt(Object.hasOwn(exports.PRESETS, a.preset) && Number.isInteger(a.players) && a.players >= 2 && a.players <= 8, 'INVALID_SETUP');
        const sel = (0, quiz_1.selectQuestion)(env.dataset, env.mode, s.history, [], [], env.random);
        if (sel.kind !== 'selected')
            throw Error('NO_QUESTIONS');
        g = { id: env.id(), mode: env.mode, datasetVersion: env.dataset.datasetVersion, preset: a.preset, initialPlayers: a.players, activePlayers: a.players, completedHands: 0, status: 'active', hand: { id: env.id(), question: sel.question, phase: 'question', reason: 'normal' }, seen: [sel.question.id], blocked: [], startedAt: now, activeElapsedMs: 0, lastTickAt: now, pendingNext: false, waiting: null };
        s.game = g;
        const h = s.history[sel.question.id];
        s.history[sel.question.id] = { shownCount: (h?.shownCount ?? 0) + 1, lastShownAt: now };
        emit('game_started');
        emit('question_shown');
    }
    else {
        requireIt(g, 'NO_GAME');
        g = g;
        // Heartbeat bounds unobserved time; recover explicitly excludes closed-browser time.
        if (g.status === 'active' && a.type !== 'recover') {
            g.activeElapsedMs += Math.max(0, Math.min(now - g.lastTickAt, 15000));
            g.lastTickAt = now;
        }
        switch (a.type) {
            case 'recover':
                g.lastTickAt = now;
                break;
            case 'heartbeat':
                active();
                break;
            case 'pause':
                active();
                g.status = 'paused';
                emit('game_paused');
                break;
            case 'resume':
                requireIt(g.status === 'paused', 'NOT_PAUSED');
                g.status = 'active';
                g.lastTickAt = now;
                emit('game_resumed');
                break;
            case 'abandon':
                requireIt(a.confirmed && (g.status === 'active' || g.status === 'paused'), 'ABANDON_NOT_ALLOWED');
                g.status = 'abandoned';
                emit('game_abandoned');
                break;
            case 'advance': {
                const x = playing();
                const phases = ['question', 'hint1', 'hint2', 'answer'];
                const i = phases.indexOf(x.hand.phase);
                requireIt(i >= 0 && i < 3, 'NO_FURTHER_PHASE');
                x.hand.phase = phases[i + 1];
                emit('phase_revealed');
                break;
            }
            case 'earlyFold': {
                const x = playing();
                requireIt(a.confirmed && x.hand.phase !== 'settled', 'EARLY_FOLD_NOT_ALLOWED');
                x.hand.reason = 'early_fold';
                x.hand.foldedAt = x.hand.phase;
                x.hand.phase = 'settled';
                break;
            }
            case 'showEarlyAnswer': {
                const x = playing();
                requireIt(x.hand.reason === 'early_fold' && x.hand.phase === 'settled' && !x.hand.earlyAnswerViewed, 'EARLY_ANSWER_NOT_ALLOWED');
                x.hand.earlyAnswerViewed = true;
                emit('early_answer_viewed');
                break;
            }
            case 'allIn': {
                const x = playing();
                requireIt(a.noFurtherBets && x.hand.phase !== 'settled' && x.hand.phase !== 'answer', 'ALL_IN_NOT_ALLOWED');
                x.hand.reason = 'all_in';
                const phases = ['question', 'hint1', 'hint2', 'answer'];
                for (const phase of phases.slice(phases.indexOf(x.hand.phase) + 1)) {
                    x.hand.phase = phase;
                    emit('phase_revealed', { runout: true });
                }
                break;
            }
            case 'finishHand': {
                const x = playing();
                requireIt(a.confirmed && (x.hand.phase === 'answer' || x.hand.phase === 'settled'), 'HAND_NOT_READY');
                requireIt(Number.isInteger(a.eliminated) && a.eliminated >= 0 && a.eliminated < x.activePlayers, 'INVALID_ELIMINATION');
                requireIt(x.hand.reason !== 'early_fold' || a.eliminated === 0, 'FOLD_CANNOT_ELIMINATE');
                x.activePlayers -= a.eliminated;
                x.completedHands++;
                emit('hand_completed', { reason: x.hand.reason, completedHands: x.completedHands });
                if (a.eliminated)
                    emit('players_eliminated', { count: a.eliminated });
                x.hand.phase = 'settled';
                if (x.activePlayers === 1) {
                    x.status = 'finished';
                    emit('game_finished', { completedHands: x.completedHands });
                }
                else {
                    x.pendingNext = true;
                    setNext();
                }
                break;
            }
            case 'report':
                playing();
                requireIt(['wrong_value', 'unclear', 'hint', 'other'].includes(a.reason), 'INVALID_REPORT');
                s.reports.push({ sessionId: g.id, questionId: g.hand.question.id, revision: g.hand.question.revision, reason: a.reason, phase: g.hand.phase, timestamp: now });
                emit('question_reported', { reason: a.reason });
                if (!g.blocked.includes(g.hand.question.id))
                    g.blocked.push(g.hand.question.id);
                break;
            case 'skip': {
                const x = playing();
                requireIt(a.confirmedRefund && x.hand.phase !== 'settled', 'REFUND_REQUIRED');
                if (!x.blocked.includes(x.hand.question.id))
                    x.blocked.push(x.hand.question.id);
                emit('question_skipped');
                x.pendingNext = true;
                setNext();
                break;
            }
            case 'next':
                requireIt(active().pendingNext, 'NO_PENDING_HAND');
                setNext(a.allowRepeat);
                break;
            case 'contextOpened':
                requireIt(playing().hand.question.questionContext, 'NO_CONTEXT');
                emit('context_opened');
                break;
            case 'explanationOpened': {
                const x = playing();
                requireIt(x.hand.phase === 'answer' || x.hand.earlyAnswerViewed, 'ANSWER_HIDDEN');
                emit('explanation_opened');
                break;
            }
        }
    }
    s.version++;
    s.lastCommandId = cmd.id;
    return s;
}
function view(s) { const g = s.game; if (!g)
    return { version: s.version, game: null }; return { version: s.version, game: { id: g.id, status: g.status, preset: g.preset, mode: g.mode, initialPlayers: g.initialPlayers, activePlayers: g.activePlayers, completedHands: g.completedHands, handNumber: g.completedHands + (g.status === 'finished' ? 0 : 1), blinds: blinds(g.preset, g.status === 'finished' ? Math.max(0, g.completedHands - 1) : g.completedHands), phase: g.hand.phase, reason: g.hand.reason, waiting: g.waiting, activeElapsedMs: g.activeElapsedMs, question: !g.pendingNext && g.status !== 'paused' ? (0, quiz_1.questionView)(g.hand.question, g.hand.earlyAnswerViewed ? 'answer' : g.hand.foldedAt ?? (g.hand.phase === 'settled' ? 'answer' : g.hand.phase)) : null } }; }
