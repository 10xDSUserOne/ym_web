(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{DSQC:function(r,t,o){"use strict";o.r(t),o.d(t,"ClaimsModule",(function(){return C}));var e=o("3Pt+"),n=o("74u6"),s=o("tyNb"),b=o("fXoL"),a=o("xHqg"),i=o("kmnG"),c=o("qFsG"),m=o("ofXK"),u=o("bTqV");function p(r,t){1&r&&b.sc(0,"Fill out your name")}function l(r,t){1&r&&(b.Rb(0,"mat-error"),b.sc(1," You must provide a"),b.Rb(2,"strong"),b.sc(3," name"),b.Qb(),b.Qb())}function f(r,t){1&r&&(b.Rb(0,"mat-error"),b.sc(1," You must provide a"),b.Rb(2,"strong"),b.sc(3," address"),b.Qb(),b.Qb())}function d(r,t){1&r&&b.sc(0,"Done")}const Q=[{path:"",component:(()=>{class r{constructor(r){this._formBuilder=r,this.isLinear=!1}ngOnInit(){this.configureForm()}configureForm(){this.firstClaimFormGroup=this._formBuilder.group({name:["",e.p.required]}),this.secondClaimFormGroup=this._formBuilder.group({address:["",e.p.required]})}}return r.\u0275fac=function(t){return new(t||r)(b.Lb(e.d))},r.\u0275cmp=b.Fb({type:r,selectors:[["app-claim-form"]],decls:35,vars:7,consts:[[3,"linear"],["stepper",""],[3,"stepControl"],[3,"formGroup"],["matStepLabel",""],["matInput","","placeholder","Name","formControlName","name"],[4,"ngIf"],["mat-button","","matStepperNext",""],["label","Fill out your address",3,"stepControl"],["matInput","","placeholder","Address","formControlName","address","required",""],["mat-button","","matStepperPrevious",""],["mat-button","",3,"click"]],template:function(r,t){if(1&r){const r=b.Sb();b.sc(0,"Claim Form "),b.Rb(1,"mat-horizontal-stepper",0,1),b.Rb(3,"mat-step",2),b.Rb(4,"form",3),b.rc(5,p,1,0,"ng-template",4),b.Rb(6,"mat-form-field"),b.Rb(7,"mat-label"),b.sc(8,"Name"),b.Qb(),b.Mb(9,"input",5),b.rc(10,l,4,0,"mat-error",6),b.Qb(),b.Rb(11,"div"),b.Rb(12,"button",7),b.sc(13,"Next"),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Rb(14,"mat-step",8),b.Rb(15,"form",3),b.Rb(16,"mat-form-field"),b.Rb(17,"mat-label"),b.sc(18,"Address"),b.Qb(),b.Mb(19,"input",9),b.rc(20,f,4,0,"mat-error",6),b.Qb(),b.Rb(21,"div"),b.Rb(22,"button",10),b.sc(23,"Back"),b.Qb(),b.Rb(24,"button",7),b.sc(25,"Next"),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Rb(26,"mat-step"),b.rc(27,d,1,0,"ng-template",4),b.Rb(28,"p"),b.sc(29,"You are now done."),b.Qb(),b.Rb(30,"div"),b.Rb(31,"button",10),b.sc(32,"Back"),b.Qb(),b.Rb(33,"button",11),b.Yb("click",(function(){return b.jc(r),b.ic(2).reset()})),b.sc(34,"Reset"),b.Qb(),b.Qb(),b.Qb(),b.Qb()}2&r&&(b.Ab(1),b.fc("linear",t.isLinear),b.Ab(2),b.fc("stepControl",t.firstClaimFormGroup),b.Ab(1),b.fc("formGroup",t.firstClaimFormGroup),b.Ab(6),b.fc("ngIf",t.firstClaimFormGroup.get("name").hasError("required")),b.Ab(4),b.fc("stepControl",t.secondClaimFormGroup),b.Ab(1),b.fc("formGroup",t.secondClaimFormGroup),b.Ab(5),b.fc("ngIf",t.secondClaimFormGroup.get("address").hasError("required")))},directives:[a.a,a.b,e.q,e.l,e.f,a.c,i.c,i.f,c.b,e.c,e.k,e.e,m.j,u.a,a.e,e.o,a.f,i.b],styles:[""]}),r})()}];let R=(()=>{class r{}return r.\u0275mod=b.Jb({type:r}),r.\u0275inj=b.Ib({factory:function(t){return new(t||r)},imports:[[s.b.forChild(Q)],s.b]}),r})(),C=(()=>{class r{}return r.\u0275mod=b.Jb({type:r}),r.\u0275inj=b.Ib({factory:function(t){return new(t||r)},providers:[],imports:[[m.b,e.g,n.a,e.n,R]]}),r})()}}]);