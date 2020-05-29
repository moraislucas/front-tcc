function initPrimeiroAcesso() {
    const primeiroAcesso = document.querySelectorAll('.primeiro-acesso');
    const mensagem = document.querySelector('.mensagem-cadastro');

    if (primeiroAcesso.length) {
        primeiroAcesso.forEach((item) => {
            item.addEventListener('click', prevenirPadrao);
            item.addEventListener('click', () => {
                mensagem.classList.toggle('ativo')
            });
        })


        function prevenirPadrao(event) {
            event.preventDefault();
        }
    }

}

initPrimeiroAcesso();


function addAnimate() {
    const dataAnime = document.querySelector('[data-anime]');
    if (dataAnime)
        dataAnime.classList.add('animate');
}

function initPage() {
    window.onload = function () {
        try {
            CarregarUsuarioLogado();
            addAnimate();
        } catch {
            addAnimate();
        }
    };
};
initPage();



function initBtnFile() {
    const btn = document.querySelectorAll('.btn-file a');
    const inputFile = document.querySelectorAll('.btn-file input[type="file"]');



    if (btn.length && inputFile.length) {
        inputFile.forEach(input => {
            input.addEventListener('mouseover', handleHover);
            input.addEventListener('mouseout', removeHover);
        })


        function handleHover() {
            btn.forEach(btn => {
                btn.classList.add('hover')
            })
        }

        function removeHover() {
            btn.forEach(btn => {
                btn.classList.remove('hover')
            })
        }
    }


}

initBtnFile();

function initSenhasIguais() {
    const senha1 = document.querySelector('#senha');
    const senha2 = document.querySelector('#senha2');

    if (senha1 && senha2) {

        senha2.addEventListener('change', () => {
            if (senha1.value != senha2.value) {
                const div = document.createElement('div');
                div.classList.add('modal-erro');
                div.innerHTML = '<h3>Senhas não conferem</h3>';
                document.body.appendChild(div);

                senha2.classList.add('focus-erro');
                senha2.focus();
                senha2.setCustomValidity('Senhas não conferem')
            } else {
                senha2.setCustomValidity('');
                senha2.classList.remove('focus-erro');
            }
        })
    }

}

initSenhasIguais();

function initSenhaForte() {
    const senha = document.getElementById("senha");
    // const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/; // regex sem caracter especial
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#]?)[0-9a-zA-Z$*&@#]{6,}$/; // regex COM caracter especial
    const mostraForca = document.querySelector('.mostraForca');

    if (senha) {
        senha.addEventListener('keyup', () => {
            if (senha.value.length > 0) {
                if (regex.test(senha.value)) {
                    mostraForca.classList.remove('fraca');
                    mostraForca.classList.add('forte');
                    senha.setCustomValidity('');
                    senha.classList.remove('focus-erro');

                } else {
                    mostraForca.classList.remove('forte')
                    mostraForca.classList.add('fraca');
                    senha.classList.add('focus-erro');
                    senha.focus();
                    senha.setCustomValidity('Senha fraca, verifique!');
                }
            } else {
                mostraForca.classList.remove('fraca');
                mostraForca.classList.remove('forte');
            }

        });
    }

}

initSenhaForte();


function initConsultaCEP() {

    const dataCep = Array.from(document.querySelectorAll('[data-cep]'));
    const cep = document.querySelector('[data-cep="cep"]');
    const cep2 = document.querySelector('[data-cep="cep2"]');


    if (dataCep.length > 0) {
        cep.addEventListener('change', handleChange1)

        if (cep2)
            cep2.addEventListener('change', handleChange2)


        function handleChange1() {
            consultaCep1(arrumaCep(cep.value));
        }

        function handleChange2() {
            consultaCep2(arrumaCep(cep2.value));
        }

        function consultaCep1(cep) {
            if (cep.length == 8) {
                fetch(`https://viacep.com.br/ws/${cep}/json/`)
                    .then(dadosResponse => dadosResponse.json())
                    .then(dadosJSON => {
                        if (dadosJSON.logradouro) {
                            dataCep[1].value = dadosJSON.logradouro;
                            dataCep[3].value = dadosJSON.bairro;
                            dataCep[4].value = dadosJSON.localidade;
                            dataCep[5].value = dadosJSON.uf;

                            dataCep[2].focus();
                            dataCep[0].classList.remove('focus-erro');
                        }
                    });
            } else {
                const div = document.createElement('div');
                div.classList.add('modal-erro');
                div.innerHTML = '<h3>CEP incorreto!</h3>';
                document.body.appendChild(div);

                dataCep[0].value = '';
                dataCep[0].classList.add('focus-erro');
                dataCep[0].focus();

            }
        }



        function consultaCep2(cep) {
            if (cep.length == 8) {
                fetch(`https://viacep.com.br/ws/${cep}/json/`)
                    .then(dadosResponse => dadosResponse.json())
                    .then(dadosJSON => {
                        if (dadosJSON.logradouro) {
                            dataCep[7].value = dadosJSON.logradouro;
                            dataCep[9].value = dadosJSON.bairro;
                            dataCep[10].value = dadosJSON.localidade;
                            dataCep[11].value = dadosJSON.uf;

                            dataCep[8].focus();
                            dataCep[6].classList.remove('focus-erro');
                        }
                    });
            } else {
                const div = document.createElement('div');
                div.classList.add('modal-erro');
                div.innerHTML = '<h3>CEP incorreto!</h3>';
                document.body.appendChild(div);

                dataCep[6].value = '';
                dataCep[6].classList.add('focus-erro');
                dataCep[6].focus();

            }
        }



        function arrumaCep(cep) {
            let novoCep = cep.replace('-', '').replace('.', '');
            return novoCep;
        }
    }

}

initConsultaCEP();


function initNovoEndereco() {


    const btn = document.querySelector('[data-endereco="btn"]')
    const content = document.querySelector('[data-endereco="conteudo"]');

    if (btn) {
        btn.addEventListener('click', handleClick);

        function handleClick(event) {
            event.preventDefault();
            content.classList.add('visible');
            btn.classList.add('remove')

            initConsultaCEP();
        }
    }


}

initNovoEndereco();


function initMascara() {
    const cpf = document.querySelector('[data-cpf]');
    if (cpf) {
        cpf.addEventListener('change', handleCPF);

        function handleCPF(event) {
            const cpfAjustado = event.target.value.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
            event.target.value = cpfAjustado;
        }
    }
}

initMascara();


function initDataCalendario() {

    const inputDate = document.querySelector('.validaData') || document.querySelector('.data-lembrete');

    if (inputDate) {
        const date = new Date();
        const mesHoje = date.getUTCMonth() < 10 ? '0' + (date.getUTCMonth() + 1) : (date.getUTCMonth() + 1);
        const hoje = `${date.getFullYear()}-${mesHoje}-${date.getDate()}`;


        if (inputDate.className.indexOf('validaData') > -1) {
            inputDate.setAttribute('max', hoje);
        } else if (inputDate.className.indexOf('data-lembrete')) {
            inputDate.setAttribute('min', hoje);
        }
    }

}

initDataCalendario();


function initModal(modalId, btnId) {
    const modal = document.getElementById(modalId);
    const btn = document.querySelectorAll(btnId);

    if (modal && btn) {
        modal.addEventListener('click', (e) => {
            if (e.target.id == modalId || e.target.className == 'fecha-modal' || e.target.id ==
                'btn-cancela')
                modal.classList.remove('mostrar');
        })

        btn.forEach(btn => {
            btn.addEventListener('click', handleClick);
        });

        function handleClick(event) {
            event.preventDefault();
            modal.classList.add('mostrar');
            initRotaDeletar(event.target);
        }

        window.addEventListener('keyup', (e) => {
            if (e.key == 'Escape')
                modal.classList.remove('mostrar')
        });
    }

}

initModal('modal-delete', '.btn-remover');

function initRotaDeletar(target) {
    const btnDeletar = document.querySelector('.btn-confirma-delete');
    if (btnDeletar) {
        btnDeletar.addEventListener('click', () => {
            window.location.assign(target.href);
        });
    }
}



function initPrimeiroNome() {
    const nome = document.querySelector('#NomeUsuarioLogado');
    if (nome)
        return nome.innerText.split(' ')[0];
}



function initUploadArquivos() {
    const file = document.querySelector('#file');
    const lista = document.querySelector('[data-upload="lista"]');
    const qtd = document.querySelector('.quantidade-arquivos');

    if (file && lista && qtd) {
        function atualizaLista([...nomeArquivo]) {
            lista.innerHTML = '';
            nomeArquivo.forEach((item) => {
                const li = document.createElement('li');
                li.innerText = item.name;
                lista.appendChild(li);
            });

            qtd.innerText = nomeArquivo.length == 1 ? nomeArquivo.length + ' arquivo' : nomeArquivo.length + ' arquivos';
            qtd.classList.add('ativo')
        }
        file.addEventListener('change', () => atualizaLista([...file.files]));
    }
}

initUploadArquivos();


// Função de NoRefresh. Precisa ser testado com o Paulo
// Pois pode ter conflitos de css

// function initFetchPage() {
//     const links = document.querySelectorAll('a');

//     if (links.length) {
//         function handleClick(event) {
//             event.preventDefault();
//             fetchPage(event.target.href);
//             window.history.pushState(null, null, event.target.href);
//         }
//         async function fetchPage(url) {
//             document.querySelector('.dashboard').innerHTML = `
//             <div class="loading">
//                 <span></span>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//             </div>
//             `
//             const pageResponse = await fetch(url);
//             const pageText = await pageResponse.text();
//             replaceContent(pageText, url);
//         }

//         function replaceContent(newText, url) {
//             const newHtml = document.createElement('div');
//             newHtml.innerHTML = newText;
//             const conteudoAntigo = document.querySelector('.dashboard');
//             const conteudoNovo = newHtml.querySelector('.dashboard');
//             conteudoAntigo.innerHTML = conteudoNovo.innerHTML;
//             document.title = newHtml.querySelector('title').innerText;

//             if (url.indexOf('painel-novo') > -1) {
//                 window.location.reload();
//             }
//             addAnimate();
//         }

//         window.addEventListener('popstate', () => {
//             fetchPage(window.location.href);
//         });

//         links.forEach((link) => {
//             link.addEventListener('click', handleClick);
//         });
//     }


// }

// initFetchPage();


// Função de identificar o Menor

function initMenor() {
    let ident = document.querySelector('[data-identificacao]');
    if (ident) {
        ident = ident.innerText.toLowerCase();
        const btnResponsavel = document.querySelector('[data-responsavel]');
        if (ident === 'menor') {
            btnResponsavel.classList.add('ativo');
        } else {
            btnResponsavel.classList.remove('ativo');
        }
    }
}

initMenor();



// DashBoard
function initDashboard() {
    setTimeout(() => {
        const nomeTopo = document.querySelector('.bem-vindo');
        const nomeUsuario = document.querySelector('#NomeUsuarioLogado');
        if (nomeTopo && nomeUsuario)
            nomeTopo.innerHTML = `Olá, ${nomeUsuario.innerText.split(' ')[0]} 🙂`;
    }, 2500);


    dataPorExtenso();
    async function fetchDashboard(url) {
        try {
            const dadosResponse = await fetch(url);
            const dadosJSON = await (await dadosResponse).json();

            const dadosAudiencias = dadosJSON.map(audiencia => {
                const validade = validaData(audiencia.dataAudiencia);
                const data = new Date(audiencia.dataAudiencia);
                const hora = `${audiencia.horaAudiencia.split(':')[0]}:${audiencia.horaAudiencia.split(':')[1]}`;
                const descricao = audiencia.descricaoAudiencia;
                const processo = audiencia.numeroProcesso;
                return {
                    validade,
                    data,
                    hora,
                    descricao,
                    processo
                };
            });
            renderDestaque(dadosAudiencias);
        } catch (erro) {
            console.log(erro)
        }
    }


    function validaData(data) {
        const audienciaDia = new Date(data);

        let agora = new Date();
        agora = new Date(agora.getFullYear(), agora.getUTCMonth(), agora.getDate(), 0, 0, 0)

        const proximosDias = new Date(new Date().setDate(new Date().getDate() + 5));

        if (audienciaDia.getTime() == agora.getTime()) {
            return 'vence-hoje'
        } else if (audienciaDia.getTime() > agora.getTime() && audienciaDia.getTime() <= proximosDias.getTime()) {
            return 'proximos-dias';
        } else if (audienciaDia.getTime() > proximosDias.getTime()) {
            return 'proximas-semanas'
        } else if (audienciaDia.getTime() < agora.getTime()) {
            return 'prazo-vencido'
        }
    }


    function renderDestaque(arrayPrazos) {
        const venceHoje = document.querySelector('[data-dash="vence-hoje"] h4');
        const proximosDias = document.querySelector('[data-dash="proximos-dias"] h4');
        const proximasSemanas = document.querySelector('[data-dash="proximas-semanas"] h4');
        const totalPrazos = document.querySelector('[data-dash="todos-prazos"] h4');

        if (venceHoje && proximosDias && proximasSemanas && totalPrazos) {
            arrayPrazos.forEach(prazo => {
                if (prazo.validade == 'vence-hoje') {
                    venceHoje.innerText = +venceHoje.innerText + 1;
                } else if (prazo.validade == 'proximos-dias') {
                    proximosDias.innerText = +proximosDias.innerText + 1;
                } else if (prazo.validade == 'proximas-semanas') {
                    proximasSemanas.innerText = +proximasSemanas.innerText + 1;
                } else {
                    return false;
                }
            });

            venceHoje.innerText = '0' + venceHoje.innerText;
            proximosDias.innerText = '0' + proximosDias.innerText;
            proximasSemanas.innerText = '0' + proximasSemanas.innerText;
            totalPrazos.innerText = '0' + arrayPrazos.length;

            renderDetalhes(arrayPrazos);
        }
    }

    function renderDetalhes(arrayPrazos) {
        const lista = document.querySelector('.vencendo-prazo');

        const novoArray = arrayPrazos.map(prazo => {
            const horaSplit = prazo.hora.split(':');
            const dataHora = new Date(prazo.data.getFullYear(), prazo.data.getUTCMonth(), prazo.data.getDate(), horaSplit[0], horaSplit[1], 0);
            return {
                prazo,
                dataHora,
            }
        })

        function ordernaPorData(a, b) {
            return a.dataHora.getTime() - b.dataHora.getTime();
        }
        novoArray.sort(ordernaPorData);
        novoArray.forEach(item => {

            const li = document.createElement('li');
            li.classList.add('alerta-dash');

            if (item.prazo.validade == 'vence-hoje') {
                li.innerHTML = `
                <span class="alerta-hora vence-hoje">${item.prazo.hora}</span>
                <div class="alerta-infos">
                <span class="data-alerta">${item.prazo.data.toLocaleString().split(' ')[0]}</span>
                  <p>${item.prazo.descricao}</p>
                  <span>P: ${item.prazo.processo}</span>
                </div>
                `
            } else if (item.prazo.validade == 'proximos-dias') {
                li.innerHTML = `
                <span class="alerta-hora proximos-dias">${item.prazo.hora}</span>
                <div class="alerta-infos">
                <span class="data-alerta">${item.prazo.data.toLocaleString().split(' ')[0]}</span>
                  <p>${item.prazo.descricao}</p>
                  <span>P: ${item.prazo.processo}</span>
                </div>
                `
            } else if (item.prazo.validade == 'proximas-semanas') {
                li.innerHTML = `
                <span class="alerta-hora proximas-semanas">${item.prazo.hora}</span>
                <div class="alerta-infos">
                <span class="data-alerta">${item.prazo.data.toLocaleString().split(' ')[0]}</span>
                  <p>${item.prazo.descricao}</p>
                  <span>P: ${item.prazo.processo}</span>
                </div>
                `
            } else {
                return false
            }
            lista.appendChild(li);
        });
    }

    function dataPorExtenso() {
        const htmlData = document.querySelector('.data-hoje span');
        if (htmlData) {
            const agora = new Date();
            const dia = agora.getDate();
            const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio",
                "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
            ][agora.getMonth()];
            const ano = agora.getFullYear();
            htmlData.innerHTML = `${dia} de ${meses} de ${ano}`;
        }
    }

    // Caminho da API
    // fetchDashboard('https://appjuridico.club/Dashboard/Consulta');
    fetchDashboard('./prazos.json');

}
initDashboard();

function somenteData() {
    setTimeout(() => {
        const data = document.querySelectorAll('.apenas-data');
        if (data.length) {
            data.forEach(item => {
                item.innerText = item.innerText.split(' ')[0];
            });
        }
    });
}

somenteData();