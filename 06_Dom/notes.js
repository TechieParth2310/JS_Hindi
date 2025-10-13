// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 🌿 PRO EDITION NOTES — DOM Manipulation (Hinglish) → Ultra Readable v3   ║
// ║ Style: Sirf JavaScript comments for explainers + clean code examples ✨  ║
// ║ Goal: Basics → Advanced, sab kuch ek jagah, VS Code–friendly formatting. ║
/* ╚══════════════════════════════════════════════════════════════════════════╝
   Navigation:
   0) DOM Fundamentals (Boosted Basics) ┃ 1) Selection ┃ 2) Content ┃ 3) Attr
   4) Styling ┃ 5) Create/Insert ┃ 6) Modify ┃ 7) Delete ┃ 8) Traverse
   9) Events ┃ 10) Event Options ┃ 11) Forms ┃ 12) Pointer/DnD ┃ 13) Dimensions
   14) Safety ✔ XSS ┃ 15) Shadow DOM ┃ 16) Observers ┃ 17) insertAdjacent*
   18) Node vs Element ┃ 19) Utility Trio ┃ 20) Template+Clone ┃ 21) Delegation
   22) Performance ┃ 23) Robustness ┃ 24) Mini Project ┃ 25) Quick Revision
*/



// ╭──────────────────────────────────────────────────────────────────────────╮
// │ 🔰 0) DOM FUNDAMENTALS — Boosted Basics                                   │
// ╰──────────────────────────────────────────────────────────────────────────╯
// • DOM = Document Object Model → HTML ka in-memory tree jise JS manipulate karta.
// • Kyun zaroori? Kyunki aap UI ko runtime pe change/animate/validate karna chahte ho.
// • Node Types (important):
//     1) ELEMENT_NODE (<div>)   3) TEXT_NODE ("hello")   8) COMMENT_NODE (<!-- -->)
//     9) DOCUMENT_NODE (document)   11) DOCUMENT_FRAGMENT_NODE (batch ops).
// • Tree Anatomy: document → <html> → <head>/<body> → elements → text nodes.
// • "Live" ka matlab: kuch lists (HTMLCollection) DOM change par auto-update hoti hain.
// • JS ko DOM access: window.document via browser environment.

// 🔄 Page Lifecycle (kab JS chalana safe hai):
document.addEventListener('DOMContentLoaded', () => {
  // DOM structure ready (images/CSS ka full load zaroori nahi)
});
window.addEventListener('load', () => {
  // Sab resources (images, CSS, iframes) load complete
});

// 📜 <script> loading — defer vs async (best practice):
/*
  <script src="app.js" defer></script>  // HTML parse ke saath load; DOM ready pe run; order preserved
  <script src="a.js" async></script>    // Parallel load; jaisi ready waise execute; order NOT guaranteed
  // Modern: <script type="module" src="app.mjs"></script> (module scope, deferred by default)
*/

// 🧠 Live vs Static Collections:
const liveList   = document.getElementsByClassName('item'); // LIVE (auto-update)
const staticList = document.querySelectorAll('.item');      // STATIC (snapshot)

// 🧼 Safe content set karna:
function setSafe(el, str){ el.textContent = str; } // XSS-safe

// 🎨 Styling fundamentals:
const demoBox = document.createElement('div');
demoBox.classList.add('card','card--primary'); // Classes scalable hoti hain

// 🧭 Traversal essentials (quick reference):
// el.parentElement, el.children, el.firstElementChild, el.nextElementSibling, el.closest('.wrap')

// 🔔 Events 101 (delegation idea):
document.body.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn');
  if (!btn) return;
  console.log('Clicked .btn:', btn.textContent);
});

// 📐 Box Model quick read:
// clientWidth/Height → content+padding | offsetWidth/Height → border+padding+content
// getBoundingClientRect() → fractional size + viewport position

// 🛡️ Golden Rules (Beginner → Pro):
// 1) Untrusted string ⇒ textContent (innerHTML se inject mat karo).
// 2) Batch DOM writes (DocumentFragment / insertAdjacentHTML).
// 3) Classes > multiple inline styles.
// 4) Event delegation large lists par lagao.
// 5) Layout reads ek saath, writes baad me (avoid thrashing).
// 6) Scripts ke liye defer/modules prefer.
// 7) outerHTML use karo to replace, par purana reference invalidate hota hai.



// ╭──────────────────────────────────────────────────────────────────────────╮
// │ 🎯 1) SELECTION — Elements ko dhundho (Fast & Precise)                    │
// ╰──────────────────────────────────────────────────────────────────────────╯
// getElementById(id)            ⚡ fastest (single)
// getElementsByClassName(cls)   🟡 LIVE HTMLCollection
// getElementsByTagName(tag)     🟡 LIVE
// querySelector(css)            🎯 first match (powerful CSS)
// querySelectorAll(css)         🔵 STATIC NodeList (preferred for predictability)
/* HTML:
<div id="hero" class="card primary">
  <h1 class="title">Welcome</h1>
  <p data-user="sam">Hello <strong>DOM</strong></p>
</div>
*/
const byId     = document.getElementById('hero');
const byClass  = document.getElementsByClassName('title'); // live
const first    = document.querySelector('.card .title');
const allStr   = document.querySelectorAll('strong');      // static
// ▶ Output: first → <h1 class="title">Welcome</h1>; allStr.length → 1



// ╭──────────────────────────────────────────────────────────────────────────╮
// │ 💬 2) CONTENT — Text vs HTML (Safe vs Powerful)                           │
// ╰──────────────────────────────────────────────────────────────────────────╯
// textContent → pure text (fast, safe), hidden text include ho sakta hai.
// innerText   → rendered/layout-aware (reflow cost).
// innerHTML   → html parse/serialize (⚠️ XSS risk).
// outerHTML   → element ke saath ka HTML, assignment se replace ho jata.
/* HTML: <div id="info"><b>Hi</b> <i>there</i></div> */
const info = document.getElementById('info');
const t1 = info.textContent;            // "Hi there"
const t2 = info.innerText;              // "Hi there"
info.textContent = 'Safe Text';
info.innerHTML = '<b>Bold</b> & <i>Italic</i>';
// ▶ Output: "Safe Text" → then → "<b>Bold</b> & <i>Italic</i>"



—
// ╭──────────────────────────────────────────────────────────────────────────╮
// │ 🏷️ 3) ATTRIBUTES & DATASET — Metadata handle karo                         │
// ╰──────────────────────────────────────────────────────────────────────────╯
// getAttribute / setAttribute / hasAttribute / removeAttribute
// data-* → element.dataset.camelCase
/* HTML: <button id="buy" data-product-id="p42" aria-label="Buy Now">Buy</button> */
const btn = document.getElementById('buy');
const pid = btn.getAttribute('data-product-id'); // "p42"
btn.setAttribute('aria-pressed', 'true');
btn.dataset.state = 'active';
btn.removeAttribute('aria-label');
// ▶ Output DOM: <button … data-state="active" aria-pressed="true">Buy</button>



/* ──────────────────────────────────────────────────────────────────────────
   🎨 4) STYLING — Inline vs Classes vs Computed
   ────────────────────────────────────────────────────────────────────────── */
const box = document.getElementById('box'); // <div id="box" class="pane"></div>
box.style.width = '200px';
box.style.height = '100px';
box.style.border = '1px solid #999';
box.classList.add('rounded','shadow');
box.classList.toggle('active');
const cs = getComputedStyle(box);
const w  = cs.width;          // "200px"
const bt = cs.borderTopWidth; // "1px"



/* ──────────────────────────────────────────────────────────────────────────
   🧱 5) CREATION & INSERTION — Banaao & Jodo (Batch for Performance)
   ────────────────────────────────────────────────────────────────────────── */
/* HTML:
<ul id="list"></ul>
<template id="rowTpl"><li class="row"><span class="name"></span></li></template>
*/
const list = document.getElementById('list');
const li   = document.createElement('li');
li.textContent = 'First item';
list.append(li);

const li2  = document.createElement('li');
li2.textContent = 'Inserted before';
li.before(li2);

list.insertAdjacentHTML('beforeend','<li><b>Fast</b> HTML insert</li>');

const tpl  = document.getElementById('rowTpl');
const node = tpl.content.firstElementChild.cloneNode(true);
node.querySelector('.name').textContent = 'Alice';
list.append(node);

// Batch fragment:
const frag = document.createDocumentFragment();
for (let i=1;i<=3;i++){
  const it = document.createElement('li');
  it.textContent = `Batch ${i}`;
  frag.appendChild(it);
}
list.appendChild(frag);



/* ──────────────────────────────────────────────────────────────────────────
   ✍️ 6) MODIFICATION — Update Smartly (Replace Carefully)
   ────────────────────────────────────────────────────────────────────────── */
/* HTML:
<div id="card" class="card">
  <h3 class="title">Old</h3>
</div>
*/
const card = document.getElementById('card');
card.querySelector('.title').textContent = 'New Title ✅';
card.classList.replace('card','card--primary');
card.outerHTML = `
<div id="card" class="card card--primary">
  <h3 class="title">Rebuilt Card</h3>
  <p>Fresh content</p>
</div>`; // ⚠️ old reference invalid



/* ──────────────────────────────────────────────────────────────────────────
   🗑️ 7) DELETION — Remove/Replace (Clean DOM)
   ────────────────────────────────────────────────────────────────────────── */
/* HTML: <ul id="todo"><li id="t1">A</li><li id="t2">B</li></ul> */
document.getElementById('t2').remove();
const t1 = document.getElementById('t1');
const newLi = document.createElement('li');
newLi.textContent = 'A+ (updated)';
t1.replaceWith(newLi);



/* ──────────────────────────────────────────────────────────────────────────
   🧭 8) TRAVERSAL — Move Around the Tree
   ────────────────────────────────────────────────────────────────────────── */
/* HTML:
<div class="container">
  <ul id="menu">
    <li class="item sel">Home</li>
    <li class="item">Blog</li>
  </ul>
</div>
*/
const sel = document.querySelector('.item.sel');
const par = sel.parentElement;            // <ul id="menu">
const wrap= sel.closest('.container');    // .container
const nxt = sel.nextElementSibling;       // <li>Blog</li>
const firstText = par.firstElementChild.textContent; // "Home"



/* ──────────────────────────────────────────────────────────────────────────
   🔔 9) EVENTS — Listen, Bubble, Delegate
   ────────────────────────────────────────────────────────────────────────── */
/* HTML:
<form id="login"><input name="email"/><button>Go</button></form>
<ul id="list2"><li data-id="1">One</li><li data-id="2">Two</li></ul>
<a id="ext" href="https://example.com">Open</a>
*/
const login = document.getElementById('login');
login.addEventListener('submit',(e)=>{
  e.preventDefault();
  const email = new FormData(login).get('email');
  console.log('Submitted:', email);
});

document.getElementById('list2').addEventListener('click',(e)=>{
  const li = e.target.closest('li');
  if(!li) return;
  console.log('Clicked item id:', li.dataset.id);
});

document.getElementById('ext').addEventListener('click',(e)=>{
  if(!e.metaKey && !e.ctrlKey){
    e.preventDefault();
    console.log('Handled link internally.');
  }
});



/* ──────────────────────────────────────────────────────────────────────────
   🧠 10) EVENT OPTIONS — once / passive / capture
   ────────────────────────────────────────────────────────────────────────── */
// scroll listeners passive rakho for perf:
/* HTML: <div id="scroll-area" style="overflow:auto;height:100px"></div> */
const area = document.getElementById('scroll-area');
area.addEventListener('scroll',()=>{/* light work */},{ passive:true });



/* ──────────────────────────────────────────────────────────────────────────
   🧰 11) FORMS & INPUT — input vs change, key events
   ────────────────────────────────────────────────────────────────────────── */
/* HTML: <input id="search" placeholder="Type..."/><p id="mirror"></p> */
const q = document.getElementById('search');
const mirror = document.getElementById('mirror');
q.addEventListener('input',()=>{ mirror.textContent = q.value || '—'; });
q.addEventListener('keydown',(e)=>{ if(e.key==='Enter') console.log('Search:', q.value); });



/* ──────────────────────────────────────────────────────────────────────────
   🖱️ 12) POINTER/MOUSE + DnD — Native Drag & Drop
   ────────────────────────────────────────────────────────────────────────── */
/* HTML:
<div id="drag" draggable="true">Drag me</div>
<div id="drop" style="border:2px dashed #888;padding:10px">Drop here</div>
*/
const drag = document.getElementById('drag');
const drop = document.getElementById('drop');
drag.addEventListener('dragstart',(e)=>e.dataTransfer.setData('text/plain','Dragged Content'));
drop.addEventListener('dragover',(e)=>e.preventDefault());
drop.addEventListener('drop',(e)=>{
  e.preventDefault();
  drop.textContent = `Dropped: ${e.dataTransfer.getData('text/plain')}`;
});



/* ──────────────────────────────────────────────────────────────────────────
   📐 13) DIMENSIONS & POSITION — Box Metrics
   ────────────────────────────────────────────────────────────────────────── */
/* HTML: <div id="pane" style="width:300px;height:120px;padding:10px;border:5px solid #000"></div> */
const pane = document.getElementById('pane');
const ow = pane.offsetWidth;            // ≈ 330 (box-sizing dependent)
const ch = pane.clientHeight;           // ≈ 140
const rect = pane.getBoundingClientRect(); // {x,y,width,height,...}



/* ──────────────────────────────────────────────────────────────────────────
   🛡️ 14) SAFETY — XSS ko Door Rakho
   ────────────────────────────────────────────────────────────────────────── */
function safeRender(container, userString){
  const span = document.createElement('span');
  span.textContent = userString; // escape karega
  container.replaceChildren(span);
}
// ⚠️ Kabhi bhi untrusted string ko innerHTML se inject mat karo.



/* ──────────────────────────────────────────────────────────────────────────
   🌒 15) SHADOW DOM — Encapsulation + Scoped Styles
   ────────────────────────────────────────────────────────────────────────── */
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
// Use: <tag-badge>New</tag-badge> → isolated styles.



/* ──────────────────────────────────────────────────────────────────────────
   👀 16) OBSERVERS — Mutation & Intersection
   ────────────────────────────────────────────────────────────────────────── */
/* HTML: <div id="observeMe"></div><img id="lazy" data-src="photo.jpg" alt=""/> */
const target = document.getElementById('observeMe');
const mo = new MutationObserver(rs => rs.forEach(r=>console.log('Mutation:', r.type, r)));
mo.observe(target,{ childList:true, attributes:true, subtree:true });
target.setAttribute('data-flag','1'); // will log

const lazy = document.getElementById('lazy');
const io = new IntersectionObserver((entries,ob)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ lazy.src = lazy.dataset.src; ob.unobserve(lazy); }
  });
});
io.observe(lazy);



/* ──────────────────────────────────────────────────────────────────────────
   🧷 17) insertAdjacent* — Position Map
   ────────────────────────────────────────────────────────────────────────── */
// 'beforebegin' (outside before) | 'afterbegin' (inside first child)
// 'beforeend'  (inside last)     | 'afterend'  (outside after)
/* HTML: <div id="slot"></div> */
const slot = document.getElementById('slot');
slot.insertAdjacentHTML('beforebegin','<p>↑ Outside before</p>');
slot.insertAdjacentHTML('afterbegin','<b>First Inside</b>');
slot.insertAdjacentHTML('beforeend','<i>Last Inside</i>');
slot.insertAdjacentHTML('afterend','<p>↓ Outside after</p>');



/* ──────────────────────────────────────────────────────────────────────────
   🧩 18) Node vs Element, NodeList vs HTMLCollection
   ────────────────────────────────────────────────────────────────────────── */
// childNodes → NodeList (text/comments included) | children → HTMLCollection (elements only)
// HTMLCollection is LIVE; NodeList (QSAll) is STATIC.
/* HTML:
<ul id="nvs">
  Text
  <li>A</li>
  <li>B</li>
</ul>
*/
const nvs = document.getElementById('nvs');
nvs.childNodes.length; // includes whitespace text nodes
nvs.children.length;   // only <li>



/* ──────────────────────────────────────────────────────────────────────────
   🧪 19) Utility Trio — matches() / closest() / contains()
   ────────────────────────────────────────────────────────────────────────── */
/* HTML: <div class="wrap"><button id="cta" class="btn primary">Buy</button></div> */
const cta = document.getElementById('cta');
cta.matches('.btn.primary');   // true
cta.closest('.wrap');          // div.wrap
document.body.contains(cta);   // true



/* ──────────────────────────────────────────────────────────────────────────
   📦 20) TEMPLATE + CLONE — Reusable UI
   ────────────────────────────────────────────────────────────────────────── */
/* HTML:
<template id="cardTpl">
  <article class="product">
    <h4 class="name"></h4><p class="price"></p>
  </article>
</template>
<section id="grid"></section>
*/
const cardTpl = document.getElementById('cardTpl');
const grid = document.getElementById('grid');
const renderProduct = ({name,price})=>{
  const el = cardTpl.content.firstElementChild.cloneNode(true);
  el.querySelector('.name').textContent  = name;
  el.querySelector('.price').textContent = `₹${price}`;
  return el;
};
grid.append(
  renderProduct({name:'Mouse', price:799}),
  renderProduct({name:'Keyboard', price:1499})
);



/* ──────────────────────────────────────────────────────────────────────────
   🧭 21) EVENT DELEGATION — Scalable Lists
   ────────────────────────────────────────────────────────────────────────── */
/* HTML:
<ul id="feed">
  <li data-id="101"><button class="like">♥</button></li>
  <li data-id="102"><button class="like">♥</button></li>
</ul>
*/
document.getElementById('feed').addEventListener('click',(e)=>{
  if(e.target.matches('.like')){
    const li = e.target.closest('li');
    console.log('Liked post id:', li.dataset.id);
  }
});



/* ──────────────────────────────────────────────────────────────────────────
   🚀 22) PERFORMANCE — Reflows ko control karo
   ────────────────────────────────────────────────────────────────────────── */
// ✅ Batch writes (DocumentFragment), minimal layout reads, passive scroll, debounce resize,
//    delegation for large lists, classes > multiple inline styles.
(function performanceDemo(){
  const ul = document.createElement('ul');
  const frag = document.createDocumentFragment();
  for(let i=0;i<500;i++){
    const li = document.createElement('li');
    li.textContent = `Row ${i+1}`;
    frag.appendChild(li);
  }
  ul.appendChild(frag);
  // document.body.appendChild(ul); // single append → fewer reflows
})();



/* ──────────────────────────────────────────────────────────────────────────
   🧯 23) ROBUSTNESS — Guards & Error Handling
   ────────────────────────────────────────────────────────────────────────── */
function safeHTML(parent, html){
  try { parent.insertAdjacentHTML('beforeend', html); }
  catch(err){ console.error('Bad HTML:', err); }
}
// Optional chaining + guards:
const maybe = document.querySelector('.maybe');
if (maybe?.querySelector('.child')) {
  // safe access
}



/* ──────────────────────────────────────────────────────────────────────────
   🧭 24) MINI PROJECT — Todo CRUD (Create / Read / Update / Delete)
   ────────────────────────────────────────────────────────────────────────── */
/* HTML:
<section id="todoApp">
  <input id="newTask" placeholder="Add task..."/>
  <button id="addBtn">Add</button>
  <ul id="tasks"></ul>
</section>
*/
const state = [];
const $ = (s, r=document)=>r.querySelector(s);

function render(){
  const ul = $('#tasks');
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

$('#addBtn').addEventListener('click',()=>{
  const input = $('#newTask');
  const text = input.value.trim();
  if(!text) return;
  state.push({ id:String(Date.now()), text, done:false });
  input.value = '';
  render();
});

$('#tasks').addEventListener('click',(e)=>{
  const li = e.target.closest('li'); if(!li) return;
  const id = li.dataset.id;

  if(e.target.matches('input[type="checkbox"]')){
    const item = state.find(x=>x.id===id);
    item.done = e.target.checked;
    li.querySelector('.txt').style.textDecoration = item.done ? 'line-through' : '';
  }
  if(e.target.matches('.del')){
    const idx = state.findIndex(x=>x.id===id);
    state.splice(idx,1);
    li.remove();
  }
});



/* ──────────────────────────────────────────────────────────────────────────
   ✅ 25) QUICK REVISION — 30-Second Pro Recap
   ────────────────────────────────────────────────────────────────────────── */
// Selection: getElementById (fast), querySelector/All (CSS power; NodeList static; HTMLCollection live).
// Content: textContent (safe), innerText (layout-aware), innerHTML (⚠️ sanitize), outerHTML (replaces node).
// Attributes: get/set/remove; data-* → dataset.camelCase.
// Styling: classList (add/remove/toggle/replace); getComputedStyle for reads.
// Create/Insert: createElement, append/prepend, before/after, insertAdjacentHTML; use DocumentFragment.
// Delete/Replace: remove(), replaceWith(); outerHTML breaks old references.
// Traverse: parentElement/children/siblings, closest(), matches().
// Events: addEventListener; preventDefault/stopPropagation; delegation for scalable UIs.
// Event Options: once, passive (scroll/touch), capture.
// Forms: input vs change; keydown Enter handling.
// Pointer/DnD: dragstart/dragover/drop basics.
// Dimensions: client vs offset vs getBoundingClientRect.
// Safety: Never inject untrusted HTML; prefer textContent or sanitize.
// Shadow DOM: encapsulation; custom elements.
// Observers: MutationObserver & IntersectionObserver (lazy-load).
// Performance: batch DOM writes, minimize layout thrash, passive listeners, debounce resize.
// Robustness: try/catch for HTML parse, optional chaining guards.
// 🎯 Mantra: “Batch karo, CSS classes use karo, delegate events, input sanitize karo.”
// ───────────────────────────────────────────────────────────────────────────
