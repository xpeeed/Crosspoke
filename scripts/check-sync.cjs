const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const html=read('index.html'),data=JSON.parse(read('questions-v0.8.json'));
assert.deepEqual(JSON.parse(html.match(/const DATA\s*=\s*(\{[\s\S]*?\});\s*const main=/)[1]),data);
for(const f of ['index.html','questions-v0.8.json'])assert.equal(read(f),read('site/dist/'+f));
assert.equal(read('questions-v0.8.json'),read('data/questions-v0.8.json'));
assert.equal(data.questions.length,30);assert.equal(new Set(data.questions.map(q=>q.id)).size,30);assert.equal(data.releaseReady,false);
const rows=JSON.parse(read('docs/notion/rows.json')).results;
const fields={'Frage':'question','Hinweis 1':'hint1','Hinweis 2':'hint2','Antwortwert':'answerValue','Einheit':'unit','Revision':'revision','Fragekontext':'questionContext','Antworterklärung':'answerExplanation','Kategorie':'category','Unterkategorie':'subcategory','Qualitätsstatus':'qualityStatus','Playtest':'playtestStatus','Hinweisprüfung':'hintReviewStatus','Bezugsdatum':'referenceDate'};
assert.equal(rows.length,30);
for(const r of rows){const q=data.questions.find(q=>q.id===r['Fragen-ID']);assert.ok(q);for(const [a,b] of Object.entries(fields))assert.equal(r[a]??'',q[b]??'',q.id+' '+a);assert.equal(r.Quelle,q.source.url);}
console.log('PASS: 30 Notion-Datensätze, JSON, HTML und Sites-Artefakte konsistent.');
