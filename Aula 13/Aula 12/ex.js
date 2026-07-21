var idade =  15
console.log(`Voce tem ${idade} anos.`)

if (idade < 16) {
    console.log(`Voce tem ${idade} anos, é muito novo ainda e não pode dirigir.`)
} else if (idade < 18) {
    console.log(`Voce tem ${idade} anos, e não pode dirigir. :( `)
} else {
    console.log(`Voce tem ${idade} anos, é nesse caso voce pode dirigir! :) `)
}

/*
let agora = new Date() // Objeto com data e hora
let hora = agora.getHours() // Pega apenas a hora (0-23)
console.log(hora)
*/