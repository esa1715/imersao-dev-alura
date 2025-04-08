function conversor() {
    let tipoMoeda = prompt("Para qual moeda você quer converter? 1 para Won, 2 para Dólares ou 3 para Euro");
    
    if (tipoMoeda == 1) {
        let valorReais = prompt("Digite um valor em reais");
        umWon = 0.0040;
        let valorConvertido = valorReais * umWon;
        alert("R$" + Number(valorReais).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " é igual a ₩" + valorConvertido.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
    } else if (tipoMoeda == 2) {
        valorReais = prompt("Digite um valor em reais");
        umDolar = 5.70;
        let valorConvertido = valorReais * umDolar;
        alert("R$" + Number(valorReais).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " é igual a $" + valorConvertido.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " USD");
    } else if (tipoMoeda == 3) {
        valorReais = prompt("Digite um valor em reais");
        umEuro = 6.17;
        let valorConvertido = valorReais * umEuro;
        alert("R$" + Number(valorReais).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " é igual a €" + valorConvertido.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " EUR");
    } else {
        alert("Insira um valor válido");
    }
}