(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ab2493a"],{"057f":function(t,e,r){var a=r("fc6a"),n=r("241c").f,s={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return n(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==s.call(t)?o(t):n(a(t))}},"0cbc":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid"},[r("table",{staticClass:"table mt-4 mb-13"},[t._m(0),r("tbody",t._l(t.orders,(function(e){return r("tr",{key:e.id,class:{"text-secondary":!e.is_paid}},[r("td",[t._v(t._s(t._f("date")(e.create_at)))]),r("td",[e.id?r("span",{domProps:{textContent:t._s(e.id)}}):t._e()]),r("td",[r("ul",t._l(e.products,(function(e,a){return r("li",{key:a},[t._v(" "+t._s(e.product.title)+" 數量："+t._s(e.qty)+" "+t._s(e.product.unit)+" ")])})),0)]),r("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.total)))]),r("td",{staticClass:"pl-10"},[e.is_paid?r("strong",{staticClass:"text-success"},[t._v("已付款")]):r("span",{staticClass:"text-muted"},[t._v("尚未付款")])]),r("td",[r("button",{staticClass:"btn btn-outline-topic",attrs:{type:"button"},on:{click:function(r){return t.openModal(e)}}},[t._v("編輯")])])])})),0)]),r("Pagination",{attrs:{pages:t.pagination},on:{emitPages:t.getOrdersA}}),r("div",{staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog",id:"orderModal","data-backdrop":"static"}},[r("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[t._m(1),r("div",{staticClass:"modal-body"},[r("div",[t._v("訂單編號 "+t._s(t.tempOrder.id))]),r("ul",{staticClass:"form-row mt-5"},[r("li",{staticClass:"form-group col-md-6"},[r("label",{attrs:{for:"customName"}},[t._v("訂購人姓名")]),t.tempOrder.user?r("input",{directives:[{name:"model",rawName:"v-model",value:t.tempOrder.user.name,expression:"tempOrder.user.name"}],staticClass:"form-control",attrs:{type:"text",id:"customName"},domProps:{value:t.tempOrder.user.name},on:{input:function(e){e.target.composing||t.$set(t.tempOrder.user,"name",e.target.value)}}}):t._e()]),r("li",{staticClass:"form-group col-md-6"},[r("label",{attrs:{for:"customTel"}},[t._v("訂購人電話")]),t.tempOrder.user?r("input",{directives:[{name:"model",rawName:"v-model",value:t.tempOrder.user.tel,expression:"tempOrder.user.tel"}],staticClass:"form-control",attrs:{type:"tel",id:"customTel"},domProps:{value:t.tempOrder.user.tel},on:{input:function(e){e.target.composing||t.$set(t.tempOrder.user,"tel",e.target.value)}}}):t._e()]),r("li",{staticClass:"form-group col-12"},[r("label",{attrs:{for:"customMail"}},[t._v("訂購人信箱")]),t.tempOrder.user?r("input",{directives:[{name:"model",rawName:"v-model",value:t.tempOrder.user.email,expression:"tempOrder.user.email"}],staticClass:"form-control",attrs:{type:"email",id:"customMail"},domProps:{value:t.tempOrder.user.email},on:{input:function(e){e.target.composing||t.$set(t.tempOrder.user,"email",e.target.value)}}}):t._e()]),r("li",{staticClass:"form-group col-12"},[r("label",{attrs:{for:"customAddress"}},[t._v("訂購人地址")]),t.tempOrder.user?r("input",{directives:[{name:"model",rawName:"v-model",value:t.tempOrder.user.address,expression:"tempOrder.user.address"}],staticClass:"form-control",attrs:{type:"text",id:"customAddress"},domProps:{value:t.tempOrder.user.address},on:{input:function(e){e.target.composing||t.$set(t.tempOrder.user,"address",e.target.value)}}}):t._e()])]),r("ul",{staticClass:"mt-5"},[t._v("訂單品項 : "),t._l(t.tempOrder.products,(function(e,a){return r("li",{key:a},[t._v(" "+t._s(e.product.title)+" 數量："+t._s(e.qty)+" "+t._s(e.product.unit)+" ")])}))],2),r("div",{staticClass:"form-check mt-5"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.tempOrder.is_paid,expression:"tempOrder.is_paid"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"defaultCheck1"},domProps:{checked:Array.isArray(t.tempOrder.is_paid)?t._i(t.tempOrder.is_paid,null)>-1:t.tempOrder.is_paid},on:{change:function(e){var r=t.tempOrder.is_paid,a=e.target,n=!!a.checked;if(Array.isArray(r)){var s=null,i=t._i(r,s);a.checked?i<0&&t.$set(t.tempOrder,"is_paid",r.concat([s])):i>-1&&t.$set(t.tempOrder,"is_paid",r.slice(0,i).concat(r.slice(i+1)))}else t.$set(t.tempOrder,"is_paid",n)}}}),r("label",{staticClass:"form-check-label",attrs:{for:"defaultCheck1"}},[t._v("是否付款")])])]),r("div",{staticClass:"modal-footer"},[r("button",{staticClass:"btn btn-outline-topic",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),r("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:t.updateOrder}},[t._v("確認")])])])])])],1)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("購買時間")]),r("th",{attrs:{width:"250"}},[t._v("訂單編號")]),r("th",{attrs:{width:"350"}},[t._v("購買款項")]),r("th",[t._v("應付金額")]),r("th",{staticClass:"pl-10"},[t._v("是否付款")]),r("th",[t._v("編輯")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal-header bg-warning text-white"},[r("h5",{staticClass:"modal-title bg-warning"},[t._v("修改訂單")]),r("button",{staticClass:"close text-topic",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],s=(r("99af"),r("5530")),i=r("1799"),o=r("2f62"),c={data:function(){return{orders:{},tempOrder:{},pagination:{}}},components:{Pagination:i["a"]},computed:Object(s["a"])({},Object(o["c"])(["isLoading"])),methods:{getOrdersA:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this,r="".concat("https://vue-course-api.hexschool.io","/api/").concat("emily","/admin/orders?page=").concat(t);e.$store.dispatch("updateLoading",!0),e.$http.get(r).then((function(t){e.orders=t.data.orders,e.pagination=t.data.pagination,e.$store.dispatch("updateLoading",!1)}))},openModal:function(t){var e=this;e.tempOrder=Object(s["a"])({},t),$("#orderModal").modal("show")},updateOrder:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("emily","/admin/order/").concat(t.tempOrder.id),r={data:t.tempOrder};t.$store.dispatch("updateLoading",!0),t.$http.put(e,r).then((function(){$("#orderModal").modal("hide"),t.getOrdersA(),t.$store.dispatch("updateLoading",!1)}))}},created:function(){var t=this;t.getOrdersA()}},u=c,l=r("2877"),d=Object(l["a"])(u,a,n,!1,null,null,null);e["default"]=d.exports},1799:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{attrs:{"aria-label":"Page navigation"}},[r("ul",{staticClass:"pagination mb-0"},[r("li",{staticClass:"page-item",class:{disabled:!t.pages.has_pre}},[r("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.updatePage(t.pages.current_page-1)}}},[r("span",{staticClass:"material-icons h6 mb-0"},[t._v("navigate_before")])])]),t._l(t.pages.total_pages,(function(e){return r("li",{key:e,staticClass:"page-item",class:{active:t.pages.current_page===e}},[r("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),t.updatePage(e)}}},[t._v(t._s(e))])])})),r("li",{staticClass:"page-item",class:{disabled:!t.pages.has_next}},[r("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.updatePage(t.pages.current_page+1)}}},[r("span",{staticClass:"material-icons h6 mb-0"},[t._v("keyboard_arrow_right")])])])],2)])},n=[],s={data:function(){return{}},props:["pages"],methods:{updatePage:function(t){var e=this;e.$emit("emitPages",t)}}},i=s,o=r("2877"),c=Object(o["a"])(i,a,n,!1,null,null,null);e["a"]=c.exports},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"746f":function(t,e,r){var a=r("428f"),n=r("5135"),s=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=a.Symbol||(a.Symbol={});n(e,t)||i(e,t,{value:s.f(t)})}},a4d3:function(t,e,r){"use strict";var a=r("23e7"),n=r("da84"),s=r("d066"),i=r("c430"),o=r("83ab"),c=r("4930"),u=r("fdbf"),l=r("d039"),d=r("5135"),p=r("e8b5"),f=r("861d"),m=r("825a"),b=r("7b0b"),g=r("fc6a"),v=r("c04e"),h=r("5c6c"),O=r("7c73"),_=r("df75"),y=r("241c"),w=r("057f"),C=r("7418"),P=r("06cf"),j=r("9bf2"),k=r("d1e7"),x=r("9112"),$=r("6eeb"),S=r("5692"),N=r("f772"),A=r("d012"),D=r("90e3"),E=r("b622"),M=r("e538"),L=r("746f"),J=r("d44e"),T=r("69f3"),q=r("b727").forEach,F=N("hidden"),I="Symbol",Q="prototype",W=E("toPrimitive"),z=T.set,B=T.getterFor(I),G=Object[Q],H=n.Symbol,K=s("JSON","stringify"),R=P.f,U=j.f,V=w.f,X=k.f,Y=S("symbols"),Z=S("op-symbols"),tt=S("string-to-symbol-registry"),et=S("symbol-to-string-registry"),rt=S("wks"),at=n.QObject,nt=!at||!at[Q]||!at[Q].findChild,st=o&&l((function(){return 7!=O(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,r){var a=R(G,e);a&&delete G[e],U(t,e,r),a&&t!==G&&U(G,e,a)}:U,it=function(t,e){var r=Y[t]=O(H[Q]);return z(r,{type:I,tag:t,description:e}),o||(r.description=e),r},ot=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof H},ct=function(t,e,r){t===G&&ct(Z,e,r),m(t);var a=v(e,!0);return m(r),d(Y,a)?(r.enumerable?(d(t,F)&&t[F][a]&&(t[F][a]=!1),r=O(r,{enumerable:h(0,!1)})):(d(t,F)||U(t,F,h(1,{})),t[F][a]=!0),st(t,a,r)):U(t,a,r)},ut=function(t,e){m(t);var r=g(e),a=_(r).concat(mt(r));return q(a,(function(e){o&&!dt.call(r,e)||ct(t,e,r[e])})),t},lt=function(t,e){return void 0===e?O(t):ut(O(t),e)},dt=function(t){var e=v(t,!0),r=X.call(this,e);return!(this===G&&d(Y,e)&&!d(Z,e))&&(!(r||!d(this,e)||!d(Y,e)||d(this,F)&&this[F][e])||r)},pt=function(t,e){var r=g(t),a=v(e,!0);if(r!==G||!d(Y,a)||d(Z,a)){var n=R(r,a);return!n||!d(Y,a)||d(r,F)&&r[F][a]||(n.enumerable=!0),n}},ft=function(t){var e=V(g(t)),r=[];return q(e,(function(t){d(Y,t)||d(A,t)||r.push(t)})),r},mt=function(t){var e=t===G,r=V(e?Z:g(t)),a=[];return q(r,(function(t){!d(Y,t)||e&&!d(G,t)||a.push(Y[t])})),a};if(c||(H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=D(t),r=function(t){this===G&&r.call(Z,t),d(this,F)&&d(this[F],e)&&(this[F][e]=!1),st(this,e,h(1,t))};return o&&nt&&st(G,e,{configurable:!0,set:r}),it(e,t)},$(H[Q],"toString",(function(){return B(this).tag})),$(H,"withoutSetter",(function(t){return it(D(t),t)})),k.f=dt,j.f=ct,P.f=pt,y.f=w.f=ft,C.f=mt,M.f=function(t){return it(E(t),t)},o&&(U(H[Q],"description",{configurable:!0,get:function(){return B(this).description}}),i||$(G,"propertyIsEnumerable",dt,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:H}),q(_(rt),(function(t){L(t)})),a({target:I,stat:!0,forced:!c},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var r=H(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),a({target:"Object",stat:!0,forced:!c,sham:!o},{create:lt,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:pt}),a({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ft,getOwnPropertySymbols:mt}),a({target:"Object",stat:!0,forced:l((function(){C.f(1)}))},{getOwnPropertySymbols:function(t){return C.f(b(t))}}),K){var bt=!c||l((function(){var t=H();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}));a({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,r){var a,n=[t],s=1;while(arguments.length>s)n.push(arguments[s++]);if(a=e,(f(e)||void 0!==t)&&!ot(t))return p(e)||(e=function(t,e){if("function"==typeof a&&(e=a.call(this,t,e)),!ot(e))return e}),n[1]=e,K.apply(null,n)}})}H[Q][W]||x(H[Q],W,H[Q].valueOf),J(H,I),A[F]=!0},dbb4:function(t,e,r){var a=r("23e7"),n=r("83ab"),s=r("56ef"),i=r("fc6a"),o=r("06cf"),c=r("8418");a({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,r,a=i(t),n=o.f,u=s(a),l={},d=0;while(u.length>d)r=n(a,e=u[d++]),void 0!==r&&c(l,e,r);return l}})},e439:function(t,e,r){var a=r("23e7"),n=r("d039"),s=r("fc6a"),i=r("06cf").f,o=r("83ab"),c=n((function(){i(1)})),u=!o||c;a({target:"Object",stat:!0,forced:u,sham:!o},{getOwnPropertyDescriptor:function(t,e){return i(s(t),e)}})},e538:function(t,e,r){var a=r("b622");e.f=a}}]);
//# sourceMappingURL=chunk-7ab2493a.82d23be1.js.map