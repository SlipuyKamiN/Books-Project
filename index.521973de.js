!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},s={},n=t.parcelRequirecf20;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){s[e]=t},t.parcelRequirecf20=n),n("8MQwU"),n("5xtVg"),n("cfOGF"),n("23Ajj"),n("9ZZxa");var l=n("6JpON"),a=n("8MQwU"),i=(l=n("6JpON"),a=n("8MQwU"),n("5xtVg")),r=n("jklOU"),c=n("l1Gdk");const d=document.querySelector(".main__title-js"),u=document.querySelector(".main__list-js");let g=window.innerWidth,_=0,m=0,f=0;const p=new(0,r.Spiner);window.addEventListener("resize",e(c)((function(e){const t=e.target.outerWidth;(t>767&&g<768||t>1439&&g<1440||t<1440&&g>1439||t<768&&g>767)&&location.reload()}),50));const y=e=>q(e).map((e=>`\n      <li class='category-books__item'>\n       <a href="/" class='category-books__link'>\n        <img\n          class='category-books__img'\n          src='${e.book_image}'\n          alt='book'\n          data-id="${e._id}"\n         loading="lazy"\n        />\n        <div class='category-books__wrapper'>\n        <p class='category-books__text'>quick view</p>\n        </div>\n        </a>\n        <h3 class='category-books__name' >${j(e.title,17)}</h3>\n        <p class='category-books__author'>${j(e.author,29)}</p>\n      </li>\n    `)).join("");async function h(){try{p.show();const t=await a.fetchBooks.getBestSellers();0!==t.length||e(l).Notify.failure("Sorry, there was an error on the server. Please try again."),u.innerHTML=(e=>e.map((e=>`\n           <li class='all-categories__item'>\n           <p class='category-books__title'>${e.list_name}</p>\n            <ul class='category-books__list-js card-set'>\n           ${y(e.books)}\n           </ul>\n           <button class="load-more-js" type="button" data-category="${e.list_name}">see more</button>\n           </li>\n      `)).join(""))(t);const o=document.querySelectorAll(".load-more-js"),s=document.querySelectorAll(".category-books__item");L(s),v(o),p.hide()}catch(e){console.log(e),p.hide()}}const k=()=>{d.innerHTML=' Best Sellers <span class="main__title--color-purple">Books</span>',h()},b=e=>{e.preventDefault(),m=e.target.dataset.id,"IMG"===e.target.nodeName&&(0,i.handleModalWindow)(m)},w=e=>{f=e.target.dataset.category,S(f),C(f),document.documentElement.scrollTop=g<768?736:g>=768&&g<1440?650:0},j=(e,t)=>e.length>t?`${e.slice(0,t)}...`:e,L=e=>{e.forEach((e=>{e.addEventListener("click",b)}))},v=e=>{e.forEach((e=>{e.addEventListener("click",w)}))},S=e=>{const t=document.querySelector(".categories-list-js").children;for(let o=0;o<t.length;o+=1){const s=t[o];s.firstElementChild.classList.remove("selected-categories"),s.textContent.trim()===e.trim()&&s.firstElementChild.classList.add("selected-categories")}},q=e=>(1===_?e.splice(1,4):3===_&&e.splice(3,2),e);_=g<768?1:g>=768&&g<1440?3:5,k();r=n("jklOU");const x=document.querySelector(".categories-list-js"),E=document.querySelector(".main__list-js"),M=document.querySelector(".main__title-js"),T=document.querySelector(".all-categories-btn");let $="";T.classList.add("selected-categories");const B=new(0,r.Spiner);(async()=>{try{const e=(await a.fetchBooks.getCategoriesList()).map((e=>`<li class= 'categories-list__item '> <button class= 'categories-list__button'>${e.list_name}</button> </li>`)).join("");x.insertAdjacentHTML("beforeend",e)}catch(e){console.log(e)}})();const C=async e=>{B.show();const t=await a.fetchBooks.getBooksByCategory(e),o=y(t),s=e.split(" "),n=s.slice(0,s.length-1).join(" "),l=s.slice(s.length-1).join();M.innerHTML=`${n}<span class="main__title--color-purple"> ${l}</span>`,E.innerHTML=o,E.classList.add("card-set");const i=document.querySelectorAll(".category-books__item");L(i),T.classList.remove("selected-categories"),B.hide()};x.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;if(O(),e.target===T)return T.classList.add("selected-categories"),void k();$=e.target.textContent,C($),e.target.classList.add("selected-categories")}));const O=()=>{for(let e=0;e<x.children.length;e+=1){x.children[e].firstElementChild.classList.remove("selected-categories")}};n("xpKCW"),n("i8Q71"),n("euqRf")}();
//# sourceMappingURL=index.521973de.js.map
