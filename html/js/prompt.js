function IniciarJogo(){
    const numeroSorteado = Math.floor(Math.random() * 100) + 1;

    var numeroEscolhido, tentativas

    tentativas = 1

    numeroEscolhido = parseInt(prompt(numeroSorteado+"Digite seu palpite"))


    while (numeroEscolhido!=numeroSorteado){
        if(numeroEscolhido>numeroSorteado){
            confirm("Muito alto")
        }else if(numeroEscolhido<numeroSorteado){
            confirm("Muito baixo")
        }

        numeroEscolhido = parseInt(prompt("Digite seu novo palpite"))

        tentativas++
    }

    alert("Você acertou! O número sorteado era "+ numeroSorteado)
}
