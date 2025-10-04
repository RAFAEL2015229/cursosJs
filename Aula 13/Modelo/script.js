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
        /*Caso Horario seja 00:00 maior ou igual 'e'
         caso seja Menor que 06:00, Printa Hora de codar, e mudar o layout  */
        img.src = 'madrugada.jpg'
        madru.innerHTML = `Hora de codar!`
        document.body.style.background = 'black'

    } if (hora >= 6 && hora < 13) {
        /*Caso Horario seja maior ou igual a 06:00 'e'
         caso horario seja menor que 13, Mude o layout*/
        img.src = 'manha.jpg'
        document.body.style.background = 'rgb(238, 211, 56)'

    } else if (hora >= 12 && hora < 19) {
        /* Caso horario seja maior ou igual a 12 'e'
        Caso horario seja menor que 19, Mudar layout */
        img.src = 'tarde.jpg'
        document.body.style.background = 'rgba(131, 127, 105, 1)'
        
    } else if (hora >= 18 && hora <= 23) {
        /*Caso horario seja maior ou igual a 18 'e'
        Caso horario seja menor ou igual a 23, Mudar layout */
        img.src = 'noite.jpg'
        document.body.style.background = 'rgba(0, 0, 0, 1)'
    }
}

