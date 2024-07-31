import{a as le,d as gt,e as ot,f as de,g as fe,h as me,i as St,j as he,k as ge,o as Se,u as xe,v as $}from"./chunk-MXA4WOOO.js";import{$ as Xt,$a as xt,Aa as Qt,Ba as te,C as Ht,D as Vt,E as Gt,Ea as ee,F as H,Fa as ne,G as tt,Ga as ie,H as mt,I as Zt,Ja as oe,L as N,M as j,N as V,Na as re,O as A,Oa as it,P as G,Pa as se,R as L,S as D,Sa as ce,Ta as ae,Ua as ue,V as Wt,Va as pe,Xa as Ie,Y as Z,Ya as ye,Z as W,Za as P,_ as Kt,_a as Ae,a as B,ab as ve,b as U,c as lt,d as Nt,ea as O,f as jt,fa as et,g as Lt,h as Dt,i as Pt,ia as qt,k as dt,l as $t,m as M,ma as K,oa as k,p as ft,pa as Jt,q as w,qa as x,r as Ft,ra as I,s as zt,sa as nt,t as Q,u as Bt,va as X,wa as q,x as Ut,xa as ht,ya as Yt,za as v}from"./chunk-AT2FGDAP.js";var Y="PERFORM_ACTION",tn="REFRESH",_e="RESET",we="ROLLBACK",ke="COMMIT",Me="SWEEP",Re="TOGGLE_ACTION",en="SET_ACTIONS_ACTIVE",Ne="JUMP_TO_STATE",je="JUMP_TO_ACTION",Mt="IMPORT_STATE",Le="LOCK_CHANGES",De="PAUSE_RECORDING",F=class{constructor(n,o){if(this.action=n,this.timestamp=o,this.type=Y,typeof n.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')}},It=class{constructor(){this.type=tn}},yt=class{constructor(n){this.timestamp=n,this.type=_e}},At=class{constructor(n){this.timestamp=n,this.type=we}},vt=class{constructor(n){this.timestamp=n,this.type=ke}},Et=class{constructor(){this.type=Me}},bt=class{constructor(n){this.id=n,this.type=Re}};var Tt=class{constructor(n){this.index=n,this.type=Ne}},Ct=class{constructor(n){this.actionId=n,this.type=je}},Ot=class{constructor(n){this.nextLiftedState=n,this.type=Mt}},_t=class{constructor(n){this.status=n,this.type=Le}},wt=class{constructor(n){this.status=n,this.type=De}};var at=new V("@ngrx/store-devtools Options"),Ee=new V("@ngrx/store-devtools Initial Config");function Pe(){return null}var nn="NgRx Store DevTools";function on(t){let n={maxAge:!1,monitor:Pe,actionSanitizer:void 0,stateSanitizer:void 0,name:nn,serialize:!1,logOnly:!1,autoPause:!1,trace:!1,traceLimit:75,features:{pause:!0,lock:!0,persist:!0,export:!0,import:"custom",jump:!0,skip:!0,reorder:!0,dispatch:!0,test:!0},connectInZone:!1},o=typeof t=="function"?t():t,e=o.logOnly?{pause:!0,export:!0,test:!0}:!1,i=o.features||e||n.features;i.import===!0&&(i.import="custom");let s=Object.assign({},n,{features:i},o);if(s.maxAge&&s.maxAge<2)throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${s.maxAge}`);return s}function be(t,n){return t.filter(o=>n.indexOf(o)<0)}function $e(t){let{computedStates:n,currentStateIndex:o}=t;if(o>=n.length){let{state:i}=n[n.length-1];return i}let{state:e}=n[o];return e}function J(t){return new F(t,+Date.now())}function rn(t,n){return Object.keys(n).reduce((o,e)=>{let i=Number(e);return o[i]=Fe(t,n[i],i),o},{})}function Fe(t,n,o){return U(B({},n),{action:t(n.action,o)})}function sn(t,n){return n.map((o,e)=>({state:ze(t,o.state,e),error:o.error}))}function ze(t,n,o){return t(n,o)}function Be(t){return t.predicate||t.actionsSafelist||t.actionsBlocklist}function cn(t,n,o,e){let i=[],s={},h=[];return t.stagedActionIds.forEach((u,S)=>{let p=t.actionsById[u];p&&(S&&Rt(t.computedStates[S],p,n,o,e)||(s[u]=p,i.push(u),h.push(t.computedStates[S])))}),U(B({},t),{stagedActionIds:i,actionsById:s,computedStates:h})}function Rt(t,n,o,e,i){let s=o&&!o(t,n.action),h=e&&!n.action.type.match(e.map(S=>Te(S)).join("|")),u=i&&n.action.type.match(i.map(S=>Te(S)).join("|"));return s||h||u}function Te(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Ue(t){return{ngZone:t?G(qt):null,connectInZone:t}}var ut=(()=>{let n=class n extends ot{};n.\u0275fac=(()=>{let e;return function(s){return(e||(e=Kt(n)))(s||n)}})(),n.\u0275prov=N({token:n,factory:n.\u0275fac});let t=n;return t})(),rt={START:"START",DISPATCH:"DISPATCH",STOP:"STOP",ACTION:"ACTION"},kt=new V("@ngrx/store-devtools Redux Devtools Extension"),He=(()=>{let n=class n{constructor(e,i,s){this.config=i,this.dispatcher=s,this.zoneConfig=Ue(this.config.connectInZone),this.devtoolsExtension=e,this.createActionStreams()}notify(e,i){if(this.devtoolsExtension)if(e.type===Y){if(i.isLocked||i.isPaused)return;let s=$e(i);if(Be(this.config)&&Rt(s,e,this.config.predicate,this.config.actionsSafelist,this.config.actionsBlocklist))return;let h=this.config.stateSanitizer?ze(this.config.stateSanitizer,s,i.currentStateIndex):s,u=this.config.actionSanitizer?Fe(this.config.actionSanitizer,e,i.nextActionId):e;this.sendToReduxDevtools(()=>this.extensionConnection.send(u,h))}else{let s=U(B({},i),{stagedActionIds:i.stagedActionIds,actionsById:this.config.actionSanitizer?rn(this.config.actionSanitizer,i.actionsById):i.actionsById,computedStates:this.config.stateSanitizer?sn(this.config.stateSanitizer,i.computedStates):i.computedStates});this.sendToReduxDevtools(()=>this.devtoolsExtension.send(null,s,this.getExtensionConfig(this.config)))}}createChangesObservable(){return this.devtoolsExtension?new lt(e=>{let i=this.zoneConfig.connectInZone?this.zoneConfig.ngZone.runOutsideAngular(()=>this.devtoolsExtension.connect(this.getExtensionConfig(this.config))):this.devtoolsExtension.connect(this.getExtensionConfig(this.config));return this.extensionConnection=i,i.init(),i.subscribe(s=>e.next(s)),i.unsubscribe}):Dt}createActionStreams(){let e=this.createChangesObservable().pipe(Vt()),i=e.pipe(w(c=>c.type===rt.START)),s=e.pipe(w(c=>c.type===rt.STOP)),h=e.pipe(w(c=>c.type===rt.DISPATCH),M(c=>this.unwrapAction(c.payload)),zt(c=>c.type===Mt?this.dispatcher.pipe(w(r=>r.type===St),$t(1e3),Q(1e3),M(()=>c),Ft(()=>dt(c)),Bt(1)):dt(c))),S=e.pipe(w(c=>c.type===rt.ACTION),M(c=>this.unwrapAction(c.payload))).pipe(tt(s)),p=h.pipe(tt(s));this.start$=i.pipe(tt(s)),this.actions$=this.start$.pipe(H(()=>S)),this.liftedActions$=this.start$.pipe(H(()=>p))}unwrapAction(e){return typeof e=="string"?(0,eval)(`(${e})`):e}getExtensionConfig(e){let i={name:e.name,features:e.features,serialize:e.serialize,autoPause:e.autoPause??!1,trace:e.trace??!1,traceLimit:e.traceLimit??75};return e.maxAge!==!1&&(i.maxAge=e.maxAge),i}sendToReduxDevtools(e){try{e()}catch(i){console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools",i)}}};n.\u0275fac=function(i){return new(i||n)(A(kt),A(at),A(ut))},n.\u0275prov=N({token:n,factory:n.\u0275fac});let t=n;return t})(),ct={type:gt},an="@ngrx/store-devtools/recompute",un={type:an};function Ve(t,n,o,e,i){if(e)return{state:o,error:"Interrupted by an error up the chain"};let s=o,h;try{s=t(o,n)}catch(u){h=u.toString(),i.handleError(u)}return{state:s,error:h}}function st(t,n,o,e,i,s,h,u,S){if(n>=t.length&&t.length===s.length)return t;let p=t.slice(0,n),c=s.length-(S?1:0);for(let r=n;r<c;r++){let f=s[r],E=i[f].action,l=p[r-1],a=l?l.state:e,T=l?l.error:void 0,C=h.indexOf(f)>-1?l:Ve(o,E,a,T,u);p.push(C)}return S&&p.push(t[t.length-1]),p}function pn(t,n){return{monitorState:n(void 0,{}),nextActionId:1,actionsById:{0:J(ct)},stagedActionIds:[0],skippedActionIds:[],committedState:t,currentStateIndex:0,computedStates:[],isLocked:!1,isPaused:!1}}function ln(t,n,o,e,i={}){return s=>(h,u)=>{let{monitorState:S,actionsById:p,nextActionId:c,stagedActionIds:r,skippedActionIds:f,committedState:E,currentStateIndex:l,computedStates:a,isLocked:T,isPaused:y}=h||n;h||(p=Object.create(p));function C(g){let m=g,_=r.slice(1,m+1);for(let b=0;b<_.length;b++)if(a[b+1].error){m=b,_=r.slice(1,m+1);break}else delete p[_[b]];f=f.filter(b=>_.indexOf(b)===-1),r=[0,...r.slice(m+1)],E=a[m].state,a=a.slice(m),l=l>m?l-m:0}function R(){p={0:J(ct)},c=1,r=[0],f=[],E=a[l].state,l=0,a=[]}let d=0;switch(u.type){case Le:{T=u.status,d=1/0;break}case De:{y=u.status,y?(r=[...r,c],p[c]=new F({type:"@ngrx/devtools/pause"},+Date.now()),c++,d=r.length-1,a=a.concat(a[a.length-1]),l===r.length-2&&l++,d=1/0):R();break}case _e:{p={0:J(ct)},c=1,r=[0],f=[],E=t,l=0,a=[];break}case ke:{R();break}case we:{p={0:J(ct)},c=1,r=[0],f=[],l=0,a=[];break}case Re:{let{id:g}=u;f.indexOf(g)===-1?f=[g,...f]:f=f.filter(_=>_!==g),d=r.indexOf(g);break}case en:{let{start:g,end:m,active:_}=u,b=[];for(let pt=g;pt<m;pt++)b.push(pt);_?f=be(f,b):f=[...f,...b],d=r.indexOf(g);break}case Ne:{l=u.index,d=1/0;break}case je:{let g=r.indexOf(u.actionId);g!==-1&&(l=g),d=1/0;break}case Me:{r=be(r,f),f=[],l=Math.min(l,r.length-1);break}case Y:{if(T)return h||n;if(y||h&&Rt(h.computedStates[l],u,i.predicate,i.actionsSafelist,i.actionsBlocklist)){let m=a[a.length-1];a=[...a.slice(0,-1),Ve(s,u.action,m.state,m.error,o)],d=1/0;break}i.maxAge&&r.length===i.maxAge&&C(1),l===r.length-1&&l++;let g=c++;p[g]=u,r=[...r,g],d=r.length-1;break}case Mt:{({monitorState:S,actionsById:p,nextActionId:c,stagedActionIds:r,skippedActionIds:f,committedState:E,currentStateIndex:l,computedStates:a,isLocked:T,isPaused:y}=u.nextLiftedState);break}case gt:{d=0,i.maxAge&&r.length>i.maxAge&&(a=st(a,d,s,E,p,r,f,o,y),C(r.length-i.maxAge),d=1/0);break}case St:{if(a.filter(m=>m.error).length>0)d=0,i.maxAge&&r.length>i.maxAge&&(a=st(a,d,s,E,p,r,f,o,y),C(r.length-i.maxAge),d=1/0);else{if(!y&&!T){l===r.length-1&&l++;let m=c++;p[m]=new F(u,+Date.now()),r=[...r,m],d=r.length-1,a=st(a,d,s,E,p,r,f,o,y)}a=a.map(m=>U(B({},m),{state:s(m.state,un)})),l=r.length-1,i.maxAge&&r.length>i.maxAge&&C(r.length-i.maxAge),d=1/0}break}default:{d=1/0;break}}return a=st(a,d,s,E,p,r,f,o,y),S=e(S,u),{monitorState:S,actionsById:p,nextActionId:c,stagedActionIds:r,skippedActionIds:f,committedState:E,currentStateIndex:l,computedStates:a,isLocked:T,isPaused:y}}}var Ce=(()=>{let n=class n{constructor(e,i,s,h,u,S,p,c){let r=pn(p,c.monitor),f=ln(p,r,S,c.monitor,c),E=ft(ft(i.asObservable().pipe(Gt(1)),h.actions$).pipe(M(J)),e,h.liftedActions$).pipe(Pt(Lt)),l=s.pipe(M(f)),a=Ue(c.connectInZone),T=new jt(1);this.liftedStateSubscription=E.pipe(Zt(l),Oe(a),Ht(({state:R},[d,g])=>{let m=g(R,d);return d.type!==Y&&Be(c)&&(m=cn(m,c.predicate,c.actionsSafelist,c.actionsBlocklist)),h.notify(d,m),{state:m,action:d}},{state:r,action:null})).subscribe(({state:R,action:d})=>{if(T.next(R),d.type===Y){let g=d.action;u.next(g)}}),this.extensionStartSubscription=h.start$.pipe(Oe(a)).subscribe(()=>{this.refresh()});let y=T.asObservable(),C=y.pipe(M($e));Object.defineProperty(C,"state",{value:le(C,{manualCleanup:!0,requireSync:!0})}),this.dispatcher=e,this.liftedState=y,this.state=C}ngOnDestroy(){this.liftedStateSubscription.unsubscribe(),this.extensionStartSubscription.unsubscribe()}dispatch(e){this.dispatcher.next(e)}next(e){this.dispatcher.next(e)}error(e){}complete(){}performAction(e){this.dispatch(new F(e,+Date.now()))}refresh(){this.dispatch(new It)}reset(){this.dispatch(new yt(+Date.now()))}rollback(){this.dispatch(new At(+Date.now()))}commit(){this.dispatch(new vt(+Date.now()))}sweep(){this.dispatch(new Et)}toggleAction(e){this.dispatch(new bt(e))}jumpToAction(e){this.dispatch(new Ct(e))}jumpToState(e){this.dispatch(new Tt(e))}importState(e){this.dispatch(new Ot(e))}lockChanges(e){this.dispatch(new _t(e))}pauseRecording(e){this.dispatch(new wt(e))}};n.\u0275fac=function(i){return new(i||n)(A(ut),A(ot),A(fe),A(He),A(he),A(Xt),A(de),A(at))},n.\u0275prov=N({token:n,factory:n.\u0275fac});let t=n;return t})();function Oe({ngZone:t,connectInZone:n}){return o=>n?new lt(e=>o.subscribe({next:i=>t.run(()=>e.next(i)),error:i=>t.run(()=>e.error(i)),complete:()=>t.run(()=>e.complete())})):o}var dn=new V("@ngrx/store-devtools Is Devtools Extension or Monitor Present");function fn(t,n){return!!t||n.monitor!==Pe}function mn(){let t="__REDUX_DEVTOOLS_EXTENSION__";return typeof window=="object"&&typeof window[t]<"u"?window[t]:null}function hn(t={}){return Wt([He,ut,Ce,{provide:Ee,useValue:t},{provide:dn,deps:[kt,at],useFactory:fn},{provide:kt,useFactory:mn},{provide:at,deps:[Ee],useFactory:on},{provide:ge,deps:[Ce],useFactory:gn},{provide:me,useExisting:ut}])}function gn(t){return t.state}var Ge=(()=>{let n=class n{static instrument(e={}){return{ngModule:n,providers:[hn(e)]}}};n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=D({type:n}),n.\u0275inj=j({});let t=n;return t})();var xn=t=>["/books",t];function In(t,n){if(t&1&&(x(0,"li")(1,"a",6),v(2),x(3,"p",7),v(4),I()()()),t&2){let o=n.$implicit;O(),k("routerLink",ee(3,xn,o.isbn)),O(),te(" ",o.title," "),O(2),Qt(o.subtitle)}}function yn(t,n){t&1&&(x(0,"li"),v(1,"No results"),I())}function An(t,n){if(t&1&&(x(0,"ul",3),K(1,In,5,5,"li",4)(2,yn,2,0,"li",5),I()),t&2){let o=n.ngIf;O(),k("ngForOf",o),O(),k("ngIf",!o.length)}}var We=(()=>{class t{service;input$=new Nt;isLoading=!1;results$;constructor(o){this.service=o,this.results$=this.input$.pipe(w(e=>e.length>=3),Q(500),Ut(),mt(()=>this.isLoading=!0),H(e=>this.service.getAllSearch(e)),mt(()=>this.isLoading=!1))}static \u0275fac=function(e){return new(e||t)(et(ve))};static \u0275cmp=L({type:t,selectors:[["bm-search"]],decls:4,vars:5,consts:[["searchInput",""],["type","search","autocomplete","off","aria-label","Search",3,"input"],["class","search-results",4,"ngIf"],[1,"search-results"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"routerLink"],["role","doc-subtitle"]],template:function(e,i){if(e&1){let s=X();x(0,"input",1,0),q("input",function(){Z(s);let u=Yt(1);return W(i.input$.next(u.value))}),I(),K(2,An,3,2,"ul",2),ne(3,"async")}e&2&&(Jt("loading",i.isLoading),O(2),k("ngIf",ie(3,3,i.results$)))},dependencies:[re,it,P,se]})}return t})();var Ke=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=L({type:t,selectors:[["bm-home"]],decls:7,vars:0,consts:[["routerLink","/books",1,"button","red"]],template:function(e,i){e&1&&(x(0,"h1"),v(1,"Home"),I(),x(2,"a",0),v(3,` Show book list
`),I(),x(4,"h2"),v(5,"Search"),I(),nt(6,"bm-search"))},dependencies:[P,We]})}return t})();var Xe=()=>{let t=G($),n=G(ye);return t.isAuthenticated?!0:(window.alert("Not logged in!"),n.parseUrl("/home"))};var En=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:Ke},{path:"books",loadChildren:()=>import("./chunk-PGBBYPSD.js").then(t=>t.BooksModule)},{path:"admin",loadChildren:()=>import("./chunk-OR2GDOSX.js").then(t=>t.AdminModule),canActivate:[Xe]}],qe=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=D({type:t});static \u0275inj=j({imports:[xt.forRoot(En),xt]})}return t})();function Tn(t,n){if(t&1){let o=X();x(0,"button",6),q("click",function(){Z(o);let i=ht();return W(i.auth.login())}),v(1,"Login"),I()}}function Cn(t,n){if(t&1){let o=X();x(0,"button",7),q("click",function(){Z(o);let i=ht();return W(i.auth.logout())}),v(1,"Logout"),I()}}var Je=(()=>{class t{auth;constructor(o){this.auth=o}static \u0275fac=function(e){return new(e||t)(et($))};static \u0275cmp=L({type:t,selectors:[["bm-root"]],decls:12,vars:2,consts:[["routerLink","/home","routerLinkActive","active","ariaCurrentWhenActive","page"],["routerLink","/books","routerLinkActive","active","ariaCurrentWhenActive","page"],["routerLink","/admin","routerLinkActive","active","ariaCurrentWhenActive","page"],[1,"actions"],["class","green",3,"click",4,"ngIf"],["class","red",3,"click",4,"ngIf"],[1,"green",3,"click"],[1,"red",3,"click"]],template:function(e,i){e&1&&(x(0,"nav")(1,"a",0),v(2,"Home"),I(),x(3,"a",1),v(4,"Books"),I(),x(5,"a",2),v(6,"Administration"),I(),x(7,"div",3),K(8,Tn,2,0,"button",4)(9,Cn,2,0,"button",5),I()(),x(10,"main"),nt(11,"router-outlet"),I()),e&2&&(O(8),k("ngIf",!i.auth.isAuthenticated),O(),k("ngIf",i.auth.isAuthenticated))},dependencies:[it,Ie,P,Ae]})}return t})();var Ye=(()=>{class t{authService;constructor(o){this.authService=o}intercept(o,e){let i="1234567890";if(this.authService.isAuthenticated){let s=o.clone({setHeaders:{Authorization:`Bearer ${i}`}});return e.handle(s)}else return e.handle(o)}static \u0275fac=function(e){return new(e||t)(A($))};static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var Qe=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=D({type:t,bootstrap:[Je]});static \u0275inj=j({providers:[{provide:ce,useClass:Ye,multi:!0}],imports:[pe,qe,ae,Se.forRoot({},{}),Ge.instrument({maxAge:25,logOnly:!oe()}),xe.forRoot([])]})}return t})();ue().bootstrapModule(Qe,{ngZoneEventCoalescing:!0}).catch(t=>console.error(t));
