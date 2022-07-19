
function calcularValorHora(){
    const ganho = document.querySelector('#ganho-mes')
    const horas = document.querySelector('#horas-dia')
    const horasTotais = ganho.value / (22 * horas.value)

    const resposta = document.querySelector ('#resposta')
    resposta.innerHTML = 'R$ ' + horasTotais.toFixed(2)
}