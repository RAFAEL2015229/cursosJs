//Criando uma função para uma lista de tarefas, e estou declarando no momento com um evento de 'click' 
function lista() {
    var text1 = window.document.getElementById('text1')
    var text2 = window.document.getElementById('text2')
    var text3 = window.document.getElementById('text3')

    var botadd1 = document.querySelector('input#botadd1')
    var botadd2 = document.querySelector('input#botadd2')
    var botadd3 = document.querySelector('input#botadd3')

    var add1 = document.getElementById('add1')
    var add2 = document.getElementById('add2')
    var add3 = document.getElementById('add3')

    botadd1.addEventListener('click', clicar1)
    botadd2.addEventListener('click', clicar2)
    botadd3.addEventListener('click', clicar3)

    //Com a função criada de evento para clicar criei 3 evento e em cada estrutura e usado um if para adicionar uma <li> e caso venha vazio '' aparecera uma alerta de [ERRO].
    function clicar1() {
        var texto1 = text1.value
        if (texto1 == '') {
            window.alert('[ERROR] Voce precisa escrever as tarefas!')
            return;
        } if (texto1 != '') {
            var criarL1 = document.createElement('li')
            var criainput1 = document.createElement('input')
            criainput1.type = 'checkbox'
            criarL1.innerHTML = `<input type="checkbox"> <strong>${texto1}</strong>`;
            add1.appendChild(criarL1)
            add1.style.padding = '10px';

            /*botao4.addEventListener('click', clicar4)
            function clicar4() {
                if (add1 == 'clicar4') {
                    
                }
            */
        }
    }
    function clicar2() {
        var texto2 = text2.value
        if (texto2 == '') {
            window.alert('[ERROR] Voce precisa escrever as tarefas!')
            return;
        }
        if (texto2 != '') {
            var criarL2 = document.createElement('li')
            var criainput2 = document.createElement('input')
            criainput2.type = 'checkbox'
            criarL2.innerHTML = `<input type="checkbox"><strong>${texto2}</strong>`
            add2.appendChild(criarL2)
            add2.style.padding = '10px';

        }
    }
    function clicar3() {
        var texto3 = text3.value
        if (texto3 == '') {
            window.alert('[ERROR] Voce precisa escrever as tarefas!')
            return;
        }
        if (texto3 != '') {
            var criarL3 = document.createElement('li')
            var criarinput3 = document.createElement('input')
            criarinput3 = 'checkbox'
            criarL3.innerHTML = `<input type="checkbox"><strong>${texto3}</strong>`
            add3.appendChild(criarL3)
            add3.style.padding = '10px';
        }
    }
}
