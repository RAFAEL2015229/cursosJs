function lista() {
    var text1 = window.document.getElementById('text1')
    var text2 = window.document.getElementById('text2')
    var text3 = window.document.getElementById('text3')

    var botadd1 = window.document.getElementById('botadd1')
    var botadd2 = window.document.getElementById('botadd2')
    var botadd3 = window.document.getElementById('botadd3')

    var add1 = window.document.getElementById('add1')
    var add2 = window.document.getElementById('add2')+
    
    botadd1.addEventListener('click', clicar)
    function clicar() {
        var texto = text1.value
        var criarL = document.createElement('li')
        criarL.innerHTML = `<strong>${texto}</strong>`
        document.getElementById(add1.appendChild(criarL))

    }
}