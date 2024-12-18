(()=>{"use strict";var e,t={312:(e,t,n)=>{const r=Vue;const o={props:["resourceName","field"],computed:{fieldValue:function(){return this.field.displayedAs||this.field.value}}};var i=n(262);const a=(0,i.A)(o,[["render",function(e,t,n,o,i,a){return(0,r.openBlock)(),(0,r.createElementBlock)("span",null,(0,r.toDisplayString)(a.fieldValue),1)}]]);const u={props:["index","resource","resourceName","resourceId","field"]},c=(0,i.A)(u,[["render",function(e,t,n,o,i,a){var u=(0,r.resolveComponent)("PanelItem");return(0,r.openBlock)(),(0,r.createBlock)(u,{index:n.index,field:n.field},null,8,["index","field"])}]]);var s=["id","placeholder"];const l=LaravelNova;function f(e){return null===e?"null":e!==Object(e)?typeof e:{}.toString.call(e).slice(8,-1).toLowerCase()}function d(e){return"string"!==f(e)||!e.length}function p(e="",t,n){if(d(e))return!1;const r=e.charCodeAt(0);return t<=r&&r<=n}const h="toHiragana",m="toKatakana",b="hepburn",v={useObsoleteKana:!1,passRomaji:!1,convertLongVowelMark:!0,upcaseKatakana:!1,IMEMode:!1,romanization:b},y=12353,g=[65313,65338],O=[65345,65370],j=[65377,65381],E=[[12288,12351],j,[12539,12540],[65281,65295],[65306,65311],[65339,65343],[65371,65376],[65504,65518]],w=[...[[12352,12447],[12448,12543],j,[65382,65439]],...E,g,O,[65296,65305],[19968,40959],[13312,19903]];function k(e=""){return w.some((([t,n])=>p(e,t,n)))}function S(e="",t){const n="regexp"===f(t);return!d(e)&&[...e].every((e=>{const r=k(e);return n?r||t.test(e):r}))}var x=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function C(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(r=e[n],o=t[n],!(r===o||x(r)&&x(o)))return!1;var r,o;return!0}function A(e,t){void 0===t&&(t=C);var n=null;function r(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(n&&n.lastThis===this&&t(r,n.lastArgs))return n.lastResult;var i=e.apply(this,r);return n={lastResult:i,lastArgs:r,lastThis:this},i}return r.clear=function(){n=null},r}var I=Object.prototype.hasOwnProperty;function N(e,t,n){for(n of e.keys())if(M(n,t))return n}function M(e,t){var n,r,o;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((r=e.length)===t.length)for(;r--&&M(e[r],t[r]););return-1===r}if(n===Set){if(e.size!==t.size)return!1;for(r of e){if((o=r)&&"object"==typeof o&&!(o=N(t,o)))return!1;if(!t.has(o))return!1}return!0}if(n===Map){if(e.size!==t.size)return!1;for(r of e){if((o=r[0])&&"object"==typeof o&&!(o=N(t,o)))return!1;if(!M(r[1],t.get(o)))return!1}return!0}if(n===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(n===DataView){if((r=e.byteLength)===t.byteLength)for(;r--&&e.getInt8(r)===t.getInt8(r););return-1===r}if(ArrayBuffer.isView(e)){if((r=e.byteLength)===t.byteLength)for(;r--&&e[r]===t[r];);return-1===r}if(!n||"object"==typeof e){for(n in r=0,e){if(I.call(e,n)&&++r&&!I.call(t,n))return!1;if(!(n in t)||!M(e[n],t[n]))return!1}return Object.keys(t).length===r}}return e!=e&&t!=t}const P=(e={})=>Object.assign({},v,e);function F(e,t,n){const r=t;function o(e,t){const n=e.charAt(0);return i(Object.assign({"":n},r[n]),e.slice(1),t,t+1)}function i(e,t,r,a){if(!t)return n||1===Object.keys(e).length?e[""]?[[r,a,e[""]]]:[]:[[r,a,null]];if(1===Object.keys(e).length)return[[r,a,e[""]]].concat(o(t,a));const u=function(e,t){if(void 0!==e[t])return Object.assign({"":e[""]+t},e[t])}(e,t.charAt(0));return void 0===u?[[r,a,e[""]]].concat(o(t,a)):i(u,t.slice(1),r,a+1)}return o(e,0)}function z(e){return Object.entries(e).reduce(((e,[t,n])=>{const r="string"===f(n);return e[t]=r?{"":n}:z(n),e}),{})}function L(e,t){return t.split("").reduce(((e,t)=>(void 0===e[t]&&(e[t]={}),e[t])),e)}function V(e={}){const t={};return"object"===f(e)&&Object.entries(e).forEach((([e,n])=>{let r=t;e.split("").forEach((e=>{void 0===r[e]&&(r[e]={}),r=r[e]})),r[""]=n})),function(e){return function e(t,n){return void 0===t||"string"===f(t)?n:Object.entries(n).reduce(((n,[r,o])=>(n[r]=e(t[r],o),n)),t)}(JSON.parse(JSON.stringify(e)),t)}}function D(e,t){return t?"function"===f(t)?t(e):V(t)(e):e}const J={a:"あ",i:"い",u:"う",e:"え",o:"お",k:{a:"か",i:"き",u:"く",e:"け",o:"こ"},s:{a:"さ",i:"し",u:"す",e:"せ",o:"そ"},t:{a:"た",i:"ち",u:"つ",e:"て",o:"と"},n:{a:"な",i:"に",u:"ぬ",e:"ね",o:"の"},h:{a:"は",i:"ひ",u:"ふ",e:"へ",o:"ほ"},m:{a:"ま",i:"み",u:"む",e:"め",o:"も"},y:{a:"や",u:"ゆ",o:"よ"},r:{a:"ら",i:"り",u:"る",e:"れ",o:"ろ"},w:{a:"わ",i:"ゐ",e:"ゑ",o:"を"},g:{a:"が",i:"ぎ",u:"ぐ",e:"げ",o:"ご"},z:{a:"ざ",i:"じ",u:"ず",e:"ぜ",o:"ぞ"},d:{a:"だ",i:"ぢ",u:"づ",e:"で",o:"ど"},b:{a:"ば",i:"び",u:"ぶ",e:"べ",o:"ぼ"},p:{a:"ぱ",i:"ぴ",u:"ぷ",e:"ぺ",o:"ぽ"},v:{a:"ゔぁ",i:"ゔぃ",u:"ゔ",e:"ゔぇ",o:"ゔぉ"}},$={".":"。",",":"、",":":"：","/":"・","!":"！","?":"？","~":"〜","-":"ー","‘":"「","’":"」","“":"『","”":"』","[":"［","]":"］","(":"（",")":"）","{":"｛","}":"｝"},B={k:"き",s:"し",t:"ち",n:"に",h:"ひ",m:"み",r:"り",g:"ぎ",z:"じ",d:"ぢ",b:"び",p:"ぴ",v:"ゔ",q:"く",f:"ふ"},K={ya:"ゃ",yi:"ぃ",yu:"ゅ",ye:"ぇ",yo:"ょ"},T={a:"ぁ",i:"ぃ",u:"ぅ",e:"ぇ",o:"ぉ"},_={sh:"sy",ch:"ty",cy:"ty",chy:"ty",shy:"sy",j:"zy",jy:"zy",shi:"si",chi:"ti",tsu:"tu",ji:"zi",fu:"hu"},q=Object.assign({tu:"っ",wa:"ゎ",ka:"ヵ",ke:"ヶ"},T,K),H={yi:"い",wu:"う",ye:"いぇ",wi:"うぃ",we:"うぇ",kwa:"くぁ",whu:"う",tha:"てゃ",thu:"てゅ",tho:"てょ",dha:"でゃ",dhu:"でゅ",dho:"でょ"},R={wh:"う",kw:"く",qw:"く",q:"く",gw:"ぐ",sw:"す",ts:"つ",th:"て",tw:"と",dh:"で",dw:"ど",fw:"ふ",f:"ふ"};function W(){const e=z(J),t=t=>L(e,t);function n(e){return Object.entries(e).reduce(((e,[t,r])=>(e[t]=t?n(r):`っ${r}`,e)),{})}return Object.entries(B).forEach((([e,n])=>{Object.entries(K).forEach((([r,o])=>{t(e+r)[""]=n+o}))})),Object.entries($).forEach((([e,n])=>{t(e)[""]=n})),Object.entries(R).forEach((([e,n])=>{Object.entries(T).forEach((([r,o])=>{t(e+r)[""]=n+o}))})),["n","n'","xn"].forEach((e=>{t(e)[""]="ん"})),e.c=JSON.parse(JSON.stringify(e.k)),Object.entries(_).forEach((([e,n])=>{const r=e.slice(0,e.length-1),o=e.charAt(e.length-1);t(r)[o]=JSON.parse(JSON.stringify(t(n)))})),Object.entries(q).forEach((([e,n])=>{const r=e=>e.charAt(e.length-1),o=e=>e.slice(0,e.length-1),i=t(`x${e}`);i[""]=n;var a;t(`l${o(e)}`)[r(e)]=i,(a=e,[...Object.entries(_),["c","k"]].reduce(((e,[t,n])=>a.startsWith(n)?e.concat(a.replace(n,t)):e),[])).forEach((n=>{["l","x"].forEach((i=>{t(i+o(n))[r(n)]=t(i+e)}))}))})),Object.entries(H).forEach((([e,n])=>{t(e)[""]=n})),[...Object.keys(B),"c","y","w","j"].forEach((t=>{const r=e[t];r[t]=n(r)})),delete e.n.n,Object.freeze(JSON.parse(JSON.stringify(e)))}let U=null;const X=V({wi:"ゐ",we:"ゑ"});function G(e=""){return!d(e)&&p(e,65,90)}function Q(e=""){return!d(e)&&12540===e.charCodeAt(0)}function Y(e=""){return!d(e)&&12539===e.charCodeAt(0)}function Z(e=""){return!d(e)&&(!!Q(e)||p(e,y,12438))}function ee(e=""){const t=[];return e.split("").forEach((e=>{if(Q(e)||Y(e))t.push(e);else if(Z(e)){const n=e.charCodeAt(0)+96,r=String.fromCharCode(n);t.push(r)}else t.push(e)})),t.join("")}const te=A(((e,t,n)=>{let r=(null==U&&(U=W()),U);return r=e?function(e){const t=JSON.parse(JSON.stringify(e));return t.n.n={"":"ん"},t.n[" "]={"":"ん"},t}(r):r,r=t?X(r):r,n&&(r=D(r,n)),r}),M);function ne(e="",t={},n){let r;return n?r=t:(r=P(t),n=te(r.IMEMode,r.useObsoleteKana,r.customKanaMapping)),function(e="",t={},n){const{IMEMode:r,useObsoleteKana:o,customKanaMapping:i}=t;n||(n=te(r,o,i));return F(e.toLowerCase(),n,!r)}(e,r,n).map((t=>{const[n,o,i]=t;if(null===i)return e.slice(n);const a=r.IMEMode===h,u=r.IMEMode===m||[...e.slice(n,o)].every(G);return a||!u?i:ee(i)})).join("")}let re=[];function oe(e){const t=Object.assign({},P(e),{IMEMode:e.IMEMode||!0}),n=te(t.IMEMode,t.useObsoleteKana,t.customKanaMapping),r=[...Object.keys(n),...Object.keys(n).map((e=>e.toUpperCase()))];return function({target:e}){undefined!==e.value&&"true"!==e.dataset.ignoreComposition&&function(e,t,n,r){const[o,i,a]=function(e="",t=0,n=[]){let r,o,i;0===t&&n.includes(e[0])?[r,o,i]=function(e,t){return["",...ae(e,(e=>t.includes(e)||!S(e,/[0-9]/)))]}(e,n):t>0?[r,o,i]=function(e="",t=0){const[n,r]=ae([...e.slice(0,t)].reverse(),(e=>!S(e)));return[r.reverse().join(""),n.split("").reverse().join(""),e.slice(t)]}(e,t):([r,o]=ae(e,(e=>!n.includes(e))),[o,i]=ae(o,(e=>!S(e))));return[r,o,i]}(e.value,e.selectionEnd,r),u=ne(i,t,n);if(i!==u){const t=o.length+u.length,n=o+u+a;e.value=n,a.length?setTimeout((()=>e.setSelectionRange(t,t)),1):e.setSelectionRange(t,t)}else e.value}(e,t,n,r)}}function ie({type:e,target:t,data:n}){/Mac/.test(window.navigator&&window.navigator.platform)&&("compositionupdate"===e&&S(n)&&(t.dataset.ignoreComposition="true"),"compositionend"===e&&(t.dataset.ignoreComposition="false"))}function ae(e={},t=e=>!!e){const n=[],{length:r}=e;let o=0;for(;o<r&&t(e[o],o);)n.push(e[o]),o+=1;return[n.join(""),e.slice(o)]}const ue={input:({target:{value:e,selectionStart:t,selectionEnd:n}})=>console.log("input:",{value:e,selectionStart:t,selectionEnd:n}),compositionstart:()=>console.log("compositionstart"),compositionupdate:({target:{value:e,selectionStart:t,selectionEnd:n},data:r})=>console.log("compositionupdate",{data:r,value:e,selectionStart:t,selectionEnd:n}),compositionend:()=>console.log("compositionend")},ce=["TEXTAREA","INPUT"];let se=0;function le(e={},t={},n=!1){if(!ce.includes(e.nodeName))throw new Error(`Element provided to Wanakana bind() was not a valid input or textarea element.\n Received: (${JSON.stringify(e)})`);if(e.hasAttribute("data-wanakana-id"))return;const r=oe(t),o=(se+=1,`${Date.now()}${se}`),i={};var a;[{name:"data-wanakana-id",value:o},{name:"lang",value:"ja"},{name:"autoCapitalize",value:"none"},{name:"autoCorrect",value:"off"},{name:"autoComplete",value:"off"},{name:"spellCheck",value:"false"}].forEach((t=>{i[t.name]=e.getAttribute(t.name),e.setAttribute(t.name,t.value)})),e.dataset.previousAttributes=JSON.stringify(i),e.addEventListener("input",r),e.addEventListener("compositionupdate",ie),e.addEventListener("compositionend",ie),function(e,t,n){re=re.concat({id:e,inputHandler:t,compositionHandler:n})}(o,r,ie),!0===n&&(a=e,Object.entries(ue).forEach((([e,t])=>a.addEventListener(e,t))))}function fe(e,t=!1){const n=(r=e)&&re.find((({id:e})=>e===r.getAttribute("data-wanakana-id")));var r;if(null==n)throw new Error(`Element provided to Wanakana unbind() had no listener registered.\n Received: ${JSON.stringify(e)}`);const{inputHandler:o,compositionHandler:i}=n,a=JSON.parse(e.dataset.previousAttributes);var u;Object.keys(a).forEach((t=>{a[t]?e.setAttribute(t,a[t]):e.removeAttribute(t)})),e.removeAttribute("data-previous-attributes"),e.removeAttribute("data-ignore-composition"),e.removeEventListener("input",o),e.removeEventListener("compositionstart",i),e.removeEventListener("compositionupdate",i),e.removeEventListener("compositionend",i),function({id:e}){re=re.filter((({id:t})=>t!==e))}(n),!0===t&&(u=e,Object.entries(ue).forEach((([e,t])=>u.removeEventListener(e,t))))}let de=null;const pe={あ:"a",い:"i",う:"u",え:"e",お:"o",か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",や:"ya",ゆ:"yu",よ:"yo",わ:"wa",ゐ:"wi",ゑ:"we",を:"wo",ん:"n",が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",だ:"da",ぢ:"ji",づ:"zu",で:"de",ど:"do",ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",ゔぁ:"va",ゔぃ:"vi",ゔ:"vu",ゔぇ:"ve",ゔぉ:"vo"},he={"。":".","、":",","：":":","・":"/","！":"!","？":"?","〜":"~",ー:"-","「":"‘","」":"’","『":"“","』":"”","［":"[","］":"]","（":"(","）":")","｛":"{","｝":"}","　":" "},me=["あ","い","う","え","お","や","ゆ","よ"],be={ゃ:"ya",ゅ:"yu",ょ:"yo"},ve={ぃ:"yi",ぇ:"ye"},ye={ぁ:"a",ぃ:"i",ぅ:"u",ぇ:"e",ぉ:"o"},ge=["き","に","ひ","み","り","ぎ","び","ぴ","ゔ","く","ふ"],Oe={し:"sh",ち:"ch",じ:"j",ぢ:"j"},je={っ:"",ゃ:"ya",ゅ:"yu",ょ:"yo",ぁ:"a",ぃ:"i",ぅ:"u",ぇ:"e",ぉ:"o"},Ee={b:"b",c:"t",d:"d",f:"f",g:"g",h:"h",j:"j",k:"k",m:"m",p:"p",q:"q",r:"r",s:"s",t:"t",v:"v",w:"w",x:"x",z:"z"};function we(){return null==de&&(de=function(){const e=z(pe),t=t=>L(e,t),n=(e,n)=>{t(e)[""]=n};return Object.entries(he).forEach((([e,n])=>{t(e)[""]=n})),[...Object.entries(be),...Object.entries(ye)].forEach((([e,t])=>{n(e,t)})),ge.forEach((e=>{const r=t(e)[""][0];Object.entries(be).forEach((([t,o])=>{n(e+t,r+o)})),Object.entries(ve).forEach((([t,o])=>{n(e+t,r+o)}))})),Object.entries(Oe).forEach((([e,t])=>{Object.entries(be).forEach((([r,o])=>{n(e+r,t+o[1])})),n(`${e}ぃ`,`${t}yi`),n(`${e}ぇ`,`${t}e`)})),e["っ"]=ke(e),Object.entries(je).forEach((([e,t])=>{n(e,t)})),me.forEach((e=>{n(`ん${e}`,`n'${t(e)[""]}`)})),Object.freeze(JSON.parse(JSON.stringify(e)))}()),de}function ke(e){return Object.entries(e).reduce(((e,[t,n])=>{if(t)e[t]=ke(n);else{const r=n.charAt(0);e[t]=Object.keys(Ee).includes(r)?Ee[r]+n:n}return e}),{})}A(((e,t)=>{let n=function(e){return e===b?we():{}}(e);return t&&(n=D(n,t)),n}),M);function Se(e){return Se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Se(e)}function xe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ce(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=Se(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=Se(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==Se(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Ae={mixins:[l.DependentFormField,l.HandlesValidationErrors],props:["resourceName","resourceId","field"],mounted:function(){this.setInitialValue(),le(this.getInputElement(),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?xe(Object(n),!0).forEach((function(t){Ce(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({IMEMode:this.currentField.IMEMode||!0},this.currentField.options))},unmounted:function(){fe(this.getInputElement())},methods:{getInputElement:function(){return document.getElementById(this.currentField.uniqueKey)},handleChange:function(){this.emitFieldValueChange(this.fieldAttribute,this.getInputElement().value),this.$emit("field-changed")},setInitialValue:function(){var e=this.getInputElement();e&&(e.value=this.currentField.value||"")},fill:function(e){e.append(this.fieldAttribute,this.getInputElement().value||"")}}},Ie=(0,i.A)(Ae,[["render",function(e,t,n,o,i,a){var u=(0,r.resolveComponent)("DefaultField");return(0,r.openBlock)(),(0,r.createBlock)(u,{field:e.currentField,errors:e.errors,"show-help-text":e.showHelpText,"full-width-content":e.fullWidthContent},{field:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("input",{id:e.currentField.uniqueKey,type:"text",class:(0,r.normalizeClass)(["w-full form-control form-input form-control-bordered",e.errorClasses]),placeholder:e.currentField.placeholder,onChange:t[0]||(t[0]=function(){return a.handleChange&&a.handleChange.apply(a,arguments)})},null,42,s)]})),_:1},8,["field","errors","show-help-text","full-width-content"])}]]);const Ne={props:["index","resource","resourceName","resourceId","field"]},Me=(0,i.A)(Ne,[["render",function(e,t,n,o,i,a){var u=(0,r.resolveComponent)("Excerpt"),c=(0,r.resolveComponent)("PanelItem");return(0,r.openBlock)(),(0,r.createBlock)(c,{index:n.index,field:n.field},{value:(0,r.withCtx)((function(){return[(0,r.createVNode)(u,{content:n.field.value,"plain-text":!0,"should-show":n.field.shouldShow},null,8,["content","should-show"])]})),_:1},8,["index","field"])}]]);var Pe=["id","placeholder","rows"];function Fe(e){return Fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fe(e)}function ze(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Le(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=Fe(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=Fe(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==Fe(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Ve={mixins:[l.DependentFormField,l.HandlesValidationErrors],props:["resourceName","resourceId","field"],mounted:function(){this.setInitialValue(),le(this.getInputElement(),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ze(Object(n),!0).forEach((function(t){Le(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ze(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({IMEMode:this.currentField.IMEMode||!0},this.currentField.options))},unmounted:function(){fe(this.getInputElement())},methods:{getInputElement:function(){return document.getElementById(this.currentField.uniqueKey)},handleChange:function(){this.emitFieldValueChange(this.fieldAttribute,this.getInputElement().value),this.$emit("field-changed")},setInitialValue:function(){var e=this.getInputElement();e&&(e.value=this.currentField.value||"")},fill:function(e){e.append(this.fieldAttribute,this.getInputElement().value||"")}}},De=(0,i.A)(Ve,[["render",function(e,t,n,o,i,a){var u=(0,r.resolveComponent)("DefaultField");return(0,r.openBlock)(),(0,r.createBlock)(u,{field:e.currentField,errors:e.errors,"show-help-text":e.showHelpText,"full-width-content":e.fullWidthContent},{field:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("textarea",{id:e.currentField.uniqueKey,type:"text",class:(0,r.normalizeClass)(["block w-full form-control form-input form-control-bordered py-3 h-auto",e.errorClasses]),placeholder:e.currentField.placeholder,rows:e.currentField.rows,onChange:t[0]||(t[0]=function(){return a.handleChange&&a.handleChange.apply(a,arguments)})},null,42,Pe)]})),_:1},8,["field","errors","show-help-text","full-width-content"])}]]);Nova.booting((function(e,t){e.component("index-japanese-transformer-text",a),e.component("detail-japanese-transformer-text",c),e.component("form-japanese-transformer-text",Ie),e.component("detail-japanese-transformer-textarea",Me),e.component("form-japanese-transformer-textarea",De)}))},613:()=>{},262:(e,t)=>{t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[e,r]of t)n[e]=r;return n}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var a=1/0;for(l=0;l<e.length;l++){for(var[n,o,i]=e[l],u=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,o,i]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={222:0,101:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[a,u,c]=n,s=0;if(a.some((t=>0!==e[t]))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(c)var l=c(r)}for(t&&t(n);s<a.length;s++)i=a[s],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(l)},n=self.webpackChunkbocanhcam_nova_japanese_transformer=self.webpackChunkbocanhcam_nova_japanese_transformer||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.O(void 0,[101],(()=>r(312)));var o=r.O(void 0,[101],(()=>r(613)));o=r.O(o)})();