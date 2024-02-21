function carregarEventos() {
    let msg = document.querySelectorAll('.data');
    let data = new Date();
    msg.forEach((dataDiv) => {
        dataDiv.innerHTML += `${getFormatDate(data.getDate()+1)}/${getFormatDate(data.getMonth()+1)}/${data.getFullYear()}`;
    })
    
}

function getFormatDate(value){
    if(value > 9) 
        return value;
    return `0${value}`;
}
