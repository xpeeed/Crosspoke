"""Optional real browser test: Python playwright and Chromium installed; run after build."""
import json, os, threading, tempfile
from pathlib import Path
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from functools import partial
from playwright.sync_api import sync_playwright
root=Path(__file__).resolve().parents[1]
modules=','.join(f"'./{name}':function(require,module,exports){{\n{(root/'dist'/f'{name}.js').read_text()}\n}}" for name in ['quiz','game','storage','index'])
bootstrap=f"const modules={{{modules}}},cache={{}};function require(n){{if(cache[n])return cache[n].exports;const m={{exports:{{}}}};cache[n]=m;modules[n](require,m,m.exports);return m.exports;}}window.C=require('./index');window.raw={json.dumps(json.loads((root/'data/crosspoke-fragen-v0.7.json').read_text()),ensure_ascii=False)};"
with tempfile.TemporaryDirectory() as tmp:
    Path(tmp,'index.html').write_text('<!doctype html><meta charset=utf-8><title>Crosspoke browser smoke test</title>')
    class Handler(SimpleHTTPRequestHandler):
        def log_message(self,*args):pass
    server=ThreadingHTTPServer(('127.0.0.1',0),partial(Handler,directory=tmp));threading.Thread(target=server.serve_forever,daemon=True).start()
    try:
        with sync_playwright() as p:
            browser=p.chromium.launch(executable_path=os.environ.get('CHROMIUM','/usr/bin/chromium'),args=['--no-sandbox','--disable-dev-shm-usage'])
            page=browser.new_page();page.goto(Path(tmp,'index.html').as_uri());page.evaluate(bootstrap)
            result=page.evaluate('''async()=>{let now=1000,seq=0;const env={dataset:raw,mode:'test',now:()=>now,id:()=>String(++seq),random:()=>0,telemetry:true};let a=await C.IndexedDbStorage.open('crosspoke-test');let c=new C.Controller(a,env);let s=await c.dispatch({id:'start',expectedVersion:0,action:{type:'start',preset:'Standard',players:4}});s=await c.dispatch({id:'reveal',expectedVersion:s.version,action:{type:'advance'}});const q=s.game.hand.question.id;a.close();let b=await C.IndexedDbStorage.open('crosspoke-test');let d=new C.Controller(b,env);let restored=await d.load();let e=await C.IndexedDbStorage.open('crosspoke-test');let f=new C.Controller(e,env);const r=await Promise.allSettled([d.dispatch({id:'a',expectedVersion:restored.version,action:{type:'advance'}}),f.dispatch({id:'b',expectedVersion:restored.version,action:{type:'advance'}})]);s=await d.load();const result={persisted:restored.game.hand.phase==='hint1'&&restored.game.hand.question.id===q,history:restored.history[q].shownCount===1,concurrent:r.filter(v=>v.status==='fulfilled').length===1,atomic:s.game.hand.phase==='hint2'&&s.outbox.filter(v=>v.type==='phase_revealed').length===2};s=await d.dispatch({id:'pause',expectedVersion:s.version,action:{type:'pause'}});b.close();e.close();return {...result,q,version:s.version}}''')
            page.reload();page.evaluate(bootstrap)
            restored=page.evaluate("async()=>{const a=await C.IndexedDbStorage.open('crosspoke-test');const s=await a.load();a.close();return s}")
            checks={'persistence':result['persisted'],'history':result['history'],'concurrent writes':result['concurrent'],'atomic outbox':result['atomic'],'full page reload':restored['game']['status']=='paused' and restored['game']['hand']['phase']=='hint2' and restored['game']['hand']['question']['id']==result['q'] and restored['version']==result['version']}
            for name,success in checks.items(): print(('PASS' if success else 'FAIL')+': '+name)
            assert all(checks.values()), checks
            browser.close()
    finally:server.shutdown();server.server_close()
