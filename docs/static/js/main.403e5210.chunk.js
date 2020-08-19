(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{22:function(e,a,r){e.exports=r(44)},44:function(e,a,r){"use strict";r.r(a);var t=r(0),n=r.n(t),c=r(19),l=r.n(c),s=r(3),i=r(1),o=function(){return n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-success"},n.a.createElement(s.b,{className:"navbar-brand",to:"/"},"Asociaciones"),n.a.createElement("div",{className:"navbar-collapse"},n.a.createElement("div",{className:"navbar-nav"},n.a.createElement(s.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel"},"Marvel"),n.a.createElement(s.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc"},"DC"),n.a.createElement(s.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search"},"Search"))),n.a.createElement("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement(s.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/login"},"Logout"))))},m=function(e){var a=e.history;return n.a.createElement("div",{className:"container mt-5 text-center"},n.a.createElement("h1",null,"H\xe9roes de Marvel y DC"),n.a.createElement("hr",null),n.a.createElement("button",{className:"btn btn-outline-success px-5 btn-lg",onClick:function(){a.replace("/")}},"Ingresar"))},u=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],p=function(e){var a=e.id,r=e.superhero,t=e.alter_ego,c=e.first_appearance,l=e.characters;return n.a.createElement("div",{className:"card ms-3",style:{maxWidth:540}},n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("img",{src:"../assets/".concat(a,".jpg"),className:"card-img",alt:r})),n.a.createElement("div",{className:"col-md-8"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},r),n.a.createElement("p",{className:"card-text"}," ",t," "),t!==l&&n.a.createElement("p",{className:"card-text"}," ",l),n.a.createElement("p",{className:"card-text"},n.a.createElement("small",{className:"text-muted"}," ",c," ")),n.a.createElement(s.b,{to:"./hero/".concat(a)},"Mas...")))))},h=function(e){var a=e.publisher,r=Object(t.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Publisher "'.concat(e,'" no es correcto'));return u.filter((function(a){return a.publisher===e}))}(a)}),[a]);return n.a.createElement("div",{className:"card-columns animate__animated animate__fadeIn"},r.map((function(e){return n.a.createElement(p,Object.assign({key:e.id},e),e.superhero)})))},d=function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Marver Screen"),n.a.createElement("hr",null),n.a.createElement(h,{publisher:"Marvel Comics"}))},v=function(e){var a=e.history,r=Object(i.h)().heroeId,c=Object(t.useMemo)((function(){return e=r,u.find((function(a){return a.id===e}));var e}),[r]);if(!c)return n.a.createElement(i.a,{to:"/"});var l=c.superhero,s=c.alter_ego,o=c.first_appearance,m=c.characters;return n.a.createElement("div",{className:"row mt-5"},n.a.createElement("div",{className:"col-4"},n.a.createElement("img",{src:"../assets/ahero/".concat(r,".jpg"),alt:l,className:"img-thumbnail animate__animated animate__fadeInLeft"})),n.a.createElement("div",{className:"col-8 animate__animated animate__bounceIn"},n.a.createElement("h3",null," ",l," "),n.a.createElement("ul",null,n.a.createElement("li",{className:"list-group-item"},n.a.createElement("b",null," Alter ego: ")," ",s," "),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("b",null," Publisher: ")," ",s," "),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("b",null," First appearance: ")," ",o," ")),n.a.createElement("h5",null," characters "),n.a.createElement("p",null," ",m," "),n.a.createElement("button",{className:"btn btn-outline-info",onClick:function(){a.length<=2?a.push("/"):a.goBack()}},"Regresar")))},E=function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"DC Screen"),n.a.createElement("hr",null),n.a.createElement(h,{publisher:"DC Comics"}))},b=r(10),f=r(21),C=r.n(f),g=r(9),_=r(15),N=function(e){var a=e.history,r=Object(i.g)(),c=C.a.parse(r.search).q,l=void 0===c?"":c,s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(t.useState)(e),r=Object(b.a)(a,2),n=r[0],c=r[1],l=function(){c(e)},s=function(e){var a=e.target;c(Object(_.a)(Object(_.a)({},n),{},Object(g.a)({},a.name,a.value)))};return[n,s,l]}({searchText:l}),o=Object(b.a)(s,3),m=o[0],h=o[1],d=(o[2],m.searchText),v=Object(t.useMemo)((function(){return""===(e=l)?[]:(e=e.toLocaleLowerCase(),u.filter((function(a){return a.superhero.toLocaleLowerCase().includes(e)})));var e}),[l]);return n.a.createElement("div",null,n.a.createElement("h1",null,"Search Screen"),n.a.createElement("hr",null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-5"},n.a.createElement("h4",null,"Formulario de Busqueda"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a.push("?q=".concat(d))}},n.a.createElement("input",{type:"text",placeholder:"Buscar H\xe9roe",name:"searchText",className:"form-control",autoComplete:"off",onChange:h,value:d}),n.a.createElement("button",{type:"submit",className:"btn btn-block btn-outline-success my-2"},"Buscar..."))),n.a.createElement("div",{className:"col-7"},n.a.createElement("h4",null," Resultados "),n.a.createElement("hr",null),""===l&&n.a.createElement("div",{className:"alert alert-warning"},"Busca un H\xe9roe"),""!==l&&0===v.length&&n.a.createElement("div",{className:"alert alert-danger animate__animated animate__shakeX"},"No se encontraron h\xe9roes con ",n.a.createElement("strong",null,l)),v.map((function(e){return n.a.createElement(p,Object.assign({key:e.id},e))})))))},y=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(o,null),n.a.createElement("div",{className:"container mt-2"},n.a.createElement(i.d,null,n.a.createElement(i.b,{exact:!0,path:"/marvel",component:d}),n.a.createElement(i.b,{exact:!0,path:"/hero/:heroeId",component:v}),n.a.createElement(i.b,{exact:!0,path:"/dc",component:E}),n.a.createElement(i.b,{exact:!0,path:"/search",component:N}),n.a.createElement(i.a,{to:"/marvel"}))))},M=function(){return n.a.createElement(s.a,null,n.a.createElement("div",null,n.a.createElement(i.d,null,n.a.createElement(i.b,{exact:!0,path:"/login",component:m}),n.a.createElement(i.b,{path:"/",component:y}))))},k=function(){return n.a.createElement(M,null)};l.a.render(n.a.createElement(k,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.403e5210.chunk.js.map
