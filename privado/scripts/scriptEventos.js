var eventos = [];

function search(){
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase()
    let x = document.getElementsByClassName('nome')

    for(let i=0;i<x.length;i++)
    {
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display = "none"
        }
        else{
            x[i].style.display = "list-item"
        }
    }
}

function carregar() {
    let aux = [];
    let aux2 = [];
    let nome = document.querySelectorAll('.nome');
    let msg = document.querySelectorAll('.data');
    let data = new Date();
    msg.forEach((dataDiv) => {
        dataDiv.innerHTML += `${getFormatDate(data.getDate()+1)}/${getFormatDate(data.getMonth()+1)}/${data.getFullYear()}`;
        aux = nome;
        aux2 = dataDiv;
    })
    addEventos(aux[0],data,20.00,"Deviacom Ingressos-Presidente Prudente","15:45",100,"Quando um poder ancestral é liberado, o Aquaman deve forjar uma aliança incômoda com um aliado improvável para proteger Atlântida e o resto do mundo, de uma devastação irreversível.","124 minutos","Aventura")
    addEventos(aux[1],data,18.00,"Deviacom Ingressos-Presidente Prudente","20:45",100,"Após o falecimento de seu pai, Iris (Freya Allan) herda um antigo bar e se depara com um segredo obscuro: o local abriga uma entidade capaz de incorporar os mortos. Tentada a explorar os poderes da criatura e ajudar pessoas desesperadas em troca de dinheiro, Iris mergulha em um terreno perigoso. Ao lado de sua melhor amiga Katie (Ruby Barker), ela agora precisa lutar para manter o controle sobre Baghead e descobrir como destruí-la antes que ela as destrua.","95 minutos","Terror")
    addEventos(aux[2],data,35.00,"Deviacom Ingressos-Presidente Prudente","18:00",100,"Madame Teia conta a história do filme solo da história de origem de uma das heroínas mais enigmáticas da Marvel. O thriller estrela Dakota Johnson como Cassandra Webb, uma paramédica em Manhattan que pode ter habilidades de clarividência. Forçada a confrontar revelações sobre seu passado, ela forja uma relação com três jovens destinadas a futuros poderosos… se elas conseguirem sobreviver ao presente ameaçador.","116 minutos","Ação, Fantasia")
    
}

function addEventos(nome, data, preco, local, horario, qtdIngDisp, sinopse, duracao, genero)
{
    let novoEvento = {
        nome: nome,
        data: data,
        preco: preco,
        local: local,
        horario: horario,
        qtdIngDisp: qtdIngDisp,
        sinopse: sinopse,
        duracao: duracao,
        genero: genero
    };

    eventos.push(novoEvento);
}

function getFormatDate(value){
    if(value > 9) 
        return value;
    return `0${value}`;
}

function detalhe(nome) {

}