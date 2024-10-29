const peso = document.querySelector("#peso")
const altura = document.querySelector("#altura")
let resultado = document.querySelector("#resultado")

CalcIMC = () => {
    if(peso.value!='' && altura.value){
        const resultIMC = (peso.value/(altura.value*altura.value)).toFixed(2);
        let categoria = ''

        if (resultIMC < 18.5){
            categoria = "Magreza com grau de Obesidade 0"
        } else if (resultIMC < 24.9) {
            categoria = "Normal com grau de obesidade 0"
        } else if (resultIMC < 29.9){
            categoria = "Sobrepeso com grau de obesidade I"
        } else if (resultIMC < 39.9){
            categoria = "Obesidade de Nível II"
        } else if (resultIMC >= 40){
            categoria = "Obesidade Grave de Nível III"
        }
        resultado.innerHTML = `IMC: ${resultIMC}\n Categoria: ${categoria}`;
    } else {
        resultado.innerHTML = 'Preencha todos os campos';
    }
}