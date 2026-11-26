export type Mode = 'test' | 'release';
export type Phase = 'question' | 'hint1' | 'hint2' | 'answer' | 'settled';
export interface Question {id:string; categoryId:string; category:string; subcategory:string; question:string; unit:string; answerValue:number; hint1:string; hint2:string; source:{name:string;url:string;checkedOn:string}; referenceDate:string|null; revision:number; qualityStatus:'draft'|'source_checked'|'approved'|'retired'; hintReviewStatus:string; playtestStatus:string; questionContext:string|null; answerExplanation:string; additionalSources:string[];}
export interface Dataset {schemaVersion:string;datasetVersion:string;language:string;releaseReady:boolean;categories:{id:string;name:string;targetCount:number}[];questions:Question[]}
export interface History { [id:string]: {shownCount:number;lastShownAt:number} }
export const CATEGORIES=['GEO','HIS','FOD','SCI','TEC','SPO','ECO','ENT','HUM','CUR'];
const record=(x:unknown):x is Record<string,unknown> => !!x && typeof x==='object'&&!Array.isArray(x);
const str=(x:unknown):x is string=>typeof x==='string'&&x.trim().length>0;
const url=(x:unknown)=>{try{return str(x)&&['https:','http:'].includes(new URL(x).protocol)}catch{return false}};
const check=(ok:unknown,msg:string)=>{if(!ok)throw new Error('DATA_INVALID: '+msg)};
// Runtime guard for fields the engine consumes; full JSON Schema checked separately.
export function importDataset(raw:unknown,mode:Mode):Dataset {
 check(record(raw),'object expected');const d=raw as Record<string,unknown>;
 check(d.schemaVersion==='1.4'&&str(d.datasetVersion)&&d.language==='de-DE'&&typeof d.releaseReady==='boolean','metadata');
 check(Array.isArray(d.categories)&&Array.isArray(d.questions),'arrays');
 const ds=d as unknown as Dataset;
 check(ds.categories.length===10&&new Set(ds.categories.map(c=>c.id)).size===10,'categories unique');
 for(const c of ds.categories)check(record(c)&&CATEGORIES.includes(c.id)&&str(c.name)&&Number.isInteger(c.targetCount)&&c.targetCount>=30,'category');
 const ids=new Set<string>();for(const q of ds.questions){
 check(record(q),'question object');check(str(q.id)&&/^(GEO|HIS|FOD|SCI|TEC|SPO|ECO|ENT|HUM|CUR)-\d{4,}$/.test(q.id)&&!ids.has(q.id),'id '+q.id);ids.add(q.id);
 check(q.id.startsWith(q.categoryId+'-')&&ds.categories.some(c=>c.id===q.categoryId&&c.name===q.category),'category mapping '+q.id);
 for(const k of ['subcategory','question','unit','hint1','hint2','answerExplanation'] as const)check(str(q[k]),k+' '+q.id);
 check(Number.isFinite(q.answerValue)&&Number.isInteger(q.revision)&&q.revision>=1,'value/revision '+q.id);
 check(record(q.source)&&str(q.source.name)&&url(q.source.url)&&str(q.source.checkedOn)&&/^\d{4}-\d{2}-\d{2}$/.test(q.source.checkedOn),'source '+q.id);
 check(q.referenceDate===null||typeof q.referenceDate==='string','reference date');check(q.questionContext===null||str(q.questionContext),'context');
 check(Array.isArray(q.additionalSources)&&q.additionalSources.every(url),'additionalSources');
 check(['draft','source_checked','approved','retired'].includes(q.qualityStatus),'quality');
 for(const status of [q.hintReviewStatus,q.playtestStatus])check(['pending','passed','needs_revision'].includes(status),'review status');
 }
 const pool=eligible(ds,mode);check(pool.length>0,'no eligible questions');
 if(mode==='release'){check(ds.releaseReady,'release not ready');for(const c of ds.categories)check(pool.filter(q=>q.categoryId===c.id).length>=c.targetCount,'release target '+c.id)}
 return structuredClone(ds);
}
export function eligible(d:Dataset,mode:Mode){return d.questions.filter(q=>q.qualityStatus==='approved'||(mode==='test'&&q.qualityStatus==='source_checked'))}
export type Selection={kind:'selected';question:Question}|{kind:'repeat_confirmation'}|{kind:'empty'};
export function selectQuestion(d:Dataset,mode:Mode,history:History,seen:string[],blocked:string[],random:()=>number,allowRepeat=false):Selection{
 const allowed=eligible(d,mode).filter(q=>!blocked.includes(q.id));if(!allowed.length)return {kind:'empty'};
 let pool=allowed.filter(q=>!seen.includes(q.id));if(!pool.length){if(!allowRepeat)return {kind:'repeat_confirmation'};pool=allowed}
 const fresh=pool.filter(q=>!history[q.id]);if(fresh.length)pool=fresh;else{const oldest=Math.min(...pool.map(q=>history[q.id]!.lastShownAt));pool=pool.filter(q=>history[q.id]!.lastShownAt===oldest)}
 const r=random();if(!Number.isFinite(r)||r<0||r>=1)throw Error('INVALID_RANDOM');return {kind:'selected',question:structuredClone(pool[Math.floor(r*pool.length)]!)};
}
export function questionView(q:Question,phase:Phase){const p=['question','hint1','hint2','answer','settled'].indexOf(phase);return {id:q.id,category:q.category,question:q.question,unit:q.unit,context:q.questionContext,...(p>=1?{hint1:q.hint1}:{}),...(p>=2?{hint2:q.hint2}:{}),...(p===3?{answerValue:q.answerValue,answerExplanation:q.answerExplanation,source:q.source,additionalSources:q.additionalSources}:{})}}
