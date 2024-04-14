let mensagem = document.getElementById('mensagem');

window.onload = exibiFilme;

let listaFilme = [];

function gravarFilme(listaFilmes){
    
    for(evento of listaFilmes)
    {
        listaFilme.push({
            id: evento.codigo,
            nome: evento.nome,
            sinopse: evento.sinopse,
            genero: evento.genero,
            duracao: evento.duracao,
            data: evento.data,
            hora: evento.hora,
            preco: evento.preco,
            local: evento.local,
            imagem: evento.imagem
        })
    }
    criaBlocoFilmes();
}

function exibiFilme() {
    fetch('http://localhost:3000/eventos',{method:"GET"}).then((resposta)=>{
        if(resposta.ok){
            return resposta.json();
        }
    }).then((listaEventos)=>{
        gravarFilme(listaEventos);
    }).catch((erro)=>{
        mensagem.innerHTML = "<div class='alert alert-danger' role='alert'>" + "Não foi possível recuperar os eventos do backend! " + erro.message + "</div>"
    });
}

function criaBlocoFilmes(){
    let bloco = document.getElementById('bloco');
    if(listaFilme && listaFilme.length > 0)
    {

        for(let i=0; i < listaFilme.length;i++)
        {
            let dia = new Date(listaFilme[i].data).getDate();
            let mes = new Date(listaFilme[i].data).getMonth();
            let ano =new Date(listaFilme[i].data).getFullYear();
            let data = dia + "/" + mes + "/" + ano;
            let informacoes = document.createElement('div');
            informacoes.classList.add('info');
            informacoes.setAttribute('filme-id',listaFilme[i].id);
            informacoes.innerHTML = `
                <img id="imagem" src="${listaFilme[i].imagem}" alt="Imagem do filme">
                <div class="info2">
                    <h3 class="nome">${listaFilme[i].nome}</h3>
                    <h2 class="data">${data}</h2>
                    <h2 class="preco">R$ ${listaFilme[i].preco}</h2>
                    <a href="#" class="linkDetalhes">Detalhes</a>
                </div>
            `;
            bloco.appendChild(informacoes);
            
            document.querySelectorAll('.linkDetalhes').forEach(function(link){
                link.addEventListener('click',function(event) {
                    event.preventDefault();
                    let filmeId = event.target.closest('.info').getAttribute('filme-id');
                    localStorage.setItem('filmeId', filmeId);
                    window.location.href = '../detalhe.html';
                });
            });
            
        }
    }
    else
    {
        bloco.innerHTML = "<div class='alert alert-danger' role='alert'>" + "Não há filmes cadastrados!" + "</div>";
    }
}
