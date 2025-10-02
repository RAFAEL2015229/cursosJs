function carregar() {
    msg = document.getElementById('msg')
    img = document.getElementById('img')
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('div#img')
     
    var data = new Date()
    var horas = data.gethours()
    
    msg.innerHTML = 'agoras são' + horas + 'horas'
}