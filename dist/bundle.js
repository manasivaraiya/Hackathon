!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist",r(r.s=5)}([function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,o=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var n,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(n=0===a.indexOf("//")?a:0===a.indexOf("/")?r+a:o+a.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")})}},function(e,t,r){var o={},n=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),a=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),i=null,l=0,d=[],c=r(0);function s(e,t){for(var r=0;r<e.length;r++){var n=e[r],a=o[n.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](n.parts[i]);for(;i<n.parts.length;i++)a.parts.push(g(n.parts[i],t))}else{var l=[];for(i=0;i<n.parts.length;i++)l.push(g(n.parts[i],t));o[n.id]={id:n.id,refs:1,parts:l}}}}function h(e,t){for(var r=[],o={},n=0;n<e.length;n++){var a=e[n],i=t.base?a[0]+t.base:a[0],l={css:a[1],media:a[2],sourceMap:a[3]};o[i]?o[i].parts.push(l):r.push(o[i]={id:i,parts:[l]})}return r}function m(e,t){var r=a(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=d[d.length-1];if("top"===e.insertAt)o?o.nextSibling?r.insertBefore(t,o.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),d.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var n=a(e.insertInto+" "+e.insertAt.before);r.insertBefore(t,n)}}function f(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function p(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),u(t,e.attrs),m(e,t),t}function u(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})}function g(e,t){var r,o,n,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var d=l++;r=i||(i=p(t)),o=x.bind(null,r,d,!1),n=x.bind(null,r,d,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",u(t,e.attrs),m(e,t),t}(t),o=function(e,t,r){var o=r.css,n=r.sourceMap,a=void 0===t.convertToAbsoluteUrls&&n;(t.convertToAbsoluteUrls||a)&&(o=c(o));n&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var i=new Blob([o],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(i),l&&URL.revokeObjectURL(l)}.bind(null,r,t),n=function(){f(r),r.href&&URL.revokeObjectURL(r.href)}):(r=p(t),o=function(e,t){var r=t.css,o=t.media;o&&e.setAttribute("media",o);if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,r),n=function(){f(r)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else n()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=n()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=h(e,t);return s(r,t),function(e){for(var n=[],a=0;a<r.length;a++){var i=r[a];(l=o[i.id]).refs--,n.push(l)}e&&s(h(e,t),t);for(a=0;a<n.length;a++){var l;if(0===(l=n[a]).refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete o[l.id]}}}};var b=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}();function x(e,t,r,o){var n=r?"":o.css;if(e.styleSheet)e.styleSheet.cssText=b(t,n);else{var a=document.createTextNode(n),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=function(e,t){var r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var n=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(o),a=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[r].concat(a).concat([n]).join("\n")}return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},n=0;n<this.length;n++){var a=this[n][0];"number"==typeof a&&(o[a]=!0)}for(n=0;n<e.length;n++){var i=e[n];"number"==typeof i[0]&&o[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),t.push(i))}},t}},function(e,t,r){(t=e.exports=r(2)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400);",""]),t.push([e.i,'*,:after,:before{margin:0;padding:0;box-sizing:inherit}:root{--color-primary:#fc427b;--color-primary-dark:#b33771;--color-secondary:#0062c5;--color-secondary-light:#1b9cfc;--color-tertiary:#ffa700;--color-tertiary-dark:#b37500;--color-white:#fff;--color-black:#222;--color-gray:#ccc;background-color:var(--color-white);color:var(--color-black);font-size:75%}@media screen and (max-device-width:650px){:root{font-size:60%}}body{box-sizing:border-box;overflow-x:hidden}a{text-decoration:none}body{font-size:1.6rem;font-family:Sans-Serif}.container{width:100vw;height:100vh;position:relative}.container__button{display:inline-block;background-color:var(--color-primary);color:var(--color-white);padding:.5rem 5rem;border-radius:3rem;position:relative;left:50%;transform:translate(-50%);cursor:pointer;transition:all .5s ease-in-out;margin-bottom:1rem}.container__button:hover{box-shadow:0 .5rem .5rem -.2rem var(--color-black);transform:translate(-50%,calc(-50% - .5rem))}.container__heading{cursor:pointer;display:inline-block;position:relative;left:50%;transform:translate(-50%);margin:1rem auto}.container__heading--text{font-size:2rem;padding:.5rem 0;text-align:center;transition:all .5s ease-in-out}.container__heading--overline{width:60%;margin:0 auto;background:linear-gradient(-90deg,var(--color-primary),var(--color-primary-dark),var(--color-primary));height:.5rem;border-radius:.5rem;transition:all .5s ease-in-out}.container__heading:hover>.container__heading--overline{width:100%;transform:translateY(2rem)}.container__heading:hover>.container__heading--text{transform:translateY(-1rem)}.ffont{text-align:center;margin-top:10px;font-family:Times,serif;font-style:bold;font-size:15px;color:#000}main{display:flex;flex-flow:row wrap;justify-content:center;width:100%}.flexbox img{max-width:250px;width:100%;height:auto}.flexbox{padding:10px}@media screen and (max-device-width:650px){.flexbox img{max-width:150px}}.imgcontainer{margin:0 auto;text-align:center}.effect{width:100%}.effect .buttons{margin:4rem auto;display:flex;justify-content:center}.effect a:last-child{margin-right:0}.effect a{text-decoration:none!important;color:#fff;width:60px;height:60px;display:flex;align-items:center;justify-content:center;margin-right:20px;font-size:25px;overflow:hidden;position:relative}.effect a img{width:45px;height:45px;fill:#fff;color:#fff}.effect.laertes a,.effect.laertes a i{transition:all .2s linear 0s}.effect.laertes a:hover{border-radius:10%}.effect.laertes a:hover i{transform:scale(1.1);text-shadow:0 0 12px rgba(33,33,33,.6)}.sponsor{margin:2rem auto}.sponsor__button{display:inline-block;position:relative;left:50%;transform:translate(-50%);padding:1rem 5rem;margin:1rem auto;cursor:pointer;color:var(--color-white);font-size:2rem;background-color:var(--color-primary);border-radius:3rem;transition:all .5s ease-in-out}.sponsor__button:hover{box-shadow:0 .5rem 1rem -.2rem rgba(0,0,0,.5);transform:translate(-50%,-.5rem)}.sponsor__link{text-align:center;font-size:1.2rem}.fcontainer{max-width:1100px;width:90%;height:100%;padding-bottom:70px;background-color:hsla(0,0%,100%,.5);margin:0 auto 50px;display:flex;justify-content:center;flex-wrap:wrap;align-content:flex-start;transition:all .25s ease-in-out}.fcontainer .qa{position:relative;top:50px;margin:auto;padding-left:75px;width:50%;float:left}.fcontainer .qa .q{cursor:pointer}.fcontainer .qa .q .question span{line-height:20px;color:#000;font-size:1.2rem;padding-left:2.5rem}.fcontainer .qa .q .shape.hovered{animation:wiggle .2s cubic-bezier(.36,.07,.19,.97) both;animation-iteration-count:3}.fcontainer .qa .a .ans{line-height:20px;color:#000;font-size:1.2rem;margin-left:13px;margin-top:25px;margin-bottom:10px;padding-left:25px;max-height:0;overflow:hidden;transition:.4s ease-in-out;opacity:0;border-radius:5px}.fcontainer .qa .a .ans.show{opacity:1;max-height:500px}.header{max-width:1000px;background-color:#fff;margin:auto;display:flex;justify-content:center;flex-wrap:wrap;align-content:flex-start}.header__heading{cursor:pointer;display:inline-block;position:relative;top:50px;transform:translate(-50%,-50%);margin-bottom:1rem}.header__heading--text{padding:.5rem 0;text-align:center;transition:all .5s ease-in-out}.header__heading--overline{width:60%;margin:0 auto;background:linear-gradient(-90deg,var(--color-primary),var(--color-primary-dark),var(--color-primary));height:.5rem;border-radius:.5rem;transition:all .5s ease-in-out}.header__heading:hover>.header__heading--overline{width:100%;transform:translateY(2rem)}.header__heading:hover>.header__heading--text{transform:translateY(-1rem)}@keyframes wiggle{0%{transform:rotate(45deg)}25%{transform:rotate(50deg)}75%{transform:rotate(40deg)}to{transform:rotate(45deg)}}@media screen and (max-width:800px){.fcontainer{align-content:flex-start}.fcontainer .qa{width:calc(100% - 30px);margin:auto;padding-left:50px;padding-right:50px}}@media screen and (max-width:400px){.fcontainer{align-content:flex-start}.fcontainer .qa{width:calc(100% - 30px);margin:auto;padding-left:20px;padding-right:20px;padding:auto}}.closed .horizontal,.closed .vertical{transition:all .5s ease-in-out;transform:rotate(-135deg)}.closed .horizontal,.opened{opacity:1}.opened .horizontal,.opened .vertical{transition:all .5s ease-in-out;transform:rotate(45deg)}.opened .horizontal{opacity:0}.even .horizontal{width:10px;height:2px;margin-left:-5px;margin-top:-1px}.even .horizontal,.even .vertical{position:absolute;background-color:#5153f8;left:50%;top:50%}.even .vertical{width:2px;height:10px;margin-left:-1px;margin-top:-5px}.even .shape{width:30px;height:30px;margin:auto;background-color:#fff;border:5px solid #fc427b;text-align:center;transform:rotate(45deg);float:left}.even .ans{border-left:5px solid #5153f8}.odd .horizontal{width:10px;height:2px;margin-left:-5px;margin-top:-1px}.odd .horizontal,.odd .vertical{position:absolute;background-color:#fc427b;left:50%;top:50%}.odd .vertical{width:2px;height:10px;margin-left:-1px;margin-top:-5px}.odd .shape{width:30px;height:30px;margin:auto;background-color:#fff;border:5px solid #5153f8;text-align:center;transform:rotate(45deg);float:left}.odd .ans{border-left:5px solid #fc427b}.schedulebox{width:100vw;overflow:hidden;position:relative}.schedulebox__heading{cursor:pointer;display:inline-block;position:relative;left:50%;top:5rem;transform:translate(-50%,-50%)}.schedulebox__heading--text{padding:.5rem 0;text-align:center}.schedulebox__heading--overline{width:10rem;margin:0 auto;background-color:var(--color-primary);height:.5rem;border-radius:.5rem}.schedulebox .scheduleholder{width:70%;margin:0 auto 5rem;overflow:hidden}.schedulebox .scheduleholder--days{width:43%;height:30rem;margin:2rem auto;padding:1.5rem 1.5rem 0;background-color:hsla(0,0%,100%,.5);min-width:280px;transition:all .25s ease-in-out}.schedulebox .scheduleholder .left{margin-left:2%;float:left}.schedulebox .scheduleholder .right{float:right;margin-right:2%}.schedulebox .scheduleholder .daynum{text-align:center;color:var(--color-black)}.schedulebox .scheduleholder .actualschedule{padding:1.2rem 0 1.2rem 1rem;color:var(--color-black);height:90%}.schedulebox .scheduleholder .timeline{position:relative;margin:0 auto;height:100%;float:left}.schedulebox .scheduleholder .timeline:after{content:"";position:absolute;float:left;width:2px;height:100%;background-color:#555;top:0;bottom:0}.schedulebox .scheduleholder .event{padding:.8rem 0 .8rem .5rem;margin-left:.6rem;position:relative;width:100%;font-size:1.2rem;text-align:left;float:left}.schedulebox .scheduleholder .event:before{content:"";position:absolute;width:1rem;height:1rem;padding:0;margin-top:0;left:-1.2rem;background-color:var(--color-white);border:.25rem solid var(--color-secondary);border-radius:50%;z-index:1;transform:translate(.15rem)}.schedulebox .scheduleholder .odde:before{border:.25rem solid var(--color-primary)}.schedulebox .scheduleholder .right .event{padding:1rem 0 1rem .5rem}@media only screen and (max-width:1148px){.schedulebox .scheduleholder .right .event{padding:.9rem 0 .9rem .5rem}}@media only screen and (max-width:1085px){.schedulebox .scheduleholder--days{width:48%}.schedulebox .scheduleholder .left{margin-left:0}.schedulebox .scheduleholder .right{margin-right:0}.schedulebox .scheduleholder .right .event{padding:1rem 0 1rem .5rem}}@media only screen and (max-width:1030px){.schedulebox .scheduleholder .right .event{padding:.89rem 0 .89rem .5rem}}@media only screen and (max-width:974px){.schedulebox .scheduleholder .right .event{padding:1rem 0 1rem .5rem}}@media only screen and (max-width:960px){.schedulebox .scheduleholder .right .event{padding:.89rem 0 .89rem .5rem}}@media only screen and (max-width:850px){.schedulebox .scheduleholder--days{height:31rem}.schedulebox .scheduleholder .right .event{padding:1rem 0 1rem .5rem}}@media only screen and (max-width:800px){.schedulebox .scheduleholder--days{position:relative;left:50%;transform:translate(-50%);width:75%;height:30rem;margin:2rem auto;padding:1.5rem;padding-bottom:0}.schedulebox .scheduleholder--days:hover{box-shadow:-.18rem .35rem .85rem -.2rem var(--color-black);transform:translate(-50%,-.8%)}.schedulebox .scheduleholder .right{float:left}.schedulebox .scheduleholder .right .event{padding:1rem 0 1rem .5rem}}@media only screen and (max-width:660px){.schedulebox .scheduleholder{width:100%}.schedulebox .scheduleholder--days{width:80%}}@media only screen and (max-width:540px){.schedulebox .scheduleholder--days{width:90%}}@media only screen and (max-width:420px){.schedulebox .scheduleholder--days{height:33rem}}@media only screen and (max-width:340px){.schedulebox .scheduleholder--days{height:35rem}}.head{height:100vh;width:100vw;background-size:cover}.head__nav{display:flex;justify-content:space-between;position:fixed;left:0;right:0;top:0;z-index:999;background:var(--color-white);box-shadow:0 1rem 3rem -.5rem rgba(0,0,0,.5)}.head__nav__elems{display:flex;justify-content:center;align-items:center}.head__nav__elems :last-child{margin-right:1rem}.head__nav__elems--name{padding:1rem;font-size:1.5rem;text-align:center;cursor:pointer}.head__nav__elems--name:hover{color:var(--color-white);background-color:var(--color-secondary);transition:all .3s linear}.head__content{display:grid;grid-template-columns:50% 50%;grid-template-rows:50% 50%;grid-template-areas:"title gallery" "button gallery"}.head__content--title{position:relative;grid-area:title}.head__content--title div{position:absolute;text-align:center;left:50%;bottom:1rem;transform:translate(-50%);font-size:2rem}.head__content--button{grid-area:button;position:relative}.head__content--button--main{display:inline-block;position:relative;left:50%;transform:translate(-50%);margin:1rem auto;padding:1rem 5rem;cursor:pointer;color:var(--color-white);font-size:2rem;background-color:var(--color-primary);border-radius:3rem;transition:all .5s ease-in-out}.head__content--button--main:hover{box-shadow:0 .5rem 1rem -.2rem rgba(0,0,0,.5);transform:translate(-50%,-.5rem)}.head__content--button--link{font-size:1.2rem;text-align:center}.head__content--gallery{grid-area:gallery;width:50vw;height:calc(100vh - 50px);position:relative}.head__content--gallery img{box-shadow:0 1.5rem 4rem rgba(0,0,0,.4);position:absolute;width:300px;transform:translate(-50%,-50%);transition:all .2s linear;outline-offset:2rem;filter:grayscale(100%)}.head__content--gallery img:first-child{top:50%;left:50%;transform:translate(-50%,calc(-50% + 10rem));z-index:2}.head__content--gallery img:first-child:hover{transform:translate(-50%,calc(-50% + 10rem)) scale(1.2)}.head__content--gallery img:nth-child(2){top:50%;left:50%;z-index:3;transform:translate(calc(-50% + 10rem),-50%)}.head__content--gallery img:nth-child(2):hover{transform:translate(calc(-50% + 10rem),-50%) scale(1.2)}.head__content--gallery img:nth-child(3){top:50%;left:50%;transform:translate(calc(-50% - 5rem),calc(-50% - 10rem));z-index:1}.head__content--gallery img:nth-child(3):hover{transform:translate(calc(-50% - 5rem),calc(-50% - 10rem)) scale(1.2)}.head__content--gallery img:hover{z-index:10;box-shadow:0 2.5rem 4rem rgba(0,0,0,.5);filter:none}@media screen and (max-device-width:650px){.head__nav{display:none}.head__content{grid-template-columns:1fr;grid-template-rows:1fr 2fr 1fr;grid-template-areas:"title" "gallery" "button"}.head__content--button,.head__content--title{height:25vh}.head__content--gallery{height:50vh;width:100vw}.head__content--gallery img{max-width:150px}}.about{width:100%;background-size:cover;background-attachment:fixed;color:var(--color-white);overflow-x:hidden;border:.5rem solid var(--color-black)}.about__content{max-width:75rem;padding-top:3rem;margin:0 auto;text-align:center;font-size:1.5rem}.about__pics{padding:4rem;display:flex;align-content:center;justify-content:center}.about__pics__card{margin:1rem}.about__pics__card img{height:75px;width:auto}.about__pics__title{text-align:center;font-size:1.2rem}@media screen and (max-device-width:650px){.about__content{max-width:300px;padding-top:0}.about__pics{padding:2rem}.about__pics__card img{height:40px}.about__pics__title{font-size:1rem}}.pasthackathon{width:100vw;height:50vh;background-size:cover;border:.5rem solid var(--color-black);background-attachment:fixed;position:relative}.pasthackathon__button{display:inline-block;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);padding:1rem 5rem;cursor:pointer;color:var(--color-white);font-size:2rem;background-color:var(--color-primary);border-radius:3rem;transition:all .5s ease-in-out}.pasthackathon__button:hover{box-shadow:0 .5rem 1rem -.2rem rgba(0,0,0,.5);transform:translate(-50%,calc(-50% - .5rem))}@media screen and (max-device-width:650px){.pasthackathon__button{font-size:1rem}}.backanimation{z-index:-1;position:fixed}.backanimation__rectangle--1{top:30%;left:30%;width:100px;height:100px}.backanimation__rectangle--1,.backanimation__rectangle--2{border:1rem solid var(--color-primary);animation:animate1 5s cubic-bezier(0,1.2,0,1.24) infinite}.backanimation__rectangle--2{top:50%;left:42.5%;width:30px;height:30px}.backanimation__rectangle--3{top:20%;width:20px;height:20px}.backanimation__rectangle--3,.backanimation__rectangle--4{left:60%;border:1rem solid var(--color-primary);animation:animate1 5s cubic-bezier(0,1.2,0,1.24) infinite}.backanimation__rectangle--4{top:45%;width:30px;height:30px}.backanimation__circle--1{left:30%;width:20px;height:20px;border-radius:50%;border:1rem solid var(--color-secondary-light)}.backanimation__circle--1,.backanimation__circle--2{top:50%;animation:animate2 5s cubic-bezier(0,1.24,0,1.24) infinite}.backanimation__circle--2{left:50%;width:75px;height:75px;border-radius:50%;border:1rem solid var(--color-tertiary)}.backanimation__circle--3{left:25%}.backanimation__circle--3,.backanimation__circle--4{top:60%;width:30px;height:30px;border-radius:50%;border:1rem solid var(--color-tertiary);animation:animate2 5s cubic-bezier(0,1.24,0,1.24) infinite}.backanimation__circle--4{left:70%}@keyframes animate1{0%{border-color:var(--color-primary);border-radius:0}35%{border-color:var(--color-secondary)}50%{border-radius:50%}70%{border-color:var(--color-primary)}to{border-color:var(--color-primary);border-radius:0}}@keyframes animate2{0%{border-color:var(--color-primary-dark);border-radius:50%}35%{border-color:var(--color-secondary-light)}50%{border-radius:0}70%{border-color:var(--color-primary-dark)}to{border-color:var(--color-primary-dark);border-radius:50%}}',""])},function(e,t,r){var o=r(3);"string"==typeof o&&(o=[[e.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(1)(o,n);o.locals&&(e.exports=o.locals)},function(e,t,r){"use strict";r.r(t);r(4)}]);