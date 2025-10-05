//Funcao que foi sicronizada do html para verificar a idade da pessoa e se e Homem ou Mulher
function verificar() {
    var data = new Date();
    var ano = data.getFullYear()

    var fano = document.getElementById('texta1')
    var res = document.querySelector('div#res')

    //Informação de [ERRO] caso no texto nao ter informação ou estiver vazio ou alem do ano atual ou se passar dos 105 anos (1920) Para printar uma tela de [ERRO]
    if (fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) < 1920) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        //Sistema para identificar a idade da pessoa e informar se e Criança, Jovem adolecente, adulto ou idoso e com base na idade da pessoa sera printado na tela uma imagem conforme a idade! 
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 13) {
                // Criança 
                genero = 'criança'
                img.setAttribute('src', 'foto_criancaMasculino.jpg')
            } else if (idade < 21) {
                //Jovem adolecente
                genero = 'adolecente'
                img.setAttribute('src', 'adolecenteMasc.jpg')
            } else if ( idade < 50) {
                //Adulto
                genero = 'adulto'
                img.setAttribute('src', 'Jovem_adulto.jpg')
            } else {
                //Idoso
                genero = 'idoso'
                img.setAttribute('src' ,'idoso.jpg') 
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                genero = 'crianca'
                img.setAttribute('src' ,'foto_criancaFeminino.jpg')
            } else if (idade < 21) {
                //Jovem adolecente
                genero = 'adolecente'
                img.setAttribute('src', 'adolecenteFeminina.jpg')
            } else if ( idade < 50) {
                //adulto
                genero = 'adulta'
                img.setAttribute('src', 'jovem_adulta.jpg')
            } else {
                //idoso
                genero = 'idosa'
                img.setAttribute('src' , 'idosa.jpg')
            }
        }

        //Printar na tela Centralizando o Resultado + a imagem que foi importada 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que voce e um ${genero} com ${idade} anos`
        res.appendChild(img)

    }
}