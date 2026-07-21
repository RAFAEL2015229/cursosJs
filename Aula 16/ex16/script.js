function contar() {
    let ini = document.getElementById('txtinicio').value;
    let fim = document.getElementById('txtfim').value;
    let passo = document.getElementById('txtpasso').value;
    let res = document.getElementById('resultado');

    if (ini.length == 0 || fim.length == 0 || passo.length == 0) {
        res.innerHTML = 'Impossivel, Falta informações para contar! ';
    } else {
        res.innerHTML = 'Contando: <br>';
        let i = Number(ini);
        let f = Number(fim);
        let p = Number(passo);

        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1');
            P = 1;
        }

        if (i < f) {
            for (let contador = i; contador <= f; contador = contador + p) {
                res.innerHTML += `${contador} \u{1F449}`;
            }
        } else {
            for (let contador = i; contador >= f; contador = contador - p) {
                res.innerHTML += `${contador} \u{1F449}`;
            }
        }


    }
    res.innerHTML += `Fim da Contagem! \u{1F3C1}`;
}