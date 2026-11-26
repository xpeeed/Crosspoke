"""Real Chromium end-to-end tests. Run with Python playwright and installed Chromium."""
import os, subprocess, time, urllib.request, tempfile
from pathlib import Path
from playwright.sync_api import sync_playwright
root=Path(__file__).resolve().parents[1]
port=4178
server=subprocess.Popen(['node','scripts/serve.cjs'],cwd=root,env={**os.environ,'PORT':str(port)},stdout=subprocess.DEVNULL)
url=f'http://127.0.0.1:{port}/'
try:
    for _ in range(50):
        try: urllib.request.urlopen(url,timeout=.3);break
        except Exception: time.sleep(.1)
    with sync_playwright() as p:
        browser=p.chromium.launch(executable_path=os.environ.get('CHROMIUM','/usr/bin/chromium'),args=['--no-sandbox','--disable-dev-shm-usage'])
        ctx=browser.new_context(viewport={'width':1280,'height':800});page=ctx.new_page();errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
        page.goto(url);page.get_by_role('button',name='Neues Spiel',exact=True).click(timeout=8000)
        page.locator('[data-preset="Standard"]').click();page.locator('[data-players="4"]').click();page.get_by_role('button',name='Spiel starten',exact=True).click()
        page.get_by_role('button',name='Hinweis 1 aufdecken').wait_for();assert page.locator('.hint').count()==0 and page.locator('.answer').count()==0
        page.get_by_role('button',name='Hinweis 1 aufdecken').click();page.get_by_role('button',name='Hinweis 2 aufdecken').wait_for();assert page.locator('.hint').count()==1 and page.locator('.answer').count()==0
        page.wait_for_timeout(500);page.get_by_role('button',name='Hinweis 2 aufdecken').click();page.get_by_role('button',name='Antwort aufdecken').wait_for();assert page.locator('.hint').count()==2 and page.locator('.answer').count()==0
        q=page.locator('.question-panel h1').inner_text();page.reload();page.get_by_role('button',name='Partie fortsetzen').click();page.get_by_role('button',name='Antwort aufdecken').wait_for();assert page.locator('.question-panel h1').inner_text()==q
        page.get_by_role('button',name='Antwort aufdecken').click();page.locator('.answer').wait_for();page.get_by_text('Antwort erklären',exact=True).click();assert page.locator('#explain-details').get_attribute('open') is not None
        page.screenshot(path=str(root/'tests'/'desktop.png'),full_page=True)
        page.set_viewport_size({'width':390,'height':844});assert page.evaluate('document.documentElement.scrollWidth<=innerWidth');page.screenshot(path=str(root/'tests'/'mobile.png'),full_page=True)
        page.get_by_role('button',name='Hand abschließen',exact=True).click();page.locator('#eliminated').select_option('1');page.locator('#modal-confirm').click();page.get_by_role('button',name='Hinweis 1 aufdecken').wait_for();assert '3 / 4' in page.locator('.stats').inner_text()
        page.get_by_role('button',name='Pause',exact=True).click();page.get_by_role('button',name='Spiel fortsetzen').wait_for();assert page.locator('.question-panel').count()==0;page.get_by_role('button',name='Spiel fortsetzen').click()
        page.get_by_role('button',name='All-in',exact=True).click();page.locator('#modal-confirm').click();page.locator('.answer').wait_for();page.get_by_role('button',name='Hand abschließen',exact=True).click();page.locator('#eliminated').select_option('2');page.locator('#modal-confirm').click();page.get_by_role('heading',name='♠ Sieger!').wait_for();assert not errors,errors
        print('PASS: Setup, reveals, reload, explanation, desktop/mobile, elimination, pause, all-in, finish');browser.close()
finally:server.terminate();server.wait(timeout=5)
