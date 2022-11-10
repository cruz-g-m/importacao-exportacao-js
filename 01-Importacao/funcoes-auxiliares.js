const entrada = [65, 5, 50, 10, 53, 23, 55];
let i = 0;

function gets(){
    const valor = entrada[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = {gets, print};