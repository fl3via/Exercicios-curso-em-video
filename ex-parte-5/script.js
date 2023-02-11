function contar() {
    let init = document.querySelector('#txti')
    let fim = document.querySelector('#txtf')
    let passo = document.querySelector('#txtp')
    let res = document.querySelector('#res')

    if (Number(init.value.length) == 0 || Number(fim.value.length) == 0 || Number(passo.value.length) == 0) {
       res.innerHTML = 'Impossível contar'
         alert('[Erro] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: </br> '
        let i = Number(init.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

if (p <= 0 ) {
    alert('Passo invalido! Considerando PASSO 1')
    p = 1
}

if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }

        } else {
            // contagem regressiva 
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}