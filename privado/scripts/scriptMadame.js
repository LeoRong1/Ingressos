let data = new Date();
let madame = {
    nome: "Madame Teia",
    data: data,
    preco: 35.00,
    local: "Deviacom Ingressos-Presidente Prudente",
    horario: "18:00",
    qtdIngDisp: 100,
    sinopse: "Madame Teia conta a história do filme solo da história de origem de uma das heroínas mais enigmáticas da Marvel. O thriller estrela Dakota Johnson como Cassandra Webb, uma paramédica em Manhattan que pode ter habilidades de clarividência. Forçada a confrontar revelações sobre seu passado, ela forja uma relação com três jovens destinadas a futuros poderosos… se elas conseguirem sobreviver ao presente ameaçador.",
    duracao: "116 minutos",
    genero: "Ação, Fantasia"
};

let qtd = document.querySelector('#qtd');
let valTot = document.querySelector('.valTot');
qtd.addEventListener("click", ()=>{
    valTot.innerHTML = `Valor Total: R$${Number(qtd.value*madame.preco)}`;
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
    
    nome.innerHTML += madame.nome;
    sinopse.innerHTML += madame.sinopse;
    genero.innerHTML += madame.genero;
    duracao.innerHTML += madame.duracao;
    data.innerHTML += `${getFormatDate(madame.data.getDate()+1)}/${getFormatDate(madame.data.getMonth()+1)}/${madame.data.getFullYear()}`;
    hora.innerHTML += madame.horario;
    preco.innerHTML += `R$ ${madame.preco}.00`;
    local.innerHTML += madame.local;

}

function getFormatDate(value){
    if(value > 9) 
        return value;
    return `0${value}`;
}
