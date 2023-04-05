const calcular = () => {
    let numeros = [
        parseInt((document.getElementById('num1')).value),
        parseInt((document.getElementById('num2')).value)
    ]
    let resultado = 0;

    numeros.sort((a,b) => a-b)

    for (let i = numeros[0]; i <= numeros[1]; i++) {
        resultado += i
    }

    div.innerHTML = `Resultado = ${resultado}`
}