(()=>{"use strict";var t={67:(t,n,e)=>{e.d(n,{A:()=>a});var i=e(601),s=e.n(i),o=e(314),r=e.n(o)()(s());r.push([t.id,"* {\n\tfont-family: 'Inter', sans-serif;\n}\n.container {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.logo img {\n\twidth: 100px;\n\theight: auto;\n}\n\n.search {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.search input[type='search'] {\n\tborder: 1px solid #ccc;\n\tborder-radius: 3px;\n\tpadding: 5px;\n\tmargin-right: 10px;\n}\n\n.home,\n.profile {\n\tcursor: pointer;\n}\n\n.homeContainer,\n.profileContainer {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.home img,\n.profile img {\n\twidth: 25px;\n\theight: auto;\n}\n\n.searchIcon,\n.homeIcon,\n.profileImg {\n\twidth: 20px;\n\theight: auto;\n\tmargin-left: 10px;\n}\n",""]);const a=r},195:(t,n,e)=>{e.d(n,{A:()=>a});var i=e(601),s=e.n(i),o=e(314),r=e.n(o)()(s());r.push([t.id,"* {\n\tfont-family: 'Inter', sans-serif;\n}\n\n.container {\n\tdisplay: flex;\n\talign-items: center;\n\twidth: 50%;\n\tborder-radius: 20px;\n\tbackground: #2f60e9;\n\tmargin: 1%;\n\tpadding: 2rem;\n}\n.img-post {\n\twidth: 100%;\n\tmax-width: 400px;\n\theight: auto;\n\tborder-radius: 8px;\n\tmargin-bottom: 1rem;\n}\n\n.icon-container {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin-bottom: 1rem;\n}\n\n.icon-container img {\n\twidth: 30px;\n\theight: 30px;\n\tmargin-right: 10px;\n}\n\n.likes-count {\n\tfont-size: 1.2rem;\n\tmargin-bottom: 1rem;\n}\n\n.username {\n\tfont-weight: bold;\n\tmargin-bottom: 0.5rem;\n}\n\n.description {\n\tfont-style: italic;\n}\n",""]);const a=r},83:(t,n,e)=>{e.d(n,{A:()=>a});var i=e(601),s=e.n(i),o=e(314),r=e.n(o)()(s());r.push([t.id,"",""]);const a=r},647:(t,n,e)=>{e.d(n,{A:()=>a});var i=e(601),s=e.n(i),o=e(314),r=e.n(o)()(s());r.push([t.id,"* {\n\tpadding: 0;\n\tmargin: 0;\n}\nbody {\n\tbackground: #181818;\n}\n.container {\n\tdisplay: grid;\n\tgrid-template-columns: 60% 40% 0 0;\n}\n.container-post {\n\tpadding-left: 0;\n\tmargin-right: 0;\n}\n.container-tweet {\n\tpadding-left: 0;\n\tmargin-right: 0;\n}\n",""]);const a=r},314:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",i=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),i&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),i&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,i,s,o){"string"==typeof t&&(t=[[null,t,void 0]]);var r={};if(i)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(r[c]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);i&&r[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),s&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=s):l[4]="".concat(s)),n.push(l))}},n}},601:t=>{t.exports=function(t){return t[1]}}},n={};function e(i){var s=n[i];if(void 0!==s)return s.exports;var o=n[i]={id:i,exports:{}};return t[i](o,o.exports,e),o.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var i=n.getElementsByTagName("script");if(i.length)for(var s=i.length-1;s>-1&&(!t||!/^http(s?):/.test(t));)t=i[s--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),(()=>{var t,n=e(647),i=e(195);!function(t){t.image="image",t.isliked="isliked",t.issaved="issaved",t.likescount="likescount",t.username="username",t.description="description"}(t||(t={}));class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({image:null,isliked:null,issaved:null,likescount:null,username:null,description:null})}attributeChangedCallback(t,n,e){this[t]=e,this.render()}connectedCallback(){this.render()}render(){if(this.shadowRoot){this.shadowRoot.innerHTML="";const t=this.ownerDocument.createElement("style");t.textContent="\n\n\t\t\t.container {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\talign-items: center;\n\t\t\t\twidth: 35rem;\n\t\t\t\theight: 35rem;\n\t\t\t\tborder-radius: 1.5rem;\n\t\t\t\tbackground: #2f60e9;\n\t\t}\n\n\t\t.imgContainer {\n\t\t\twidth: 90%;\n\t\t\theight: 85%;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\toverflow: hidden;\n\t\t\tborder-radius:.5rem;\n\t\t\tpadding-block:1rem;\n\t\t}\n\n\t\t.img {\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tobject-fit: cover;\n\t\t\tborder-radius: 1rem;\n\t\t}\n\n\t\t.userContent{\n\t\t\twidth: 100%;\n\t\t\theight: 15%;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\talign-items: flex-start;\n\t\t\tpadding-top:2rem;\n\t\t}\n\n\t\t.iconContainer {\n\t\t\theight: 30%;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: flex-start;\n\t\t}\n\n\t\t.icon{\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tpadding-left:.4rem;\n\t\t\tmargin-top:-1.5rem;\n\t\t}\n\n\t\t.likes{\n\t\t\tcolor: #CBF900;\n\t\t\tfont-family: Inter;\n\t\t\tfont-size: 1rem;\n\t\t\tfont-style: normal;\n\t\t\tfont-weight: 600;\n\t\t\tpadding-left:.4rem;\n\t\t\tmargin-top:-1rem;\n\t\t}\n\n\t\t.likes, .username, .description{\n\t\t\ttext-align: left;\n\t\t}\n\n\t\t.username {\n\t\t\tcolor: #FFF;\n\t\t\tfont-family: Inter;\n\t\t\tfont-size: 1.2rem;\n\t\t\tfont-style: normal;\n\t\t\tfont-weight: 700;\n\t\t\tpadding-left:.5rem;\n\t\t\tmargin-top:-.5rem;\n\t\t}\n\n\t\t.description {\n\t\t\tcolor: #FFF;\n\t\t\tfont-family: Inter;\n\t\t\tfont-size: 1.2rem;\n\t\t\tfont-style: normal;\n\t\t\tfont-weight: 400;\n\t\t}\n\n    ",this.shadowRoot.appendChild(t),this.shadowRoot.innerHTML+=`\n\t\t\t\t\t\t <style> ${i.A}</style>\n\n            <section class="container">\n\t\t\t\t\t\t <div class="imgContainer">\n\t\t\t\t\t\t   <img class= "img" src="${this.image}" alt="Post image">\n\t\t\t\t\t\t </div>\n\t\t\t\t\t\t <div class="userContent">\n\t\t\t\t\t\t   <div class="iconContainer">\n\t\t\t\t\t\t\t   <img class= "icon" src="${this.isliked}" alt="Like icon">\n\t\t\t\t\t\t\t   <img class= "icon" src="${this.issaved}" alt="Save icon">\n\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t   <p class= "likes">${this.likescount} likes</p>\n\t\t\t\t\t\t\t <p\n\t\t\t\t\t\t\t   <span class= "username" >${this.username} </span>: <span class= "description"> ${this.description}</span>\n\t\t\t\t\t\t\t </p>\n\n\t\t\t\t\t\t </div>\n            </section>\n        `}}}customElements.define("post-image",s);var o,r=e(83);!function(t){t.image="image",t.description="description",t.username="username"}(o||(o={}));class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({image:null,description:null,username:null})}attributeChangedCallback(t,n,e){this[t]=e,this.render()}connectedCallback(){this.render()}render(){if(this.shadowRoot){this.shadowRoot.innerHTML="";const t=this.ownerDocument.createElement("style");t.textContent="\n\n\t\t\t.container {\n\t\t\t\twidth: 30rem;\n\t\t\t\theight: 12rem;\n\t\t\t\tborder-radius: 1.5rem;\n\t\t\t\tbackground: linear-gradient(0deg, #CBF900 0%, #CBF900 100%), linear-gradient(0deg, #CBF900 0%, #CBF900 100%), #CBF900;\n\t\t\t\tmargin:2%\n\n\t\t}\n\n\t\t.tweetandimg{\n\t\t\theight: 40%;\n\t\t\tpadding-block: 2rem;\n\t\t\tpadding-inline: 3rem;\n\t\t\tdisplay:flex;\n\t\t\talign-items:center;\n\t\t\tflex-direction:row;\n\n\t\t}\n\t\t.tweet{\n\t\t\twidth:80%;\n\t\t\thight\n\t\t}\n\t\t.description{\n\t\t\tcolor: #000;\n\t\t\tfont-family: Inter;\n\t\t\tfont-size: 1.5rem;\n\t\t\tfont-style: normal;\n\t\t\tfont-weight: 500;\n\t\t}\n\t\t.img{\n\t\t\twidth:20%;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\tbox-sizing: content-box;\n\t\t}\n\n\t\t.img-container {\n\t\t\twidth: 4.03388rem;\n\t\t\theight: 4.45694rem;\n\t\t\tborder-radius: 50%;\n\t\t\toverflow: hidden;\n\n\t\t}\n\t\t.img-post {\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tobject-fit: cover;\n\t\t}\n\n\n\t\t.infoUser{\n\t\t\theight: 30%;\n\t\t\tborder-radius: 0rem 0rem 1.5rem 1.5rem;\n\t\t\tbackground: linear-gradient(0deg, rgba(47, 96, 233, 0.20) 0%, rgba(47, 96, 233, 0.20) 100%), linear-gradient(0deg, #CBF900 0%, #CBF900 100%), #CBF900;\n\t\t\tdisplay: flex;\n\t\t\talign-items: flex-end;\n\t\t\tbox-sizing: border-box;\n\t\t\talign-items:center;\n\t\t\tpadding-inline:2rem;\n\t\t}\n\t\t.username{\n\t\t\tcolor: #181818;\n\t\t\tfont-family: Inter;\n\t\t\tfont-size: 1rem;\n\t\t\tfont-style: normal;\n\t\t\tfont-weight: 600;\n\t\t}\n\n\n    ",this.shadowRoot.appendChild(t),this.shadowRoot.innerHTML+=`\n\t\t\t\t\t\t <style> ${r.A}</style>\n\n      <section class="container">\n\t\t\t\t<div class="tweetandimg">\n\t\t\t\t  <div class=tweet>\n\t\t\t\t\t <p class= "description"> ${this.description} </p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="img">\n\t\t\t\t\t <div class= "img-container">\n\t\t\t\t\t   <img class= "img-post" src="${this.image}" alt="Post image">\n\t\t\t\t   </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class='infoUser'>\n\t\t\t\t <p class= "username"> ${this.username} </p>\n\t\t\t\t</div>\n\t\t\t</section>\n\n        `}}}customElements.define("post-tweet",a);var c=e(67);class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML+="",this.ownerDocument.createElement("style").textContent="\n\n    .container {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n\n    .logo img {\n      width: 100px;\n      height: auto;\n    }\n\n    .search {\n      display: flex;\n      align-items: center;\n    }\n\n    .search input[type='search'] {\n      border: 1px solid #ccc;\n      border-radius: 3px;\n      padding: 5px;\n      margin-right: 10px;\n    }\n\n    .home,\n    .profile {\n      cursor: pointer;\n    }\n\n    .homeContainer,\n    .profileContainer {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .home img,\n    .profile img {\n      width: 25px;\n      height: auto;\n    }\n\n    .searchIcon,\n    .homeIcon,\n    .profileImg {\n      width: 20px;\n      height: auto;\n      margin-left: 10px;\n    }\n\n      ",this.shadowRoot.innerHTML+=`\n\t\t\t\t\t\t <style> ${c.A}</style>\n\n            <section class="container">\n\t\t\t\t\t\t <div class="logo">\n               <img class= "logo" src="../../assets/F&L.png" alt="Post image">\n             </div>\n             <div class="search">\n               <input type="search" placeholder="Search"/> <img class= "searchIcon" src="../../assets/search.png" alt="searchIcon">\n             </div>\n             <div class="home">\n               <div class="homeContainer">\n                 <img class= "homeIcon" src="../../assets/home.png" alt="home">\n               </div>\n             </div>\n               <div class="profile">\n                <div class="profileContainer">\n                 <img class= "profileImg" src="../../assets/profileImg.png" alt="Profile">\n                </div>\n               </div>\n            </section>\n        `)}}customElements.define("nav-component",d);const l=e.p+"10145f3ff0543ece7b1dd580b7a47d14.png",m=e.p+"d5af511b1c82faddaa1ac8508465e54d.png",h=[{image:"https://images.pexels.com/photos/11000413/pexels-photo-11000413.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",isLiked:l,isSaved:m,likesCount:"950",username:"@guti_santi",description:"Ready for the next marathons"},{image:"https://i.pinimg.com/564x/8d/e2/53/8de253777f0974e37f142cadb822593b.jpg",isLiked:l,isSaved:m,likesCount:"590",username:"@alejah__",description:"Exercise: self-love in motion"},{image:"https://i.pinimg.com/564x/73/b2/cb/73b2cb44bafd88ef28423d8ecdf629f0.jpg",isLiked:l,isSaved:m,likesCount:"1300",username:"@ana_hillton",description:"energy for the day"},{image:"https://i.pinimg.com/564x/81/1d/ec/811dec8d7c02e6abfba458ece184d376.jpg",isLiked:l,isSaved:m,likesCount:"480",username:"@juanesv08",description:"Mastering the ropes"}],p=[{image:"https://images.pexels.com/photos/11000413/pexels-photo-11000413.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",description:"Ready for the next marathons",username:"@guti_santi"},{image:"https://i.pinimg.com/564x/8d/e2/53/8de253777f0974e37f142cadb822593b.jpg",description:"Exercise: self-love in motion",username:"@alejah__"},{image:"https://i.pinimg.com/564x/73/b2/cb/73b2cb44bafd88ef28423d8ecdf629f0.jpg",description:"energy for the day",username:"@ana_hillton"},{image:"https://i.pinimg.com/564x/81/1d/ec/811dec8d7c02e6abfba458ece184d376.jpg",description:"Mastering the ropes",username:"@juanesv08"}];class g extends HTMLElement{constructor(){super(),this.NavList=[],this.PostImageList=[],this.PostTweetList=[],this.attachShadow({mode:"open"}),h.forEach((n=>{const e=this.ownerDocument.createElement("post-image");e.setAttribute(t.image,n.image),e.setAttribute(t.isliked,n.isLiked),e.setAttribute(t.issaved,n.isSaved),e.setAttribute(t.likescount,n.likesCount),e.setAttribute(t.username,n.username),e.setAttribute(t.description,n.description),this.PostImageList.push(e),console.log("list",this.PostImageList)})),p.forEach((t=>{const n=this.ownerDocument.createElement("post-tweet");n.setAttribute(o.image,t.image),n.setAttribute(o.description,t.description),n.setAttribute(o.username,t.username),this.PostTweetList.push(n),console.log("list",this.PostTweetList)}))}connectedCallback(){this.render()}render(){var t,e;this.shadowRoot&&(this.shadowRoot.innerHTML+=`\n            <style>${n.A}\n\t\t\t</style>\n        `);const i=this.ownerDocument.createElement("section");i.className="nav",this.NavList.forEach((t=>{i.appendChild(t)}));const s=this.ownerDocument.createElement("section");s.className="container";const o=this.ownerDocument.createElement("div");o.className="container-post",this.PostImageList.forEach((t=>{o.appendChild(t)})),s.appendChild(o);const r=this.ownerDocument.createElement("div");r.className="container-tweet",this.PostTweetList.forEach((t=>{r.appendChild(t)})),s.appendChild(r),null===(t=this.shadowRoot)||void 0===t||t.appendChild(s),null===(e=this.shadowRoot)||void 0===e||e.appendChild(i)}}customElements.define("app-container",g)})()})();