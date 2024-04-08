let data = new Date();
let bruxa = {
    nome: "A Bruxa dos Mortos: Baghead",
    data: data,
    preco: 18.00,
    local: "Deviacom Ingressos-Presidente Prudente",
    horario: "20:45",
    qtdIngDisp: 100,
    sinopse: "Após o falecimento de seu pai, Iris (Freya Allan) herda um antigo bar e se depara com um segredo obscuro: o local abriga uma entidade capaz de incorporar os mortos. Tentada a explorar os poderes da criatura e ajudar pessoas desesperadas em troca de dinheiro, Iris mergulha em um terreno perigoso. Ao lado de sua melhor amiga Katie (Ruby Barker), ela agora precisa lutar para manter o controle sobre Baghead e descobrir como destruí-la antes que ela as destrua.",
    duracao: "95 minutos",
    genero: "Terror"
};

let qtd = document.querySelector('#qtd');
let valTot = document.querySelector('.valTot');
qtd.addEventListener("click", ()=>{
    valTot.innerHTML = `Valor Total: R$${Number(qtd.value*bruxa.preco)}`;
});

function carregarBruxa() {
    let nome = document.querySelector('.nome');
    let sinopse = document.querySelector('.sinopse');
    let genero = document.querySelector('.genero');
    let duracao = document.querySelector('.duracao');
    let data = document.querySelector('.data');
    let hora = document.querySelector('.hora');
    let preco = document.querySelector('.preco');
    let local = document.querySelector('.local');
    
    nome.innerHTML += bruxa.nome;
    sinopse.innerHTML += bruxa.sinopse;
    genero.innerHTML += bruxa.genero;
    duracao.innerHTML += bruxa.duracao;
    data.innerHTML += `${getFormatDate(bruxa.data.getDate()+1)}/${getFormatDate(bruxa.data.getMonth()+1)}/${bruxa.data.getFullYear()}`;
    hora.innerHTML += bruxa.horario;
    preco.innerHTML += `R$ ${bruxa.preco}.00`;
    local.innerHTML += bruxa.local;

}

function getFormatDate(value){
    if(value > 9) 
        return value;
    return `0${value}`;
}
