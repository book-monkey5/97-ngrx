import{$ as xe,A as be,B as Fe,C as Ie,I as je,J as B,Ka as Z,L as y,La as _,M as v,Ma as Y,N as s,Na as J,O as c,P as E,Q as K,S as we,W as Te,X as j,Y as L,_ as Oe,a as h,b as m,c as S,d as A,e as b,g as he,ha as H,i as ye,ja as R,m as F,n as z,p as q,q as C,r as Ee,u as ve,v as Re,w as me,x as ge,y as Se,z as G}from"./chunk-VSAGMZBU.js";function Q(e,r){let t=!r?.manualCleanup;t&&!r?.injector&&we(Q);let n=t?r?.injector?.get(L)??E(L):null,i=gt(r?.equal),o;r?.requireSync?o=H({kind:0},{equal:i}):o=H({kind:1,value:r?.initialValue},{equal:i});let u=e.subscribe({next:a=>o.set({kind:1,value:a}),error:a=>{if(r?.rejectErrors)throw a;o.set({kind:2,error:a})}});if(r?.requireSync&&o().kind===0)throw new B(601,!1);return n?.onDestroy(u.unsubscribe.bind(u)),_(()=>{let a=o();switch(a.kind){case 1:return a.value;case 2:throw a.error;case 0:throw new B(601,!1)}},{equal:r?.equal})}function gt(e=Object.is){return(r,t)=>r.kind===1&&t.kind===1&&e(r.value,t.value)}var te={};function Le(e,r){if(te[e]=(te[e]||0)+1,typeof r=="function")return W(e,(...n)=>m(h({},r(...n)),{type:e}));switch(r?r._as:"empty"){case"empty":return W(e,()=>({type:e}));case"props":return W(e,n=>m(h({},n),{type:e}));default:throw new Error("Unexpected config.")}}function er(){return{_as:"props",_p:void 0}}function W(e,r){return Object.defineProperty(r,"type",{value:e,writable:!1})}function Ft(e,r){if(e==null)throw new Error(`${r} must be defined.`)}var He="@ngrx/store/init",I=(()=>{class e extends b{constructor(){super({type:He})}next(t){if(typeof t=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof t>"u")throw new TypeError("Actions must be objects");if(typeof t.type>"u")throw new TypeError("Actions must have a type property");super.next(t)}complete(){}ngOnDestroy(){super.complete()}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=y({token:e,factory:e.\u0275fac})}}return e})(),It=[I],Ze=new s("@ngrx/store Internal Root Guard"),Me=new s("@ngrx/store Internal Initial State"),ie=new s("@ngrx/store Initial State"),Ye=new s("@ngrx/store Reducer Factory"),Ae=new s("@ngrx/store Internal Reducer Factory Provider"),Je=new s("@ngrx/store Initial Reducers"),X=new s("@ngrx/store Internal Initial Reducers"),Ce=new s("@ngrx/store Store Features"),_e=new s("@ngrx/store Internal Store Reducers"),ee=new s("@ngrx/store Internal Feature Reducers"),De=new s("@ngrx/store Internal Feature Configs"),Qe=new s("@ngrx/store Internal Store Features"),ke=new s("@ngrx/store Internal Feature Reducers Token"),We=new s("@ngrx/store Feature Reducers"),Ue=new s("@ngrx/store User Provided Meta Reducers"),D=new s("@ngrx/store Meta Reducers"),Ne=new s("@ngrx/store Internal Resolved Meta Reducers"),Pe=new s("@ngrx/store User Runtime Checks Config"),$e=new s("@ngrx/store Internal User Runtime Checks Config"),w=new s("@ngrx/store Internal Runtime Checks"),se=new s("@ngrx/store Check if Action types are unique"),jt=new s("@ngrx/store Root Store Provider"),wt=new s("@ngrx/store Feature State Provider");function ce(e,r={}){let t=Object.keys(e),n={};for(let o=0;o<t.length;o++){let u=t[o];typeof e[u]=="function"&&(n[u]=e[u])}let i=Object.keys(n);return function(u,a){u=u===void 0?r:u;let d=!1,l={};for(let f=0;f<i.length;f++){let p=i[f],le=n[p],M=u[p],pe=le(M,a);l[p]=pe,d=d||pe!==M}return d?l:u}}function Tt(e,r){return Object.keys(e).filter(t=>t!==r).reduce((t,n)=>Object.assign(t,{[n]:e[n]}),{})}function Xe(...e){return function(r){if(e.length===0)return r;let t=e[e.length-1];return e.slice(0,-1).reduceRight((i,o)=>o(i),t(r))}}function et(e,r){return Array.isArray(r)&&r.length>0&&(e=Xe.apply(null,[...r,e])),(t,n)=>{let i=e(t);return(o,u)=>(o=o===void 0?n:o,i(o,u))}}function Ot(e){let r=Array.isArray(e)&&e.length>0?Xe(...e):t=>t;return(t,n)=>(t=r(t),(i,o)=>(i=i===void 0?n:i,t(i,o)))}var T=class extends S{},k=class extends I{},xt="@ngrx/store/update-reducers",U=(()=>{class e extends b{get currentReducers(){return this.reducers}constructor(t,n,i,o){super(o(i,n)),this.dispatcher=t,this.initialState=n,this.reducers=i,this.reducerFactory=o}addFeature(t){this.addFeatures([t])}addFeatures(t){let n=t.reduce((i,{reducers:o,reducerFactory:u,metaReducers:a,initialState:d,key:l})=>{let f=typeof o=="function"?Ot(a)(o,d):et(u,a)(o,d);return i[l]=f,i},{});this.addReducers(n)}removeFeature(t){this.removeFeatures([t])}removeFeatures(t){this.removeReducers(t.map(n=>n.key))}addReducer(t,n){this.addReducers({[t]:n})}addReducers(t){this.reducers=h(h({},this.reducers),t),this.updateReducers(Object.keys(t))}removeReducer(t){this.removeReducers([t])}removeReducers(t){t.forEach(n=>{this.reducers=Tt(this.reducers,n)}),this.updateReducers(t)}updateReducers(t){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:xt,features:t})}ngOnDestroy(){this.complete()}static{this.\u0275fac=function(n){return new(n||e)(c(k),c(ie),c(Je),c(Ye))}}static{this.\u0275prov=y({token:e,factory:e.\u0275fac})}}return e})(),Mt=[U,{provide:T,useExisting:U},{provide:k,useExisting:I}],O=(()=>{class e extends A{ngOnDestroy(){this.complete()}static{this.\u0275fac=(()=>{let t;return function(i){return(t||(t=Te(e)))(i||e)}})()}static{this.\u0275prov=y({token:e,factory:e.\u0275fac})}}return e})(),At=[O],N=class extends S{},Ve=(()=>{class e extends b{static{this.INIT=He}constructor(t,n,i,o){super(o);let a=t.pipe(ye(he)).pipe(je(n)),d={state:o},l=a.pipe(Ie(Ct,d));this.stateSubscription=l.subscribe(({state:f,action:p})=>{this.next(f),i.next(p)}),this.state=Q(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}static{this.\u0275fac=function(n){return new(n||e)(c(I),c(T),c(O),c(ie))}}static{this.\u0275prov=y({token:e,factory:e.\u0275fac})}}return e})();function Ct(e={state:void 0},[r,t]){let{state:n}=e;return{state:t(n,r),action:r}}var _t=[Ve,{provide:N,useExisting:Ve}],g=(()=>{class e extends S{constructor(t,n,i,o){super(),this.actionsObserver=n,this.reducerManager=i,this.injector=o,this.source=t,this.state=t.state}select(t,...n){return kt.call(null,t,...n)(this)}selectSignal(t,n){return _(()=>t(this.state()),n)}lift(t){let n=new e(this,this.actionsObserver,this.reducerManager);return n.operator=t,n}dispatch(t,n){if(typeof t=="function")return this.processDispatchFn(t,n);this.actionsObserver.next(t)}next(t){this.actionsObserver.next(t)}error(t){this.actionsObserver.error(t)}complete(){this.actionsObserver.complete()}addReducer(t,n){this.reducerManager.addReducer(t,n)}removeReducer(t){this.reducerManager.removeReducer(t)}processDispatchFn(t,n){Ft(this.injector,"Store Injector");let i=n?.injector??Ut()??this.injector;return J(()=>{let o=t();Y(()=>this.dispatch(o))},{injector:i})}static{this.\u0275fac=function(n){return new(n||e)(c(N),c(I),c(U),c(j))}}static{this.\u0275prov=y({token:e,factory:e.\u0275fac})}}return e})(),Dt=[g];function kt(e,r,...t){return function(i){let o;if(typeof e=="string"){let u=[r,...t].filter(Boolean);o=i.pipe(Fe(e,...u))}else if(typeof e=="function")o=i.pipe(F(u=>e(u,r)));else throw new TypeError(`Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`);return o.pipe(ge())}}function Ut(){try{return E(j)}catch{return}}var ue="https://ngrx.io/guide/store/configuration/runtime-checks";function ze(e){return e===void 0}function qe(e){return e===null}function tt(e){return Array.isArray(e)}function Nt(e){return typeof e=="string"}function Pt(e){return typeof e=="boolean"}function $t(e){return typeof e=="number"}function nt(e){return typeof e=="object"&&e!==null}function Vt(e){return nt(e)&&!tt(e)}function zt(e){if(!Vt(e))return!1;let r=Object.getPrototypeOf(e);return r===Object.prototype||r===null}function ne(e){return typeof e=="function"}function qt(e){return ne(e)&&e.hasOwnProperty("\u0275cmp")}function Gt(e,r){return Object.prototype.hasOwnProperty.call(e,r)}var Bt=!1;function Kt(){return Bt}function Ge(e,r){return e===r}function Lt(e,r,t){for(let n=0;n<e.length;n++)if(!t(e[n],r[n]))return!0;return!1}function rt(e,r=Ge,t=Ge){let n=null,i=null,o;function u(){n=null,i=null}function a(f=void 0){o={result:f}}function d(){o=void 0}function l(){if(o!==void 0)return o.result;if(!n)return i=e.apply(null,arguments),n=arguments,i;if(!Lt(arguments,n,r))return i;let f=e.apply(null,arguments);return n=arguments,t(i,f)?i:(i=f,f)}return{memoized:l,reset:u,setResult:a,clearResult:d}}function Ht(...e){return Yt(rt)(...e)}function Zt(e,r,t,n){if(t===void 0){let o=r.map(u=>u(e));return n.memoized.apply(null,o)}let i=r.map(o=>o(e,t));return n.memoized.apply(null,[...i,t])}function Yt(e,r={stateFn:Zt}){return function(...t){let n=t;if(Array.isArray(n[0])){let[f,...p]=n;n=[...f,...p]}else n.length===1&&Jt(n[0])&&(n=Qt(n[0]));let i=n.slice(0,n.length-1),o=n[n.length-1],u=i.filter(f=>f.release&&typeof f.release=="function"),a=e(function(...f){return o.apply(null,f)}),d=rt(function(f,p){return r.stateFn.apply(null,[f,i,p,a])});function l(){d.reset(),a.reset(),u.forEach(f=>f.release())}return Object.assign(d.memoized,{release:l,projector:a.memoized,setResult:d.setResult,clearResult:d.clearResult})}}function tr(e){return Ht(r=>{let t=r[e];return!Kt()&&Z()&&!(e in r)&&console.warn(`@ngrx/store: The feature name "${e}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${e}', ...) or StoreModule.forFeature('${e}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),t},r=>r)}function Jt(e){return!!e&&typeof e=="object"&&Object.values(e).every(r=>typeof r=="function")}function Qt(e){let r=Object.values(e),t=Object.keys(e),n=(...i)=>t.reduce((o,u,a)=>m(h({},o),{[u]:i[a]}),{});return[...r,n]}function Wt(e){return e instanceof s?E(e):e}function Xt(e,r){return r.map((t,n)=>{if(e[n]instanceof s){let i=E(e[n]);return{key:t.key,reducerFactory:i.reducerFactory?i.reducerFactory:ce,metaReducers:i.metaReducers?i.metaReducers:[],initialState:i.initialState}}return t})}function en(e){return e.map(r=>r instanceof s?E(r):r)}function ot(e){return typeof e=="function"?e():e}function tn(e,r){return e.concat(r)}function nn(){if(E(g,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function rn(e,r){return function(t,n){let i=r.action(n)?re(n):n,o=e(t,i);return r.state()?re(o):o}}function re(e){Object.freeze(e);let r=ne(e);return Object.getOwnPropertyNames(e).forEach(t=>{if(!t.startsWith("\u0275")&&Gt(e,t)&&(!r||t!=="caller"&&t!=="callee"&&t!=="arguments")){let n=e[t];(nt(n)||ne(n))&&!Object.isFrozen(n)&&re(n)}}),e}function on(e,r){return function(t,n){if(r.action(n)){let o=oe(n);Be(o,"action")}let i=e(t,n);if(r.state()){let o=oe(i);Be(o,"state")}return i}}function oe(e,r=[]){return(ze(e)||qe(e))&&r.length===0?{path:["root"],value:e}:Object.keys(e).reduce((n,i)=>{if(n)return n;let o=e[i];return qt(o)?n:ze(o)||qe(o)||$t(o)||Pt(o)||Nt(o)||tt(o)?!1:zt(o)?oe(o,[...r,i]):{path:[...r,i],value:o}},!1)}function Be(e,r){if(e===!1)return;let t=e.path.join("."),n=new Error(`Detected unserializable ${r} at "${t}". ${ue}#strict${r}serializability`);throw n.value=e.value,n.unserializablePath=t,n}function sn(e,r){return function(t,n){if(r.action(n)&&!Oe.isInAngularZone())throw new Error(`Action '${n.type}' running outside NgZone. ${ue}#strictactionwithinngzone`);return e(t,n)}}function cn(e){return Z()?h({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},e):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function un({strictActionSerializability:e,strictStateSerializability:r}){return t=>e||r?on(t,{action:n=>e&&!ae(n),state:()=>r}):t}function an({strictActionImmutability:e,strictStateImmutability:r}){return t=>e||r?rn(t,{action:n=>e&&!ae(n),state:()=>r}):t}function ae(e){return e.type.startsWith("@ngrx")}function fn({strictActionWithinNgZone:e}){return r=>e?sn(r,{action:t=>e&&!ae(t)}):r}function dn(e){return[{provide:$e,useValue:e},{provide:Pe,useFactory:ln,deps:[$e]},{provide:w,deps:[Pe],useFactory:cn},{provide:D,multi:!0,deps:[w],useFactory:an},{provide:D,multi:!0,deps:[w],useFactory:un},{provide:D,multi:!0,deps:[w],useFactory:fn}]}function it(){return[{provide:se,multi:!0,deps:[w],useFactory:pn}]}function ln(e){return e}function pn(e){if(!e.strictActionTypeUniqueness)return;let r=Object.entries(te).filter(([,t])=>t>1).map(([t])=>t);if(r.length)throw new Error(`Action types are registered more than once, ${r.map(t=>`"${t}"`).join(", ")}. ${ue}#strictactiontypeuniqueness`)}function hn(e={},r={}){return[{provide:Ze,useFactory:nn},{provide:Me,useValue:r.initialState},{provide:ie,useFactory:ot,deps:[Me]},{provide:X,useValue:e},{provide:_e,useExisting:e instanceof s?e:X},{provide:Je,deps:[X,[new K(_e)]],useFactory:Wt},{provide:Ue,useValue:r.metaReducers?r.metaReducers:[]},{provide:Ne,deps:[D,Ue],useFactory:tn},{provide:Ae,useValue:r.reducerFactory?r.reducerFactory:ce},{provide:Ye,deps:[Ae,Ne],useFactory:et},It,Mt,At,_t,Dt,dn(r.runtimeChecks),it()]}function yn(e,r,t={}){return[{provide:De,multi:!0,useValue:e instanceof Object?{}:t},{provide:Ce,multi:!0,useValue:{key:e instanceof Object?e.name:e,reducerFactory:!(t instanceof s)&&t.reducerFactory?t.reducerFactory:ce,metaReducers:!(t instanceof s)&&t.metaReducers?t.metaReducers:[],initialState:!(t instanceof s)&&t.initialState?t.initialState:void 0}},{provide:Qe,deps:[De,Ce],useFactory:Xt},{provide:ee,multi:!0,useValue:e instanceof Object?e.reducer:r},{provide:ke,multi:!0,useExisting:r instanceof s?r:ee},{provide:We,multi:!0,deps:[ee,[new K(ke)]],useFactory:en},it()]}var x=(()=>{class e{constructor(t,n,i,o,u,a){}static{this.\u0275fac=function(n){return new(n||e)(c(I),c(T),c(O),c(g),c(Ze,8),c(se,8))}}static{this.\u0275mod=R({type:e})}static{this.\u0275inj=v({})}}return e})(),P=(()=>{class e{constructor(t,n,i,o,u){this.features=t,this.featureReducers=n,this.reducerManager=i;let a=t.map((d,l)=>{let p=n.shift()[l];return m(h({},d),{reducers:p,initialState:ot(d.initialState)})});i.addFeatures(a)}ngOnDestroy(){this.reducerManager.removeFeatures(this.features)}static{this.\u0275fac=function(n){return new(n||e)(c(Qe),c(We),c(U),c(x),c(se,8))}}static{this.\u0275mod=R({type:e})}static{this.\u0275inj=v({})}}return e})(),nr=(()=>{class e{static forRoot(t,n){return{ngModule:x,providers:[...hn(t,n)]}}static forFeature(t,n,i={}){return{ngModule:P,providers:[...yn(t,n,i)]}}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=R({type:e})}static{this.\u0275inj=v({})}}return e})();function rr(...e){let r=e.pop(),t=e.map(n=>n.type);return{reducer:r,types:t}}function or(e,...r){let t=new Map;for(let n of r)for(let i of n.types){let o=t.get(i);if(o){let u=(a,d)=>n.reducer(o(a,d),d);t.set(i,u)}else t.set(i,n.reducer)}return function(n=e,i){let o=t.get(i.type);return o?o(n,i):n}}var vn={dispatch:!0,functional:!1,useEffectsErrorHandler:!0},V="__@ngrx/effects_create__";function vr(e,r={}){let t=r.functional?e:e(),n=h(h({},vn),r);return Object.defineProperty(t,V,{value:n}),t}function Rn(e){return Object.getOwnPropertyNames(e).filter(n=>e[n]&&e[n].hasOwnProperty(V)?e[n][V].hasOwnProperty("dispatch"):!1).map(n=>{let i=e[n][V];return h({propertyName:n},i)})}function mn(e){return Rn(e)}function at(e){return Object.getPrototypeOf(e)}function gn(e){return!!e.constructor&&e.constructor.name!=="Object"&&e.constructor.name!=="Function"}function ft(e){return typeof e=="function"}function st(e){return e.filter(ft)}function Sn(e){return e instanceof s||ft(e)}function bn(e,r,t){let n=at(e),o=!!n&&n.constructor.name!=="Object"?n.constructor.name:null,u=mn(e).map(({propertyName:a,dispatch:d,useEffectsErrorHandler:l})=>{let f=typeof e[a]=="function"?e[a]():e[a],p=l?t(f,r):f;return d===!1?p.pipe(Re()):p.pipe(be()).pipe(F(M=>({effect:e[a],notification:M,propertyName:a,sourceName:o,sourceInstance:e})))});return q(...u)}var Fn=10;function dt(e,r,t=Fn){return e.pipe(Ee(n=>(r&&r.handleError(n),t<=1?e:dt(e,r,t-1))))}var Rr=(()=>{class e extends S{constructor(t){super(),t&&(this.source=t)}lift(t){let n=new e;return n.source=this,n.operator=t,n}static{this.\u0275fac=function(n){return new(n||e)(c(O))}}static{this.\u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function mr(...e){return C(r=>e.some(t=>typeof t=="string"?t===r.type:t.type===r.type))}var lt=new s("@ngrx/effects Internal Root Guard"),$=new s("@ngrx/effects User Provided Effects"),fe=new s("@ngrx/effects Internal Root Effects"),pt=new s("@ngrx/effects Internal Root Effects Instances"),ct=new s("@ngrx/effects Internal Feature Effects"),ht=new s("@ngrx/effects Internal Feature Effects Instance Groups"),In=new s("@ngrx/effects Effects Error Handler",{providedIn:"root",factory:()=>dt}),yt="@ngrx/effects/init",gr=Le(yt);function jn(e,r){if(e.notification.kind==="N"){let t=e.notification.value;!wn(t)&&r.handleError(new Error(`Effect ${Tn(e)} dispatched an invalid action: ${On(t)}`))}}function wn(e){return typeof e!="function"&&e&&e.type&&typeof e.type=="string"}function Tn({propertyName:e,sourceInstance:r,sourceName:t}){let n=typeof r[e]=="function";return!!t?`"${t}.${String(e)}${n?"()":""}"`:`"${String(e)}()"`}function On(e){try{return JSON.stringify(e)}catch{return e}}var xn="ngrxOnIdentifyEffects";function Mn(e){return de(e,xn)}var An="ngrxOnRunEffects";function Cn(e){return de(e,An)}var _n="ngrxOnInitEffects";function Dn(e){return de(e,_n)}function de(e,r){return e&&r in e&&typeof e[r]=="function"}var Et=(()=>{class e extends A{constructor(t,n){super(),this.errorHandler=t,this.effectsErrorHandler=n}addEffects(t){this.next(t)}toActions(){return this.pipe(G(t=>gn(t)?at(t):t),z(t=>t.pipe(G(kn))),z(t=>{let n=t.pipe(Se(o=>Un(this.errorHandler,this.effectsErrorHandler)(o)),F(o=>(jn(o,this.errorHandler),o.notification)),C(o=>o.kind==="N"&&o.value!=null),me()),i=t.pipe(ve(1),C(Dn),F(o=>o.ngrxOnInitEffects()));return q(n,i)}))}static{this.\u0275fac=function(n){return new(n||e)(c(xe),c(In))}}static{this.\u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function kn(e){return Mn(e)?e.ngrxOnIdentifyEffects():""}function Un(e,r){return t=>{let n=bn(t,e,r);return Cn(t)?t.ngrxOnRunEffects(n):n}}var vt=(()=>{class e{get isStarted(){return!!this.effectsSubscription}constructor(t,n){this.effectSources=t,this.store=n,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}static{this.\u0275fac=function(n){return new(n||e)(c(Et),c(g))}}static{this.\u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Rt=(()=>{class e{constructor(t,n,i,o,u,a,d){this.sources=t,n.start();for(let l of o)t.addEffects(l);i.dispatch({type:yt})}addEffects(t){this.sources.addEffects(t)}static{this.\u0275fac=function(n){return new(n||e)(c(Et),c(vt),c(g),c(pt),c(x,8),c(P,8),c(lt,8))}}static{this.\u0275mod=R({type:e})}static{this.\u0275inj=v({})}}return e})(),Nn=(()=>{class e{constructor(t,n,i,o){let u=n.flat();for(let a of u)t.addEffects(a)}static{this.\u0275fac=function(n){return new(n||e)(c(Rt),c(ht),c(x,8),c(P,8))}}static{this.\u0275mod=R({type:e})}static{this.\u0275inj=v({})}}return e})(),Sr=(()=>{class e{static forFeature(...t){let n=t.flat(),i=st(n);return{ngModule:Nn,providers:[i,{provide:ct,multi:!0,useValue:n},{provide:$,multi:!0,useValue:[]},{provide:ht,multi:!0,useFactory:ut,deps:[ct,$]}]}}static forRoot(...t){let n=t.flat(),i=st(n);return{ngModule:Rt,providers:[i,{provide:fe,useValue:[n]},{provide:lt,useFactory:Pn},{provide:$,multi:!0,useValue:[]},{provide:pt,useFactory:ut,deps:[fe,$]}]}}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=R({type:e})}static{this.\u0275inj=v({})}}return e})();function ut(e,r){let t=[];for(let n of e)t.push(...n);for(let n of r)t.push(...n);return t.map(n=>Sn(n)?E(n):n)}function Pn(){let e=E(vt,{optional:!0,skipSelf:!0}),r=E(fe,{self:!0});if(!(r.length===1&&r[0].length===0)&&e)throw new TypeError("EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead.");return"guarded"}var mt=class e{_isAuthenticated$=new b(!0);isAuthenticated$=this._isAuthenticated$.asObservable();get isAuthenticated(){return this._isAuthenticated$.value}login(){this._isAuthenticated$.next(!0)}logout(){this._isAuthenticated$.next(!1)}static \u0275fac=function(t){return new(t||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})};export{Q as a,Le as b,er as c,He as d,I as e,ie as f,T as g,k as h,xt as i,O as j,N as k,g as l,Ht as m,tr as n,nr as o,rr as p,or as q,vr as r,Rr as s,mr as t,Sr as u,mt as v};
