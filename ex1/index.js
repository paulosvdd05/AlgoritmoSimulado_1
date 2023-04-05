const calcular = () =>{
    let buffet = (document.getElementById('buffet')).value
    let consumo = (document.getElementById('consumo')).value
    const preco = (consumo/1000)*buffet

    div.innerHTML = `Valor por Quilo: R$${buffet}<br>Total consumo: ${consumo}g<br>Valor a pagar: R$${preco}`
}