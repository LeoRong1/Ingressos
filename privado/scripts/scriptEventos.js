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
