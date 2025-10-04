function verificar() {
    var data = new Date();
    var ano = data.getFullYear()

    var fano = document.getElementById('texta1')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) < 1920) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança 
                img.setAttribute('src', 'foto_criancaMasculino.jpg')
            } else if (idade < 21) {
                //Jovem adolecente
                img.setAttribute('src', 'adolecenteMasc.jpg')
            } else if ( idade < 50) {
                //Adulto
                img.setAttribute('src', 'Jovem_adulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src' ,'idoso.jpg') 
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src' ,'foto_criancaFeminino.jpg')
            } else if (idade < 21) {
                //Jovem adolecente
                img.setAttribute('src', 'adolecenteFeminina.jpg')
            } else if ( idade < 50) {
                //adulto
                img.setAttribute('src', 'jovem_adulta.jpg')
            } else {
                //idoso
                img.setAttribute('src' , 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que voce e um ${genero} com ${idade} anos`
        res.appendChild(img)

    }
}