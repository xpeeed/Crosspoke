const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.resolve(__dirname,'..'),html=fs.readFileSync(path.join(root,'index.html'),'utf8'),data=JSON.parse(fs.readFileSync(path.join(root,'questions-v0.9.json'),'utf8'));
const blocks=[...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(x=>x[1]);blocks.forEach(b=>new vm.Script(b));
const core=blocks[1].slice(blocks[1].indexOf('(()=>{'),blocks[1].indexOf('const DATA='));
const ctx={structuredClone,URL};vm.createContext(ctx);vm.runInContext(core+'globalThis.C=C;})();',ctx);const C=ctx.C;
const imported=C.importDataset(data,'test');assert.equal(C.eligible(imported,'test').length,186);
const seen=[],history={};let chosen;
for(let i=0;i<186;i++){chosen=C.selectQuestion(imported,'test',history,seen,[],()=>0.37);assert.equal(chosen.kind,'selected');assert.ok(!seen.includes(chosen.question.id));seen.push(chosen.question.id);}
assert.equal(new Set(seen).size,186);assert.equal(C.selectQuestion(imported,'test',history,seen,[],()=>0.5).kind,'repeat_confirmation');
for(const q of data.questions){for(const phase of ['question','hint1','hint2','answer']){const v=C.questionView(q,phase);assert.equal(v.unit,q.unit);assert.equal(Object.hasOwn(v,'answerValue'),phase==='answer');assert.equal(Object.hasOwn(v,'hint1'),phase!=='question');assert.equal(Object.hasOwn(v,'hint2'),['hint2','answer'].includes(phase));}}
const dup=structuredClone(data);dup.questions.push(dup.questions[0]);assert.throws(()=>C.importDataset(dup,'test'));
assert.throws(()=>C.importDataset(data,'release'));
const precision=JSON.parse(fs.readFileSync(path.join(root,'data/answer-precision.json'),'utf8'));
for(const q of data.questions.slice(30))if(!Number.isInteger(q.answerValue))assert.ok(precision[q.id]>0,q.id+' benötigt sichtbare Genauigkeit');
assert.equal(precision['SPO-0008'],2);assert.equal(precision['ECO-0014'],2);assert.equal(precision['ENT-0005'],1);assert.equal(precision['ENT-0017'],undefined);
assert.ok(html.includes('${precisionNote(q)}'));assert.ok(html.includes('${DATA.questions.length} Testfragen'));
console.log('PASS: Standalone-Syntax/Import, 186 Fragen ohne Wiederholung, Phasenschutz für alle 744 Projektionen, defekte Daten/Release-Sperre, redaktionelle Genauigkeitsvorgaben.');
