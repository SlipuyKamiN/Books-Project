function n(n,e,i,s){Object.defineProperty(n,e,{get:i,set:s,enumerable:!0,configurable:!0})}function e(n){return n&&n.__esModule?n.default:n}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},t={},o=i.parcelRequirecf20;null==o&&((o=function(n){if(n in s)return s[n].exports;if(n in t){var e=t[n];delete t[n];var i={id:n,exports:{}};return s[n]=i,e.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(n,e){t[n]=e},i.parcelRequirecf20=o),o.register("kyEFX",(function(e,i){var s,t;n(e.exports,"register",(function(){return s}),(function(n){return s=n})),n(e.exports,"resolve",(function(){return t}),(function(n){return t=n}));var o={};s=function(n){for(var e=Object.keys(n),i=0;i<e.length;i++)o[e[i]]=n[e[i]]},t=function(n){var e=o[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),o.register("dIJLf",(function(n,e){n.exports=new URL(o("kyEFX").resolve("itRYJ"),import.meta.url).toString()})),o.register("ykxoy",(function(n,e){n.exports=new URL(o("kyEFX").resolve("iyNay"),import.meta.url).toString()})),o.register("02rlp",(function(n,e){n.exports=new URL(o("kyEFX").resolve("ep89d"),import.meta.url).toString()})),o("kyEFX").register(JSON.parse('{"f9bx4":"shopping-list.c82b0a92.js","itRYJ":"image-1@1x.626c9508.png","iyNay":"image-2@1x.652b354e.png","ep89d":"image-3@1x.e377c706.png","eTdrl":"shopping-list.bd9a7960.js"}')),o("aWIP7"),o("bTcpz"),o("gZ6M0"),o("74Aiq"),o("it0VB");var l=o("dIJLf"),r=o("ykxoy"),a=o("02rlp");const p=document.querySelector(".shopping-main__list-js"),c=(document.querySelector(".shopping-button-js"),document.querySelector(".empty-list"));let d=localStorage.getItem("books-data");d=JSON.parse(d),console.log(d);const g=function(n){n&&0!==n.length||p.classList.add("visually-hidden");if(n.length>0){c.classList.add("visually-hidden"),p.classList.remove("visually-hidden");const i=n.find((n=>n.buy_links.some((n=>"Amazon"===n.name)))).buy_links.find((n=>"Amazon"===n.name)).url,s=n.find((n=>n.buy_links.some((n=>"Apple Books"===n.name)))).buy_links.find((n=>"Apple Books"===n.name)).url,t=n.find((n=>n.buy_links.some((n=>"Barnes and Noble"===n.name)))).buy_links.find((n=>"Barnes and Noble"===n.name)).url;return n.map((n=>`<li class="shopping__item shopping__item-mobile" data-id=${n._id}>\n            <button type="button" data-action='delete' value="remove" class="shopping-button shopping-button-js">\n              <svg class="shopping-button__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>\n    </svg>\n            </button>\n      <div class='shopping-mobale'\n            <div class="flex-box-mobale">\n                <figure class="shopping__box">\n                  <picture>\n                    <img\n                      src="${n.book_image}"\n                      alt="book"\n                      class="shopping__img"\n                      loading="lazy"\n                    />\n                  </picture>\n                  <figcaption class='shopping__author shopping__author-mobile'>${n.author}</figcaption>\n                </figure>\n                <div class="flex-box__text-mobale">\n                  <h2 class="shopping__title">${n.title}</h2>\n                  <p class="shopping__titleText">Hardcover fiction</p>\n                  <div class='shops-box shops-box-mobile'>\n                    <ul class="shops-list">\n                    <li>\n                      <a\n                        class="shops-list__link amazon"\n                        href="${i}"\n                        target="_blank"\n                        rel="noopener noreferrer"\n                      >\n                      <img class='shops-list__img' src="${e(l)}" width="48" height="15" />\n                      </a>\n                    </li>\n                    <li>\n                      <a\n                        class="shops-list__link"\n                        href="${s}"\n                        target="_blank"\n                        rel="noopener noreferrer"\n                      >\n                      <img class='shops-list__img' src="${e(r)}" width="28" height="27" />\n                      </a>\n                    </li>\n                    <li>\n                      <a\n                        class="shops-list__link"\n                        href="${t}"\n                        rel="noopener noreferrer"\n                        target="_blank"\n                      >\n                      <img class='shops-list__img' src="${e(a)}" width="32" height="30" />\n                      </a>\n                    </li>\n                  </ul>\n                  </div>\n                  </div>\n                </div>\n                <p class='shopping__text shopping__text-mobale'>${n.description}</p>\n            </div>\n      </div>\n\n      <div class='shopping-tablet'\n        <div class='flex-box-tablet'>\n                    <img\n                      src="${n.book_image}"\n                      alt="book"\n                      class="shopping__img"\n                      loading="lazy"\n                    />\n            <div class="flex-box__text-tablet">\n                  <div class='flex-box__information'>\n                    <h2 class="shopping__title">${n.title}</h2>\n                    <p class="shopping__titleText">Hardcover fiction</p>\n                    <p class='shopping__text'>${n.description}</p>\n                  </div>\n                  <div class="shopping-box-tablet">\n                    <p class='shopping__author'>${n.author}</p>\n                    <ul class="shops-list">\n                      <li>\n                        <a\n                          class="shops-list__link amazon"\n                          href="${i}"\n                          target="_blank"\n                          rel="noopener noreferrer"\n                        >\n                        <img class='shops-list__img' src="${e(l)}" width="48" height="15" />\n                        </a>\n                      </li>\n                      <li>\n                        <a\n                          class="shops-list__link"\n                          href="${s}"\n                          target="_blank"\n                          rel="noopener noreferrer"\n                        >\n                        <img class='shops-list__img' src="${e(r)}" width="28" height="27" />\n                        </a>\n                      </li>\n                      <li>\n                        <a\n                          class="shops-list__link"\n                          href="${t}"\n                          target="_blank"\n                          rel="noopener noreferrer"\n                        >\n                        <img class='shops-list__img' src="${e(a)}" width="32" height="30" />\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n            </div> \n        </div>\n      </div>\n      </li>`)).join("")}}(d);p.insertAdjacentHTML("beforeend",g),p.addEventListener("click",(function(n){if("delete"!==n.target.dataset.action)return;const e=n.target.closest(".shopping__item");console.log(e);const i=e.dataset.id;d=d.filter((n=>n._id!==i)),localStorage.setItem("books-data",JSON.stringify(d)),e.remove(),d&&0!==d.length||c.classList.remove("visually-hidden");d.length>0&&c.classList.add("visually-hidden")})),o("bUb57"),o("dTazW"),o("bMZn5");
//# sourceMappingURL=shopping-list.c82b0a92.js.map
