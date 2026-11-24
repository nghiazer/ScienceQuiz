// Xuất toàn bộ váy ra một trang HTML tĩnh để soát mắt: npm run gallery [-- --sub=science|english]
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { mkdirSync, writeFileSync } from 'node:fs'
import { DRESSES } from '../src/data/dresses'
import { PrincessSvg } from '../src/components/wardrobe/DressSvg'

const arg = (k: string) => process.argv.find((a) => a.startsWith(`--${k}=`))?.slice(k.length + 3)
const only = arg('sub')
const from = Number(arg('from') ?? 1)
const to = Number(arg('to') ?? 9999)
const big = Boolean(arg('from'))
const TIER_NAMES = ['1 · dễ thương', '2 · lộng lẫy', '3 · dạ hội hoàng gia', '4 · dạ hội ánh sao', '5 · nữ hoàng']

let body = ''
for (const [subject, list] of Object.entries(DRESSES)) {
  if (only && only !== subject) continue
  body += `<h2>${subject} (${list.length})</h2>`
  let tier = 0
  for (const d of list) {
    if (d.index < from || d.index > to) continue
    if (d.tier !== tier) {
      tier = d.tier
      body += `<h3 style="grid-column:1/-1">Cấp ${TIER_NAMES[tier - 1]}</h3>`
    }
    const svg = renderToStaticMarkup(createElement(PrincessSvg, { look: d.look, className: 'p', still: true }))
    body += `<figure>${svg}<figcaption><b>${d.index}</b> ${d.name_vi}<br><small>${d.name_en}</small></figcaption></figure>`
  }
  body += '<hr>'
}

const html = `<!doctype html><meta charset="utf-8"><title>Dress gallery</title>
<style>
body{font-family:system-ui,sans-serif;background:#fdf2f8;margin:16px}
h2{text-transform:capitalize;grid-column:1/-1}
hr{grid-column:1/-1;width:100%}
section,.g{display:grid;grid-template-columns:repeat(auto-fill,minmax(${big ? 380 : 190}px,1fr));gap:12px}
figure{margin:0;background:#fff;border-radius:16px;padding:8px;text-align:center;box-shadow:0 2px 8px #0001}
.p{width:100%;height:auto}
figcaption{font-size:13px}
</style>
<div class="g">${body}</div>`

mkdirSync('gallery', { recursive: true })
writeFileSync('gallery/dresses.html', html)
console.log(`Đã ghi gallery/dresses.html (${Object.values(DRESSES).reduce((n, l) => n + l.length, 0)} váy)`)
