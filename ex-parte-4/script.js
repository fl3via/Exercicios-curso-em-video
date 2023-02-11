function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let anoFormulario = document.querySelector('#txtano')
    let res = document.querySelector('#res')
    if (anoFormulario.value.length == 0 || Number(anoFormulario.value) > ano) {
        alert('[Erro] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(anoFormulario.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
              img.setAttribute('src', 'bebemenino.jpg')
            } else if (idade < 21) {
                
            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            }
            
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
            } else if (idadde < 21) {
                //jovem
            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            }
        }
        res.getElementsByClassName.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }


}