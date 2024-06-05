const texto = document.querySelector('#content');
let tempo = null;
let tempo_início = 0;
let tempo_decorrido = 0;
let rodando = false;

function iniciar(){
    if(!rodando){
        tempo_início = Date.now() - tempo_decorrido;
        tempo = setInterval(atualizar, 10);
        rodando = true;
    }
}

function parar(){
    if(rodando){
        clearInterval(tempo);
        tempo_decorrido = Date.now() - tempo_início;
        rodando = false
    }
}


function limpar(){
    clearInterval(tempo)
    tempo_início = 0;
    tempo_decorrido = 0;
    rodando = false;
    content.textContent = "00:00:00:00"
} 


function atualizar(){
    hora_atual = Date.now();
    tempo_decorrido = hora_atual - tempo_início
    let horas = Math.round(tempo_decorrido /(1000 * 60 * 60));
    let minutos = Math.round(tempo_decorrido /(1000 * 60) % 60);
    let segundos = Math.round(tempo_decorrido / 1000 % 60);
    let milisegundos = Math.round(tempo_decorrido % 1000 / 10) ;
    
    horas = String(horas).padStart(2, "0");
    minutos = String(minutos).padStart(2, "0");
    segundos = String(segundos).padStart(2, "0");
    milisegundos = String(milisegundos).padStart(2, "0");

    texto.textContent = `${horas}:${minutos}:${segundos}:${milisegundos}`
}