function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},s={},n=t.parcelRequirecf20;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){s[e]=t},t.parcelRequirecf20=n),n("aWIP7"),n("bTcpz"),n("gZ6M0"),n("74Aiq"),n("it0VB");var a=n("aWIP7"),l=n("7Y9D8"),i=(a=n("aWIP7"),n("bTcpz"));const r=document.querySelector(".main__title-js"),c=document.querySelector(".main__list-js");let d=window.innerWidth,g=0,u=0,_=0;window.addEventListener("resize",(function(e){const t=e.target.outerWidth;console.log(d),(t>767&&d<768||t>1439&&d<1440||t<1440&&d>1439||t<768&&d>767)&&location.reload()}));const m=e=>w(e).map((e=>`\n      <li class='category-books__item'>\n       <a href="/" class='category-books__link'>\n        <img\n          class='category-books__img'\n          src='${e.book_image}'\n          alt='book'\n          data-id="${e._id}"\n         loading="lazy"\n        />\n        <div class='category-books__wrapper'>\n        <p class='category-books__text'>quick view</p>\n        </div>\n        </a>\n        <h3 class='category-books__name' >${b(e.title,17)}</h3>\n        <p class='category-books__author'>${b(e.author,29)}</p>\n      </li>\n    `)).join("");async function f(){try{const t=await a.fetchBooks.getBestSellers();0!==t.length||e(l).Notify.failure("Sorry, there was an error on the server. Please try again."),c.innerHTML=(e=>e.map((e=>`\n           <li class='all-categories__item'>\n           <h4 class='category-books__title'>${e.list_name}</h4>\n            <ul class='category-books__list-js card-set'>\n           ${m(e.books)}\n           </ul>\n           <button class="load-more-js" type="button" data-category="${e.list_name}">see more</button>\n           </li>\n      `)).join(""))(t);const o=document.querySelectorAll(".load-more-js"),s=document.querySelectorAll(".category-books__item");k(s),L(o)}catch(e){console.log(e)}}const y=()=>{r.innerHTML=' Best Sellers <span class="main__title--color-purple">Books</span>',f()},p=e=>{e.preventDefault(),u=e.target.dataset.id,"IMG"===e.target.nodeName&&(0,i.handleModalWindow)(u)},h=e=>{_=e.target.dataset.category,v(_),E(_)},b=(e,t)=>e.length>t?`${e.slice(0,t)}...`:e,k=e=>{e.forEach((e=>{e.addEventListener("click",p)}))},L=e=>{e.forEach((e=>{e.addEventListener("click",h)}))},v=e=>{const t=document.querySelector(".categories-list-js").children;for(let o=0;o<t.length;o+=1){const s=t[o];s.firstElementChild.classList.remove("selected-categories"),s.textContent.trim()===e.trim()&&s.firstElementChild.classList.add("selected-categories")}},w=e=>(1===g?e.splice(1,4):3===g&&e.splice(3,2),e);g=d<768?1:d>=768&&d<1440?3:5,y();const j=document.querySelector(".categories-list-js"),q=document.querySelector(".main__list-js"),S=document.querySelector(".main__title-js"),T=document.querySelector(".all-categories-btn");T.classList.add("selected-categories");(async()=>{const e=(await a.fetchBooks.getCategoriesList()).map((e=>`<li class= 'categories-list__item '> <button class= 'categories-list__button'>${e.list_name}</button> </li>`)).join("");j.insertAdjacentHTML("beforeend",e)})();const E=async e=>{const t=await a.fetchBooks.getBooksByCategory(e),o=m(t),s=e.split(" "),n=s.slice(0,s.length-1).join(" "),l=s.slice(s.length-1).join();S.innerHTML=`${n}<span class="main__title--color-purple"> ${l}</span>`,q.innerHTML=o,q.classList.add("card-set");const i=document.querySelectorAll(".category-books__item");k(i),T.classList.remove("selected-categories")};j.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;if($(),e.target===T)return T.classList.add("selected-categories"),void y();M=e.target.textContent,E(M),e.target.classList.add("selected-categories")}));let M="";const $=()=>{for(let e=0;e<j.children.length;e+=1){j.children[e].firstElementChild.classList.remove("selected-categories")}};n("dTazW"),n("bUb57"),n("bMZn5");
//# sourceMappingURL=index.ee134475.js.map