function multiplicar(valor1,valor2){

    return valor1 * valor2
}

function dividir(valor1, valor2){
    
    return valor1 / valor2;

}

function somar(valor1,valor2){

    return valor1 + valor2

}

function subt(valor1,valor2){

    return valor1 - valor2

}

function handieBtMulti(){

    const v1 = document.getElementById("valor1").value
    const v2 = document.getElementById("valor2").value
    document.getElementById("resultado").innerHTML = multiplicar(v1,v2)

}

function handieBtDivi(){

    const v1 = parseInt.getElementById("valor1").value
    const v2 = parseInt.getElementById("valor2").value
    document.getElementById("resultado").innerHTML = dividir(v1,v2)

}

function handieBtSoma(){

    const v1 = parseInt(document.getElementById("valor1").value)
    const v2 = parseInt(document.getElementById("valor2").value)
    document.getElementById("resultado").innerHTML = somar(v1, v2)

}

function handieBtSubt(){

    const v1 = parseInt(document.getElementById("valor1").value)
    const v2 = parseInt(document.getElementById("valor2").value)
    document.getElementById("resultado").innerHTML = subt(v1, v2)

}

document.getElementById('btMult').addEventListener('click', handieBtMulti)
document.getElementById('btDivi').addEventListener('click', handieBtDivi)
document.getElementById('btSoma').addEventListener('click', handieBtSoma)
document.getElementById('btSubt').addEventListener('click', handieBtSubt)
