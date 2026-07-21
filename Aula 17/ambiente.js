let valores = [8, 1, 3, 6, 7, 4, 64, 22, 42, 33]


/*for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */

let pos = valores.indexOf(33)
if(pos == -1 ) {
    console.log(`O valo nao foi encontrado!`)
} else {
    console.log(`O valor de 33 esta na posição ${pos}`)
}