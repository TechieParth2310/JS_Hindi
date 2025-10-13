// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 🌿 PRO EDITION NOTES — DOM Manipulation (Hinglish) → Ultra Readable v4   ║
// ║ Style: Sirf JavaScript comments for explainers + clean code examples ✨  ║
// ║ Goal: Basics → Advanced, sab kuch ek jagah, VS Code–friendly formatting. ║
/* ╚══════════════════════════════════════════════════════════════════════════╝
   Navigation:
   0) DOM Fundamentals ┃ 1) Selection ┃ 2) Content ┃ 3) Attributes/Data
   4) Styling ┃ 5) Create/Insert ┃ 6) Modify ┃ 7) Delete ┃ 8) Traverse
   9) Events ┃ 10) Event Options ┃ 11) Forms ┃ 12) Pointer/DnD ┃ 13) Dimensions
   14) Security (XSS) ┃ 15) Shadow DOM ┃ 16) Observers ┃ 17) insertAdjacent*
   18) Node vs Element ┃ 19) Utility Trio ┃ 20) Template+Clone ┃ 21) Delegation
   22) Performance ┃ 23) Robustness ┃ 24) Mini Project ┃ 25) Quick Revision
*/


// ╭──────────────────────────────────────────────────────────────────────────╮
// │ 🔰 0) DOM FUNDAMENTALS — Boosted Basics (What/Why/How)                   │
// ╰──────────────────────────────────────────────────────────────────────────╯
// • What: DOM = Document Object Model → HTML ka in-memory tree jise JS se read/write karte.
// • Why: UI ko runtime par change/animate/validate/log karna hota hai.
// • How: "document" root se start; har node element/text/comment/documentFragment ho sakta.
//   Common node types: 1=ELEMENT, 3=TEXT, 8=COMMENT, 9=DOCUMENT, 11=FRAGMENT.
//
// • Live vs Static Collections:
//   - LIVE (auto update): getElementsByClassName / getElementsByTagName → HTMLCollection
//   - STATIC (snapshot): querySelectorAll → NodeList
//
// • Page Lifecycle (kab code chalana safe):
document.addEventListener('DOMContentLoaded', () => {
  // DOM structure ready (images/CSS ka full load zaroori nahi) ✅
});
window.addEventListener('load', () => {
  // Sab resources (images, CSS, iframes) load complete ✅
});

// • Script loading best practices:
/*
  <script src="app.js" defer></script>     // HTML parse ke saath load; DOM ready pe run; order preserved ✅
  <script src="a.js" async></script>       // Parallel load; jaisi ready waise execute; order NOT guaranteed ⚠️
  <script type="module" src="app.mjs"></script> // Module scope + deferred by default; import/export allowed ✅
*/

// Pro Tips (Golden Rules):
// 1) Untrusted string ⇒ textContent (XSS se bachne ke liye).
// 2) Batch DOM writes (DocumentFragment/insertAdjacentHTML).
// 3) Styling ke liye classes prefer karo (inline styles sirf dynamic ke liye).
// 4) Large lists ⇒ event delegation.
// 5) Layout reads ko group karo; phir writes (reflow thrashing avoid).



// ╭──────────────────────────────────────────────────────────────────────────╮
// │ 🎯 1) SELECTION — Elements ko dhundo (Fast, Predictable)                 │
// ╰──────────────────────────────────────────────────────────────────────────╯
/* HTML:
<div id="hero" class="card primary">
  <h1 class="title">Welcome</h1>
  <p data-user="sam">Hello <strong>DOM</strong></p>
</div>
*/
const byId   = document.getElementById('hero');          // ⚡ fastest single lookup
const byCls  = document.getElementsByClassName('title'); // 🟡 LIVE HTMLCollection
const first  = document.querySelector('.card .title');   // 🎯 first match via CSS
const allStr = document.querySelectorAll('strong');      // 🔵 STATIC NodeList

// Why difference matters?
// - LIVE list auto-update hota (loop ke waqt surprise changes ho sakte).
// - STATIC predictable (loop stable). Beginners ke liye querySelector/All best.
//
// Output check:
console.log(first.outerHTML);       // <h1 class="title">Welcome</h1>
console.log(allStr.length);         // 1



// ╭──────────────────────────────────────────────────────────────────────────╮
// │ 💬 2) CONTENT — Text vs HTML (Safe vs Powerful)                          │
// ╰──────────────────────────────────────────────────────────────────────────╯
// • textContent: raw text, fast, hidden text bhi include ho sakta, safest.
// • innerText: rendered/layout-aware (reflow cost), CSS ke respect me text.
// • innerHTML: HTML parse/serialize (⚠️ kabhi untrusted string mat inject karo).
// • outerHTML: element ke saath; assign karoge to pura node replace ho jayega.
const info = document.createElement('div');
info.id = 'info';
info.innerHTML = '<b>Hi</b> <i>there</i>';

const t1 = info.textContent;  // "Hi there"
const t2 = info.innerText;    // "Hi there" (layout pe depend)
info.textContent = 'Safe Text';                 // ✅ escapes automatically
info.innerHTML   = '<b>Bold</b> & <i>Italic</i>'; // ⚠️ use only with trusted/sanitized

// Quick Rule: "User input? ⇒ textContent". "Trusted template? ⇒ innerHTML OK".



// ╭──────────────────────────────────────────────────────────────────────────╮
// │ 🏷️ 3) ATTRIBUTES & DATASET — Metadata handle karo                        │
// ╰──────────────────────────────────────────────────────────────────────────╯
// getAttribute / setAttribute / hasAttribute / removeAttribute
// data-* attributes ⇒ element.dataset.camelCase (string values)
const btn = document.createElement('button');
btn.id = 'buy';
btn.setAttribute('data-product-id','p42');
btn.setAttribute('aria-label','Buy Now');
btn.textContent = 'Buy';

const pid = btn.getAttribute('data-product-id'); // "p42"
btn.setAttribute('aria-pressed', 'true');
btn.dataset.state = 'active';                     // sets data-state="active"
btn.removeAttribute('aria-label');



// ╭──────────────────────────────────────────────────────────────────────────╮
// │ 🎨 4) STYLING — Inline vs Classes vs Computed                            │
// ╰──────────────────────────────────────────────────────────────────────────╯
const box = document.createElement('div');
box.id = 'box';
box.className = 'pane';          // baseline styles from CSS
box.style.width = '200px';       // dynamic inline overrides (use sparingly)
box.style.height = '100px';
box.style.border = '1px solid #999';
box.classList.add('rounded','shadow');  // scalable styling
box.classList.toggle('active');         // toggle on/off

const cs = getComputedStyle(box);
const w  = cs.width;          // "200px"
const bt = cs.borderTopWidth; // "1px"
console.log(w, bt);
// Rule: "Classes for theme/state, inline for numeric runtime tweaks."



// ╭──────────────────────────────────────────────────────────────────────────╮
/* │ 🧱 5) CREATION & INSERTION — Banaao & Jodo (Batch for Performance)      │ */
// ╰──────────────────────────────────────────────────────────────────────────╯
/* HTML seed (imagine):
<ul id="list"></ul>
<template id="rowTpl"><li class="row"><span class="name"></span></li></template>
*/
const list = document.createElement('ul');
list.id = 'list';

const li1 = document.createElement('li');
li1.textContent = 'First item';
list.append(li1);                             // end me add

const li2 = document.createElement('li');
li2.textContent = 'Inserted before First';
li1.before(li2);                              // sibling ke pehle

list.insertAdjacentHTML('beforeend','<li><b>Fast</b> HTML insert</li>'); // parse + insert

// Template cloning:
const tpl = document.createElement('template');
tpl.id = 'rowTpl';
tpl.innerHTML = '<li class="row"><span class="name"></span></li>';

const node = tpl.content.firstElementChild.cloneNode(true);
node.querySelector('.name').textContent = 'Alice';
list.append(node);

// Batch with DocumentFragment (best for large loops):
const frag = document.createDocumentFragment();
for (let i=1;i<=3;i++){
  const it = document.createElement('li');
  it.textContent = `Batch ${i}`;
  frag.appendChild(it);
}
list.appendChild(frag);



// ╭──────────────────────────────────────────────────────────────────────────╮
/* │ ✍️ 6) MODIFICATION — Update Smartly (Replace Carefully)                 │ */
// ╰──────────────────────────────────────────────────────────────────────────╯
const card = document.createElement('div');
card.id = 'card';
card.className = 'card';
card.innerHTML = `<h3 class="title">Old</h3>`;

card.querySelector('.title').textContent = 'New Title ✅';
card.classList.replace('card','card--primary'); // class rename

// ⚠️ outerHTML replace karta hai → purane reference invalid ho jate
card.outerHTML = `
<div id="card" class="card card--primary">
  <h3 class="title">Rebuilt Card</h3>
  <p>Fresh content</p>
</div>`;
// After this, `card` variable stale ho gaya. Dobara select karo if needed.


// ╭──────────────────────────────────────────────────────────────────────────╮
/* │ 🗑️ 7) DELETION — Remove/Replace (Clean DOM)                             │ */
// ╰──────────────────────────────────────────────────────────────────────────╯
const todo = document.createElement('ul');
todo.id = 'todo';
todo.innerHTML = `<li id="t1">A</li><li id="t2">B</li>`;

document.getElementById?.('t2')?.remove(); // defensive remove
const t1 = todo.querySelector('#t1');
const newLi = document.createElement('li');
newLi.textContent = 'A+ (updated)';
t1?.replaceWith(newLi);



// ╭──────────────────────────────────────────────────────────────────────────╮
/* │ 🧭 8) TRAVERSAL — Move Around the Tree                                  │ */
// ╰──────────────────────────────────────────────────────────────────────────╯
/* HTML mental model:
<div class="container">
  <ul id="menu">
    <li class="item sel">Home</li>
    <li class="item">Blog</li>
  </ul>
</div>
*/
const container = document.createElement('div');
container.className = 'container';
container.innerHTML = `<ul id="menu">
  <li class="item sel">Home</li>
  <li class="item">Blog</li>
</ul>`;

const sel = container.querySelector('.item.sel');
const par = sel.parentElement;                 // <ul id="menu">
const wrap= sel.closest('.container');         // outer .container
const nxt = sel.nextElementSibling;            // <li>Blog</li>
const firstText = par.firstElementChild.textContent; // "Home"



// ╭──────────────────────────────────────────────────────────────────────────╮
/* │ 🔔 9) EVENTS — Listen, Bubble, Delegate                                 │ */
// ╰──────────────────────────────────────────────────────────────────────────╯
/* Concepts:
   - addEventListener(type, handler, options?)
   - e.preventDefault() default behavior rokta
   - e.stopPropagation() bubbling rokta (use carefully)
   - Delegation: parent pe listener; inside target check with matches/closest
*/
const formWrap = document.createElement('div');
formWrap.innerHTML = `
<form id="login"><input name="email"/><button>Go</button></form>
<ul id="list2"><li data-id="1">One</li><li data-id="2">Two</li></ul>
<a id="ext" href="https://example.com">Open</a>
`;

const login = formWrap.querySelector('#login');
login.addEventListener('submit',(e)=>{
  e.preventDefault();
  const email = new FormData(login).get('email');
  console.log('Submitted:', email);
});

formWrap.querySelector('#list2').addEventListener('click',(e)=>{
  const li = e.target.closest('li');
  if(!li) return;
  console.log('Clicked item id:', li.dataset.id);
});

formWrap.querySelector('#ext').addEventListener('click',(e)=>{
  // Normal click → intercept; Ctrl/Cmd click → allow new tab
  if(!e.metaKey && !e.ctrlKey){
    e.preventDefault();
    console.log('Handled link internally.');
  }
});



// ╭──────────────────────────────────────────────────────────────────────────╮
/* │ 🧠 10) EVENT OPTIONS — once / passive / capture                         │ */
// ╰──────────────────────────────────────────────────────────────────────────╯
// { once:true } → first run ke baad auto-remove
// { passive:true } → listener preventDefault nahi karega (scroll perf)
// { capture:true } → capturing phase me run (rare; advanced)
const area = document.createElement('div');
area.id = 'scroll-area';
area.style.overflow='auto';
area.style.height='100px';
area.addEventListener('scroll',()=>{/* light work */},{ passive:true });



// ╭──────────────────────────────────────────────────────────────────────────╮
/* │ 🧰 11) FORMS & INPUT — input vs change, key events                      │ */
// ╰──────────────────────────────────────────────────────────────────────────╯
const search = document.createElement('input');
search.id = 'search';
search.placeholder = 'Type...';
const mirror = document.createElement('p');
mirror.id = 'mirror';

search.addEventListener('input',()=>{ mirror.textContent = search.value || '—'; });
search.addEventListener('keydown',(e)=>{ if(e.key==='Enter') console.log('Search:', search.value); });



// ╭──────────────────────────────────────────────────────────────────────────╮
/* │ 🖱️ 12) POINTER/MOUSE + DnD — Native Drag & Drop                         │ */
// ╰──────────────────────────────────────────────────────────────────────────╯
const drag = document.createElement('div');
drag.id = 'drag';
drag.draggable = true;
drag.textContent = 'Drag me';

const drop = document.createElement('div');
drop.id = 'drop';
drop.style.border='2px dashed #888';
drop.style.padding='10px';
drop.textContent='Drop here';

drag.addEventListener('dragstart',(e)=>e.dataTransfer.setData('text/plain','Dragged Content'));
drop.addEventListener('dragover',(e)=>e.preventDefault()); // allow drop
drop.addEventListener('drop',(e)=>{
  e.preventDefault();
  drop.textContent = `Dropped: ${e.dataTransfer.getData('text/plain')}`;
});



// ╭──────────────────────────────────────────────────────────────────────────╮
/* │ 📐 13) DIMENSIONS & POSITION — Box Metrics                               │ */
// ╰──────────────────────────────────────────────────────────────────────────╯
const pane = document.createElement('div');
pane.id = 'pane';
pane.style.cssText = 'width:300px;height:120px;padding:10px;border:5px solid #000;box-sizing:content-box;';
const ow = pane.offsetWidth;                  // border+padding+content (≈ 330)
const ch = pane.clientHeight;                 // padding+content (≈ 140)
const rect = pane.getBoundingClientRect();    // fractional width/height + viewport x/y
console.log(ow, ch, rect.width, rect.x);



// ╭──────────────────────────────────────────────────────────────────────────╮
/* │ 🛡️ 14) SECURITY — XSS ko Door Rakho                                     │ */
// ╰──────────────────────────────────────────────────────────────────────────╯
function safeRender(container, userString){
  const span = document.createElement('span');
  span.textContent = userString; // escapes
  container.replaceChildren(span);
}
// Never do: container.innerHTML = userString;  // ❌ If userString untrusted



// ╭──────────────────────────────────────────────────────────────────────────╮
/* │ 🌒 15) SHADOW DOM — Encapsulation + Scoped Styles                       │ */
// ╰──────────────────────────────────────────────────────────────────────────╯
class TagBadge extends HTMLElement {
  connectedCallback(){
    const root = this.attachShadow({mode:'open'});
    root.innerHTML = `
      <style>.chip{display:inline-block;padding:4px 8px;border-radius:999px;border:1px solid #aaa}</style>
      <span class="chip"><slot></slot></span>
    `;
  }
}
customElements.define('tag-badge', TagBadge);
// Use: <tag-badge>New</tag-badge>  → outside CSS se isolate styles.



// ╭──────────────────────────────────────────────────────────────────────────╮
/* │ 👀 16) OBSERVERS — Mutation & Intersection                               │ */
// ╰──────────────────────────────────────────────────────────────────────────╯
const target = document.createElement('div');
const mo = new MutationObserver(records => {
  for (const r of records) console.log('Mutation:', r.type, r);
});
mo.observe(target,{ childList:true, attributes:true, subtree:true });
target.setAttribute('data-flag','1'); // logs

// Lazy image loading with IntersectionObserver:
const lazy = document.createElement('img');
lazy.id = 'lazy';
lazy.setAttribute('data-src','photo.jpg');
const io = new IntersectionObserver((entries,ob)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ lazy.src = lazy.dataset.src; ob.unobserve(lazy); }
  });
});
io.observe(lazy);



// ╭──────────────────────────────────────────────────────────────────────────╮
/* │ 🧷 17) insertAdjacent* — Position Map                                    │ */
// ╰──────────────────────────────────────────────────────────────────────────╯
// 'beforebegin' (outside before) | 'afterbegin' (inside first child)
// 'beforeend'  (inside last)     | 'afterend'  (outside after)
const slot = document.createElement('div');
slot.id = 'slot';
slot.insertAdjacentHTML('beforebegin','<p>↑ Outside before</p>');
slot.insertAdjacentHTML('afterbegin','<b>First Inside</b>');
slot.insertAdjacentHTML('beforeend','<i>Last Inside</i>');
slot.insertAdjacentHTML('afterend','<p>↓ Outside after</p>');



// ╭──────────────────────────────────────────────────────────────────────────╮
/* │ 🧩 18) Node vs Element, NodeList vs HTMLCollection                       │ */
// ╰──────────────────────────────────────────────────────────────────────────╯
// childNodes → NodeList (text/comments included) | children → HTMLCollection (elements only)
// HTMLCollection is LIVE; NodeList (from QSA) is STATIC.
const nvs = document.createElement('ul');
nvs.id='nvs';
nvs.innerHTML = ` Text <li>A</li><li>B</li> `;
console.log(nvs.childNodes.length); // includes whitespace text nodes
console.log(nvs.children.length);   // only <li> (2)



// ╭──────────────────────────────────────────────────────────────────────────╮
/* │ 🧪 19) Utility Trio — matches() / closest() / contains()                 │ */
// ╰──────────────────────────────────────────────────────────────────────────╯
const wrap = document.createElement('div');
wrap.className='wrap';
wrap.innerHTML = `<button id="cta" class="btn primary">Buy</button>`;
const cta = wrap.querySelector('#cta');
cta.matches('.btn.primary');      // true
cta.closest('.wrap');             // div.wrap
document.body.contains(cta);      // false (abhi body me insert nahi kiya)



// ╭──────────────────────────────────────────────────────────────────────────╮
/* │ 📦 20) TEMPLATE + CLONE — Reusable UI                                    │ */
// ╰──────────────────────────────────────────────────────────────────────────╯
const cardTpl = document.createElement('template');
cardTpl.id='cardTpl';
cardTpl.innerHTML = `
  <article class="product">
    <h4 class="name"></h4><p class="price"></p>
  </article>
`;
const grid = document.createElement('section');
grid.id='grid';

const renderProduct = ({name,price})=>{
  const el = cardTpl.content.firstElementChild.cloneNode(true);
  el.querySelector('.name').textContent  = name;
  el.querySelector('.price').textContent = `₹${price}`;
  return el;
};
grid.append(
  renderProduct({name:'Mouse',    price:799}),
  renderProduct({name:'Keyboard', price:1499})
);



// ╭──────────────────────────────────────────────────────────────────────────╮
/* │ 🧭 21) EVENT DELEGATION — Scalable Lists                                 │ */
// ╰──────────────────────────────────────────────────────────────────────────╯
const feed = document.createElement('ul');
feed.id = 'feed';
feed.innerHTML = `
  <li data-id="101"><button class="like">♥</button></li>
  <li data-id="102"><button class="like">♥</button></li>
`;
feed.addEventListener('click',(e)=>{
  const btn = e.target.closest('.like');
  if(!btn) return;
  const li = btn.closest('li');
  console.log('Liked post id:', li.dataset.id);
});
// Why delegation? New items dynamically add karoge to listener re-attach nahi karna padega.



// ╭──────────────────────────────────────────────────────────────────────────╮
/* │ 🚀 22) PERFORMANCE — Reflows ko control karo                             │ */
// ╰──────────────────────────────────────────────────────────────────────────╯
// ✅ Use DocumentFragment for big loops, minimal layout reads, passive scroll,
//    throttle/debounce resize/scroll, delegation for large lists,
//    classes > multiple inline styles.
(function performanceDemo(){
  const ul = document.createElement('ul');
  const frag = document.createDocumentFragment();
  for(let i=0;i<500;i++){
    const li = document.createElement('li');
    li.textContent = `Row ${i+1}`;
    frag.appendChild(li);
  }
  ul.appendChild(frag); // single append → fewer reflows
  // document.body.appendChild(ul);
})();



// ╭──────────────────────────────────────────────────────────────────────────╮
/* │ 🧯 23) ROBUSTNESS — Guards & Error Handling                              │ */
// ╰──────────────────────────────────────────────────────────────────────────╯
function safeHTML(parent, html){
  try { parent.insertAdjacentHTML('beforeend', html); }
  catch(err){ console.error('Bad HTML:', err.message); }
}

// Optional chaining + guards (DOM may/may-not exist):
const maybe = document.querySelector('.maybe');
const child = maybe?.querySelector('.child');
if (child) { /* safe access */ }



// ╭──────────────────────────────────────────────────────────────────────────╮
/* │ 🧭 24) MINI PROJECT — Todo CRUD (Create / Read / Update / Delete)        │ */
// ╰──────────────────────────────────────────────────────────────────────────╯
/* HTML sketch:
<section id="todoApp">
  <input id="newTask" placeholder="Add task..."/>
  <button id="addBtn">Add</button>
  <ul id="tasks"></ul>
</section>
*/
const state = []; // [{id, text, done}]
const $ = (s, r=document)=>r.querySelector(s);

function render(){
  const ul = $('#tasks');
  if(!ul) return;
  ul.innerHTML = '';
  const frag = document.createDocumentFragment();
  state.forEach(t=>{
    const li = document.createElement('li');
    li.dataset.id = t.id;
    li.innerHTML = `
      <label>
        <input type="checkbox" ${t.done?'checked':''}/>
        <span class="txt">${t.text}</span>
      </label>
      <button class="del">🗑️</button>
    `;
    frag.appendChild(li);
  });
  ul.appendChild(frag);
}

$('#addBtn')?.addEventListener('click',()=>{
  const input = $('#newTask'); if(!input) return;
  const text = input.value.trim(); if(!text) return;
  state.push({ id:String(Date.now()), text, done:false });
  input.value = '';
  render();
});

$('#tasks')?.addEventListener('click',(e)=>{
  const li = e.target.closest?.('li'); if(!li) return;
  const id = li.dataset.id;

  if(e.target.matches?.('input[type="checkbox"]')){
    const item = state.find(x=>x.id===id);
    if(!item) return;
    item.done = e.target.checked;
    li.querySelector('.txt').style.textDecoration = item.done ? 'line-through' : '';
  }
  if(e.target.matches?.('.del')){
    const idx = state.findIndex(x=>x.id===id);
    if(idx>-1){ state.splice(idx,1); li.remove(); }
  }
});



// ╭──────────────────────────────────────────────────────────────────────────╮
/* │ ✅ 25) QUICK REVISION — First-Time Reader Friendly Recap                 │ */
// ╰──────────────────────────────────────────────────────────────────────────╯
// Selection: getElementById (fast), querySelector/All (CSS power; NodeList static; HTMLCollection live).
// Content: textContent (safe), innerText (layout-aware), innerHTML (trusted only), outerHTML (replaces node).
// Attributes: get/set/removeAttribute; data-* => element.dataset.camelCase.
// Styling: classList (add/remove/toggle/replace); getComputedStyle for reads.
// Create/Insert: createElement, append/before/after, insertAdjacentHTML; DocumentFragment for batches.
// Delete/Replace: remove(), replaceWith(); outerHTML breaks old references.
// Traverse: parentElement/children/siblings, closest(), matches().
// Events: addEventListener; preventDefault; delegation for scalable lists.
// Event Options: once, passive, capture.
// Forms: input vs change; keydown Enter handling.
// Pointer & DnD: dragstart/dragover/drop basics.
// Dimensions: client vs offset vs getBoundingClientRect (fractional, viewport-based).
// Security: Never inject untrusted HTML; prefer textContent or sanitize.
// Shadow DOM: component encapsulation, scoped styles.
// Observers: MutationObserver (DOM changes); IntersectionObserver (in-view tasks e.g., lazy-load).
// Performance: batch writes, minimize layout thrash, passive listeners, debounce/throttle.
// Robustness: try/catch around HTML parse, optional chaining guards.
// 🎯 Mantra: “Batch karo, CSS classes use karo, delegate events, input sanitize karo.”


// ───────────────────────────────────────────────────────────────────────────
// 🔎 EXTRA: First-time Reader Quick Patterns (micro-cheats)
// ───────────────────────────────────────────────────────────────────────────
// 1) Safe print user text → el.textContent = userInput
// 2) Add list of items fast → use DocumentFragment in loop
// 3) Large clickable list → parent.addEventListener('click', e.target.closest('.row'))
// 4) Toggle UI state → el.classList.toggle('active')
// 5) Get size/position → el.getBoundingClientRect()
// 6) Replace element entirely → el.outerHTML = '...'; // then re-select new node
// 7) Form read → new FormData(form).get('fieldName')
// 8) Lazy image → IntersectionObserver → set img.src from data-src
// 9) Avoid jank on scroll → {passive:true}
// 10) Attributes vs props → setAttribute for HTML attrs, el.value / el.checked for DOM props
