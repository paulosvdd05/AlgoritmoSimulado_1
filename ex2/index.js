const calcular = () =>{
    let produto = (document.getElementById('produto')).value
    let preco = (document.getElementById('preco')).value
    const promocao = preco*0.5

    div.innerHTML = `${produto} - Valor unitario R$ ${preco}<br>Promoção leve 3 por R$ ${preco*2 + promocao}<br>O 3° produto custa apenas R$ ${promocao}. `
}