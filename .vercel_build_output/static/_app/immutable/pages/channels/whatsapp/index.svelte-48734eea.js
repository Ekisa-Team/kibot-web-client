var $e=Object.defineProperty;var ae=Object.getOwnPropertySymbols;var Me=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable;var re=(s,e,t)=>e in s?$e(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,A=(s,e)=>{for(var t in e||(e={}))Me.call(e,t)&&re(s,t,e[t]);if(ae)for(var t of ae(e))Re.call(e,t)&&re(s,t,e[t]);return s};import{ad as ve,S as x,i as ee,s as te,l as W,g as k,n as Ee,o as w,p as we,q as E,d as u,a8 as ce,a9 as Te,ak as Ue,I as U,C as G,aa as ie,F as We,E as $,w as V,x as B,y as K,z as Se,B as O,a5 as Ve,a6 as Be,a7 as Ke,N as Y,O as J,P as Q,Q as Z,e as S,c as P,a as C,f as X,b as L,k as R,m as T,L as j,G as Oe,t as y,h as N,j as Pe,al as fe,am as qe,J as v,an as Xe,K as F}from"../../../chunks/index-5927094f.js";import{s as ue,f as _e,F as je}from"../../../chunks/Form-d3f19899.js";import{c as Fe}from"../../../chunks/chatbot-bca22043.js";import{m as he}from"../../../chunks/messaging-provider-72ae54b2.js";import{f as He,g as ze,a as Ge,K as de,R as Ce}from"../../../chunks/TransitionRoot-0d350f17.js";import{r as Ye}from"../../../chunks/resolve-button-type-552c0ea1.js";import{h as H}from"../../../chunks/http-90371e68.js";import{w as Je}from"../../../chunks/index-f4e83c97.js";import"../../../chunks/Alert-351cf93d.js";import"../../../chunks/required-1e16da63.js";import"../../../chunks/SvelteToast.svelte_svelte_type_style_lang-9d6e0cc5.js";import"../../../chunks/local-storage-4242d675.js";const Qe="headlessui-label-context";function Ze(){return ve(Qe)}const xe="headlessui-switch-context";function et(){return ve(xe)}const tt=s=>s&8,st=s=>({}),pe=s=>A({},s[3]),ot=s=>s&8,lt=s=>({}),me=s=>A({},s[3]);function nt(s){let e,t;const o=[A(A({},s[12]),s[4]),{as:s[0]},{slotProps:s[3]},{use:[...s[1],s[6]]},{name:"Switch"}];let l={$$slots:{default:[rt]},$$scope:{ctx:s}};for(let n=0;n<o.length;n+=1)l=G(l,o[n]);return e=new Ce({props:l}),e.$on("click",s[10]),e.$on("keyup",s[11]),e.$on("keypress",De),{c(){V(e.$$.fragment)},l(n){B(e.$$.fragment,n)},m(n,a){K(e,n,a),t=!0},p(n,a){const r=a&4187?Se(o,[a&4112&&A(A({},n[12]),n[4]),a&1&&{as:n[0]},a&8&&{slotProps:n[3]},a&66&&{use:[...n[1],n[6]]},o[4]]):{};a&524296&&(r.$$scope={dirty:a,ctx:n}),e.$set(r)},i(n){t||(E(e.$$.fragment,n),t=!0)},o(n){w(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function at(s){let e,t,o;const l=[A(A({},s[12]),s[4]),{as:s[0]},{slotProps:s[3]},{use:[...s[1],s[6]]},{name:"Switch"}];function n(r){s[18](r)}let a={$$slots:{default:[ct]},$$scope:{ctx:s}};for(let r=0;r<l.length;r+=1)a=G(a,l[r]);return s[2]!==void 0&&(a.el=s[2]),e=new Ce({props:a}),Ve.push(()=>Be(e,"el",n)),e.$on("click",s[10]),e.$on("keyup",s[11]),e.$on("keypress",De),{c(){V(e.$$.fragment)},l(r){B(e.$$.fragment,r)},m(r,c){K(e,r,c),o=!0},p(r,c){const i=c&4187?Se(l,[c&4112&&A(A({},r[12]),r[4]),c&1&&{as:r[0]},c&8&&{slotProps:r[3]},c&66&&{use:[...r[1],r[6]]},l[4]]):{};c&524296&&(i.$$scope={dirty:c,ctx:r}),!t&&c&4&&(t=!0,i.el=r[2],Ke(()=>t=!1)),e.$set(i)},i(r){o||(E(e.$$.fragment,r),o=!0)},o(r){w(e.$$.fragment,r),o=!1},d(r){O(e,r)}}}function rt(s){let e;const t=s[17].default,o=Y(t,s,s[19],pe);return{c(){o&&o.c()},l(l){o&&o.l(l)},m(l,n){o&&o.m(l,n),e=!0},p(l,n){o&&o.p&&(!e||n&524296)&&J(o,t,l,l[19],tt(n)||!e?Q(l[19]):Z(t,l[19],n,st),pe)},i(l){e||(E(o,l),e=!0)},o(l){w(o,l),e=!1},d(l){o&&o.d(l)}}}function ct(s){let e;const t=s[17].default,o=Y(t,s,s[19],me);return{c(){o&&o.c()},l(l){o&&o.l(l)},m(l,n){o&&o.m(l,n),e=!0},p(l,n){o&&o.p&&(!e||n&524296)&&J(o,t,l,l[19],ot(n)||!e?Q(l[19]):Z(t,l[19],n,lt),me)},i(l){e||(E(o,l),e=!0)},o(l){w(o,l),e=!1},d(l){o&&o.d(l)}}}function it(s){let e,t,o,l;const n=[at,nt],a=[];function r(c,i){return c[5]?0:1}return e=r(s),t=a[e]=n[e](s),{c(){t.c(),o=W()},l(c){t.l(c),o=W()},m(c,i){a[e].m(c,i),k(c,o,i),l=!0},p(c,[i]){let f=e;e=r(c),e===f?a[e].p(c,i):(Ee(),w(a[f],1,1,()=>{a[f]=null}),we(),t=a[e],t?t.p(c,i):(t=a[e]=n[e](c),t.c()),E(t,1),t.m(o.parentNode,o))},i(c){l||(E(t),l=!0)},o(c){w(t),l=!1},d(c){a[e].d(c),c&&u(o)}}}function De(s){s.preventDefault()}function ft(s,e,t){let o,l,n;const a=["as","use","checked"];let r=ce(e,a),c,i,f,h=$,_=()=>(h(),h=We(o,g=>t(2,f=g)),o),d;s.$$.on_destroy.push(()=>h());let{$$slots:b={},$$scope:p}=e,{as:m="button"}=e,{use:I=[]}=e,{checked:D=!1}=e;const M=He(Te(),["change"]),Ie=Ue();let se=et();U(s,se,g=>t(16,d=g));let oe=Ze();U(s,oe,g=>t(15,i=g));let le=ze();U(s,le,g=>t(14,c=g));let Le=`headlessui-switch-${Ge()}`;function ne(){Ie("change",!D)}function Ae(g){g.preventDefault(),ne()}function ye(g){let q=g;q.key!==de.Tab&&q.preventDefault(),q.key===de.Space&&ne()}function Ne(g){f=g,o.set(f)}return s.$$set=g=>{t(23,e=G(G({},e),ie(g))),t(12,r=ce(e,a)),"as"in g&&t(0,m=g.as),"use"in g&&t(1,I=g.use),"checked"in g&&t(13,D=g.checked),"$$scope"in g&&t(19,p=g.$$scope)},s.$$.update=()=>{s.$$.dirty&65536&&_(t(5,o=d==null?void 0:d.switchStore)),t(4,l={id:Le,role:"switch",type:Ye({type:e.type,as:m},f),tabIndex:0,"aria-checked":D,"aria-labelledby":i==null?void 0:i.labelIds,"aria-describedby":c==null?void 0:c.descriptionIds}),s.$$.dirty&8192&&t(3,n={checked:D})},e=ie(e),[m,I,f,n,l,o,M,se,oe,le,Ae,ye,r,D,c,i,d,b,Ne,p]}class ut extends x{constructor(e){super(),ee(this,e,ft,it,te,{as:0,use:1,checked:13})}}const _t=s=>({}),ge=s=>({}),ht=s=>({}),be=s=>({});function ke(s){let e,t;const o=s[9].content,l=Y(o,s,s[8],ge),n=l||dt(s);return{c(){e=S("div"),n&&n.c(),this.h()},l(a){e=P(a,"DIV",{style:!0,class:!0});var r=C(e);n&&n.l(r),r.forEach(u),this.h()},h(){X(e,"top",s[3]+"px"),X(e,"left",s[2]+"px"),L(e,"class","tooltip bg-white dark:bg-zinc-800 svelte-1lh5oje")},m(a,r){k(a,e,r),n&&n.m(e,null),t=!0},p(a,r){l?l.p&&(!t||r&256)&&J(l,o,a,a[8],t?Z(o,a[8],r,_t):Q(a[8]),ge):n&&n.p&&(!t||r&1)&&n.p(a,t?r:-1),(!t||r&8)&&X(e,"top",a[3]+"px"),(!t||r&4)&&X(e,"left",a[2]+"px")},i(a){t||(E(n,a),t=!0)},o(a){w(n,a),t=!1},d(a){a&&u(e),n&&n.d(a)}}}function dt(s){let e;return{c(){e=y(s[0])},l(t){e=N(t,s[0])},m(t,o){k(t,e,o)},p(t,o){o&1&&Pe(e,t[0])},d(t){t&&u(e)}}}function pt(s){let e,t,o,l,n,a;const r=s[9].target,c=Y(r,s,s[8],be);let i=s[1]&&ke(s);return{c(){e=S("div"),c&&c.c(),t=R(),i&&i.c(),o=W()},l(f){e=P(f,"DIV",{});var h=C(e);c&&c.l(h),h.forEach(u),t=T(f),i&&i.l(f),o=W()},m(f,h){k(f,e,h),c&&c.m(e,null),k(f,t,h),i&&i.m(f,h),k(f,o,h),l=!0,n||(a=[j(e,"focus",void 0),j(e,"mouseover",s[4]),j(e,"mouseleave",s[6]),j(e,"mousemove",s[5])],n=!0)},p(f,[h]){c&&c.p&&(!l||h&256)&&J(c,r,f,f[8],l?Z(r,f[8],h,ht):Q(f[8]),be),f[1]?i?(i.p(f,h),h&2&&E(i,1)):(i=ke(f),i.c(),E(i,1),i.m(o.parentNode,o)):i&&(Ee(),w(i,1,1,()=>{i=null}),we())},i(f){l||(E(c,f),E(i),l=!0)},o(f){w(c,f),w(i),l=!1},d(f){f&&u(e),c&&c.d(f),f&&u(t),i&&i.d(f),f&&u(o),n=!1,Oe(a)}}}function mt(s,e,t){let{$$slots:o={},$$scope:l}=e,{title:n=""}=e,{offset:a=[5,5]}=e,r=!1,c,i;const f=d=>{t(1,r=!0),t(3,i=d.pageY+a[0]),t(2,c=d.pageX+a[1])},h=d=>{t(3,i=d.pageY+a[0]),t(2,c=d.pageX+a[1])},_=()=>{t(1,r=!1)};return s.$$set=d=>{"title"in d&&t(0,n=d.title),"offset"in d&&t(7,a=d.offset),"$$scope"in d&&t(8,l=d.$$scope)},[n,r,c,i,f,h,_,a,l,o]}class gt extends x{constructor(e){super(),ee(this,e,mt,pt,te,{title:0,offset:7})}}function bt(){const{subscribe:s,set:e}=Je();return{subscribe:s,fetch:async t=>{console.log(t);const o=`https://localhost:5001/api/v1/chatbots/${t}/channels`,l=await H.get(o);e(l.data)},create:async(t,o)=>{const l=`https://localhost:5001/api/v1/chatbots/${t}/channels`;return await H.post(l,o)},update:async(t,o,l)=>{const n=`https://localhost:5001/api/v1/chatbots/${t}/channels/${o}`;return await H.put(n,l)},delete:async(t,o)=>{const l=`https://localhost:5001/api/v1/chatbots/${t}/channels/${o}`;return await H.del(l)}}}const z=bt();function kt(s){let e,t,o;return{c(){e=S("label"),t=y(`Enable dev mode\r
        `),o=S("div"),this.h()},l(l){e=P(l,"LABEL",{slot:!0,for:!0});var n=C(e);t=N(n,`Enable dev mode\r
        `),o=P(n,"DIV",{class:!0}),C(o).forEach(u),n.forEach(u),this.h()},h(){L(o,"class","i-ph:question-duotone"),L(e,"slot","target"),L(e,"for","isDevModeEnabled")},m(l,n){k(l,e,n),v(e,t),v(e,o)},p:$,d(l){l&&u(e)}}}function vt(s){let e,t,o,l,n,a;return{c(){e=S("div"),t=S("span"),o=y("El modo desarrollo se saltar\xE1 las validaciones de URL y le permitir\xE1 configurar el "),l=S("strong"),n=y("localhost"),a=y(" como URL de retorno."),this.h()},l(r){e=P(r,"DIV",{slot:!0,class:!0});var c=C(e);t=P(c,"SPAN",{});var i=C(t);o=N(i,"El modo desarrollo se saltar\xE1 las validaciones de URL y le permitir\xE1 configurar el "),l=P(i,"STRONG",{class:!0});var f=C(l);n=N(f,"localhost"),f.forEach(u),a=N(i," como URL de retorno."),i.forEach(u),c.forEach(u),this.h()},h(){L(l,"class","font-semibold"),L(e,"slot","content"),L(e,"class","w-64")},m(r,c){k(r,e,c),v(e,t),v(t,o),v(t,l),v(l,n),v(t,a)},p:$,d(r){r&&u(e)}}}function Et(s){let e,t,o,l;return{c(){e=S("span"),t=y("Enable dev mode"),o=R(),l=S("span"),this.h()},l(n){e=P(n,"SPAN",{class:!0});var a=C(e);t=N(a,"Enable dev mode"),a.forEach(u),o=T(n),l=P(n,"SPAN",{class:!0}),C(l).forEach(u),this.h()},h(){L(e,"class","sr-only"),L(l,"class","toggle"),F(l,"toggle-on",s[0]),F(l,"toggle-off",!s[0])},m(n,a){k(n,e,a),v(e,t),k(n,o,a),k(n,l,a)},p(n,a){a&1&&F(l,"toggle-on",n[0]),a&1&&F(l,"toggle-off",!n[0])},d(n){n&&u(e),n&&u(o),n&&u(l)}}}function wt(s){let e,t,o=s[9]+"",l;return{c(){e=S("p"),t=y("Error: "),l=y(o)},l(n){e=P(n,"P",{});var a=C(e);t=N(a,"Error: "),l=N(a,o),a.forEach(u)},m(n,a){k(n,e,a),v(e,t),v(e,l)},p(n,a){a&2&&o!==(o=n[9]+"")&&Pe(l,o)},i:$,o:$,d(n){n&&u(e)}}}function St(s){let e,t;return e=new je({props:{channel:s[2],messagingProviders:s[3],devModeEnabled:s[0]}}),e.$on("disconnect",s[5]),e.$on("save",s[6]),{c(){V(e.$$.fragment)},l(o){B(e.$$.fragment,o)},m(o,l){K(e,o,l),t=!0},p(o,l){const n={};l&4&&(n.channel=o[2]),l&8&&(n.messagingProviders=o[3]),l&1&&(n.devModeEnabled=o[0]),e.$set(n)},i(o){t||(E(e.$$.fragment,o),t=!0)},o(o){w(e.$$.fragment,o),t=!1},d(o){O(e,o)}}}function Pt(s){let e,t;return{c(){e=S("p"),t=y("Waiting...")},l(o){e=P(o,"P",{});var l=C(e);t=N(l,"Waiting..."),l.forEach(u)},m(o,l){k(o,e,l),v(e,t)},p:$,i:$,o:$,d(o){o&&u(e)}}}function Ct(s){let e,t,o,l,n,a,r,c,i,f,h,_,d;r=new gt({props:{offset:[20,-200],$$slots:{content:[vt],target:[kt]},$$scope:{ctx:s}}}),i=new ut({props:{id:"isDevModeEnabled",checked:s[0],class:s[0]?"switch switch-checked":"switch switch-unchecked",$$slots:{default:[Et]},$$scope:{ctx:s}}}),i.$on("change",s[8]);let b={ctx:s,current:null,token:null,hasCatch:!0,pending:Pt,then:St,catch:wt,error:9,blocks:[,,,]};return fe(_=s[4](s[1]),b),{c(){e=R(),t=S("div"),o=S("h1"),l=y("WhatsApp Channel"),n=R(),a=S("div"),V(r.$$.fragment),c=R(),V(i.$$.fragment),f=R(),h=W(),b.block.c(),this.h()},l(p){qe('[data-svelte="svelte-1i9sd3m"]',document.head).forEach(u),e=T(p),t=P(p,"DIV",{class:!0});var I=C(t);o=P(I,"H1",{class:!0});var D=C(o);l=N(D,"WhatsApp Channel"),D.forEach(u),n=T(I),a=P(I,"DIV",{class:!0});var M=C(a);B(r.$$.fragment,M),c=T(M),B(i.$$.fragment,M),M.forEach(u),I.forEach(u),f=T(p),h=W(),b.block.l(p),this.h()},h(){document.title="WhatsApp Channel",L(o,"class","h3"),L(a,"class","flex items-center space-x-3"),L(t,"class","mb-6 flex flex-col items-start justify-between md:flex-row")},m(p,m){k(p,e,m),k(p,t,m),v(t,o),v(o,l),v(t,n),v(t,a),K(r,a,null),v(a,c),K(i,a,null),k(p,f,m),k(p,h,m),b.block.m(p,b.anchor=m),b.mount=()=>h.parentNode,b.anchor=h,d=!0},p(p,[m]){s=p;const I={};m&1024&&(I.$$scope={dirty:m,ctx:s}),r.$set(I);const D={};m&1&&(D.checked=s[0]),m&1&&(D.class=s[0]?"switch switch-checked":"switch switch-unchecked"),m&1025&&(D.$$scope={dirty:m,ctx:s}),i.$set(D),b.ctx=s,m&2&&_!==(_=s[4](s[1]))&&fe(_,b)||Xe(b,s,m)},i(p){d||(E(r.$$.fragment,p),E(i.$$.fragment,p),E(b.block),d=!0)},o(p){w(r.$$.fragment,p),w(i.$$.fragment,p);for(let m=0;m<3;m+=1){const I=b.blocks[m];w(I)}d=!1},d(p){p&&u(e),p&&u(t),O(r),O(i),p&&u(f),p&&u(h),b.block.d(p),b.token=null,b=null}}}function Dt(s,e,t){let o,l,n,a;U(s,Fe,_=>t(7,l=_)),U(s,z,_=>t(2,n=_)),U(s,he,_=>t(3,a=_));let r=!1;const c=_=>Promise.all([z.fetch(_),he.fetch()]),i=_=>{console.log(_.detail),z.delete(o,_.detail).then(()=>{ue("Channel was disconnected successfully")}).catch(d=>_e(d.message))},f=_=>{console.log(_.detail),_.detail.id&&z.update(o,_.detail.id,_.detail).then(()=>{ue("Channel was updated successfully")}).catch(d=>_e(d.message))},h=_=>t(0,r=_.detail);return s.$$.update=()=>{var _;s.$$.dirty&128&&t(1,o=((_=l.selectedChatbot)==null?void 0:_.id)||0)},[r,o,n,a,c,i,f,l,h]}class Kt extends x{constructor(e){super(),ee(this,e,Dt,Ct,te,{})}}export{Kt as default};