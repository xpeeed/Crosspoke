import { Dataset, History, Mode, Phase, Question } from './quiz';
export declare const PRESETS: {
    readonly Quick: {
        readonly stack: 1000;
        readonly handsPerLevel: 3;
    };
    readonly Standard: {
        readonly stack: 2000;
        readonly handsPerLevel: 3;
    };
    readonly 'Deep Stack': {
        readonly stack: 4000;
        readonly handsPerLevel: 4;
    };
};
export type Preset = keyof typeof PRESETS;
export declare function blinds(preset: Preset, completedHands: number): {
    level: number;
    small: number;
    big: number;
    handsUntilIncrease: number;
};
export type Status = 'active' | 'paused' | 'finished' | 'abandoned';
export type EndReason = 'normal' | 'early_fold' | 'all_in';
export interface Hand {
    id: string;
    question: Question;
    phase: Phase;
    reason: EndReason;
    earlyAnswerViewed?: boolean;
    foldedAt?: Phase;
}
export interface Game {
    id: string;
    mode: Mode;
    datasetVersion: string;
    preset: Preset;
    initialPlayers: number;
    activePlayers: number;
    completedHands: number;
    status: Status;
    hand: Hand;
    seen: string[];
    blocked: string[];
    startedAt: number;
    activeElapsedMs: number;
    lastTickAt: number;
    pendingNext: boolean;
    waiting: 'repeat_confirmation' | 'empty' | null;
}
export interface Event {
    eventId: string;
    sessionId: string;
    handId: string;
    questionId: string;
    questionRevision: number;
    datasetVersion: string;
    mode: Mode;
    preset: Preset;
    initialPlayers: number;
    activePlayers: number;
    phase: Phase;
    elapsedMs: number;
    timestamp: number;
    eventSchemaVersion: 1;
    type: string;
    details?: Record<string, string | number | boolean>;
}
export interface State {
    schemaVersion: 1;
    version: number;
    game: Game | null;
    history: History;
    outbox: Event[];
    reports: {
        sessionId: string;
        questionId: string;
        revision: number;
        reason: string;
        phase: Phase;
        timestamp: number;
    }[];
    lastCommandId: string | null;
}
export declare const initialState: () => State;
export interface Env {
    dataset: Dataset;
    mode: Mode;
    now: () => number;
    id: () => string;
    random: () => number;
    telemetry: boolean;
}
export type Action = {
    type: 'start';
    preset: Preset;
    players: number;
} | {
    type: 'advance';
} | {
    type: 'earlyFold';
    confirmed: boolean;
} | {
    type: 'showEarlyAnswer';
} | {
    type: 'allIn';
    noFurtherBets: boolean;
} | {
    type: 'finishHand';
    eliminated: number;
    confirmed: boolean;
} | {
    type: 'report';
    reason: 'wrong_value' | 'unclear' | 'hint' | 'other';
} | {
    type: 'skip';
    confirmedRefund: boolean;
} | {
    type: 'next';
    allowRepeat: boolean;
} | {
    type: 'pause';
} | {
    type: 'resume';
} | {
    type: 'heartbeat';
} | {
    type: 'recover';
} | {
    type: 'abandon';
    confirmed: boolean;
} | {
    type: 'contextOpened';
} | {
    type: 'explanationOpened';
} | {
    type: 'ackEvents';
    ids: string[];
};
export interface Command {
    id: string;
    expectedVersion: number;
    action: Action;
}
export declare function reduce(previous: State, cmd: Command, env: Env): State;
export declare function view(s: State): {
    version: number;
    game: null;
} | {
    version: number;
    game: {
        id: string;
        status: Status;
        preset: "Quick" | "Standard" | "Deep Stack";
        mode: Mode;
        initialPlayers: number;
        activePlayers: number;
        completedHands: number;
        handNumber: number;
        blinds: {
            level: number;
            small: number;
            big: number;
            handsUntilIncrease: number;
        };
        phase: Phase;
        reason: EndReason;
        waiting: "empty" | "repeat_confirmation" | null;
        activeElapsedMs: number;
        question: {
            answerValue?: number | undefined;
            answerExplanation?: string | undefined;
            source?: {
                name: string;
                url: string;
                checkedOn: string;
            } | undefined;
            additionalSources?: string[] | undefined;
            hint2?: string | undefined;
            hint1?: string | undefined;
            id: string;
            category: string;
            question: string;
            unit: string;
            context: string | null;
        } | null;
    };
};
