(function(t){function e(e){for(var o,a,s=e[0],u=e[1],i=e[2],d=0,p=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);l&&l(e);while(p.length)p.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(o=!1)}o&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},c=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/new-vue/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var i=0;i<s.length;i++)e(s[i]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"073c":function(t,e,n){},"25fd":function(t,e,n){},"3b0b":function(t,e,n){"use strict";n("427d")},"427d":function(t,e,n){},"42b0":function(t,e,n){"use strict";n("d9a4")},"4a20":function(t,e,n){"use strict";n("e307")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d3b7"),n("159b"),n("b0c0");var o=n("7a23"),r={class:"app"};function c(t,e,n,c,a,s){var u=Object(o["z"])("navbar"),i=Object(o["z"])("router-view");return Object(o["r"])(),Object(o["e"])("div",r,[Object(o["h"])(u),Object(o["h"])(i)])}var a={class:"navbar"},s={class:"navbar-btns"},u=Object(o["g"])("Posts "),i=Object(o["g"])("About ");function l(t,e){var n=Object(o["z"])("my-button");return Object(o["r"])(),Object(o["e"])("div",a,[Object(o["f"])("h3",{onClick:e[0]||(e[0]=function(e){return t.$router.push("/")})},"Vue3"),Object(o["f"])("div",s,[Object(o["h"])(n,{onClick:e[1]||(e[1]=function(e){return t.$router.push("/posts")})},{default:Object(o["G"])((function(){return[u]})),_:1}),Object(o["h"])(n,{onClick:e[2]||(e[2]=function(e){return t.$router.push("/about")}),style:{"margin-left":"10px"}},{default:Object(o["G"])((function(){return[i]})),_:1})])])}n("aae8");var d=n("6b0d"),p=n.n(d);const b={},f=p()(b,[["render",l],["__scopeId","data-v-27d3502e"]]);var O=f,j={components:{Navbar:O}};n("9322");const v=p()(j,[["render",c]]);var m=v,h={class:"btn"};function g(t,e,n,r,c,a){return Object(o["r"])(),Object(o["e"])("button",h,[Object(o["y"])(t.$slots,"default",{},void 0,!0)])}var y={name:"my-button"};n("d70b");const P=p()(y,[["render",g],["__scopeId","data-v-1d70ee57"]]);var w=P,_=["value"];function V(t,e,n,r,c,a){return Object(o["r"])(),Object(o["e"])("input",{value:n.modelValue,onInput:e[0]||(e[0]=function(){return a.updateInput&&a.updateInput.apply(a,arguments)}),class:"input",type:"text"},null,40,_)}n("a9e3");var k={name:"my-input",props:{modelValue:[String,Number]},methods:{updateInput:function(t){this.$emit("update:modelValue",t.target.value)}}};n("f22e");const x=p()(k,[["render",V],["__scopeId","data-v-23308582"]]);var C=x;function I(t,e,n,r,c,a){return Object(o["H"])((Object(o["r"])(),Object(o["e"])("div",{class:"modal",onClick:e[1]||(e[1]=function(){return a.hideDialog&&a.hideDialog.apply(a,arguments)})},[Object(o["f"])("div",{onClick:e[0]||(e[0]=Object(o["I"])((function(){}),["stop"])),class:"modal-content"},[Object(o["y"])(t.$slots,"default",{},void 0,!0)])],512)),[[o["E"],n.show]])}var S={name:"modal-dialog",props:{show:{type:Boolean,required:!0,default:!1}},methods:{hideDialog:function(){this.$emit("update:show",!1)}}};n("90b1");const $=p()(S,[["render",I],["__scopeId","data-v-5c3a9c70"]]);var z=$,M=Object(o["f"])("option",{disabled:"",value:""},"Select",-1),D=["value"];function L(t,e,n,r,c,a){return Object(o["H"])((Object(o["r"])(),Object(o["e"])("select",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return n.modelValue=t}),onChange:e[1]||(e[1]=function(){return a.changeOption&&a.changeOption.apply(a,arguments)})},[M,(Object(o["r"])(!0),Object(o["e"])(o["a"],null,Object(o["x"])(n.options,(function(t){return Object(o["r"])(),Object(o["e"])("option",{key:t.value,value:t.value},Object(o["B"])(t.name),9,D)})),128))],544)),[[o["D"],n.modelValue]])}var R={name:"my-select",props:{modelValue:{type:String},options:{type:Array,default:function(){return[]}}},methods:{changeOption:function(t){this.$emit("update:modelValue",t.target.value)}}};const B=p()(R,[["render",L]]);var G=B,A={class:"pagination"},U=["onClick"];function N(t,e,n,r,c,a){return Object(o["r"])(),Object(o["e"])("div",A,[(Object(o["r"])(!0),Object(o["e"])(o["a"],null,Object(o["x"])(n.totalPages,(function(t){return Object(o["r"])(),Object(o["e"])("div",{key:t,class:Object(o["n"])(["page",{current:n.page===t}]),onClick:function(e){return a.changePage(t)}},Object(o["B"])(t),11,U)})),128))])}var q={name:"pagination",props:{totalPages:{type:Number,required:!0},page:{type:Number}},methods:{changePage:function(t){this.$emit("update:page",t)}}};n("d12f");const Q=p()(q,[["render",N],["__scopeId","data-v-1d4ac2fb"]]);var T=Q,E=[w,C,z,G,T],F=Object(o["f"])("h1",null,"Welcom to Vue3",-1),H=[F];function J(t,e,n,r,c,a){return Object(o["r"])(),Object(o["e"])("div",null,H)}var W={};const K=p()(W,[["render",J]]);var X=K;function Y(t,e,n,r,c,a){return Object(o["r"])(),Object(o["e"])("div",null,"About")}var Z={};const tt=p()(Z,[["render",Y]]);var et=tt,nt={class:"app-post"},ot=Object(o["f"])("h3",{style:{"margin-bottom":"10px"}},"Post's page",-1),rt={class:"app-buttons"},ct=Object(o["g"])(" Create post "),at={class:"app-list"},st={key:1,class:"loading"},ut={ref:"observer",class:"observer"};function it(t,e,n,r,c,a){var s=Object(o["z"])("my-input"),u=Object(o["z"])("my-button"),i=Object(o["z"])("my-select"),l=Object(o["z"])("post-form"),d=Object(o["z"])("modal-dialog"),p=Object(o["z"])("post-list");return Object(o["r"])(),Object(o["e"])("div",null,[Object(o["f"])("div",nt,[ot,Object(o["h"])(s,{modelValue:c.searchQuery,"onUpdate:modelValue":e[0]||(e[0]=function(t){return c.searchQuery=t}),placeholder:"Find..."},null,8,["modelValue"]),Object(o["f"])("div",rt,[Object(o["h"])(u,{onClick:a.showModal},{default:Object(o["G"])((function(){return[ct]})),_:1},8,["onClick"]),Object(o["h"])(i,{modelValue:c.selectedSort,"onUpdate:modelValue":e[1]||(e[1]=function(t){return c.selectedSort=t}),options:c.sortOptions},null,8,["modelValue","options"])]),Object(o["h"])(d,{show:c.modalVisible,"onUpdate:show":e[2]||(e[2]=function(t){return c.modalVisible=t})},{default:Object(o["G"])((function(){return[Object(o["h"])(l,{onCreate:a.createPost},null,8,["onCreate"])]})),_:1},8,["show"])]),Object(o["f"])("div",at,[c.isPostsLoading?(Object(o["r"])(),Object(o["e"])("div",st,"Loading...")):(Object(o["r"])(),Object(o["d"])(p,{key:0,posts:a.sortedAndSearchedPosts,onRemove:a.removePost},null,8,["posts","onRemove"])),Object(o["f"])("div",ut,null,512)])])}var lt=n("2909"),dt=n("1da1"),pt=(n("96cf"),n("4de4"),n("99af"),n("4e82"),n("caad"),n("2532"),n("bc3a")),bt=n.n(pt),ft=function(t){return Object(o["u"])("data-v-098a3fae"),t=t(),Object(o["s"])(),t},Ot=ft((function(){return Object(o["f"])("h4",null,"Creating posts",-1)})),jt=Object(o["g"])(" Create ");function vt(t,e,n,r,c,a){var s=Object(o["z"])("my-input"),u=Object(o["z"])("my-button");return Object(o["r"])(),Object(o["e"])("form",{onSubmit:e[2]||(e[2]=Object(o["I"])((function(){}),["prevent"]))},[Ot,Object(o["h"])(s,{modelValue:c.post.title,"onUpdate:modelValue":e[0]||(e[0]=function(t){return c.post.title=t}),type:"text",placeholder:"Title"},null,8,["modelValue"]),Object(o["h"])(s,{modelValue:c.post.body,"onUpdate:modelValue":e[1]||(e[1]=function(t){return c.post.body=t}),type:"text",placeholder:"Post"},null,8,["modelValue"]),Object(o["h"])(u,{style:{"align-self":"flex-end",margin:"10px 15px"},onClick:a.createPost},{default:Object(o["G"])((function(){return[jt]})),_:1},8,["onClick"])],32)}var mt={data:function(){return{post:{title:"",body:""}}},methods:{createPost:function(){this.post.id=Date.now(),this.$emit("create",this.post,"second","third"),this.post={title:"",body:""}}}};n("4a20");const ht=p()(mt,[["render",vt],["__scopeId","data-v-098a3fae"]]);var gt=ht,yt=function(t){return Object(o["u"])("data-v-5d9b81af"),t=t(),Object(o["s"])(),t},Pt={key:0},wt=yt((function(){return Object(o["f"])("h3",null,"Post list",-1)})),_t={key:1,style:{color:"red"}};function Vt(t,e,n,r,c,a){var s=Object(o["z"])("post-item");return n.posts.length>0?(Object(o["r"])(),Object(o["e"])("div",Pt,[wt,(Object(o["r"])(!0),Object(o["e"])(o["a"],null,Object(o["x"])(n.posts,(function(e){return Object(o["r"])(),Object(o["d"])(s,{post:e,key:e.id,onRemove:function(n){return t.$emit("remove",e)}},null,8,["post","onRemove"])})),128))])):(Object(o["r"])(),Object(o["e"])("h3",_t,"The list of items is empty"))}var kt=function(t){return Object(o["u"])("data-v-0238d247"),t=t(),Object(o["s"])(),t},xt={class:"post"},Ct={class:"post-body"},It=kt((function(){return Object(o["f"])("strong",null,"ID: ",-1)})),St=kt((function(){return Object(o["f"])("strong",null,"Name: ",-1)})),$t=kt((function(){return Object(o["f"])("strong",null,"Description: ",-1)})),zt={class:"post-btns"},Mt=Object(o["g"])(" Open "),Dt=Object(o["g"])(" Delete ");function Lt(t,e,n,r,c,a){var s=Object(o["z"])("my-button");return Object(o["r"])(),Object(o["e"])("div",xt,[Object(o["f"])("div",Ct,[Object(o["f"])("div",null,[It,Object(o["g"])(Object(o["B"])(n.post.id),1)]),Object(o["f"])("div",null,[St,Object(o["g"])(Object(o["B"])(n.post.title),1)]),Object(o["f"])("div",null,[$t,Object(o["g"])(Object(o["B"])(n.post.body),1)])]),Object(o["f"])("div",zt,[Object(o["h"])(s,{style:{"margin-right":"5px"},onClick:e[0]||(e[0]=function(e){return t.$router.push("/posts/".concat(n.post.id))})},{default:Object(o["G"])((function(){return[Mt]})),_:1}),Object(o["h"])(s,{onClick:e[1]||(e[1]=function(e){return t.$emit("remove",n.post)})},{default:Object(o["G"])((function(){return[Dt]})),_:1})])])}var Rt={props:{post:{type:Object,required:!0}},methods:{}};n("42b0");const Bt=p()(Rt,[["render",Lt],["__scopeId","data-v-0238d247"]]);var Gt=Bt,At={components:{PostItem:Gt},props:{posts:{type:Array,required:!0}}};n("69df");const Ut=p()(At,[["render",Vt],["__scopeId","data-v-5d9b81af"]]);var Nt=Ut,qt={components:{PostList:Nt,PostForm:gt},data:function(){return{posts:[],modalVisible:!1,modificatorValue:"",isPostsLoading:!1,searchQuery:"",selectedSort:"",sortOptions:[{value:"title",name:"via name"},{value:"body",name:"via description"}],page:1,limit:10,totalPages:0}},methods:{createPost:function(t){this.posts.push(t),this.modalVisible=!1},removePost:function(t){this.posts=this.posts.filter((function(e){return e.id!==t.id}))},showModal:function(){this.modalVisible=!0},fetchPosts:function(){var t=this;return Object(dt["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isPostsLoading=!0,e.next=4,bt.a.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:t.page,_limit:t.limit}});case 4:n=e.sent,t.totalPages=Math.ceil(n.headers["x-total-count"]/t.limit),t.posts=n.data,t.isPostsLoading=!1,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),alert("".concat(e.t0.message));case 13:return e.prev=13,e.finish(13);case 15:case"end":return e.stop()}}),e,null,[[0,10,13,15]])})))()},loadMorePosts:function(){var t=this;return Object(dt["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.page+=1,e.next=4,bt.a.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:t.page,_limit:t.limit}});case 4:n=e.sent,t.totalPages=Math.ceil(n.headers["x-total-count"]/t.limit),t.posts=[].concat(Object(lt["a"])(t.posts),Object(lt["a"])(n.data)),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),alert("".concat(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},mounted:function(){var t=this;this.fetchPosts();var e={rootMargin:"0px",threshold:1},n=function(e,n){e[0].isIntersecting&&(console.log("пересечен"),t.loadMorePosts())},o=new IntersectionObserver(n,e);o.observe(this.$refs.observer)},watch:{},computed:{sortedPosts:function(){var t=this;return console.log("computed"),Object(lt["a"])(this.posts).sort((function(e,n){var o;return null===(o=e[t.selectedSort])||void 0===o?void 0:o.localeCompare(n[t.selectedSort])}))},sortedAndSearchedPosts:function(){var t=this;return this.sortedPosts.filter((function(e){return e.title.toLowerCase().includes(t.searchQuery.toLowerCase())}))}}};n("3b0b");const Qt=p()(qt,[["render",it]]);var Tt=Qt;function Et(t,e,n,r,c,a){return Object(o["r"])(),Object(o["e"])("div",null,[Object(o["f"])("h3",null,"It's post's page with ID: "+Object(o["B"])(t.$route.params.id),1)])}var Ft={};const Ht=p()(Ft,[["render",Et]]);var Jt=Ht,Wt=n("6c02"),Kt=[{path:"/",component:X},{path:"/posts",component:Tt},{path:"/about",component:et},{path:"/posts/:id",component:Jt}],Xt=Object(Wt["a"])({routes:Kt,history:Object(Wt["b"])("/new-vue/")}),Yt=Xt,Zt=Object(o["c"])(m);E.forEach((function(t){Zt.component(t.name,t)})),Zt.use(Yt).mount("#app")},"68cc":function(t,e,n){},"69df":function(t,e,n){"use strict";n("68cc")},"90b1":function(t,e,n){"use strict";n("dd41")},9322:function(t,e,n){"use strict";n("b242")},aa29:function(t,e,n){},aae8:function(t,e,n){"use strict";n("aa29")},b242:function(t,e,n){},d12f:function(t,e,n){"use strict";n("25fd")},d70b:function(t,e,n){"use strict";n("db55")},d9a4:function(t,e,n){},db55:function(t,e,n){},dd41:function(t,e,n){},e307:function(t,e,n){},f22e:function(t,e,n){"use strict";n("073c")}});
//# sourceMappingURL=app.e10cb4de.js.map