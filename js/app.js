!function(e){var t={};function a(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t){function a(){const e=document.querySelector("[data-anime]");e&&e.classList.add("animate")}function n(){const e=Array.from(document.querySelectorAll("[data-cep]")),t=document.querySelector('[data-cep="cep"]'),a=document.querySelector('[data-cep="cep2"]');if(e.length>0){function n(e){return e.replace("-","").replace(".","")}t.addEventListener("change",(function(){!function(t){if(8==t.length)fetch(`https://viacep.com.br/ws/${t}/json/`).then(e=>e.json()).then(t=>{t.logradouro&&(e[1].value=t.logradouro,e[3].value=t.bairro,e[4].value=t.localidade,e[5].value=t.uf,e[2].focus(),e[0].classList.remove("focus-erro"))});else{const t=document.createElement("div");t.classList.add("modal-erro"),t.innerHTML="<h3>CEP incorreto!</h3>",document.body.appendChild(t),e[0].value="",e[0].classList.add("focus-erro"),e[0].focus()}}(n(t.value))})),a&&a.addEventListener("change",(function(){!function(t){if(8==t.length)fetch(`https://viacep.com.br/ws/${t}/json/`).then(e=>e.json()).then(t=>{t.logradouro&&(e[7].value=t.logradouro,e[9].value=t.bairro,e[10].value=t.localidade,e[11].value=t.uf,e[8].focus(),e[6].classList.remove("focus-erro"))});else{const t=document.createElement("div");t.classList.add("modal-erro"),t.innerHTML="<h3>CEP incorreto!</h3>",document.body.appendChild(t),e[6].value="",e[6].classList.add("focus-erro"),e[6].focus()}}(n(a.value))}))}}!function(){const e=document.querySelectorAll(".primeiro-acesso"),t=document.querySelector(".mensagem-cadastro");if(e.length){function a(e){e.preventDefault()}e.forEach(e=>{e.addEventListener("click",a),e.addEventListener("click",()=>{t.classList.toggle("ativo")})})}}(),function(){function e(){setTimeout((function(){const e=document.querySelector(".loading");e&&e.classList.add("remove")}),1e3)}window.onload=function(){try{CarregarUsuarioLogado(),e(),a()}catch{e(),a()}}}(),function(){const e=document.querySelectorAll(".btn-file a"),t=document.querySelectorAll('.btn-file input[type="file"]');if(e.length&&t.length){function a(){e.forEach(e=>{e.classList.add("hover")})}function n(){e.forEach(e=>{e.classList.remove("hover")})}t.forEach(e=>{e.addEventListener("mouseover",a),e.addEventListener("mouseout",n)})}}(),function(){const e=document.querySelector("#senha"),t=document.querySelector("#senha2");e&&t&&t.addEventListener("change",()=>{if(e.value!=t.value){const e=document.createElement("div");e.classList.add("modal-erro"),e.innerHTML="<h3>Senhas não conferem</h3>",document.body.appendChild(e),t.classList.add("focus-erro"),t.focus(),t.setCustomValidity("Senhas não conferem")}else t.setCustomValidity(""),t.classList.remove("focus-erro")})}(),function(){const e=document.getElementById("senha"),t=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#]?)[0-9a-zA-Z$*&@#]{6,}$/,a=document.querySelector(".mostraForca");e&&e.addEventListener("keyup",()=>{e.value.length>0?t.test(e.value)?(a.classList.remove("fraca"),a.classList.add("forte"),e.setCustomValidity(""),e.classList.remove("focus-erro")):(a.classList.remove("forte"),a.classList.add("fraca"),e.classList.add("focus-erro"),e.focus(),e.setCustomValidity("Senha fraca, verifique!")):(a.classList.remove("fraca"),a.classList.remove("forte"))})}(),n(),function(){const e=document.querySelector('[data-endereco="btn"]'),t=document.querySelector('[data-endereco="conteudo"]');if(e){e.addEventListener("click",(function(a){a.preventDefault(),t.classList.add("visible"),e.classList.add("remove"),n()}))}}(),function(){const e=document.querySelector("[data-cpf]");if(e){e.addEventListener("change",(function(e){const t=e.target.value.replace(/\D/g,"").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"$1.$2.$3-$4");e.target.value=t}))}}(),function(){const e=document.querySelector(".validaData")||document.querySelector(".data-lembrete");if(e){const t=new Date,a=t.getUTCMonth()<10?"0"+(t.getUTCMonth()+1):t.getUTCMonth()+1,n=`${t.getFullYear()}-${a}-${t.getDate()}`;e.className.indexOf("validaData")>-1?e.setAttribute("max",n):e.className.indexOf("data-lembrete")&&e.setAttribute("min",n)}}(),function(e,t){const a=document.getElementById(e),n=document.querySelectorAll(t);if(a&&n){function o(e){e.preventDefault(),a.classList.add("mostrar"),function(e){const t=document.querySelector(".btn-confirma-delete");t&&t.addEventListener("click",()=>{window.location.assign(e.href)})}(e.target)}a.addEventListener("click",t=>{t.target.id!=e&&"fecha-modal"!=t.target.className&&"btn-cancela"!=t.target.id||a.classList.remove("mostrar")}),n.forEach(e=>{e.addEventListener("click",o)}),window.addEventListener("keyup",e=>{"Escape"==e.key&&a.classList.remove("mostrar")})}}("modal-delete",".btn-remover"),function(){const e=document.querySelector("#file"),t=document.querySelector('[data-upload="lista"]'),a=document.querySelector(".quantidade-arquivos");if(e&&t&&a){e.addEventListener("change",()=>function([...e]){t.innerHTML="",e.forEach(e=>{const a=document.createElement("li");a.innerText=e.name,t.appendChild(a)}),a.innerText=1==e.length?e.length+" arquivo":e.length+" arquivos",a.classList.add("ativo")}([...e.files]))}}(),function(){let e=document.querySelector("[data-identificacao]");if(e){e=e.innerText.toLowerCase();const t=document.querySelector("[data-responsavel]");"menor"===e?t.classList.add("ativo"):t.classList.remove("ativo")}}(),setTimeout(()=>{const e=document.querySelector(".bem-vindo"),t=document.querySelector("#NomeUsuarioLogado");e&&t&&(e.innerHTML=`Olá, ${t.innerText.split(" ")[0]} 🙂`)},2500),function(){const e=document.querySelector(".data-hoje span");if(e){const t=new Date,a=t.getDate(),n=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][t.getMonth()],o=t.getFullYear();e.innerHTML=`${a} de ${n} de ${o}`}}(),async function(e){try{const t=await fetch(e),a=await(await t).json();!function(e){const t=document.querySelector('[data-dash="vence-hoje"] h4'),a=document.querySelector('[data-dash="proximos-dias"] h4'),n=document.querySelector('[data-dash="proximas-semanas"] h4'),o=document.querySelector('[data-dash="todos-prazos"] h4');t&&a&&n&&o&&(e.forEach(e=>{if("vence-hoje"==e.validade)t.innerText=+t.innerText+1;else if("proximos-dias"==e.validade)a.innerText=+a.innerText+1;else{if("proximas-semanas"!=e.validade)return!1;n.innerText=+n.innerText+1}}),t.innerText="0"+t.innerText,a.innerText="0"+a.innerText,n.innerText="0"+n.innerText,o.innerText="0"+e.length,function(e){const t=document.querySelector(".vencendo-prazo"),a=e.map(e=>{const t=e.hora.split(":"),a=new Date(e.data.getFullYear(),e.data.getUTCMonth(),e.data.getDate(),t[0],t[1],0);return{prazo:e,dataHora:a}});a.sort((function(e,t){return e.dataHora.getTime()-t.dataHora.getTime()})),a.forEach(e=>{const a=document.createElement("li");if(a.classList.add("alerta-dash"),"vence-hoje"==e.prazo.validade)a.innerHTML=`\n                <span class="alerta-hora vence-hoje">${e.prazo.hora}</span>\n                <div class="alerta-infos">\n                <span class="data-alerta">${e.prazo.data.toLocaleString().split(" ")[0]}</span>\n                  <p>${e.prazo.descricao}</p>\n                  <span>P: ${e.prazo.processo}</span>\n                </div>\n                `;else if("proximos-dias"==e.prazo.validade)a.innerHTML=`\n                <span class="alerta-hora proximos-dias">${e.prazo.hora}</span>\n                <div class="alerta-infos">\n                <span class="data-alerta">${e.prazo.data.toLocaleString().split(" ")[0]}</span>\n                  <p>${e.prazo.descricao}</p>\n                  <span>P: ${e.prazo.processo}</span>\n                </div>\n                `;else{if("proximas-semanas"!=e.prazo.validade)return!1;a.innerHTML=`\n                <span class="alerta-hora proximas-semanas">${e.prazo.hora}</span>\n                <div class="alerta-infos">\n                <span class="data-alerta">${e.prazo.data.toLocaleString().split(" ")[0]}</span>\n                  <p>${e.prazo.descricao}</p>\n                  <span>P: ${e.prazo.processo}</span>\n                </div>\n                `}t.appendChild(a)})}(e))}(a.map(e=>{const t=function(e){const t=new Date(e);let a=new Date;a=new Date(a.getFullYear(),a.getUTCMonth(),a.getDate(),0,0,0);const n=new Date((new Date).setDate((new Date).getDate()+5));return t.getTime()==a.getTime()?"vence-hoje":t.getTime()>a.getTime()&&t.getTime()<=n.getTime()?"proximos-dias":t.getTime()>n.getTime()?"proximas-semanas":t.getTime()<a.getTime()?"prazo-vencido":void 0}(e.dataAudiencia);return{validade:t,data:new Date(e.dataAudiencia),hora:`${e.horaAudiencia.split(":")[0]}:${e.horaAudiencia.split(":")[1]}`,descricao:e.descricaoAudiencia,processo:e.numeroProcesso}}))}catch(e){console.log(e)}}("https://appjuridico.club/Dashboard/Consulta"),setTimeout(()=>{const e=document.querySelectorAll(".apenas-data");e.length&&e.forEach(e=>{e.innerText=e.innerText.split(" ")[0]})})}]);