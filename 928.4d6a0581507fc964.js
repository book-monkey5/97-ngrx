"use strict";(self.webpackChunkbook_monkey=self.webpackChunkbook_monkey||[]).push([[928],{9928:(ot,Z,e)=>{e.r(Z),e.d(Z,{BooksModule:()=>_});var r=e(6895),c=e(9653),m=e(2655),a=e(3841),t=e(4650),x=e(6384);class p{constructor(){this.confirm=new t.vpe}onClick(){window.confirm(this.confirmText)&&this.confirm.emit()}static#t=this.\u0275fac=function(o){return new(o||p)};static#o=this.\u0275dir=t.lG2({type:p,selectors:[["","bmConfirm",""]],hostBindings:function(o,s){1&o&&t.NdJ("click",function(){return s.onClick()})},inputs:{confirmText:["bmConfirm","confirmText"]},outputs:{confirm:"confirm"}})}var y=e(7579),I=e(2722),L=e(8338);class g{constructor(n,o,s){this.template=n,this.viewContainer=o,this.authService=s,this.destroy$=new y.x,this.authService.isAuthenticated$.pipe((0,I.R)(this.destroy$)).subscribe(l=>{l?this.viewContainer.createEmbeddedView(this.template):this.viewContainer.clear()})}ngOnDestroy(){this.destroy$.next()}static#t=this.\u0275fac=function(o){return new(o||g)(t.Y36(t.Rgc),t.Y36(t.s_b),t.Y36(L.e))};static#o=this.\u0275dir=t.lG2({type:g,selectors:[["","bmLoggedinOnly",""]]})}class u{transform(n){return n?`${n.substring(0,3)}-${n.substring(3)}`:""}static#t=this.\u0275fac=function(o){return new(o||u)};static#o=this.\u0275pipe=t.Yjl({name:"isbn",type:u,pure:!0})}function U(i,n){if(1&i&&(t.TgZ(0,"p",9),t._uU(1),t.qZA()),2&i){const o=t.oxw().ngIf;t.xp6(1),t.Oqu(o.subtitle)}}function F(i,n){if(1&i&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&i){const o=n.$implicit;t.xp6(1),t.Oqu(o)}}function Y(i,n){if(1&i&&(t.TgZ(0,"div")(1,"h2"),t._uU(2,"Published"),t.qZA(),t._uU(3),t.ALo(4,"date"),t.qZA()),2&i){const o=t.oxw().ngIf;t.xp6(3),t.hij(" ",t.xi3(4,1,o.published,"longDate")," ")}}function J(i,n){if(1&i&&t._UZ(0,"img",10),2&i){const o=t.oxw().ngIf;t.Q6J("src",o.thumbnailUrl,t.LSH)}}const Q=function(i){return["/admin/edit",i]};function q(i,n){if(1&i){const o=t.EpF();t.ynx(0),t.TgZ(1,"button",11),t.NdJ("confirm",function(){t.CHM(o);const l=t.oxw().ngIf,tt=t.oxw();return t.KtG(tt.removeBook(l.isbn))}),t._uU(2," Remove book "),t.qZA(),t.TgZ(3,"a",12),t._uU(4," Edit book "),t.qZA(),t.BQk()}if(2&i){const o=t.oxw().ngIf;t.xp6(3),t.Q6J("routerLink",t.VKq(1,Q,o.isbn))}}function N(i,n){if(1&i&&(t.TgZ(0,"div",1)(1,"h1"),t._uU(2),t.qZA(),t.YNc(3,U,2,1,"p",2),t.TgZ(4,"div",3)(5,"div")(6,"h2"),t._uU(7,"Authors"),t.qZA(),t.TgZ(8,"ul"),t.YNc(9,F,2,1,"li",4),t.qZA()(),t.TgZ(10,"div")(11,"h2"),t._uU(12,"ISBN"),t.qZA(),t._uU(13),t.ALo(14,"isbn"),t.qZA(),t.YNc(15,Y,5,4,"div",5),t.qZA(),t.TgZ(16,"h2"),t._uU(17,"Description"),t.qZA(),t.TgZ(18,"p"),t._uU(19),t.qZA(),t.YNc(20,J,1,1,"img",6),t.TgZ(21,"a",7),t._uU(22,"Back to list"),t.qZA(),t.YNc(23,q,5,3,"ng-container",8),t.qZA()),2&i){const o=n.ngIf;t.xp6(2),t.Oqu(o.title),t.xp6(1),t.Q6J("ngIf",o.subtitle),t.xp6(6),t.Q6J("ngForOf",o.authors),t.xp6(4),t.hij(" ",t.lcZ(14,7,o.isbn)," "),t.xp6(2),t.Q6J("ngIf",o.published),t.xp6(4),t.Oqu(o.description),t.xp6(1),t.Q6J("ngIf",o.thumbnailUrl)}}class h{constructor(n,o,s){this.service=n,this.route=o,this.router=s;const l=this.route.snapshot.paramMap.get("isbn");this.book$=this.service.getSingle(l)}removeBook(n){this.service.remove(n).subscribe(()=>{this.router.navigateByUrl("/books")})}static#t=this.\u0275fac=function(o){return new(o||h)(t.Y36(x.T),t.Y36(a.gz),t.Y36(a.F0))};static#o=this.\u0275cmp=t.Xpm({type:h,selectors:[["bm-book-details"]],decls:2,vars:3,consts:[["class","details",4,"ngIf"],[1,"details"],["role","doc-subtitle",4,"ngIf"],[1,"header"],[4,"ngFor","ngForOf"],[4,"ngIf"],["alt","Cover",3,"src",4,"ngIf"],["routerLink","..",1,"button","arrow-left"],[4,"bmLoggedinOnly"],["role","doc-subtitle"],["alt","Cover",3,"src"],["bmConfirm","Remove book?",1,"red",3,"confirm"],[1,"button",3,"routerLink"]],template:function(o,s){1&o&&(t.YNc(0,N,24,9,"div",0),t.ALo(1,"async")),2&o&&t.Q6J("ngIf",t.lcZ(1,1,s.book$))},dependencies:[r.sg,r.O5,a.rH,p,g,r.Ov,r.uU,u]})}const v=(0,c.PH)("[Book] Load Books"),B=(0,c.PH)("[Book] Load Books Success",(0,c.Ky)()),T=(0,c.PH)("[Book] Load Books Failure",(0,c.Ky)()),A="book",w=(0,c.Lq)({books:[],loading:!1},(0,c.on)(v,i=>({...i,loading:!0})),(0,c.on)(B,(i,n)=>({...i,books:n.data,loading:!1})),(0,c.on)(T,(i,n)=>({...i,loading:!1}))),C=(0,c.ZF)(A),$=(0,c.P1)(C,i=>i.loading),S=(0,c.P1)(C,i=>i.books);function D(i,n){if(1&i&&t._UZ(0,"img",6),2&i){const o=t.oxw(2);t.Q6J("src",o.book.thumbnailUrl,t.LSH)}}function H(i,n){if(1&i&&(t.TgZ(0,"p",7),t._uU(1),t.qZA()),2&i){const o=t.oxw(2);t.xp6(1),t.hij(" ",o.book.subtitle," ")}}function j(i,n){if(1&i&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&i){const o=n.$implicit;t.xp6(1),t.hij(" ",o," ")}}function G(i,n){if(1&i&&(t.TgZ(0,"a",1),t.YNc(1,D,1,1,"img",2),t.TgZ(2,"h2"),t._uU(3),t.qZA(),t.YNc(4,H,2,1,"p",3),t.TgZ(5,"ul",4),t.YNc(6,j,2,1,"li",5),t.qZA(),t.TgZ(7,"div"),t._uU(8),t.ALo(9,"isbn"),t.qZA()()),2&i){const o=t.oxw();t.Q6J("routerLink",o.book.isbn),t.xp6(1),t.Q6J("ngIf",o.book.thumbnailUrl),t.xp6(2),t.Oqu(o.book.title),t.xp6(1),t.Q6J("ngIf",o.book.subtitle),t.xp6(2),t.Q6J("ngForOf",o.book.authors),t.xp6(2),t.hij("ISBN ",t.lcZ(9,6,o.book.isbn),"")}}class d{static#t=this.\u0275fac=function(o){return new(o||d)};static#o=this.\u0275cmp=t.Xpm({type:d,selectors:[["bm-book-list-item"]],inputs:{book:"book"},decls:1,vars:1,consts:[["class","list-item",3,"routerLink",4,"ngIf"],[1,"list-item",3,"routerLink"],["alt","Cover",3,"src",4,"ngIf"],["role","doc-subtitle",4,"ngIf"],[1,"comma-list"],[4,"ngFor","ngForOf"],["alt","Cover",3,"src"],["role","doc-subtitle"]],template:function(o,s){1&o&&t.YNc(0,G,10,8,"a",0),2&o&&t.Q6J("ngIf",s.book)},dependencies:[r.sg,r.O5,a.rH,u]})}function K(i,n){if(1&i&&(t.TgZ(0,"li"),t._UZ(1,"bm-book-list-item",5),t.qZA()),2&i){const o=n.$implicit;t.xp6(1),t.Q6J("book",o)}}function P(i,n){1&i&&(t.TgZ(0,"li"),t._uU(1," No books available. "),t.qZA())}function z(i,n){if(1&i&&(t.TgZ(0,"ul",2),t.YNc(1,K,2,1,"li",3),t.YNc(2,P,2,0,"li",4),t.qZA()),2&i){const o=n.ngIf;t.xp6(1),t.Q6J("ngForOf",o),t.xp6(1),t.Q6J("ngIf",!o.length)}}function M(i,n){1&i&&(t.TgZ(0,"div",6),t._uU(1,"Loading ..."),t.qZA())}class k{constructor(n){this.store=n,this.books$=this.store.select(S),this.loading$=this.store.select($),this.store.dispatch(v())}static#t=this.\u0275fac=function(o){return new(o||k)(t.Y36(c.yh))};static#o=this.\u0275cmp=t.Xpm({type:k,selectors:[["bm-book-list"]],decls:6,vars:6,consts:[["class","book-list",4,"ngIf"],["class","loader",4,"ngIf"],[1,"book-list"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"book"],[1,"loader"]],template:function(o,s){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Books"),t.qZA(),t.YNc(2,z,3,2,"ul",0),t.ALo(3,"async"),t.YNc(4,M,2,0,"div",1),t.ALo(5,"async")),2&o&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,2,s.books$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(5,4,s.loading$)))},dependencies:[r.sg,r.O5,d,r.Ov]})}const R=[{path:"",component:k},{path:":isbn",component:h}];class b{static#t=this.\u0275fac=function(o){return new(o||b)};static#o=this.\u0275mod=t.oAB({type:b});static#i=this.\u0275inj=t.cJS({imports:[a.Bz.forChild(R),a.Bz]})}var X=e(3900),E=e(4004),V=e(262),W=e(9646);class f{constructor(n,o){this.actions$=n,this.service=o,this.loadBooks$=(0,m.GW)(()=>this.actions$.pipe((0,m.l4)(v),(0,X.w)(()=>this.service.getAll().pipe((0,E.U)(s=>B({data:s})),(0,V.K)(s=>(0,W.of)(T({error:s.message})))))))}static#t=this.\u0275fac=function(o){return new(o||f)(t.LFG(m.eX),t.LFG(x.T))};static#o=this.\u0275prov=t.Yz7({token:f,factory:f.\u0275fac})}class _{static#t=this.\u0275fac=function(o){return new(o||_)};static#o=this.\u0275mod=t.oAB({type:_});static#i=this.\u0275inj=t.cJS({imports:[r.ez,b,c.Aw.forFeature(A,w),m.sQ.forFeature([f])]})}}}]);