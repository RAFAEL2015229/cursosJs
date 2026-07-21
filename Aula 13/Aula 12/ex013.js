var agora = new Date()
var diaSem = agora.getDay()

switch (diaSem) {
    case 0:
        console.log(`Domingo`)
        break;
    case 1:
        console.log(`Segunda-Feira`)
        break;
    case 2:
        console.log(`Terca-Feira`)
        break;
    case 3:
        console.log(`Quarta-Feira`)
        break;
    case 4:
        console.log(`Quinta-Feira`)
        break;
    case 5:
        console.log(`Sexta-Feira!! uhuu`)
        break;
    case 6:
        console.log(`Sabado!! uhu`)
        break;
    default:
        console.log(`ERRO, Data invalida!`)
        break;
}