/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
require.extensions['.ts'] = (mod, file) => mod._compile(ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, file);
const { pagine, sitoUrl } = require('../lib/sito.ts');
const base = process.env.TEST_SITE_URL || 'http://127.0.0.1:4180';
(async () => {
 const sitemap = await fetch(`${base}/sitemap.xml`); assert.equal(sitemap.status,200);
 const xml = await sitemap.text();
 const links = new Set(); const titles = new Set();
 for (const {percorso} of pagine) {
  assert.ok(xml.includes(`${sitoUrl}${percorso === '/' ? '' : percorso}</loc>`),`Sitemap missing ${percorso}`);
  const res = await fetch(`${base}${percorso}`); assert.equal(res.status,200,percorso);
  const html = await res.text();
  assert.equal((html.match(/<h1[ >]/g)||[]).length,1,`H1 ${percorso}`);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
  assert.equal(canonical?.[1],`${sitoUrl}${percorso === '/' ? '' : percorso}`,`Canonical ${percorso}`);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1]; assert.ok(title); assert.ok(!titles.has(title),`Duplicate title ${title}`); titles.add(title);
  assert.ok(!/name="robots" content="noindex/.test(html),`Noindex ${percorso}`);
  assert.ok(!/adsbygoogle\.js|google-analytics\.com|googletagmanager\.com/.test(html),'Unexpected advertising/tracking request');
  for(const m of html.matchAll(/href="(\/[^"?#]*)(?:\?[^"#]*)?(?:#[^"]*)?"/g)) if(!m[1].startsWith('/_next/')) links.add(m[1]);
 }
 for(const href of links) { const res=await fetch(`${base}${href}`); assert.equal(res.status,200,`Broken link ${href}`); }
 assert.equal((await fetch(`${base}/lezioni/questa-non-esiste`)).status,404);
 assert.equal((await fetch(`${base}/pagina-inesistente`)).status,404);
 const robots = await (await fetch(`${base}/robots.txt`)).text(); assert.ok(robots.includes(`Sitemap: ${sitoUrl}/sitemap.xml`));
 const ads = await (await fetch(`${base}/ads.txt`)).text(); assert.ok(ads.includes('pub-2763131369198778'));
 console.log(`OK: ${pagine.length} public pages, unique titles, canonical URLs, sitemap, ${links.size} internal links, real 404s and ads.txt.`);
})().catch(e=>{console.error(e);process.exitCode=1;});
