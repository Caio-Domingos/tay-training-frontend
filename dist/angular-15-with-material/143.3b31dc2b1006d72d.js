"use strict";(self.webpackChunkangular_15_with_material=self.webpackChunkangular_15_with_material||[]).push([[143],{5535:(G,O,l)=>{l.d(O,{L:()=>f});var D=l(1135);class f{constructor(C,d,h){this.router=C,this.service=d,this.filterChange$=new D.X(""),this.title=h.title||"Master Details Example",this.targetFilters=h.targetFilters||["Nome","Email","Telefone","CPF"],this.columns=h.columns||[{name:"id",title:"ID"},{name:"name",title:"Name"}],this.path=h.path||"/master-details"}add(){this.router.navigate([this.path,"new"])}changeFilter(C){this.filterChange$.next(C.target.value||"")}edit(C){console.log("edit row",C),this.router.navigate([this.path,C.id])}delete(C){console.log("delete row",C)}changeTable(C){console.log("changeTable",C)}}},136:(G,O,l)=>{l.d(O,{W:()=>M});var D=l(5017),f=l(3900),E=l(262),C=l(8505),d=l(4004),h=l(6451),$=l(9646);class y extends D.o2{constructor(_,m,w,N,R){super(),this.service=_,this.filter$=m,this.utilsService=w,this.loadingService=N,this.functionName=R,this.data=[],this.hasErrorOnLoad=!1,this.atualPagination=this.utilsService.createPaginationConfig(this.paginator,this.sort,"")}connect(){if(this.paginator&&this.sort)return(0,h.T)((0,$.of)(this.data),this.paginator.page,this.sort.sortChange,this.filter$).pipe((0,f.w)(_=>this.getPagedData().pipe((0,E.K)(()=>(this.hasErrorOnLoad=!0,(0,$.of)({items:[],total:0}))))),(0,C.b)(_=>{this.paginator.length=_.total,this.paginator.pageIndex=this.atualPagination.page-1,this.paginator.pageSize=this.atualPagination.pageSize}),(0,d.U)(_=>(this.loadingService.deactiveLoading(),_.items)));throw Error("Please set the paginator and sort on the data source before connecting.")}disconnect(){}getPagedData(){return setTimeout(()=>{this.loadingService.activeLoading(),this.hasErrorOnLoad=!1},20),this.filter$.pipe((0,f.w)(_=>(this.atualPagination=this.utilsService.createPaginationConfig(this.paginator,this.sort,_),this.service[this.functionName||"getByFilter"](this.atualPagination))))}}var r=l(4650),b=l(8739),p=l(6308),S=l(3626),A=l(1135),H=l(8372),B=l(8270),L=l(4471),j=l(6895),u=l(4859),T=l(7392),e=l(1572);function t(c,_){1&c&&r._UZ(0,"mat-spinner")}function s(c,_){if(1&c&&(r.TgZ(0,"div",11),r.YNc(1,t,1,0,"mat-spinner",12),r.qZA()),2&c){const m=r.oxw();r.xp6(1),r.Q6J("ngIf",m.loadingService.loading)}}function a(c,_){if(1&c&&(r.TgZ(0,"th",15),r._uU(1),r.qZA()),2&c){const m=r.oxw().$implicit;r.xp6(1),r.hij(" ",m.title," ")}}function o(c,_){if(1&c&&(r.TgZ(0,"td",16),r._uU(1),r.qZA()),2&c){const m=_.$implicit,w=r.oxw().$implicit;r.xp6(1),r.Oqu(m[w.name])}}function v(c,_){1&c&&(r.ynx(0,13),r.YNc(1,a,2,1,"th",5),r.YNc(2,o,2,1,"td",14),r.BQk()),2&c&&r.Q6J("matColumnDef",_.$implicit.name)}function i(c,_){1&c&&r._UZ(0,"th",15)}function n(c,_){if(1&c){const m=r.EpF();r.TgZ(0,"td",17)(1,"button",18),r.NdJ("click",function(){const R=r.CHM(m).$implicit,k=r.oxw();return r.KtG(k.edit(R))}),r.TgZ(2,"mat-icon"),r._uU(3,"edit"),r.qZA()(),r.TgZ(4,"button",18),r.NdJ("click",function(){const R=r.CHM(m).$implicit,k=r.oxw();return r.KtG(k.delete(R))}),r.TgZ(5,"mat-icon"),r._uU(6,"delete"),r.qZA()()()}}function x(c,_){1&c&&r._UZ(0,"tr",19)}function P(c,_){1&c&&r._UZ(0,"tr",20)}const I=function(){return[5,10,20]};let M=(()=>{class c{constructor(m,w){this.utilsService=m,this.loadingService=w,this.columns=[{name:"id",title:"ID"},{name:"name",title:"Name"}],this.filterChange$=new A.X(""),this.filterChangeToDataSource$=new A.X(""),this.functionName="getAll",this.edit$=new r.vpe,this.delete$=new r.vpe,this.changeTable$=new r.vpe,this.itemColumns=[],this.displayedColumns=[],this.itemColumns=JSON.parse(JSON.stringify(this.columns)),this.columns.push({name:"actions",title:"Actions"}),this.displayedColumns=this.columns.map(N=>N.name)}ngOnInit(){this.dataSource=new y(this.service,this.filterChangeToDataSource$.pipe((0,H.b)(200)),this.utilsService,this.loadingService,this.functionName)}ngAfterViewInit(){this.filterChange$.pipe((0,H.b)(500)).subscribe(m=>{this.filterChangeToDataSource$.next(m)}),this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator,this.table.dataSource=this.dataSource}edit(m){this.edit$.emit(m)}delete(m){this.delete$.emit(m)}}return c.\u0275fac=function(m){return new(m||c)(r.Y36(B.F),r.Y36(L.b))},c.\u0275cmp=r.Xpm({type:c,selectors:[["app-master-table"]],viewQuery:function(m,w){if(1&m&&(r.Gf(b.NW,5),r.Gf(p.YE,5),r.Gf(S.BZ,5)),2&m){let N;r.iGM(N=r.CRH())&&(w.paginator=N.first),r.iGM(N=r.CRH())&&(w.sort=N.first),r.iGM(N=r.CRH())&&(w.table=N.first)}},inputs:{columns:"columns",filterChange$:"filterChange$",service:"service",functionName:"functionName"},outputs:{edit$:"edit$",delete$:"delete$",changeTable$:"changeTable$"},decls:11,vars:9,consts:[[1,"mat-elevation-z8","full-width-table"],["class","loading-shade",4,"ngIf"],["mat-table","","matSort","","aria-label","Elements",1,"full-width-table"],[3,"matColumnDef",4,"ngFor","ngForOf"],["matColumnDef","actions"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","","class","actions",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["aria-label","Select page",3,"length","pageIndex","pageSize","pageSizeOptions"],["paginator",""],[1,"loading-shade"],[4,"ngIf"],[3,"matColumnDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-cell","",1,"actions"],["mat-icon-button","",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(m,w){1&m&&(r.TgZ(0,"div",0),r.YNc(1,s,2,1,"div",1),r.TgZ(2,"table",2),r.YNc(3,v,3,1,"ng-container",3),r.ynx(4,4),r.YNc(5,i,1,0,"th",5),r.YNc(6,n,7,0,"td",6),r.BQk(),r.YNc(7,x,1,0,"tr",7),r.YNc(8,P,1,0,"tr",8),r.qZA(),r._UZ(9,"mat-paginator",9,10),r.qZA()),2&m&&(r.xp6(1),r.Q6J("ngIf",w.loadingService.loading),r.xp6(2),r.Q6J("ngForOf",w.itemColumns),r.xp6(4),r.Q6J("matHeaderRowDef",w.displayedColumns),r.xp6(1),r.Q6J("matRowDefColumns",w.displayedColumns),r.xp6(1),r.Q6J("length",w.dataSource.data.length||0)("pageIndex",0)("pageSize",10)("pageSizeOptions",r.DdM(8,I)))},dependencies:[j.sg,j.O5,u.RK,T.Hw,b.NW,e.Ou,p.YE,p.nU,S.BZ,S.fO,S.as,S.w1,S.Dz,S.nj,S.ge,S.ev,S.XQ,S.Gk],styles:["[_nghost-%COMP%]{width:80%;min-width:250px;margin:1.5em 0}.full-width-table[_ngcontent-%COMP%]{width:100%;position:relative;min-height:300px}.actions[_ngcontent-%COMP%]{width:150px}"]}),c})()},4836:(G,O,l)=>{l.d(O,{j:()=>E});var D=l(6895),f=l(4650);let E=(()=>{class C{}return C.\u0275fac=function(h){return new(h||C)},C.\u0275mod=f.oAB({type:C}),C.\u0275inj=f.cJS({imports:[D.ez]}),C})()},9799:(G,O,l)=>{l.d(O,{O:()=>r});var D=l(5861),f=l(6805),E=l(930),d=l(4004);class ${constructor(p,S){this.http=S,this.path=`http://localhost:3000${p}`}request(p){return(0,D.Z)(function*(){return function C(b,p){const S="object"==typeof p;return new Promise((A,H)=>{const B=new E.Hp({next:L=>{A(L),B.unsubscribe()},error:H,complete:()=>{S?A(p.defaultValue):H(new f.K)}});b.subscribe(B)})}(p)})()}mockupRequest(){return this.http.get("https://binaryjazz.us/wp-json/genrenator/v1/genre/10 ").pipe((0,d.U)(p=>({items:p.map((A,H)=>({id:H,name:A})),total:p.length})))}getAll(){console.log("Get All",this.path);const p=this.http.get(this.path);return this.request(p)}getByFilter(p){console.log("Get By Filter",this.path);const S=Object.entries(p).reduce((H,[B,L],j)=>Object.entries(p).length!==j+1?`${H}${B}=${L}&`:`${H}${B}=${L}`,"");return this.http.get(`${this.path}/filter?${S}`),this.request(this.mockupRequest())}getById(p){const S=this.http.get(`${this.path}/${p}`);return this.request(S)}create(p){const S=this.http.post(this.path,p);return this.request(S)}update(p){const S=this.http.put(`${this.path}/${p.id}`,p);return this.request(S)}delete(p){const S=this.http.delete(`${this.path}/${p}`);return this.request(S)}}var y=l(4650),F=l(529);let r=(()=>{class b extends ${constructor(S){super("/items",S)}}return b.\u0275fac=function(S){return new(S||b)(y.LFG(F.eN))},b.\u0275prov=y.Yz7({token:b,factory:b.\u0275fac,providedIn:"root"}),b})()},8270:(G,O,l)=>{l.d(O,{F:()=>f});var D=l(4650);let f=(()=>{class E{constructor(){}createPaginationConfig(d,h,$){const y={};return d?(y.page=d.pageIndex+1,y.pageSize=d.pageSize):(y.page=1,y.pageSize=10),h?(y.orderBy=h.active,y.orderDirection=h.direction):(y.orderBy="id",y.orderDirection="asc"),y.filter=$||"",y}getErrorText(d,h){return d&&d.control.get(h.config.name)?h.config.required&&d.control.get(h.config.name).hasError("required")&&h.config.errors.required?h.config.errors.required:h.config.minlength&&d.control.get(h.config.name).hasError("minlength")&&h.config.errors.minlength?h.config.errors.minlength:h.config.maxlength&&d.control.get(h.config.name).hasError("maxlength")&&h.config.errors.maxlength?h.config.errors.maxlength:h.config.email&&d.control.get(h.config.name).hasError("email")&&h.config.errors.email?h.config.errors.email:h.config.pattern&&d.control.get(h.config.name).hasError("pattern")&&h.config.errors.pattern?h.config.errors.pattern:h.config.mask&&d.control.get(h.config.name).hasError("mask")&&h.config.errors.mask?h.config.errors.mask:h.config.customValidators.cpfValidator&&d.control.get(h.config.name).hasError("invalidCpf")&&h.config.errors.invalidCpf?h.config.errors.invalidCpf:h.config.customValidators.urlValidator&&d.control.get(h.config.name).hasError("invalidUrl")&&h.config.errors.invalidUrl?h.config.errors.invalidUrl:"":""}}return E.\u0275fac=function(d){return new(d||E)},E.\u0275prov=D.Yz7({token:E,factory:E.\u0275fac,providedIn:"root"}),E})()},1094:(G,O,l)=>{l.d(O,{Z6:()=>B,e$:()=>A});var D=l(5861),f=l(4650),E=l(6895),C=l(4006);const d=new f.OlP("ngx-mask config"),h=new f.OlP("new ngx-mask config"),$=new f.OlP("initial ngx-mask config"),y={suffix:"",prefix:"",thousandSeparator:" ",decimalMarker:[".",","],clearIfNotMatch:!1,showTemplate:!1,showMaskTyped:!1,placeHolderCharacter:"_",dropSpecialCharacters:!0,hiddenInput:void 0,shownMaskExpression:"",separatorLimit:"",allowNegativeNumbers:!1,validation:!0,specialCharacters:["-","/","(",")",".",":"," ","+",",","@","[","]",'"',"'"],leadZeroDateTime:!1,triggerOnMaskChange:!1,maskFilled:new f.vpe,patterns:{0:{pattern:new RegExp("\\d")},9:{pattern:new RegExp("\\d"),optional:!0},X:{pattern:new RegExp("\\d"),symbol:"*"},A:{pattern:new RegExp("[a-zA-Z0-9]")},S:{pattern:new RegExp("[a-zA-Z]")},U:{pattern:new RegExp("[A-Z]")},L:{pattern:new RegExp("[a-z]")},d:{pattern:new RegExp("\\d")},m:{pattern:new RegExp("\\d")},M:{pattern:new RegExp("\\d")},H:{pattern:new RegExp("\\d")},h:{pattern:new RegExp("\\d")},s:{pattern:new RegExp("\\d")}}},F=["Hh:m0:s0","Hh:m0","m0:s0"],r=["percent","Hh","s0","m0","separator","d0/M0/0000","d0/M0","d0","M0"];let b=(()=>{class u{constructor(){this._config=(0,f.f3M)(d),this.dropSpecialCharacters=this._config.dropSpecialCharacters,this.hiddenInput=this._config.hiddenInput,this.clearIfNotMatch=this._config.clearIfNotMatch,this.specialCharacters=this._config.specialCharacters,this.patterns=this._config.patterns,this.prefix=this._config.prefix,this.suffix=this._config.suffix,this.thousandSeparator=this._config.thousandSeparator,this.decimalMarker=this._config.decimalMarker,this.showMaskTyped=this._config.showMaskTyped,this.placeHolderCharacter=this._config.placeHolderCharacter,this.validation=this._config.validation,this.separatorLimit=this._config.separatorLimit,this.allowNegativeNumbers=this._config.allowNegativeNumbers,this.leadZeroDateTime=this._config.leadZeroDateTime,this._shift=new Set,this.maskExpression="",this.actualValue="",this.shownMaskExpression="",this._formatWithSeparators=(e,t,s,a)=>{let o=[],v="";if(Array.isArray(s)){const I=new RegExp(s.map(M=>"[\\^$.|?*+()".indexOf(M)>=0?`\\${M}`:M).join("|"));o=e.split(I),v=e.match(I)?.[0]??""}else o=e.split(s),v=s;const i=o.length>1?`${v}${o[1]}`:"";let n=o[0]??"";const x=this.separatorLimit.replace(/\s/g,"");x&&+x&&(n="-"===n[0]?`-${n.slice(1,n.length).slice(0,x.length)}`:n.slice(0,x.length));const P=/(\d+)(\d{3})/;for(;t&&P.test(n);)n=n.replace(P,"$1"+t+"$2");return void 0===a?n+i:0===a?n:n+i.substring(0,a+1)},this.percentage=e=>Number(e)>=0&&Number(e)<=100,this.getPrecision=e=>{const t=e.split(".");return t.length>1?Number(t[t.length-1]):1/0},this.checkAndRemoveSuffix=e=>{for(let t=this.suffix?.length-1;t>=0;t--){const s=this.suffix.substring(t,this.suffix?.length);if(e.includes(s)&&t!==this.suffix?.length-1&&(t-1<0||!e.includes(this.suffix.substring(t-1,this.suffix?.length))))return e.replace(s,"")}return e},this.checkInputPrecision=(e,t,s)=>{if(t<1/0){if(Array.isArray(s)){const i=s.find(n=>n!==this.thousandSeparator);s=i||s[0]}const a=new RegExp(this._charToRegExpExpression(s)+`\\d{${t}}.*$`),o=e.match(a),v=(o&&o[0]?.length)??0;v-1>t&&(e=e.substring(0,e.length-(v-1-t))),0===t&&this._compareOrIncludes(e[e.length-1],s,this.thousandSeparator)&&(e=e.substring(0,e.length-1))}return e}}applyMaskWithPattern(e,t){const[s,a]=t;return this.customPattern=a,this.applyMask(e,s)}applyMask(e,t,s=0,a=!1,o=!1,v=(()=>{})){if(!t||"string"!=typeof e)return"";let i=0,n="",x=!1,P=!1,I=1,M=!1;e.slice(0,this.prefix.length)===this.prefix&&(e=e.slice(this.prefix.length,e.length)),this.suffix&&e?.length>0&&(e=this.checkAndRemoveSuffix(e));const c=e.toString().split("");if("IP"===t){const k=e.split(".");this.ipError=this._validIP(k),t="099.099.099.099"}const _=[];for(let k=0;k<e.length;k++)e[k]?.match("\\d")&&_.push(e[k]??"");if("CPF_CNPJ"===t&&(this.cpfCnpjError=11!==_.length&&14!==_.length,t=_.length>11?"00.000.000/0000-00":"000.000.000-00"),t.startsWith("percent")){if(e.match("[a-z]|[A-Z]")||e.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/.]/)){e=this._stripToDecimal(e);const k=this.getPrecision(t);e=this.checkInputPrecision(e,k,this.decimalMarker)}e.indexOf(".")>0&&!this.percentage(e.substring(0,e.indexOf(".")))&&(e=`${e.substring(0,e.indexOf(".")-1)}${e.substring(e.indexOf("."),e.length)}`),n=this.percentage(e)?e:e.substring(0,e.length-1)}else if(t.startsWith("separator")){(e.match("[w\u0430-\u044f\u0410-\u042f]")||e.match("[\u0401\u0451\u0410-\u044f]")||e.match("[a-z]|[A-Z]")||e.match(/[-@#!$%\\^&*()_\xa3\xac'+|~=`{}\]:";<>.?/]/)||e.match("[^A-Za-z0-9,]"))&&(e=this._stripToDecimal(e)),e=e.length>1&&"0"===e[0]&&e[1]!==this.thousandSeparator&&!this._compareOrIncludes(e[1],this.decimalMarker,this.thousandSeparator)&&!o?e.slice(0,e.length-1):e,o&&(e=this._compareOrIncludes(e[e.length-1],this.decimalMarker,this.thousandSeparator)?e.slice(0,e.length-1):e);const k=this._charToRegExpExpression(this.thousandSeparator);let g='@#!$%^&*()_+|~=`{}\\[\\]:\\s,\\.";<>?\\/'.replace(k,"");if(Array.isArray(this.decimalMarker))for(const z of this.decimalMarker)g=g.replace(this._charToRegExpExpression(z),"");else g=g.replace(this._charToRegExpExpression(this.decimalMarker),"");const Z=new RegExp("["+g+"]");(e.match(Z)||1===e.length&&this._compareOrIncludes(e,this.decimalMarker,this.thousandSeparator))&&(e=e.substring(0,e.length-1));const K=this.getPrecision(t),W=(e=this.checkInputPrecision(e,K,this.decimalMarker)).replace(new RegExp(k,"g"),"");n=this._formatWithSeparators(W,this.thousandSeparator,this.decimalMarker,K);const J=n.indexOf(",")-e.indexOf(","),U=n.length-e.length;if(U>0&&","!==n[s]){P=!0;let z=0;do{this._shift.add(s+z),z++}while(z<U)}else 0!==J&&s>0&&!(n.indexOf(",")>=s&&s>3)||!(n.indexOf(".")>=s&&s>3)&&U<=0?(this._shift.clear(),P=!0,I=U,this._shift.add(s+=U)):this._shift.clear()}else for(let k=0,g=c[0];k<c.length&&i!==t.length;k++,g=c[k]??"")if(this._checkSymbolMask(g,t[i]??"")&&"?"===t[i+1])n+=g,i+=2;else if("*"===t[i+1]&&x&&this._checkSymbolMask(g,t[i+2]??""))n+=g,i+=3,x=!1;else if(this._checkSymbolMask(g,t[i]??"")&&"*"===t[i+1])n+=g,x=!0;else if("?"===t[i+1]&&this._checkSymbolMask(g,t[i+2]??""))n+=g,i+=3;else if(this._checkSymbolMask(g,t[i]??"")){if("H"===t[i]&&Number(g)>2){i+=1,this._shiftStep(t,i,c.length),k--,this.leadZeroDateTime&&(n+="0");continue}if("h"===t[i]&&"2"===n&&Number(g)>3){i+=1,k--;continue}if("m"===t[i]&&Number(g)>5){i+=1,this._shiftStep(t,i,c.length),k--,this.leadZeroDateTime&&(n+="0");continue}if("s"===t[i]&&Number(g)>5){i+=1,this._shiftStep(t,i,c.length),k--,this.leadZeroDateTime&&(n+="0");continue}const Z=31;if("d"===t[i]&&(Number(g)>3&&this.leadZeroDateTime||Number(e.slice(i,i+2))>Z||"/"===e[i+1])){i+=1,this._shiftStep(t,i,c.length),k--,this.leadZeroDateTime&&(n+="0");continue}if("M"===t[i]){const W=0===i&&(Number(g)>2||Number(e.slice(i,i+2))>12||"/"===e[i+1]),J=e.slice(i-3,i-1).includes("/")&&("/"===e[i-2]&&Number(e.slice(i-1,i+1))>12&&"/"!==e[i]||"/"===e[i]||"/"===e[i-3]&&Number(e.slice(i-2,i))>12&&"/"!==e[i-1]||"/"===e[i-1]),U=Number(e.slice(i-3,i-1))<=Z&&!e.slice(i-3,i-1).includes("/")&&"/"===e[i-1]&&(Number(e.slice(i,i+2))>12||"/"===e[i+1]),z=Number(e.slice(i-3,i-1))>Z&&!e.slice(i-3,i-1).includes("/")&&!e.slice(i-2,i).includes("/")&&Number(e.slice(i-2,i))>12,Y=Number(e.slice(i-3,i-1))<=Z&&!e.slice(i-3,i-1).includes("/")&&"/"!==e[i-1]&&Number(e.slice(i-1,i+1))>12;if(Number(g)>1&&this.leadZeroDateTime||W||J||U||z||Y){i+=1,this._shiftStep(t,i,c.length),k--,this.leadZeroDateTime&&(n+="0");continue}}n+=g,i++}else" "===g&&" "===t[i]?(n+=g,i++):-1!==this.specialCharacters.indexOf(t[i]??"")?(n+=t[i],i++,this._shiftStep(t,i,c.length),k--):this.specialCharacters.indexOf(g)>-1&&this.patterns[t[i]??""]&&this.patterns[t[i]??""]?.optional?(c[i]&&"099.099.099.099"!==t&&"000.000.000-00"!==t&&"00.000.000/0000-00"!==t&&!t.match(/^9+\.0+$/)&&(n+=c[i]),i++,k--):"*"===this.maskExpression[i+1]&&this._findSpecialChar(this.maskExpression[i+2]??"")&&this._findSpecialChar(g)===this.maskExpression[i+2]&&x||"?"===this.maskExpression[i+1]&&this._findSpecialChar(this.maskExpression[i+2]??"")&&this._findSpecialChar(g)===this.maskExpression[i+2]&&x?(i+=3,n+=g):this.showMaskTyped&&this.specialCharacters.indexOf(g)<0&&g!==this.placeHolderCharacter&&(M=!0);n.length+1===t.length&&-1!==this.specialCharacters.indexOf(t[t.length-1]??"")&&(n+=t[t.length-1]);let m=s+1;for(;this._shift.has(m);)I++,m++;let w=a&&!t.startsWith("separator")?i:this._shift.has(s)?I:0;M&&w--,v(w,P),I<0&&this._shift.clear();let N=!1;o&&(N=c.every(k=>this.specialCharacters.includes(k)));let R=`${this.prefix}${N?"":n}${this.suffix}`;return 0===n.length&&(R=`${this.prefix}${n}`),R}_findSpecialChar(e){return this.specialCharacters.find(t=>t===e)}_checkSymbolMask(e,t){return this.patterns=this.customPattern?this.customPattern:this.patterns,(this.patterns[t]?.pattern&&this.patterns[t]?.pattern.test(e))??!1}_stripToDecimal(e){return e.split("").filter((t,s)=>{const a="string"==typeof this.decimalMarker?t===this.decimalMarker:this.decimalMarker.includes(t);return t.match("^-?\\d")||t===this.thousandSeparator||a||"-"===t&&0===s&&this.allowNegativeNumbers}).join("")}_charToRegExpExpression(e){return e&&(" "===e?"\\s":"[\\^$.|?*+()".indexOf(e)>=0?`\\${e}`:e)}_shiftStep(e,t,s){const a=/[*?]/g.test(e.slice(0,t))?s:t;this._shift.add(a+this.prefix.length||0)}_compareOrIncludes(e,t,s){return Array.isArray(t)?t.filter(a=>a!==s).includes(e):e===t}_validIP(e){return!(4===e.length&&!e.some((t,s)=>e.length!==s+1?""===t||Number(t)>255:""===t||Number(t.substring(0,3))>255))}}return u.\u0275fac=function(e){return new(e||u)},u.\u0275prov=f.Yz7({token:u,factory:u.\u0275fac}),u})(),p=(()=>{class u extends b{constructor(){super(...arguments),this.isNumberValue=!1,this.maskIsShown="",this.selStart=null,this.selEnd=null,this.writingValue=!1,this.maskChanged=!1,this.triggerOnMaskChange=!1,this.onChange=e=>{},this.document=(0,f.f3M)(E.K0),this._config=(0,f.f3M)(d),this._elementRef=(0,f.f3M)(f.SBq,{optional:!0}),this._renderer=(0,f.f3M)(f.Qsj,{optional:!0})}applyMask(e,t,s=0,a=!1,o=!1,v=(()=>{})){if(!t)return e!==this.actualValue?this.actualValue:e;if(this.maskIsShown=this.showMaskTyped?this.showMaskInInput():"","IP"===this.maskExpression&&this.showMaskTyped&&(this.maskIsShown=this.showMaskInInput(e||"#")),"CPF_CNPJ"===this.maskExpression&&this.showMaskTyped&&(this.maskIsShown=this.showMaskInInput(e||"#")),!e&&this.showMaskTyped)return this.formControlResult(this.prefix),this.prefix+this.maskIsShown;const i=e&&"number"==typeof this.selStart?e[this.selStart]??"":"";let n="";if(void 0!==this.hiddenInput&&!this.writingValue){let M=this.actualValue.split("");""!==e&&M.length?"number"==typeof this.selStart&&"number"==typeof this.selEnd&&(e.length>M.length?M.splice(this.selStart,0,i):e.length<M.length&&(M.length-e.length==1?M.splice(this.selStart-1,1):M.splice(this.selStart,this.selEnd-this.selStart))):M=[],this.showMaskTyped&&(e=this.removeMask(e)),n=this.actualValue.length&&M.length<=e.length?this.shiftTypedSymbols(M.join("")):e}this.showMaskTyped&&(e=this.removeMask(e)),n=Boolean(n)&&n.length?n:e;const x=super.applyMask(n,t,s,a,o,v);if(this.actualValue=this.getActualValue(x),"."===this.thousandSeparator&&"."===this.decimalMarker&&(this.decimalMarker=","),this.maskExpression.startsWith("separator")&&!0===this.dropSpecialCharacters&&(this.specialCharacters=this.specialCharacters.filter(M=>!this._compareOrIncludes(M,this.decimalMarker,this.thousandSeparator))),this.formControlResult(x),!this.showMaskTyped)return this.hiddenInput&&x&&x.length?this.hideInput(x,this.maskExpression):x;const P=x.length,I=this.prefix+this.maskIsShown;if(this.maskExpression.includes("H")){const M=this._numberSkipedSymbols(x);return x+I.slice(P+M)}return"IP"===this.maskExpression||"CPF_CNPJ"===this.maskExpression?x+I:x+I.slice(P)}_numberSkipedSymbols(e){const t=/(^|\D)(\d\D)/g;let s=t.exec(e),a=0;for(;null!=s;)a+=1,s=t.exec(e);return a}applyValueChanges(e,t,s,a=(()=>{})){const o=this._elementRef?.nativeElement;o&&(o.value=this.applyMask(o.value,this.maskExpression,e,t,s,a),o!==this._getActiveElement()&&this.clearIfNotMatchFn())}hideInput(e,t){return e.split("").map((s,a)=>this.patterns&&this.patterns[t[a]??""]&&this.patterns[t[a]??""]?.symbol?this.patterns[t[a]??""]?.symbol:s).join("")}getActualValue(e){const t=e.split("").filter((s,a)=>{const o=this.maskExpression[a]??"";return this._checkSymbolMask(s,o)||this.specialCharacters.includes(o)&&s===o});return t.join("")===e?t.join(""):e}shiftTypedSymbols(e){let t="";return(e&&e.split("").map((a,o)=>{if(this.specialCharacters.includes(e[o+1]??"")&&e[o+1]!==this.maskExpression[o+1])return t=a,e[o+1];if(t.length){const v=t;return t="",v}return a})||[]).join("")}numberToString(e){return e||0===e?Number(e).toLocaleString("fullwide",{useGrouping:!1,maximumFractionDigits:20}):String(e)}showMaskInInput(e){if(this.showMaskTyped&&this.shownMaskExpression){if(this.maskExpression.length!==this.shownMaskExpression.length)throw new Error("Mask expression must match mask placeholder length");return this.shownMaskExpression}if(this.showMaskTyped){if(e){if("IP"===this.maskExpression)return this._checkForIp(e);if("CPF_CNPJ"===this.maskExpression)return this._checkForCpfCnpj(e)}return this.maskExpression.replace(/\w/g,this.placeHolderCharacter)}return""}clearIfNotMatchFn(){const e=this._elementRef?.nativeElement;e&&this.clearIfNotMatch&&this.prefix.length+this.maskExpression.length+this.suffix.length!==e.value.replace(/_/g,"").length&&(this.formElementProperty=["value",""],this.applyMask(e.value,this.maskExpression))}set formElementProperty([e,t]){!this._renderer||!this._elementRef||Promise.resolve().then(()=>this._renderer?.setProperty(this._elementRef?.nativeElement,e,t))}checkSpecialCharAmount(e){return e.split("").filter(s=>this._findSpecialChar(s)).length}removeMask(e){return this._removeMask(this._removeSuffix(this._removePrefix(e)),this.specialCharacters.concat("_").concat(this.placeHolderCharacter))}_checkForIp(e){if("#"===e)return`${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;const t=[];for(let s=0;s<e.length;s++){const a=e[s]??"";a&&a.match("\\d")&&t.push(a)}return t.length<=3?`${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`:t.length>3&&t.length<=6?`${this.placeHolderCharacter}.${this.placeHolderCharacter}`:t.length>6&&t.length<=9?this.placeHolderCharacter:""}_checkForCpfCnpj(e){const t=`${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`,s=`${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}/${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`;if("#"===e)return t;const a=[];for(let o=0;o<e.length;o++){const v=e[o]??"";v&&v.match("\\d")&&a.push(v)}return a.length<=3?t.slice(a.length,t.length):a.length>3&&a.length<=6?t.slice(a.length+1,t.length):a.length>6&&a.length<=9?t.slice(a.length+2,t.length):a.length>9&&a.length<11?t.slice(a.length+3,t.length):11===a.length?"":12===a.length?s.slice(17===e.length?16:15,s.length):a.length>12&&a.length<=14?s.slice(a.length+4,s.length):""}_getActiveElement(e=this.document){const t=e?.activeElement?.shadowRoot;return t?.activeElement?this._getActiveElement(t):e.activeElement}formControlResult(e){this.writingValue||!this.triggerOnMaskChange&&this.maskChanged?this.maskChanged=!1:Array.isArray(this.dropSpecialCharacters)?this.onChange(this._toNumber(this._removeMask(this._removeSuffix(this._removePrefix(e)),this.dropSpecialCharacters))):this.onChange(this.dropSpecialCharacters?this._toNumber(this._checkSymbols(e)):this._removeSuffix(e))}_toNumber(e){if(!this.isNumberValue||""===e)return e;const t=Number(e);return Number.isNaN(t)?e:t}_removeMask(e,t){return e&&e.replace(this._regExpForRemove(t),"")}_removePrefix(e){return this.prefix?e&&e.replace(this.prefix,""):e}_removeSuffix(e){return this.suffix?e&&e.replace(this.suffix,""):e}_retrieveSeparatorValue(e){return this._removeMask(this._removeSuffix(this._removePrefix(e)),this.specialCharacters)}_regExpForRemove(e){return new RegExp(e.map(t=>`\\${t}`).join("|"),"gi")}_replaceDecimalMarkerToDot(e){const t=Array.isArray(this.decimalMarker)?this.decimalMarker:[this.decimalMarker];return e.replace(this._regExpForRemove(t),".")}_checkSymbols(e){if(""===e)return e;const t=this._retrieveSeparatorPrecision(this.maskExpression),s=this._replaceDecimalMarkerToDot(this._retrieveSeparatorValue(e));return this.isNumberValue?t?e===this.decimalMarker?null:this._checkPrecision(this.maskExpression,s):Number(s):s}_retrieveSeparatorPrecision(e){const t=e.match(new RegExp("^separator\\.([^d]*)"));return t?Number(t[1]):null}_checkPrecision(e,t){return e.indexOf("2")>0?Number(t).toFixed(2):Number(t)}}return u.\u0275fac=function(){let T;return function(t){return(T||(T=f.n5z(u)))(t||u)}}(),u.\u0275prov=f.Yz7({token:u,factory:u.\u0275fac}),u})();function S(){const u=(0,f.f3M)($),T=(0,f.f3M)(h);return T instanceof Function?{...u,...T()}:{...u,...T}}function A(u){return[{provide:h,useValue:u},{provide:$,useValue:y},{provide:d,useFactory:S},p]}let B=(()=>{class u{constructor(){this.maskExpression="",this.specialCharacters=[],this.patterns={},this.prefix="",this.suffix="",this.thousandSeparator=" ",this.decimalMarker=".",this.dropSpecialCharacters=null,this.hiddenInput=null,this.showMaskTyped=null,this.placeHolderCharacter=null,this.shownMaskExpression=null,this.showTemplate=null,this.clearIfNotMatch=null,this.validation=null,this.separatorLimit=null,this.allowNegativeNumbers=null,this.leadZeroDateTime=null,this.triggerOnMaskChange=null,this.maskFilled=new f.vpe,this._maskValue="",this._position=null,this._maskExpressionArray=[],this._justPasted=!1,this.document=(0,f.f3M)(E.K0),this._maskService=(0,f.f3M)(p,{self:!0}),this._config=(0,f.f3M)(d),this.onChange=e=>{},this.onTouch=()=>{}}ngOnChanges(e){const{maskExpression:t,specialCharacters:s,patterns:a,prefix:o,suffix:v,thousandSeparator:i,decimalMarker:n,dropSpecialCharacters:x,hiddenInput:P,showMaskTyped:I,placeHolderCharacter:M,shownMaskExpression:c,showTemplate:_,clearIfNotMatch:m,validation:w,separatorLimit:N,allowNegativeNumbers:R,leadZeroDateTime:k,triggerOnMaskChange:g}=e;if(t&&(t.currentValue!==t.previousValue&&!t.firstChange&&(this._maskService.maskChanged=!0),t.currentValue&&t.currentValue.split("||").length>1?(this._maskExpressionArray=t.currentValue.split("||").sort((Z,K)=>Z.length-K.length),this._setMask()):(this._maskExpressionArray=[],this._maskValue=t.currentValue||"",this._maskService.maskExpression=this._maskValue)),s){if(!s.currentValue||!Array.isArray(s.currentValue))return;this._maskService.specialCharacters=s.currentValue||[]}a&&a.currentValue&&(this._maskService.patterns=a.currentValue),o&&(this._maskService.prefix=o.currentValue),v&&(this._maskService.suffix=v.currentValue),i&&(this._maskService.thousandSeparator=i.currentValue),n&&(this._maskService.decimalMarker=n.currentValue),x&&(this._maskService.dropSpecialCharacters=x.currentValue),P&&(this._maskService.hiddenInput=P.currentValue),I&&(this._maskService.showMaskTyped=I.currentValue),M&&(this._maskService.placeHolderCharacter=M.currentValue),c&&(this._maskService.shownMaskExpression=c.currentValue),_&&(this._maskService.showTemplate=_.currentValue),m&&(this._maskService.clearIfNotMatch=m.currentValue),w&&(this._maskService.validation=w.currentValue),N&&(this._maskService.separatorLimit=N.currentValue),R&&(this._maskService.allowNegativeNumbers=R.currentValue,this._maskService.allowNegativeNumbers&&(this._maskService.specialCharacters=this._maskService.specialCharacters.filter(Z=>"-"!==Z))),k&&(this._maskService.leadZeroDateTime=k.currentValue),g&&(this._maskService.triggerOnMaskChange=g.currentValue),this._applyMask()}validate({value:e}){if(!this._maskService.validation||!this._maskValue)return null;if(this._maskService.ipError)return this._createValidationError(e);if(this._maskService.cpfCnpjError)return this._createValidationError(e);if(this._maskValue.startsWith("separator")||r.includes(this._maskValue)||this._maskService.clearIfNotMatch)return null;if(F.includes(this._maskValue))return this._validateTime(e);if(e&&e.toString().length>=1){let t=0;for(const s in this._maskService.patterns)if(this._maskService.patterns[s]?.optional&&(this._maskValue.indexOf(s)!==this._maskValue.lastIndexOf(s)?t+=this._maskValue.split("").filter(o=>o===s).join("").length:-1!==this._maskValue.indexOf(s)&&t++,-1!==this._maskValue.indexOf(s)&&e.toString().length>=this._maskValue.indexOf(s)||t===this._maskValue.length))return null;if(1===this._maskValue.indexOf("{")&&e.toString().length===this._maskValue.length+Number((this._maskValue.split("{")[1]??"").split("}")[0])-4||1===this._maskValue.indexOf("*")||1===this._maskValue.indexOf("?"))return null;if(this._maskValue.indexOf("*")>1&&e.toString().length<this._maskValue.indexOf("*")||this._maskValue.indexOf("?")>1&&e.toString().length<this._maskValue.indexOf("?")||1===this._maskValue.indexOf("{"))return this._createValidationError(e);if(-1===this._maskValue.indexOf("*")||-1===this._maskValue.indexOf("?")){const s=this._maskService.dropSpecialCharacters?this._maskValue.length-this._maskService.checkSpecialCharAmount(this._maskValue)-t:this._maskValue.length-t;if(e.toString().length<s)return this._createValidationError(e)}}return e&&this.maskFilled.emit(),null}onPaste(){this._justPasted=!0}onModelChange(e){(""===e||null==e)&&this._maskService.actualValue&&(this._maskService.actualValue=this._maskService.getActualValue(""))}onInput(e){const t=e.target;if(this._inputValue=t.value,this._setMask(),!this._maskValue)return void this.onChange(t.value);let s=1===t.selectionStart?t.selectionStart+this._maskService.prefix.length:t.selectionStart,a=0,o=!1;if(this._maskService.applyValueChanges(s,this._justPasted,"Backspace"===this._code||"Delete"===this._code,(i,n)=>{this._justPasted=!1,a=i,o=n}),this._getActiveElement()!==t)return;this._maskExpressionArray.length&&(s=1===t.selectionStart?t.selectionStart+this._maskService.prefix.length:t.selectionStart),this._position=1===this._position&&1===this._inputValue.length?null:this._position;let v=this._position?this._inputValue.length+s+a:s+("Backspace"!==this._code||o?a:0);v>this._getActualInputLength()&&(v=this._getActualInputLength()),v<0&&(v=0),t.setSelectionRange(v,v),this._position=null}onBlur(){this._maskValue&&this._maskService.clearIfNotMatchFn(),this.onTouch()}onClick(e){if(!this._maskValue)return;const t=e.target;null!==t&&null!==t.selectionStart&&t.selectionStart===t.selectionEnd&&t.selectionStart>this._maskService.prefix.length&&38!==e.keyCode&&this._maskService.showMaskTyped&&(this._maskService.maskIsShown=this._maskService.showMaskInInput(),t.setSelectionRange&&this._maskService.prefix+this._maskService.maskIsShown===t.value?(t.focus(),t.setSelectionRange(0,0)):t.selectionStart>this._maskService.actualValue.length&&t.setSelectionRange(this._maskService.actualValue.length,this._maskService.actualValue.length));const o=t&&(t.value&&t.value!==this._maskService.prefix?t.value:this._maskService.prefix+this._maskService.maskIsShown);t&&t.value!==o&&(t.value=o),t&&(t.selectionStart||t.selectionEnd)<=this._maskService.prefix.length?t.selectionStart=this._maskService.prefix.length:t&&t.selectionEnd>this._getActualInputLength()&&(t.selectionEnd=this._getActualInputLength())}onKeyDown(e){if(!this._maskValue)return;this._code=e.code?e.code:e.key;const t=e.target;if(this._inputValue=t.value,this._setMask(),38===e.keyCode&&e.preventDefault(),37===e.keyCode||8===e.keyCode||46===e.keyCode){if(8===e.keyCode&&0===t.value.length&&(t.selectionStart=t.selectionEnd),8===e.keyCode&&0!==t.selectionStart)if(this.specialCharacters=this.specialCharacters?.length?this.specialCharacters:this._config.specialCharacters,this.prefix.length>1&&t.selectionStart<=this.prefix.length)t.setSelectionRange(this.prefix.length,t.selectionEnd);else if(this._inputValue.length!==t.selectionStart&&1!==t.selectionStart)for(;this.specialCharacters.includes((this._inputValue[t.selectionStart-1]??"").toString())&&(this.prefix.length>=1&&t.selectionStart>this.prefix.length||0===this.prefix.length);)t.setSelectionRange(t.selectionStart-1,t.selectionEnd);this.checkSelectionOnDeletion(t),this._maskService.prefix.length&&t.selectionStart<=this._maskService.prefix.length&&t.selectionEnd<=this._maskService.prefix.length&&e.preventDefault(),8===e.keyCode&&!t.readOnly&&0===t.selectionStart&&t.selectionEnd===t.value.length&&0!==t.value.length&&(this._position=this._maskService.prefix?this._maskService.prefix.length:0,this._maskService.applyMask(this._maskService.prefix,this._maskService.maskExpression,this._position))}this.suffix&&this.suffix.length>1&&this._inputValue.length-this.suffix.length<t.selectionStart?t.setSelectionRange(this._inputValue.length-this.suffix.length,this._inputValue.length):(65===e.keyCode&&e.ctrlKey||65===e.keyCode&&e.metaKey)&&(t.setSelectionRange(0,this._getActualInputLength()),e.preventDefault()),this._maskService.selStart=t.selectionStart,this._maskService.selEnd=t.selectionEnd}writeValue(e){var t=this;return(0,D.Z)(function*(){"object"==typeof e&&null!==e&&"value"in e&&("disable"in e&&t.setDisabledState(Boolean(e.disable)),e=e.value),("number"==typeof e||t._maskValue.startsWith("separator"))&&(e=t._maskService.numberToString(e),Array.isArray(t.decimalMarker)||(e="."!==t.decimalMarker?e.replace(".",t.decimalMarker):e),t._maskService.isNumberValue=!0),"string"!=typeof e&&(e=""),t._inputValue=e,t._setMask(),e&&t._maskService.maskExpression||t._maskService.maskExpression&&(t._maskService.prefix||t._maskService.showMaskTyped)?(t._maskService.writingValue=!0,t._maskService.formElementProperty=["value",t._maskService.applyMask(e,t._maskService.maskExpression)],t._maskService.writingValue=!1):t._maskService.formElementProperty=["value",e],t._inputValue=e})()}registerOnChange(e){this._maskService.onChange=this.onChange=e}registerOnTouched(e){this.onTouch=e}_getActiveElement(e=this.document){const t=e?.activeElement?.shadowRoot;return t?.activeElement?this._getActiveElement(t):e.activeElement}checkSelectionOnDeletion(e){e.selectionStart=Math.min(Math.max(this.prefix.length,e.selectionStart),this._inputValue.length-this.suffix.length),e.selectionEnd=Math.min(Math.max(this.prefix.length,e.selectionEnd),this._inputValue.length-this.suffix.length)}setDisabledState(e){this._maskService.formElementProperty=["disabled",e]}_repeatPatternSymbols(e){return e.match(/{[0-9]+}/)&&e.split("").reduce((t,s,a)=>{if(this._start="{"===s?a:this._start,"}"!==s)return this._maskService._findSpecialChar(s)?t+s:t;this._end=a;const o=Number(e.slice(this._start+1,this._end));return t+new Array(o+1).join(e[this._start-1])},"")||e}_applyMask(){this._maskService.maskExpression=this._repeatPatternSymbols(this._maskValue||""),this._maskService.formElementProperty=["value",this._maskService.applyMask(this._inputValue,this._maskService.maskExpression)]}_validateTime(e){const t=this._maskValue.split("").filter(s=>":"!==s).length;return e&&(0==+(e[e.length-1]??-1)&&e.length<t||e.length<=t-2)?this._createValidationError(e):null}_getActualInputLength(){return this._maskService.actualValue.length||this._maskService.actualValue.length+this._maskService.prefix.length}_createValidationError(e){return{mask:{requiredMask:this._maskValue,actualValue:e}}}_setMask(){this._maskExpressionArray.length>0&&this._maskExpressionArray.some(e=>{const t=this._maskService.removeMask(this._inputValue)?.length<=this._maskService.removeMask(e)?.length;if(this._inputValue&&t)return this._maskValue=e,this.maskExpression=e,this._maskService.maskExpression=e,t;this._maskValue=this.maskExpression=this._maskService.maskExpression=this._maskExpressionArray[this._maskExpressionArray.length-1]??""})}}return u.\u0275fac=function(e){return new(e||u)},u.\u0275dir=f.lG2({type:u,selectors:[["input","mask",""],["textarea","mask",""]],hostBindings:function(e,t){1&e&&f.NdJ("paste",function(){return t.onPaste()})("ngModelChange",function(a){return t.onModelChange(a)})("input",function(a){return t.onInput(a)})("blur",function(){return t.onBlur()})("click",function(a){return t.onClick(a)})("keydown",function(a){return t.onKeyDown(a)})},inputs:{maskExpression:["mask","maskExpression"],specialCharacters:"specialCharacters",patterns:"patterns",prefix:"prefix",suffix:"suffix",thousandSeparator:"thousandSeparator",decimalMarker:"decimalMarker",dropSpecialCharacters:"dropSpecialCharacters",hiddenInput:"hiddenInput",showMaskTyped:"showMaskTyped",placeHolderCharacter:"placeHolderCharacter",shownMaskExpression:"shownMaskExpression",showTemplate:"showTemplate",clearIfNotMatch:"clearIfNotMatch",validation:"validation",separatorLimit:"separatorLimit",allowNegativeNumbers:"allowNegativeNumbers",leadZeroDateTime:"leadZeroDateTime",triggerOnMaskChange:"triggerOnMaskChange"},outputs:{maskFilled:"maskFilled"},exportAs:["mask","ngxMask"],standalone:!0,features:[f._Bn([{provide:C.JU,useExisting:u,multi:!0},{provide:C.Cf,useExisting:u,multi:!0},p]),f.TTD]}),u})();const j=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};j.KeyboardEvent||(j.KeyboardEvent=function(u,T){})},5861:(G,O,l)=>{function D(E,C,d,h,$,y,F){try{var r=E[y](F),b=r.value}catch(p){return void d(p)}r.done?C(b):Promise.resolve(b).then(h,$)}function f(E){return function(){var C=this,d=arguments;return new Promise(function(h,$){var y=E.apply(C,d);function F(b){D(y,h,$,F,r,"next",b)}function r(b){D(y,h,$,F,r,"throw",b)}F(void 0)})}}l.d(O,{Z:()=>f})}}]);