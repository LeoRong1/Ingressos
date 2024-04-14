let mensagem = document.getElementById('mensagem');

window.onload = exibiFilme;

function exibiFilme() {
    debugger
    let filmeId = localStorage.getItem('filmeId');
    fetch('http://localhost:3000/eventos/'+filmeId,{method:"GET"}).then((resposta)=>{
        if(resposta.ok){
            return resposta.json();
        }
    }).then((listaEventos)=>{
        console.log(listaEventos);
        detalhesFilme(listaEventos);
    }).catch((erro)=>{
        mensagem.innerHTML = "<div class='alert alert-danger' role='alert'>" + "Não foi possível recuperar os eventos do backend! " + erro.message + "</div>"
    });
}

function detalhesFilme(listaFilme){
    let bloco = document.getElementById('detalhe');
    if(listaFilme && listaFilme.length > 0)
    {

        for(let i=0; i < listaFilme.length;i++)
        {
            let nome = document.getElementById('nome');
            nome.innerHTML = `<h2>${listaFilme[i].nome}</h2>`;
            let dia = new Date(listaFilme[i].data).getDate();
            let mes = new Date(listaFilme[i].data).getMonth();
            let ano =new Date(listaFilme[i].data).getFullYear();
            let data = dia + "/" + mes + "/" + ano;
            let informacoes = document.createElement('div');
            informacoes.classList.add('info');
            informacoes.innerHTML = `
                <img id="imagem" src="${listaFilme[i].imagem}" alt="Imagem do filme">
                <div class="info2">
                    <h4>Sinopse</h4>
                    <div class="sinopse">${listaFilme[i].sinopse}</div>
                    <h4>Genero<h4>
                    <div class="genero">${listaFilme[i].genero}</div>
                    <h4>Duracao</h4>
                    <div class="duracao">${listaFilme[i].duracao}</div>
                    <h4>Data</h4>
                    <div class="data">${data}</div>
                    <h4>Horario</h4>
                    <div class="hora">${listaFilme[i].hora}</div>
                    <h4>Preco</h4>
                    <div class="preco">${listaFilme[i].preco}</div>
                    <h4>Local</h4>
                    <div class="local">${listaFilme[i].local}</div>
                    <p></p>
                    Quantidade de Ingressos <input value="0" id="qtd" type="number" min="0" max="100" placeholder="Quantidade de Ingressos">
                    <h4 class="valTot">Valor Total: R$0</h4>
                </div>
            `;
            bloco.appendChild(informacoes);
        }
    }
    else
    {
        bloco.innerHTML = "<div class='alert alert-danger' role='alert'>" + "Não há filmes cadastrados!" + "</div>";
    }
}
