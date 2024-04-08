const endpoint = 'http://localhost:3000/eventos';
let mensagem = document.getElementById('mensagem');
let formulario = document.getElementById('formEvento');

window.onload = exibirTabelaEventos;

formulario.onsubmit = gravarEvento;
document.getElementById("excluir").onclick = excluirEvento;
document.getElementById("atualizar").onclick = atualizarEvento;

function obterEventoDoFormulario() {
    const id = document.getElementById('id').value;
    const nome = document.getElementById('nome').value;
    const sinopse = document.getElementById('sinopse').value;
    const genero = document.getElementById('genero').value;
    const duracao = document.getElementById('duracao').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const preco = document.getElementById('preco').value;
    const local = document.getElementById('endereco').value;


    if(id && nome && sinopse && genero && duracao && data && hora && preco && local)
    {
        return {
            id,
            nome : nome,
            sinopse : sinopse,
            genero : genero,
            duracao: duracao,
            data : data,
            hora : hora,
            preco : preco,
            local : local
        }
    }
    else {
        return undefined;
    }
}


function limparFormulario(){
    document.getElementById('nome').value = "";
    document.getElementById('sinopse').value = "";
    document.getElementById('genero').value = "";
    document.getElementById('duracao').value = "";
    document.getElementById('data').value = "";
    document.getElementById('hora').value = "";
    document.getElementById('preco').value = "";
    document.getElementById('endereco').value = "";
}

async function gravarEvento(evento){
    evento.preventDefault();
    evento.stopPropagation();
    const eventos = obterEventoDoFormulario();
    if(eventos) {
        await fetch(endpoint, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(eventos)
        }).then((resposta) => {
            if(resposta.ok) {
                return resposta.json();
            }
        }).then((dados) => {
            mensagem.innerHTML = "<div class='alert alert-success' role='alert'>" +  dados.mensagem + "</div>";
            prepararTela();
            exibirTabelaEventos();
        }).catch((erro)=>{
            console.log(erro);
            mensagem.innerHTML = "<div class='alert alert-danger' role='alert'>" + erro.message + "</div>" 
        });
    }
    else {
        mensagem.innerHTML = "<div class='alert alert-danger' role='alert'>" + "Informe corretamente os dados do evento! " + "</div>"
    }


}

function criaTabelaEventos(listaEventos){
    let espacoTabela = document.getElementById('espacoTabela');
    if(listaEventos && listaEventos.length > 0) 
    {
        let tabela = document.createElement('table');
        tabela.className = 'table table-striped table-hover';
        const cabecalho = document.createElement('thead');
        cabecalho.innerHTML= "<tr> \
                                <th>#</th> \
                                <th>Nome</th> \
                                <th>Sinopse</th> \
                                <th>Gênero</th> \
                                <th>Duração</th> \
                                <th>Data</th> \
                                <th>Hora</th> \
                                <th>Preço</th> \
                                <th>Local</th> \
                                <th>Ações</th> \
                                </tr> \
                            ";
        tabela.appendChild(cabecalho);
        const corpo = document.createElement('tbody');
        for (evento  of listaEventos){
            let linha = document.createElement('tr');
            linha.innerHTML =   " <td> " + evento.codigo + " </td> " +
                                " <td> " + evento.nome + " </td> " +
                                " <td> " + evento.sinopse + " </td> " +
                                " <td> " + evento.genero + " </td> " +
                                " <td> " + evento.duracao + " </td> " +
                                " <td> " + evento.data + " </td> " +
                                " <td> " + evento.hora + " </td> " +
                                " <td> " + evento.preco + " </td> " +
                                " <td> " + evento.local + " </td> " +
                                `<td> \
                                    <button type="button" class="btn btn-warning" onClick="prepararTela('${evento.codigo}','${evento.nome}','${evento.sinopse}',
                                    '${evento.genero}','${evento.duracao}','${evento.data}','${evento.hora}','${evento.preco}','${evento.local}','atualizacao')">Editar</button> \
                                    <button type="button" class="btn btn-danger" onClick="prepararTela('${evento.codigo}','${evento.nome}','${evento.sinopse}',
                                    '${evento.genero}','${evento.duracao}','${evento.data}','${evento.hora}','${evento.preco}','${evento.local}','exclusao')">Excluir</button> \
                                </td>`;     
            corpo.appendChild(linha);
        }
        tabela.appendChild(corpo);
        espacoTabela.innerHTML="";
        espacoTabela.appendChild(tabela);
    }
    else{
        espacoTabela.innerHTML = "<div class='alert alert-danger' role='alert'>" + "Não há eventos cadastrados! " + "</div>";
    }
}


function exibirTabelaEventos() {
    fetch(endpoint,{method:"GET"}).then((resposta)=>{
        if(resposta.ok){
            return resposta.json();
        }
    }).then((listaEventos)=>{
        criaTabelaEventos(listaEventos);
    }).catch((erro)=>{
        mensagem.innerHTML = "<div class='alert alert-danger' role='alert'>" + "Não foi possível recuperar os eventos do backend! " + erro.message + "</div>"
    });
}

function prepararTela(codigo="", nome="", sinopse="", genero="", duracao="", data="", hora="", preco="", local="", acao="") {
    let botaoCadastrar = document.getElementById('cadastrar');
    let botaoAtualizar = document.getElementById('atualizar');
    let botaoExcluir = document.getElementById('excluir');

    document.getElementById('id').value = codigo;
    document.getElementById('nome').value = nome;
    document.getElementById('sinopse').value = sinopse;
    document.getElementById('genero').value = genero;
    document.getElementById('duracao').value = duracao;
    document.getElementById('data').value = data;
    document.getElementById('hora').value = hora;
    document.getElementById('preco').value = preco;
    document.getElementById('endereco').value = local;

    if(acao === 'exclusao'){
        botaoCadastrar.disabled = true;
        botaoAtualizar.disabled = true;
        botaoExcluir.disabled = false;
    }
    else if (acao === 'atualizacao'){
        botaoCadastrar.disabled = true;
        botaoAtualizar.disabled = false;
        botaoExcluir.disabled = true;
    }
    else {
        botaoCadastrar.disabled = false;
        botaoAtualizar.disabled = true;
        botaoExcluir.disabled = true;
    }
}

function excluirEvento(){
    if(confirm("Confirma a exclusaop do evento selecionado")){
        const id = document.getElementById('id').value;
        fetch(endpoint + "/" + id, {
            method:"DELETE", 
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify()
        }).then((resposta)=>{
            if(resposta.ok) return resposta.json();
        }).then((dados)=>{
            mensagem.innerHTML = "<div class='alert alert-success' role='alert'>" +  dados.mensagem + "</div>";
            prepararTela();
            exibirTabelaEventos();
        }).catch((erro)=>{
           mensagem.innerHTML = "<div class='alert alert-danger' role='alert'>" + erro.message + "</div>" 
        });
    }
    else{
        prepararTela();
    }
}

async function atualizarEvento(){
    if(confirm("Confirma a atualizacao do Evento")){
        const evento = obterEventoDoFormulario();
        if(evento) {
            await fetch(endpoint + "/" + evento.id, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(evento)
            }).then((resposta) => {
                if(resposta.ok) {
                    return resposta.json();
                }
            }).then((dados) => {
                mensagem.innerHTML = "<div class='alert alert-success' role='alert'>" +  dados.mensagem + "</div>";
                prepararTela();
                exibirTabelaEventos();
            }).catch((erro)=>{
            mensagem.innerHTML = "<div class='alert alert-danger' role='alert'>" + erro.message + "</div>" 
            });
        }
        else {
            mensagem.innerHTML = "<div class='alert alert-danger' role='alert'>" + "Informe corretamente os dados do evento! " + "</div>"
        }
    }
    else{
        prepararTela();
    }
}
