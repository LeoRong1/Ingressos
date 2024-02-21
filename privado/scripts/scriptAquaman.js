let data = new Date();
let aquaman = {
    nome: "Aquaman 2: O Reino Perdido",
    data: data,
    preco: 20.00,
    local: "Deviacom Ingressos-Presidente Prudente",
    horario: "15:45",
    qtdIngDisp: 100,
    sinopse: "Quando um poder ancestral é liberado, o Aquaman deve forjar uma aliança incômoda com um aliado improvável para proteger Atlântida e o resto do mundo, de uma devastação irreversível.",
    duracao: "124 minutos",
    genero: "Aventura" 
};

let qtd = document.querySelector('#qtd');
let valTot = document.querySelector('.valTot');
qtd.addEventListener("click", ()=>{
    valTot.innerHTML = `Valor Total: R$${Number(qtd.value*aquaman.preco)}`;
});

function carregarAquaman() {
    let nome = document.querySelector('.nome');
    let sinopse = document.querySelector('.sinopse');
    let genero = document.querySelector('.genero');
    let duracao = document.querySelector('.duracao');
    let data = document.querySelector('.data');
    let hora = document.querySelector('.hora');
    let preco = document.querySelector('.preco');
    let local = document.querySelector('.local');
    
    nome.innerHTML += aquaman.nome;
    sinopse.innerHTML += aquaman.sinopse;
    genero.innerHTML += aquaman.genero;
    duracao.innerHTML += aquaman.duracao;
    data.innerHTML += `${getFormatDate(aquaman.data.getDate()+1)}/${getFormatDate(aquaman.data.getMonth()+1)}/${aquaman.data.getFullYear()}`;
    hora.innerHTML += aquaman.horario;
    preco.innerHTML += aquaman.preco;
    local.innerHTML += aquaman.local;

}

function getFormatDate(value){
    if(value > 9) 
        return value;
    return `0${value}`;
}
