(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/viralataCaramel1.db9c6cf8.jpg"},32:function(e,t,a){e.exports=a.p+"static/media/logodotei.4f6669be.png"},35:function(e,t,a){e.exports=a(72)},40:function(e,t,a){},42:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n,l=a(1),r=a.n(l),c=a(29),o=a.n(c),s=(a(40),a(4)),i=a(3),m=a(6),u=a.n(m),d=a(11),E=a(2),p=(a(42),a(30)),f=a.n(p);n=localStorage.getItem("adotei@token")?JSON.parse("".concat(localStorage.getItem("adotei@token"))):{token:""};var v=f.a.create({baseURL:"https://adotei-back.herokuapp.com",headers:{auth:n.token}}),b=a(15);function g(){var e=Object(i.g)(),t=Object(l.useState)(""),a=Object(E.a)(t,2),n=a[0],c=a[1],o=Object(l.useState)(""),m=Object(E.a)(o,2),p=m[0],f=m[1],g=Object(l.useState)(""),h=Object(E.a)(g,2),N=h[0],O=h[1],j=Object(l.useState)(!1),S=Object(E.a)(j,2),w=S[0],k=S[1];function x(){return(x=Object(d.a)(u.a.mark((function t(a){var l;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),k(!1),""===n||""===p){t.next=19;break}return O("disabled"),t.prev=4,t.next=7,v.post("/auth/login",{username:n,password:p});case 7:l=t.sent,localStorage.setItem("adotei@token",JSON.stringify(l.data)),localStorage.setItem("adotei@perfil",JSON.stringify(l.data.user)),e.push("/adocao"),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(4),console.log(t.t0),alert("Erro ao logar: verifique seu login e senha!",t.t0);case 17:t.next=20;break;case 19:k(!0);case 20:O("");case 21:case"end":return t.stop()}}),t,null,[[4,13]])})))).apply(this,arguments)}return Object(l.useEffect)((function(){null!==JSON.parse(localStorage.getItem("adotei@token"))&&e.push("/adocao")}),[e]),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"login-container col s4 offset-s4"},r.a.createElement("section",{className:"form col s8 offset-s2"},r.a.createElement("form",{onSubmit:function(e){return x.apply(this,arguments)}},r.a.createElement("h1",{id:"adotei"},"Adotei"),r.a.createElement("h3",{id:"bemvindo"},"Bem vindo!"),r.a.createElement("h5",{id:"textologin"},"fa\xe7a seu login:"),r.a.createElement("input",{placeholder:"Login",value:n,onChange:function(e){return c(e.target.value)}}),w?r.a.createElement("span",{id:"erro"},"campo obrigat\xf3rio"):null,r.a.createElement("input",{placeholder:"Senha",type:"password",value:p,onChange:function(e){return f(e.target.value)}}),w?r.a.createElement("span",{id:"erro"},"campo obrigat\xf3rio"):null,N?r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"indeterminate"})):r.a.createElement("button",{className:"button btn waves-effect waves-light",type:"submit"},"Entrar"),r.a.createElement(s.b,{className:"row",to:"/registeruser"},r.a.createElement("div",{className:"col s12"},r.a.createElement(b.a,{size:16,color:"#3b5998"}),r.a.createElement("span",{id:"cadastro"},"Cadastrar")))))))}a(65);function h(){var e=Object(i.g)(),t=Object(l.useState)(""),a=Object(E.a)(t,2),n=a[0],c=a[1],o=Object(l.useState)(""),m=Object(E.a)(o,2),p=m[0],f=m[1],b=Object(l.useState)(""),g=Object(E.a)(b,2),h=g[0],N=g[1],O=Object(l.useState)(""),j=Object(E.a)(O,2),S=j[0],w=j[1],k=Object(l.useState)(""),x=Object(E.a)(k,2),C=x[0],y=x[1],I=Object(l.useState)(""),J=Object(E.a)(I,2),P=J[0],_=J[1],z=Object(l.useState)(""),A=Object(E.a)(z,2),L=A[0],q=A[1],D=Object(l.useState)(!1),B=Object(E.a)(D,2),R=B[0],U=B[1],G=Object(l.useState)(!0),M=Object(E.a)(G,2),V=M[0],F=M[1];function T(){return!(-1===[p,h,S,C,P,L].indexOf((function(e){return""===e})))}function H(){return(H=Object(d.a)(u.a.mark((function t(a){var l,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),1,0,U(!0),l={username:P,password:L,role:1,user:{name:n,foto:p,email:h,telefone:C,sobre:S,credito:0}},!T()){t.next=20;break}return F(!0),t.prev=7,t.next=10,v.post("auth/new",l);case 10:r=t.sent,console.log("Cadastro realizado com sucesso",r.status),e.push("/"),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(7),console.log("Erro no cadastro tente novamente: ",t.t0);case 18:t.next=21;break;case 20:F(!1);case 21:U(!1);case 22:case"end":return t.stop()}}),t,null,[[7,15]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"caixaRegistro col s4 offset-s4"},r.a.createElement("section",{className:"col s12 sectionbox"},r.a.createElement("div",{className:"col s2"},r.a.createElement(s.b,{className:".back-link",to:"/"},r.a.createElement("button",{className:"waves-effect waves-light btn voltarbtn"},"Voltar"))),r.a.createElement("div",{className:"col s6 offset-s1"},r.a.createElement("h5",{id:"adotei"},"Fa\xe7a cadastro no Adotei e ajude os bichinhos"))),r.a.createElement("form",{className:"col s6 offset-s3",onSubmit:function(e){return H.apply(this,arguments)}},r.a.createElement("input",{placeholder:"Nome completo",value:n,onChange:function(e){return c(e.target.value)}}),V?r.a.createElement("div",null):r.a.createElement("span",{id:"erro"},"campo obrigat\xf3rio"),r.a.createElement("input",{placeholder:"Nome de usu\xe1rio",value:P,onChange:function(e){return _(e.target.value)}}),V?r.a.createElement("div",null):r.a.createElement("span",{id:"erro"},"campo obrigat\xf3rio"),r.a.createElement("input",{placeholder:"senha",type:"password",value:L,onChange:function(e){return q(e.target.value)}}),V?r.a.createElement("div",null):r.a.createElement("span",{id:"erro"},"campo obrigat\xf3rio"),r.a.createElement("input",{type:"url",placeholder:"Coloque o link da imagem aqui!",value:p,onChange:function(e){return f(e.target.value)}}),V?r.a.createElement("div",null):r.a.createElement("span",{id:"erro"},"campo obrigat\xf3rio"),r.a.createElement("input",{placeholder:"Email",type:"email",value:h,onChange:function(e){return N(e.target.value)}}),V?r.a.createElement("div",null):r.a.createElement("span",{id:"erro"},"campo obrigat\xf3rio"),r.a.createElement("input",{placeholder:"Telefone",value:C,onChange:function(e){return y(e.target.value)}}),V?r.a.createElement("div",null):r.a.createElement("span",{id:"erro"},"campo obrigat\xf3rio"),r.a.createElement("input",{placeholder:"Descri\xe7\xe3o",type:"text",value:S,onChange:function(e){return w(e.target.value)}}),V?r.a.createElement("div",null):r.a.createElement("span",{id:"erro"},"campo obrigat\xf3rio"),R?r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"indeterminate"})):r.a.createElement("button",{className:"button btn waves-effect waves-light",type:"submit",name:"action"},"Cadastrar"))))}a(66);var N=a(32),O=a.n(N);a(67);function j(){var e=r.a.useState("voc\xea!"),t=Object(E.a)(e,2),a=t[0],n=t[1],c=r.a.useState(1),o=Object(E.a)(c,2),m=o[0],u=o[1],d=Object(i.g)();return Object(l.useEffect)((function(){var e=JSON.parse(localStorage.getItem("adotei@token"));null===e?d.push("/"):n(e.user.name),console.log(e),u(e.role)}),[d]),r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("img",{id:"logo",alt:"logo",src:O.a}),r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},2===m?r.a.createElement("li",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.b,{id:"menuitem",to:"/profileong"},"Admin")))):r.a.createElement("div",null),r.a.createElement("li",null,r.a.createElement(s.b,{id:"menuitem",to:"/adocao"},"Inicio")),r.a.createElement("li",null,r.a.createElement(s.b,{id:"menuitem",to:"/profileuser"},"Perfil do ",a)),r.a.createElement("li",null,r.a.createElement(s.b,{id:"menuitem",onClick:function(){return localStorage.removeItem("adotei@token"),void d.push("/")}},"sair")))))}var S=a(33);function w(){var e=r.a.useState({}),t=Object(E.a)(e,2),a=t[0],n=t[1],c=Object(i.g)();function o(){return(o=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.post("/user/".concat(a._id,"/addcredit"),{credito:1});case 2:v.get("/user/".concat(a._id,"/")).then((function(e){console.log(e.data),n(e.data),localStorage.setItem("adotei@perfil",JSON.stringify(e.data))}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.useEffect)((function(){var e=JSON.parse(localStorage.getItem("adotei@token"));null===e?c.push("/"):v.get("/user/".concat(e.user._id,"/")).then((function(e){console.log(e.data),n(e.data),localStorage.setItem("adotei@perfil",JSON.stringify(e.data))}))}),[c]),r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s6 offset-s3"},r.a.createElement("div",{className:"row box z-depth-3"},r.a.createElement("div",{className:"perfil col s6"},r.a.createElement("img",{className:"circle responsive-img",id:"fotoPerfil",alt:"foto de "+a.name,src:a.foto}),r.a.createElement("div",{className:"dadosPerfil"},r.a.createElement("h2",{id:"conta"},a.name),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Sobre:"),r.a.createElement("td",null,a.sobre)),r.a.createElement("tr",null,r.a.createElement("td",null,"email:"),r.a.createElement("td",null,a.email)),r.a.createElement("tr",null,r.a.createElement("td",null,"telefone:"),r.a.createElement("td",null,a.telefone)))))),r.a.createElement("div",{className:"conta col s2"},r.a.createElement("div",{id:"saldo"},"Saldo: ",r.a.createElement(S.a,null)," ",a.credito),r.a.createElement("button",{onClick:function(){return o.apply(this,arguments)},className:"waves-effect waves-light btn"},"Adicionar fundos"))))))}a(68);function k(){var e=Object(l.useState)([]),t=Object(E.a)(e,2),a=t[0],n=t[1],c=Object(l.useState)([]),o=Object(E.a)(c,2),s=o[0],m=o[1];function p(e){m(e.target.value)}function f(e){B(e.target.value)}Object(l.useEffect)((function(){v.get("institution").then((function(e){n(e.data)}))}),[]);var b=Object(i.g)(),g=Object(l.useState)(""),h=Object(E.a)(g,2),N=h[0],O=h[1],S=Object(l.useState)(""),w=Object(E.a)(S,2),k=w[0],x=w[1],C=Object(l.useState)(""),y=Object(E.a)(C,2),I=y[0],J=y[1],P=Object(l.useState)(""),_=Object(E.a)(P,2),z=_[0],A=_[1],L=Object(l.useState)(""),q=Object(E.a)(L,2),D=q[0],B=q[1];function R(){return(R=Object(d.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={name:N,foto:k,porte:D,sobre:z,idade:I,foiAdotado:!1,institution:s},e.prev=2,console.log(a),e.next=6,v.post("pet",a);case 6:n=e.sent,console.log("Cadastro realizado com sucesso",n.data),b.push("/profileong"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log("Erro no cadastro tente novamente",e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}return r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement("div",{className:"newCase-container"},r.a.createElement("div",{className:"content"},r.a.createElement("section",null,r.a.createElement("h1",null,"Nova Ado\xe7\xe3o")),r.a.createElement("form",{onSubmit:function(e){return R.apply(this,arguments)}},r.a.createElement("input",{placeholder:"Nome",value:N,onChange:function(e){return O(e.target.value)}}),r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("input",{name:"porte",value:"Grande",type:"radio",onChange:f}),r.a.createElement("span",null,"Grande"))),r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("input",{name:"porte",value:"M\xe9dio",type:"radio",onChange:f}),r.a.createElement("span",null,"M\xe9dio"))),r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("input",{name:"porte",value:"Pequeno",type:"radio",onChange:f}),r.a.createElement("span",null,"Pequeno"))),r.a.createElement("input",{placeholder:"Idade em meses",type:"number",value:I,onChange:function(e){return J(e.target.value)}}),r.a.createElement("label",{for:"msg"}),r.a.createElement("textarea",{placeholder:"Descri\xe7\xe3o:",value:z,onChange:function(e){return A(e.target.value)}}),r.a.createElement("input",{placeholder:"Link da imagem aqui!!",value:k,onChange:function(e){return x(e.target.value)}}),r.a.createElement("div",null,a.map((function(e){return r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("input",{key:e._id,value:e._id,onChange:p,name:"ong",type:"radio"}),r.a.createElement("span",null,e.name)))}))),r.a.createElement("button",{className:"button btn waves-effect waves-light",type:"submit"},"Cadastrar")))))}a(69);function x(){var e=Object(l.useState)([]),t=Object(E.a)(e,2),a=t[0],n=t[1];return Object(l.useEffect)((function(){v.get("pet").then((function(e){n(e.data)}))}),[]),r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col  s6 offset-s3 home-container"},a.map((function(e){return r.a.createElement("div",{className:"card z-depth-3"},r.a.createElement("div",{className:"card-image waves-effect waves-block waves-light"},r.a.createElement("img",{className:"activator fotos",src:e.foto,alt:e.name})),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"col s11 card-title activator orange-text text-darken-2"},e.name),r.a.createElement("a",{className:"col btn-floating btn-large waves-effect waves-light red"},r.a.createElement("i",{className:"carinho material-icons"},"favorite")))),r.a.createElement("div",{className:"card-reveal"},r.a.createElement("span",{className:"card-title orange-text text-darken-2"},e.name,r.a.createElement("i",{className:"material-icons right"},"close")),r.a.createElement("p",null,e.sobre)))})))))}a(70);var C=a(14),y=a.n(C);function I(){var e="Caramelin",t="Ra\xe7a n\xe3o identificada";return r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement("div",{className:"busca-pet-container"},r.a.createElement("h1",null,"Animais de ","Vit\xf3ria"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.b,{to:"/infoPet"},r.a.createElement("img",{src:y.a,alt:"Logo adotei"}),r.a.createElement("div",{className:"busca-pet-topo-retangulo-container"},r.a.createElement("h1",null,e),r.a.createElement("h2",null,t),r.a.createElement("h2",null,"6 meses")),r.a.createElement("div",{className:"busca-pet-baixo-retangulo-container"}))),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/infoPet"},r.a.createElement("img",{src:y.a,alt:"Logo adotei"}),r.a.createElement("div",{className:"busca-pet-topo-retangulo-container"},r.a.createElement("h1",null,e),r.a.createElement("h2",null,t),r.a.createElement("h2",null,"6 meses")),r.a.createElement("div",{className:"busca-pet-baixo-retangulo-container"}))),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/infoPet"},r.a.createElement("img",{src:y.a,alt:"Logo adotei"}),r.a.createElement("div",{className:"busca-pet-topo-retangulo-container"},r.a.createElement("h1",null,e),r.a.createElement("h2",null,t),r.a.createElement("h2",null,"6 meses")),r.a.createElement("div",{className:"busca-pet-baixo-retangulo-container"}))),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/infoPet"},r.a.createElement("img",{src:y.a,alt:"Logo adotei"}),r.a.createElement("div",{className:"busca-pet-topo-retangulo-container"},r.a.createElement("h1",null,e),r.a.createElement("h2",null,t),r.a.createElement("h2",null,"6 meses")),r.a.createElement("div",{className:"busca-pet-baixo-retangulo-container"}))))))}var J=a(34),P=function(e){var t=e.component,a=e.auth,n=Object(J.a)(e,["component","auth"]);return r.a.createElement(i.b,Object.assign({},n,{render:function(e){return!0===a?r.a.createElement(t,e):r.a.createElement(i.a,{to:"/"})}}))};a(71);function _(){var e=Object(l.useState)([]),t=Object(E.a)(e,2),a=t[0],n=t[1];function c(){return(c=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.delete("pet/".concat(t._id));case 3:n(a.filter((function(e){return e._id!==t._id}))),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert("Erro ao deletar: ".concat(e.t0));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return Object(l.useEffect)((function(){v.get("pet").then((function(e){n(e.data)}))}),[]),r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement("div",{className:"profileUser-container"},r.a.createElement("header",null,r.a.createElement("span",null,"Bem vindo, Usu\xe1rio"),r.a.createElement(s.b,{className:"button btn waves-effect waves-light ",to:"/new"},"Cadastrar novo caso")),r.a.createElement("h1",null,"Casos ",a.length," cadastrados"),r.a.createElement("ul",{className:"box"},a.map((function(e){return r.a.createElement("li",{key:e._id},r.a.createElement("div",{className:"card z-depth-2"},r.a.createElement("div",{className:"z-depth-2 card-image waves-effect waves-block waves-light"},r.a.createElement("div",{onClick:function(){return function(e){return c.apply(this,arguments)}(e)},className:"btnlixo col s1 offset-s10"},r.a.createElement(b.b,{size:32,color:"#f2a365"})),r.a.createElement("img",{className:"fotos activator",src:e.foto,alt:e.name})),r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title activator orange-text text-darken-2"},e.name),"Carinho"),r.a.createElement("div",{className:"card-reveal"},r.a.createElement("span",{className:"card-title orange-text text-darken-2"},e.name,r.a.createElement("i",{className:"material-icons right"},"close")),r.a.createElement("p",null,e.sobre))))})))))}function z(){var e=""!==JSON.parse(localStorage.getItem("adotei@token")|{}).token;return r.a.createElement(s.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",exact:!0,component:g}),r.a.createElement(i.b,{path:"/registeruser",component:h}),r.a.createElement(P,{path:"/profileuser",component:w,auth:e}),r.a.createElement(P,{path:"/profileong",component:_,auth:e}),r.a.createElement(P,{path:"/new",component:k,auth:e}),r.a.createElement(P,{path:"/adocao",component:x,auth:e}),r.a.createElement(P,{path:"/buscar",component:I,auth:e}),r.a.createElement(P,{path:"/cabecalho",component:j,auth:e}),r.a.createElement(P,{path:"/buscapet",component:I,auth:e})))}var A=function(){return r.a.createElement("div",{className:"row"},r.a.createElement(z,null))};o.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.0c31f912.chunk.js.map