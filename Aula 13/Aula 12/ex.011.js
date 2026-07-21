var idade = 66
console.log(`Voce tem ${idade} anos.`)
if (idade <= 15) {
    console.log(`Não vota`)
} else {
    if (idade <= 18 || idade >= 65) {
        console.log('Voce pode optar por votar, se quiser')
    } else if (idade >= 18)  {
        console.log('Voce tem a obrigação de votar!')
    }
}