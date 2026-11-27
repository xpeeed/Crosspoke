import json,math,collections
from pathlib import Path
W=Path(__file__).parent; A=W/'dist/bilder-optional/assets'
features=json.load(open(W.parent/'bilder-vorschau/ne_110m_admin_0_countries.geojson'))['features']
land=json.load(open(W/'ne_110m_land.geojson'))['features']
HEAD='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="#101c2b"/>'
def polygons(f):
 g=f['geometry'];return [g['coordinates']] if g['type']=='Polygon' else g['coordinates']
def union_rings(polys):
 edges={}
 for poly in polys:
  for ring in poly:
   pts=[tuple(round(v,6) for v in p[:2]) for p in ring]
   for x,y in zip(pts,pts[1:]):
    if x==y:continue
    key=tuple(sorted((x,y)))
    if key in edges:del edges[key]
    else:edges[key]=(x,y)
 adj=collections.defaultdict(list)
 for x,y in edges.values():adj[x].append(y);adj[y].append(x)
 unused=set(edges);rings=[]
 while unused:
  x,y=next(iter(unused));unused.remove(tuple(sorted((x,y))));line=[x,y];curr=y
  while curr!=line[0]:
   nxt=next((z for z in adj[curr] if tuple(sorted((curr,z))) in unused),None)
   if nxt is None:break
   unused.remove(tuple(sorted((curr,nxt))));line.append(nxt);curr=nxt
  if len(line)>3:rings.append(line)
 return rings
def render(rings,bounds=None,pad=95):
 pts=[p for r in rings for p in r];xs=[x for x,y in pts];ys=[y for x,y in pts]
 x0,y0,x1,y1=bounds or (min(xs),min(ys),max(xs),max(ys));fx=math.cos(math.radians((y0+y1)/2));s=min((1200-2*pad)/((x1-x0)*fx),(800-2*pad)/(y1-y0))
 def xy(p):return 600+(p[0]-(x0+x1)/2)*fx*s,400-(p[1]-(y0+y1)/2)*s
 d=' '.join('M'+' L'.join('%.2f,%.2f'%xy(p) for p in r)+' Z' for r in rings)
 return d,xy
def save(id,s): (A/(id+'.svg')).write_text(HEAD+s+'</svg>')
for id,flt in [('GEO-0005',lambda p:p['ADMIN']=='Australia'),('GEO-0006',lambda p:p['CONTINENT']=='Africa')]:
 pp=[p for f in features if flt(f['properties']) for p in polygons(f)];d,_=render(union_rings(pp))
 save(id,f'<path d="{d}" fill="#72b8b8" stroke="#a6d6d5" stroke-width="1.5" fill-rule="evenodd"/>')
lakes=json.load(open(W/'ne_10m_lakes.geojson'))['features'];found=[f for f in lakes if any('constance' in str(v).lower() or 'bodensee' in str(v).lower() for v in f['properties'].values())]
assert found,'Bodensee not found'
pp=[p for f in found for p in polygons(f)];d,_=render([r for p in pp for r in p]);save('GEO-0011',f'<path d="{d}" fill="#72b8b8" stroke="#b1e0df" stroke-width="2"/>')
world=[r for f in land for p in polygons(f) for r in p if max(x for x,y in r)-min(x for x,y in r)<350]
for id,city,lon,lat in [('GEO-0016','Buenos Aires',-58.3816,-34.6037),('GEO-0022','Los Angeles',-118.2437,34.0522)]:
 d,xy=render(world,bounds=(-180,-60,180,85),pad=65)
 s=f'<path d="{d}" fill="#2d4858"/>'
 for name,x,y in [('Berlin',13.405,52.52),(city,lon,lat)]:
  px,py=xy((x,y));s+=f'<circle cx="{px:.2f}" cy="{py:.2f}" r="8" fill="#e3c785"/><text x="{px+14:.2f}" y="{py+5:.2f}" fill="#f3e4bc" font-family="Arial,sans-serif" font-size="48">{name}</text>'
 save(id,s)
# Pacific-centred context: no individual countries, borders, flags or countable state markers.
shifted=[]
for r in world:
 rr=[((x if x>=20 else x+360),y) for x,y in r]
 if max(x for x,y in rr)-min(x for x,y in rr)<180:shifted.append(rr)
d,xy=render(shifted,bounds=(20,-60,380,80),pad=60)
px,py=xy((172,-20));save('GEO-0019',f'<path d="{d}" fill="#2d4858"/><ellipse cx="{px:.2f}" cy="{py:.2f}" rx="185" ry="155" fill="#72b8b8" opacity=".14"/><text x="{px:.2f}" y="{py:.2f}" text-anchor="middle" fill="#bfe3de" font-family="Arial,sans-serif" font-size="48">Ozeanien</text>')
print('Six maps generated from Natural Earth; no measurement, graticule, time-zone or state-count overlay.')
