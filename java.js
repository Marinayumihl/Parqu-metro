class Parquimetro {
  constructor(valor) {
    this.valor = valor;
  }

  calcularTempo() {
    if (this.valor < 1) {
      return "Valor insuficiente";
    }

    if (this.valor >= 3) {
      let troco = this.valor - 3;
      return `Tempo: 120 minutos | Troco: R$ ${troco.toFixed(2)}`;
    }

    if (this.valor >= 1.75) {
      let troco = this.valor - 1.75;
      return `Tempo: 60 minutos | Troco: R$ ${troco.toFixed(2)}`;
    }

    if (this.valor >= 1) {
      let troco = this.valor - 1;
      return `Tempo: 30 minutos | Troco: R$ ${troco.toFixed(2)}`;
    }
  }
}

// Função chamada pelo botão
function calcular() {
  const valor = parseFloat(document.getElementById("valor").value);
  const resultado = document.getElementById("resultado");

  const parquimetro = new Parquimetro(valor);

  resultado.textContent = parquimetro.calcularTempo();
}