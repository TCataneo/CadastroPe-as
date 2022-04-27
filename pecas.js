let pesoPeca = 200
let numeroPecas = 10
let nomePeca = 'Disco de Freio'
let listaPecas = ["Disco de freio", "Motor", "Pastilha de Freio", "Peneu"]

   //Verificação Peso da Peça
if(pesoPeca > 100) {
    //Podemos cadastrar
    console.log("peso adequado, podemos cadastrar")

}else{
    // Não podemos cadastrar
    console.log("Peso menos que 100g, não podemos cadastrar")
}

  // Verificação Tamanho da lista de peças
if(listaPecas.length >= 10) {
    //capacidade máxima atingida
    console.log("Capacidade máxima atingida")
}else {
    // Ainda há espaço para cadastro
    console.log("Ainda há espaço para cadastrar")
}

  // Verificação do nome da Peça
  if (nomePeca.length < 3) {
      // Nome Inválido
      console.log(" Nome inválido, o nome presisa ter 3 caracteres ou mais")
  } else {
      // Nome da peça adequado
      console.log("Nome adequado")

      
  }