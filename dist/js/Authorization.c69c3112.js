(self["webpackChunkchat_admin"]=self["webpackChunkchat_admin"]||[]).push([[90],{9305:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var r=function(){var e=this,t=e._self._c;return t("v-container",{attrs:{fluid:"","fill-height":""}},[t("v-row",{attrs:{align:"center",justify:"center"}},[t("v-col",{attrs:{xs:"12",sm:"12",md:"6",lg:"4"}},[t("v-card",{attrs:{elevation:"1"}},[t("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[t("v-toolbar-title",[e._v("Авторизация")])],1),e.codeSent?t("auth-code",{staticClass:"authorization__form",attrs:{timer:e.timer},on:{back:e.back,submit:e.formGetPhoneSubmit}}):t("auth-phone",{on:{submit:e.formGetPhoneSubmit}})],1)],1)],1)],1)},a=[],o=function(){var e=this,t=e._self._c;return t("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.getCode.apply(null,arguments)}}},[t("v-card-text",[t("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:e.mask,expression:"mask"}],attrs:{autofocus:"",outlined:"",label:"Введите номер телефона","error-messages":e.codeErrorCodes,loading:e.codeLoading},on:{input:e.handleInput},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{color:"primary"},on:{click:e.getCode}},[e._v(" Получить код ")])],1)],1)},s=[],u=n(9414),i=n(5433),c=n(6369),l={name:"AuthPhone",emits:["submit"],directives:{mask:u.mask},setup(e,{emit:t}){const n=(0,i.t)(),r=(0,c.ref)([]),a=(0,c.ref)(!1),o=(0,c.ref)("+7 (###) ###-##-##"),s=(0,c.ref)(""),u=()=>{r.value=[]},l=async()=>{if(r.value=[],a.value)return null;a.value=!0;try{const e=await n.authGetCode(s.value);t("submit",e)}catch(e){r.value.push(e&&e.text)}a.value=!1};return{authStore:n,codeErrorCodes:r,codeLoading:a,mask:o,phone:s,handleInput:u,getCode:l}}},f=l,d=n(1001),v=(0,d.Z)(f,o,s,!1,null,null,null),m=v.exports,p=function(){var e=this,t=e._self._c;return t("v-form",[t("v-card-text",[t("p",[e._v(" Мы отправили код на номер "),t("span",{staticClass:"text-no-wrap"},[e._v(e._s(e.userData.phone))])]),t("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:e.mask,expression:"mask"}],attrs:{autofocus:"",outlined:"",autocomplete:"off",label:"Введите SMS-код","error-messages":e.codeErrorCodes,loading:e.loading},on:{input:e.handleInput},model:{value:e.smscode,callback:function(t){e.smscode=t},expression:"smscode"}})],1),t("v-card-actions",[t("v-btn",{attrs:{text:"",small:""},on:{click:function(t){return e.$emit("back")}}},[e._v(" Изменить номер ")]),t("v-spacer"),e.showButton?t("v-btn",{attrs:{small:"",color:"primary",disabled:e.timer>0},on:{click:e.getCode}},[e.loading?[e._v(" Отправка... ")]:[e._v(" Запросить код повторно "),e.timer?[e._v(" "+e._s(e.timer)+" ")]:e._e()]],2):e._e()],1)],1)},h=[],k=n(315),g={name:"AuthCode",directives:{mask:u.mask},props:{timer:{type:Number,default:null}},setup(e,{emit:t}){const n=(0,i.t)(),r=n.authLogin,a=n.authGetCode,o=k.Z,s=(0,c.ref)(!1),u=(0,c.ref)(!0),l=(0,c.ref)(""),f=(0,c.ref)("####"),d=(0,c.ref)([]),v=(0,c.computed)((()=>n.userData)),m=e=>{d.value=[],e&&4===e.length&&p()},p=async()=>{if(!s.value){s.value=!0,u.value=!1;try{const e=await r({phone:v.value.phone,code:l.value});e&&o.push("/")}catch(e){d.value.push(e),u.value=!0}s.value=!1}},h=async()=>{if(d.value=[],!s.value){s.value=!0;try{const e=await a(l.value);t("submit",e)}catch({error:e}){d.value.push(e||e.text)}s.value=!1}};return{authStore:n,userData:v,loading:s,showButton:u,smscode:l,mask:f,codeErrorCodes:d,authLogin:r,handleInput:m,login:p,getCode:h}}},b=g,y=(0,d.Z)(b,p,h,!1,null,null,null),x=y.exports,_={name:"AuthView",components:{AuthPhone:m,AuthCode:x},data(){return{codeSent:!1,timer:0}},methods:{formGetPhoneSubmit(e){this.codeSent=!0,this.timer=e,this.setTimer()},setTimer(){const e=setInterval((()=>{this.timer?this.timer--:clearInterval(e)}),1e3)},back(){this.codeSent=!1}}},w=_,C=(0,d.Z)(w,r,a,!1,null,null,null),A=C.exports},9414:function(e,t,n){n(1703),function(t,n){e.exports=n()}(0,(function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=".",t(t.s=10)}([function(e,t){e.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(e){return e.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(e){return e.toLocaleLowerCase()}},"!":{escape:!0}}},function(e,t,n){"use strict";function r(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}var a=n(2),o=n(0),s=n.n(o);t.a=function(e,t){var o=t.value;if((Array.isArray(o)||"string"==typeof o)&&(o={mask:o,tokens:s.a}),"INPUT"!==e.tagName.toLocaleUpperCase()){var u=e.getElementsByTagName("input");if(1!==u.length)throw new Error("v-mask directive requires 1 input, found "+u.length);e=u[0]}e.oninput=function(t){if(t.isTrusted){var s=e.selectionEnd,u=e.value[s-1];for(e.value=n.i(a.a)(e.value,o.mask,!0,o.tokens);s<e.value.length&&e.value.charAt(s-1)!==u;)s++;e===document.activeElement&&(e.setSelectionRange(s,s),setTimeout((function(){e.setSelectionRange(s,s)}),0)),e.dispatchEvent(r("input"))}};var i=n.i(a.a)(e.value,o.mask,!0,o.tokens);i!==e.value&&(e.value=i,e.dispatchEvent(r("input")))}},function(e,t,n){"use strict";var r=n(6),a=n(5);t.a=function(e,t){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=arguments[3];return Array.isArray(t)?n.i(a.a)(r.a,t,s)(e,t,o,s):n.i(r.a)(e,t,o,s)}},function(e,t,n){"use strict";function r(e){e.component(i.a.name,i.a),e.directive("mask",s.a)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n.n(a),s=n(1),u=n(7),i=n.n(u);n.d(t,"TheMask",(function(){return i.a})),n.d(t,"mask",(function(){return s.a})),n.d(t,"tokens",(function(){return o.a})),n.d(t,"version",(function(){return c}));var c="0.11.1";t.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=n(0),o=n.n(a),s=n(2);t.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return o.a}}},directives:{mask:r.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(e){e!==this.lastValue&&(this.display=e)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(e){e.isTrusted||this.refresh(e.target.value)},refresh:function(e){this.display=e;e=n.i(s.a)(e,this.mask,this.masked,this.tokens);e!==this.lastValue&&(this.lastValue=e,this.$emit("input",e))}}}},function(e,t,n){"use strict";function r(e,t,n){return t=t.sort((function(e,t){return e.length-t.length})),function(r,a){for(var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=0;s<t.length;){var u=t[s];s++;var i=t[s];if(!(i&&e(r,i,!0,n).length>u.length))return e(r,u,o,n)}return""}}t.a=r},function(e,t,n){"use strict";function r(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments[3];e=e||"",t=t||"";for(var a=0,o=0,s="";a<t.length&&o<e.length;){var u=t[a],i=r[u],c=e[o];i&&!i.escape?(i.pattern.test(c)&&(s+=i.transform?i.transform(c):c,a++),o++):(i&&i.escape&&(a++,u=t[a]),n&&(s+=u),c===u&&o++,a++)}for(var l="";a<t.length&&n;){u=t[a];if(r[u]){l="";break}l+=u,a++}return s+l}t.a=r},function(e,t,n){var r=n(8)(n(4),n(9),null,null);e.exports=r.exports},function(e,t){e.exports=function(e,t,n,r){var a,o=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(a=e,o=e.default);var u="function"==typeof o?o.options:o;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),r){var i=u.computed||(u.computed={});Object.keys(r).forEach((function(e){var t=r[e];i[e]=function(){return t}}))}return{esModule:a,exports:o,options:u}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"mask",rawName:"v-mask",value:e.config,expression:"config"}],attrs:{type:"text"},domProps:{value:e.display},on:{input:e.onInput}})},staticRenderFns:[]}},function(e,t,n){e.exports=n(3)}])}))}}]);
//# sourceMappingURL=Authorization.c69c3112.js.map