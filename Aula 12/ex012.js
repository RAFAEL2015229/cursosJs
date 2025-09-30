let agora = new Date()
let horas = agora.getHours()
let minutos = agora.getMinutes()
let segundos = agora.getSeconds()
let dia = agora.getDate()
let mes = agora.getMonth()
let ano = agora.getFullYear()

console.log(`Agora são exatamente ${horas}:${minutos}:${segundos} horas`)
console.log(`E hoje e dia ${dia}/${mes}/${ano}`)

if (horas < 5) {
    console.log(`Boa madrugada!`)
} else if (horas < 12) {
    console.log(`Bom dia!`)
} else if (horas < 17) {
    console.log(`Boa tarde!`)
} else if (horas < 23) {
    console.log(`Boa noite! `)
}