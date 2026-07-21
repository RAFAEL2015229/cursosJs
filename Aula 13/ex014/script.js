function carregar() {
    /*Definindo variaveis de "Horas", "Data", "Minutos", "Mes", "Ano" e pegando-as do HTML e passando para o javascript */
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var madru = window.document.getElementById('coda')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var dia = data.getDate()
    var mes = data.getMonth()
    var ano = data.getFullYear()

    /* Printando a tela inicial do layout do site */
    msg.innerHTML = `Agora são ${hora}:${min} horas!`
    msgs.innerHTML += `E Hoje é dia ${dia}/${mes}/${ano}`

    /*Definindo "if" para horarios caso seja de Madrugada, Manha, Tarde e Noite */
    if (hora >= 0 && hora < 6) {
        /* Madrugada */
        img.src = 'madrugada.jpg'
        madru.innerHTML = `Hora de codar!`
        document.body.style.background = 'black'

    } if (hora >= 6 && hora < 13) {
        /* Manha */
        img.src = 'manha.jpg'
        document.body.style.background = 'rgb(238, 211, 56)'

    } else if (hora >= 12 && hora < 19) {
        /* Tarde */
        img.src = 'tarde.jpg'
        document.body.style.background = 'rgba(131, 127, 105, 1)'
        
    } else if (hora >= 18 && hora <= 23) {
        /* Noite */
        img.src = 'noite.jpg'
        document.body.style.background = 'rgba(0, 0, 0, 1)'
    }
}

