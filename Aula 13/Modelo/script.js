function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var madru = window.document.getElementById('coda')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var dia = data.getDate()
    var mes = data.getMonth()
    var ano = data.getFullYear()

    msg.innerHTML = `Agora são ${hora}:${min} horas!`
    msgs.innerHTML += `E Hoje é dia ${dia}/${mes}/${ano}`

    if (hora >= 0 && hora < 6) {
        // Boa madru, hora de codar
        img.src = 'madrugada.jpg'
        madru.innerHTML = `Hora de codar!`
        document.body.style.background = 'black'
    } if (hora >= 6 && hora < 13) {
        // bom dia
        img.src = 'manha.jpg'
        document.body.style.background = 'rgb(238, 211, 56)'
    } else if (hora >= 12 && hora < 19) {
        //boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background = 'rgba(131, 127, 105, 1)'
    } else if (hora >= 18 && hora <= 23) {
        //boa noite
        img.src = 'noite.jpg'
        document.body.style.background = 'rgba(0, 0, 0, 1)'
    }
}

