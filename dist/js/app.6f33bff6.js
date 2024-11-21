(function(){"use strict";var e={3959:function(e,t,a){var n={};a.r(n);var s=a(6369),r=function(){var e=this,t=e._self._c;return t("v-app",[t("v-main",[t("router-view")],1)],1)},i=[],o={name:"App",setup(e,{ssrContext:t}){return{}}},u=o,c=a(1001),l=(0,c.Z)(u,r,i,!1,null,null,null),m=l.exports,d=a(315),h=a(3556);class p{constructor(){this.auth=new n["default"]}}const v=new p;var f=v;s["default"].use(h.og);const _=(0,h.WB)();_.use((({store:e})=>{e.$api=f}));var g=_,y=a(707),b=a.n(y),C=(a(8556),a(1852));s["default"].use(b());var w=new(b())({lang:{locales:{ru:C.Z},current:"ru"},theme:{themes:{light:{primary:"#FF962B",secondary:"#9D9393",accent:"#58B874",error:"#FFD5D5"}}}});s["default"].config.productionTip=!1,s["default"].prototype.$api=f,s["default"].use(f),s["default"].use(g),new s["default"]({router:d.Z,pinia:g,vuetify:w,render:e=>e(m)}).$mount("#app")},315:function(e,t,a){a.d(t,{Z:function(){return H}});var n=a(6369),s=a(2631),r=a(5433),i=function(){var e=this,t=e._self._c;return t("main-frame")},o=[],u=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"inspire","min-height":"100"}},[t("system-bar"),t("sidebar-left"),t("chat-frame"),t("sidebar-right")],1)},c=[],l=function(){var e=this,t=e._self._c;return t("v-system-bar",{attrs:{app:""}},[t("v-spacer"),t("span",{staticClass:"mr-4"},[e._v("Online")])],1)},m=[],d=a(1001),h={},p=(0,d.Z)(h,l,m,!1,null,null,null),v=p.exports,f=function(){var e=this,t=e._self._c;return t("v-navigation-drawer",{attrs:{app:"",permanent:""},scopedSlots:e._u([{key:"append",fn:function(){return[t("div",{staticClass:"px-3 mb-12"},[t("v-btn",{attrs:{color:"primary",block:""}},[e._v(" Взять чат ")])],1)]},proxy:!0}])},[t("v-list",[t("v-list-item",{staticClass:"d-flex between align-center"},[t("v-list-item-avatar",[t("v-img",{attrs:{src:"https://randomuser.me/api/portraits/women/24.jpg"}})],1)],1),t("v-list-item",{attrs:{link:""}},[t("v-list-item-content",[t("v-list-item-title",{staticClass:"text-h6"},[e._v(" Алиса Зазеркальевна ")]),t("v-list-item-subtitle",[e._v(" Отдел комфорта ")])],1)],1)],1),t("v-divider"),t("div",{staticClass:"px-3 py-6"},[t("v-btn",{attrs:{color:"secondary",block:""}},[e._v(" Архив чатов ")])],1),t("v-divider"),t("v-list",e._l(e.contactsList,(function(a){return t("v-list-item",{key:a.id,staticClass:"d-flex between align-center",class:{"active-chat":a.id===e.currentContact.id},on:{click:function(t){return e.chooseContact(a.id)}}},[t("v-avatar",{staticClass:"d-block mr-4 my-4",attrs:{color:"grey darken-1",size:"36"}},[t("v-img",{attrs:{src:`https://randomuser.me/api/portraits/women/${a.avatar}.jpg`}})],1),t("v-list-item-content",[t("v-list-item-title",[e._v(e._s(a.name))])],1)],1)})),1)],1)},_=[],g=a(3556);const y=(0,g.Q_)("chat",{state:()=>({messages:b,contacts:C,currentContact:null}),actions:{resetState(){this.messages=[],this.contacts=[]},addNewMessage(e){this.messages.push(e)},addContact(e){this.contacts.push(e)},chooseContact(e){this.currentContact=this.contacts.find((t=>t.id===e))}}}),b=[{message_value:"Приветствую, у меня возникилки проблемы с заказом",message_time:"12:47",author_id:"555555",author_name:"Нина Вуильямс"},{message_value:"И лагает личный кабинет",message_time:"12:48",author_id:"555555",author_name:"Нина Вуильямс"},{message_value:"Здравствуйте, все меры оперативно приняты",message_time:"12:50",author_id:"888888",author_name:"Анна Леонхарт"},{message_value:"Всё починилось, спасибо!",message_time:"12:58",author_id:"555555",author_name:"Нина Вуильямс"},{message_value:"Приветствую, у меня возникилки проблемы с заказом",message_time:"12:56",author_id:"555555",author_name:"Нина Вуильямс"},{message_value:"И лагает личный кабинет",message_time:"12:49",author_id:"555555",author_name:"Нина Вуильямс"},{message_value:"Здравствуйте, все меры оперативно приняты",message_time:"12:51",author_id:"888888",author_name:"Анна Леонхарт"},{message_value:"Всё починилось, спасибо!",message_time:"12:53",author_id:"555555",author_name:"Нина Вуильямс"},{message_value:"Приветствую, у меня возникилки проблемы с заказом",message_time:"12:57",author_id:"555555",author_name:"Нина Вуильямс"},{message_value:"И лагает личный кабинет",message_time:"12:42",author_id:"555555",author_name:"Нина Вуильямс"},{message_value:"Здравствуйте, все меры оперативно приняты",message_time:"12:52",author_id:"888888",author_name:"Анна Леонхарт"},{message_value:"Всё починилось, спасибо!",message_time:"12:55",author_id:"555555",author_name:"Нина Вуильямс"},{message_value:"Приветствую, у меня возникилки проблемы с заказом",message_time:"12:41",author_id:"555555",author_name:"Нина Вуильямс"},{message_value:"И лагает личный кабинет",message_time:"12:43",author_id:"555555",author_name:"Нина Вуильямс"},{message_value:"Здравствуйте, все меры оперативно приняты",message_time:"12:54",author_id:"888888",author_name:"Анна Леонхарт"},{message_value:"Всё починилось, спасибо!",message_time:"12:59",author_id:"555555",author_name:"Нина Вуильямс"}],C=[{id:"1111",avatar:"10",name:"Елена К",infoDepature:["Заказ номер №435435","Время начала 16:00","Время завершения 18:13","Генеральная уборка"],infoClient:{fullName:"Елена Мортис Рикимарновна",address:"ул. Ленина 40 кв. 107",dateOfReg:"13.08.2020"},lastOperators:[]},{id:"2222",avatar:"11",name:"Олег М",infoDepature:["Заказ номер №267675","Время начала 16:00","Время завершения 18:13","Глажка, Химчистка, Стирка"],infoClient:{fullName:"Елена Мортис Рикимарновна",address:"ул. Ленина 40 кв. 107",dateOfReg:"15.08.2020"},lastOperators:[]},{id:"3333",avatar:"12",name:"Катя С",infoDepature:["Заказ номер №454532","Время начала 16:00","Время завершения 18:13","Поддерживающая уборка"],infoClient:{fullName:"Елена Мортис Рикимарновна",address:"ул. Ленина 40 кв. 107",dateOfReg:"19.08.2020"},lastOperators:[]},{id:"4444",avatar:"13",name:"Петр Д",infoDepature:["Заказ номер №2989898","Время начала 16:00","Время завершения 18:13","Генеральная уборка"],infoClient:{fullName:"Елена Мортис Рикимарновна",address:"ул. Ленина 40 кв. 107",dateOfReg:"21.08.2020"},lastOperators:[]}];var w={setup(){const e=y(),t=(0,n.computed)((()=>e.contacts)),a=(0,n.computed)((()=>e.currentContact)),s=t=>{e.chooseContact(t)};return(0,n.onMounted)((()=>{const e=t.value[0];e&&s(e.id)})),{contactsList:t,currentContact:a,chooseContact:s}}},k=w,x=(0,d.Z)(k,f,_,!1,null,null,null),O=x.exports,D=function(){var e=this,t=e._self._c;return t("v-navigation-drawer",{staticClass:"chat-frame",attrs:{permanent:"",absolute:"",width:"100%"}},[t("v-container",{staticClass:"pa-0"},[t("v-col",{staticClass:"chat-frame__list border px-3"},e._l(e.messagesList,(function(a){return t("v-row",{key:a.message_time,attrs:{"no-gutters":""}},[e.checkAuthorMessage(a.author_id)?[t("v-spacer"),t("v-card",{staticClass:"mt-4",attrs:{color:"orange"}},[t("v-list-item",[t("v-list-item-content",[t("div",{staticClass:"mb-2"},[e._v(" "+e._s(a.message_value)+" ")]),t("v-list-item-subtitle",{staticClass:"text-right"},[e._v(" "+e._s(a.message_time)+" ")])],1)],1)],1)]:[t("v-card",{staticClass:"mt-4"},[t("v-list-item",[t("v-list-item-content",[t("div",{staticClass:"mb-2"},[e._v(" "+e._s(a.message_value)+" ")]),t("v-list-item-subtitle",{staticClass:"text-right"},[e._v(" "+e._s(a.message_time)+" ")])],1)],1)],1)]],2)})),1),t("div",{staticClass:"chat-frame__message-bar pa-3 pb-7"},[t("v-text-field",{attrs:{"append-outer-icon":"mdi-send","clear-icon":"mdi-close-circle",filled:"",clearable:"","hide-details":"",label:"Сообщение",type:"text"},on:{"click:append-outer":function(t){return e.sendMessage(e.message)},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendMessage(e.message)}},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1)],1)],1)},M=[],A={setup(){const e=y(),t=(0,r.t)(),a=(0,n.ref)(""),s=(0,n.computed)((()=>e.messages)),i=(0,n.computed)((()=>t.userId)),o=e=>e===i.value,u=n=>{if(""===n||null===n||n.length>256)return null;e.addNewMessage({message_value:n,message_time:(new Date).toTimeString(),author_id:i.value,author_name:t.userName}),a.value=""};return(0,n.onMounted)((()=>{})),{message:a,messagesList:s,userId:i,sendMessage:u,checkAuthorMessage:o}}},j=A,I=(0,d.Z)(j,D,M,!1,null,null,null),N=I.exports,Z=function(){var e=this,t=e._self._c;return t("v-navigation-drawer",{attrs:{app:"",right:"",permanent:"",width:"324"}},[e.currentContact?t("v-expansion-panels",{staticClass:"pa-4",attrs:{multiple:""}},[t("v-expansion-panel",{staticClass:"my-4"},[t("v-expansion-panel-header",[t("h3",[e._v("Информация по выезду")])]),e._l(e.currentContact.infoDepature,(function(a){return t("v-expansion-panel-content",{key:a},[e._v(" "+e._s(a)+" ")])}))],2),t("v-expansion-panel",{staticClass:"my-4"},[t("v-expansion-panel-header",[t("h3",[e._v("Информация о клиенте")])]),e._l(e.currentContact.infoClient,(function(a){return t("v-expansion-panel-content",{key:a},[e._v(" "+e._s(a)+" ")])}))],2),t("v-expansion-panel",{staticClass:"my-4"},[t("v-expansion-panel-header",[t("h3",[e._v("Предыдущие операторы")])]),e._l(5,(function(a){return t("v-expansion-panel-content",{key:a},[e._v(" Оператор №"+e._s(a)+" ")])}))],2)],1):e._e()],1)},S=[],E={setup(){const e=y(),t=(0,n.computed)((()=>e.currentContact));return{currentContact:t}}},F=E,T=(0,d.Z)(F,Z,S,!1,null,null,null),L=T.exports,$={name:"MainFrame",components:{SystemBar:v,SidebarLeft:O,ChatFrame:N,SidebarRight:L}},B=$,P=(0,d.Z)(B,u,c,!1,null,null,null),z=P.exports,R={name:"MainView",components:{MainFrame:z}},Q=R,q=(0,d.Z)(Q,i,o,!1,null,null,null),G=q.exports;n["default"].use(s.Z);const V=[{path:"/",name:"Main",component:G},{path:"/auth",name:"Authorization",component:()=>a.e(90).then(a.bind(a,9305))},{path:"/about",name:"About",component:()=>a.e(443).then(a.bind(a,5399))}],W=new s.Z({mode:"history",base:"/",routes:V});W.beforeEach((async(e,t,a)=>{const n=(0,r.t)(),s=await n.authCheck();"Authorization"===e.name||s?a():a({name:"Authorization"})}));var H=W},5433:function(e,t,a){a.d(t,{t:function(){return s}});a(1703);var n=a(3556);const s=(0,n.Q_)("auth",{state:()=>({userData:{phone:"",employeeId:null},cookieNames:["A","B","session_uid_dom_dev","status","u_uuid"]}),getters:{isAuthenticated:e=>!!e.userData.employeeId&&e.userData.access,userName:()=>"Анна Леонхарт",userId:()=>"888888"},actions:{async authGetCode(e){try{const t=await this.$api.auth.getCode({phone:e});if(t.result||t.timeout)return this.userData.phone=e,t.timeout;throw new Error({text:"неизвестная ошибка"})}catch(t){}},async authLogin(e){try{const{employeeId:t}=await this.$api.auth.login(e);if(t)return this.userData.employeeId=t,await this.authCheck()}catch(t){}},async authCheck(){try{const{employeeId:e,clientId:t}=await this.$api.auth.getAuthData();return this.userData.employeeId=e,this.userData.clientId=t,e}catch(e){return this.userData.employeeId=null,!1}},async logout(){return await this.$api.auth.logout(),await this.authCheck}}})}},t={};function a(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,s,r){if(!n){var i=1/0;for(l=0;l<e.length;l++){n=e[l][0],s=e[l][1],r=e[l][2];for(var o=!0,u=0;u<n.length;u++)(!1&r||i>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[u])}))?n.splice(u--,1):(o=!1,r<i&&(i=r));if(o){e.splice(l--,1);var c=s();void 0!==c&&(t=c)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[n,s,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+{90:"Authorization",443:"about"}[e]+"."+{90:"c69c3112",443:"8f6dcafc"}[e]+".js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="chat-admin:";a.l=function(n,s,r,i){if(e[n])e[n].push(s);else{var o,u;if(void 0!==r)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var m=c[l];if(m.getAttribute("src")==n||m.getAttribute("data-webpack")==t+r){o=m;break}}o||(u=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",t+r),o.src=n),e[n]=[s];var d=function(t,a){o.onerror=o.onload=null,clearTimeout(h);var s=e[n];if(delete e[n],o.parentNode&&o.parentNode.removeChild(o),s&&s.forEach((function(e){return e(a)})),t)return t(a)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),u&&document.head.appendChild(o)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={143:0};a.f.j=function(t,n){var s=a.o(e,t)?e[t]:void 0;if(0!==s)if(s)n.push(s[2]);else{var r=new Promise((function(a,n){s=e[t]=[a,n]}));n.push(s[2]=r);var i=a.p+a.u(t),o=new Error,u=function(n){if(a.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",o.name="ChunkLoadError",o.type=r,o.request=i,s[1](o)}};a.l(i,u,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,r,i=n[0],o=n[1],u=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(s in o)a.o(o,s)&&(a.m[s]=o[s]);if(u)var l=u(a)}for(t&&t(n);c<i.length;c++)r=i[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(l)},n=self["webpackChunkchat_admin"]=self["webpackChunkchat_admin"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(3959)}));n=a.O(n)})();
//# sourceMappingURL=app.6f33bff6.js.map