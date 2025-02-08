
//-------------- Inserção de Notas

let arrayNotas = [];

let campoInsercaoNota = document.querySelector("#campoInsercaoNota");
let botaoInserirNota = document.querySelector("#botaoInserir");
let caixaNotas = document.querySelector("#caixaNotas");

botaoInserirNota.addEventListener("click",()=>{
    if(campoInsercaoNota.value != ""){
        if(!isNaN(campoInsercaoNota.value)){
            if(campoInsercaoNota.value >= 0.0 && campoInsercaoNota.value <= 10.0){
                arrayNotas.push(campoInsercaoNota.value);
                caixaNotas.innerHTML += "<p>A nota "+ (arrayNotas.length) + " foi " + Number(arrayNotas[arrayNotas.length - 1]).toFixed(2) + "</p>";
            } else {
                alert("A nota digitada é inválida, por favor, insira uma nota válida(além dos valores permitidos)");
            }
        } else {
            alert("A nota digitada é inválida, por favor, insira uma nota válida (Não é numero válido)");
        }
    } else {
        alert("Por favor, insira uma nota");
    }
    campoInsercaoNota.value = "";

    console.log(arrayNotas);
});

//---------------- Calculo de notas

let botaoCalcular = document.querySelector("#botaoCalcular");
let mediaFinal = document.querySelector("#mediaFinal");
botaoCalcular.addEventListener("click", ()=>{
    let soma = 0;
    let media = 0;
    for(i in arrayNotas){
        soma += Number(arrayNotas[i]);
    }
    console.log(soma);
    console.log(arrayNotas.length);
    media = (soma/(arrayNotas.length)).toFixed(2);
    console.log(media);
    mediaFinal.textContent = media;
});