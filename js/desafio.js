function calcular(){
    const valorhora = document.querySelector('#valor-hora')
    const horasdia = document.querySelector('#horas-projeto')
    const valorTotal = (valorhora.value * horasdia.value)
    const resposta = document.querySelector ('#resposta')
    console.log (resposta.innerHTML = ' R$ ' + valorTotal.toFixed(2))
}