function contar() {
    let cont = document.getElementById('conta').value;
    let res = document.getElementById('resultado');

     if (cont.length == 0 || cont < 0) {
        res.innerHTML = 'Impossivel Multiplicar por 0 ou menos que 0! <br> Digite um numero para tabular ! ';
    } else {
        res.innerHTML = 'Tabuada do ' + cont + '<br>';
        let i = Number(cont);
 
        for (let p = 1; p <= 10; p++) {
            res.innerHTML += `${i} x ${p} = ${i * p} <br>`;
        }
    }
}