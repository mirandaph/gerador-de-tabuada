const erro = document.getElementById("errorMsg") // DIV MENSAGEM DE ERRO
erro.innerHTML = ""

let numberPlaceholder = document.getElementById("input")

function calc(e) {
    let multiplicador = document.getElementById("input") // NUMERO DIGITADO PELO USUÁRIO
    let resultado = document.getElementById("resultado") // DIV RESULTADO ESCRITO

    // DIVS TABUADA
    let res1 = document.getElementById("res1")
    let res2 = document.getElementById("res2")
    let res3 = document.getElementById("res3")
    let res4 = document.getElementById("res4")
    let res5 = document.getElementById("res5")
    let res6 = document.getElementById("res6")
    let res7 = document.getElementById("res7")
    let res8 = document.getElementById("res8")
    let res9 = document.getElementById("res9")
    let res10 = document.getElementById("res10")

    let numero = multiplicador.value // NUMERO

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // MULTIPLICADORES TABUADA COMPLETA 1-10
    
    let num = {
        value: `${numero}`
    }

    if(numero == 0){
        erro.innerHTML = "Erro: Insira um número para continuar"
    } else {

        resultado.innerHTML = `Tabuada do ${numero}:` // TÍTULO

        // TABUADA GERADA COM DADO INSERIDO
        res1.innerHTML = `1 X ${numero} = ` + numeros[0] * num.value
        res2.innerHTML = `2 X ${numero} = ` + numeros[1] * num.value
        res3.innerHTML = `3 X ${numero} = ` + numeros[2] * num.value
        res4.innerHTML = `4 X ${numero} = ` + numeros[3] * num.value
        res5.innerHTML = `5 X ${numero} = ` + numeros[4] * num.value
        res6.innerHTML = `6 X ${numero} = ` + numeros[5] * num.value
        res7.innerHTML = `7 X ${numero} = ` + numeros[6] * num.value
        res8.innerHTML = `8 X ${numero} = ` + numeros[7] * num.value
        res9.innerHTML = `9 X ${numero} = ` + numeros[8] * num.value
        res10.innerHTML = `10 X ${numero} = ` + numeros[9] * num.value 
    }
}

function reset() {
    numberPlaceholder.value = ''
    erro.innerHTML = ""
    resultado.innerHTML = `Tabuada do X:`
    res1.innerHTML = ""
    res2.innerHTML = ""
    res3.innerHTML = ""
    res4.innerHTML = ""
    res5.innerHTML = ""
    res6.innerHTML = ""
    res7.innerHTML = ""
    res8.innerHTML = ""
    res9.innerHTML = ""
    res10.innerHTML = ""
}


    