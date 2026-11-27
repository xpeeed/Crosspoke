const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8');
const html=read('index.html'),data=JSON.parse(read('questions-v0.9.json')),previous=JSON.parse(read('questions-v0.8.json'));
assert.deepEqual(JSON.parse(html.match(/const DATA\s*=\s*(\{[\s\S]*?\});\s*const main=/)[1]),data);
for(const f of ['index.html','questions-v0.9.json','questions-v0.8.json'])assert.equal(read(f),read('site/dist/'+f));
assert.equal(read('questions-v0.9.json'),read('data/questions-v0.9.json'));
assert.equal(read('questions-v0.8.json'),read('data/questions-v0.8.json'));
assert.equal(data.questions.length,186);assert.equal(new Set(data.questions.map(q=>q.id)).size,186);assert.equal(data.releaseReady,false);
for(let i=0;i<30;i++){for(const k of ['id','question','answerValue','unit'])assert.deepEqual(data.questions[i][k],previous.questions[i][k]);if(data.questions[i].id!=='HUM-0001')assert.deepEqual(data.questions[i],previous.questions[i]);}
const rows=JSON.parse(read('docs/notion/rows.json')).results;assert.equal(rows.length,188);
const fields={'Frage':'question','Hinweis 1':'hint1','Hinweis 2':'hint2','Antwortwert':'answerValue','Einheit':'unit','Revision':'revision','Fragekontext':'questionContext','Antworterklärung':'answerExplanation','Kategorie':'category','Qualitätsstatus':'qualityStatus','Playtest':'playtestStatus','Hinweisprüfung':'hintReviewStatus','Bezugsdatum':'referenceDate'};
for(const q of data.questions){const r=rows.find(r=>r['Fragen-ID']===q.id);assert.ok(r);for(const [a,b] of Object.entries(fields))assert.equal(r[a]??'',q[b]??'',q.id+' '+a);assert.equal(r.Quelle,q.source.url);}
for(const id of ['CUR-0012','CUR-0013'])assert.ok(!data.questions.some(q=>q.id===id),'Zurückgestellt: '+id);
console.log('PASS: 188 Notion-Einträge, 186 Testfragen, 30 bestehende Fragen (eine frühere Notion-Hinweisrevision nachgezogen); JSON, HTML und Sites-Artefakte konsistent.');

const images=JSON.parse(read('data/question-images.json'));assert.equal(Object.keys(images).length,20);
assert.deepEqual(JSON.parse(html.match(/const QUESTION_IMAGES=(\{[\s\S]*?\});\nfunction questionImage/)[1]),images);
for(const [id,image] of Object.entries(images)){assert.ok(data.questions.some(q=>q.id===id));assert.match(image.src,/^assets\/questions\/[A-Z]{3}-\d{4}\.(jpg|svg)$/);assert.equal(read(image.src),read('site/dist/'+image.src));}
console.log('PASS: 20 freigegebene Bildzuordnungen und lokale/Sites-Bilddateien konsistent.');
