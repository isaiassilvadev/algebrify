const caixaFuncaoAfim = document.querySelector('#f-afim')
const divsBotoesModoAfim = document.querySelector('.modo-afim')

const coeficienteA = document.querySelector('#a')
const termoIndpB = document.querySelector('#b')
const botaoAfim = document.querySelector('#fun-afim')
const raizAfim = document.querySelector('#resultaAfim')
const btnCalcAf = document.querySelector('#f-afim .enviar')

const btnEstudoAfim = divsBotoesModoAfim.querySelector('#estudo')
const btnPratAfim = divsBotoesModoAfim.querySelector('#pratico')

const btnDeVoltar = document.querySelector('#btn-menu')

let seuModo = ''

//separando modos

function noModoAtivo() {

  const botoesCalculo = document.querySelectorAll('button.enviar')

  botoesCalculo.forEach( (el) => {
    el.classList.add('invisivel')
  })

  btnCalcAf.classList.remove('invisivel')

}

function noModoPassivo() {
  const botoesCalculo = document.querySelectorAll('button.enviar')

  botoesCalculo.forEach( (el) => {
    el.classList.add('invisivel')
  })

  btnCalcAf.classList.add('invisivel')
  
}


//Modo de uso
function modoUsoEstudo() {
    modoAtual = 'estudante'

    noModoAtivo()


  passoAPasso.forEach( (el) => {
    el.classList.remove('invisivel')
  })

}

function modoUsoPratico() {
    modo = 'pratico'
    noModoPassivo()

   
  passoAPasso.forEach( (el) => {
    el.classList.add('invisivel')
  })

  todoInputsNumero.forEach( (el) => {
    el.addEventListener('input', realizarCalculo)

  })
}

//verificação alerta
function alerta(span) {

  span.forEach((el) => {

    if(el.classList.contains('alerta') && el.classList.contains('atencao')) {

      el.classList.remove('alerta')
      el.classList.remove('atencao')
  }

  })
  
}

//calculo automatico
function realizarCalculo() {

  if(!caixaFuncaoAfim.classList.contains('invisivel')) {
    calcularAfim()
  }

}

//Função da função Afim
function calculoAfim(lin, tmInd) {
  
  if(tmInd == "") {
    tmInd = 0
  }

  if(tmInd == 0 && lin > 0) {
    return (-lin)*1
  } else if (tmInd == 0 && lin < 0) {
    return lin *(-1) 
  }

  return (-tmInd) / lin

}

function montarExpressaoGrau1(a, b) {
  let operacao

  if (b > 0) {
    operacao = `${a}x + ${b} = 0`
    return operacao
  } else {
    operacao = `${a}x - ${Math.abs(b)} = 0`
    return operacao
  }
}

function preechendoFormula() {
    let a = Number(coeficienteA.value)
    let b = Number(termoIndpB.value)

    const spanOpAf = caixaFuncaoAfim.querySelector('.oper')
    

    if (b == '') {
      b = null
    }

    if (a == 1) {
      spanOpAf.textContent = `x + ${b} = 0`
    } else if (b == 0 || b == null) {
      spanOpAf.textContent = `${a}x = 0`
    } else {
      spanOpAf.textContent = `${a}x + ${b} = 0`
    }

}

function passosAfim() {
    let a = Number(coeficienteA.value)
    let b = Number(termoIndpB.value)
    let divX

    const spanTrocaCoef = caixaFuncaoAfim.querySelector('.troca-coef')
    const spanDividirCoef = caixaFuncaoAfim.querySelector('.div-coef')
    const spanValorX = caixaFuncaoAfim.querySelector('.val-x')

     spanTrocaCoef.textContent = `${a}x = ${(b) * (-1)}`
    spanDividirCoef.textContent = `x = ${(b) * (-1)}/${a}`

    divX = (b) * (-1)
    spanValorX.textContent = `${(divX) / a}`

}

function graficoPrimeiroGrau() {
    let a = Number(coeficienteA.value)
    let b = Number(termoIndpB.value)
    let xDaFuncao

   const spanPosGrafico = caixaFuncaoAfim.querySelector('.pos-graf')
   const spanCortaY = caixaFuncaoAfim.querySelector('.eixo-0x')

  if (a < 0) {
      spanPosGrafico.textContent = `o a (${a}) é negativo, a reta "desce"`
    } else {
      spanPosGrafico.textContent = `o a (${a}) é positivo, a reta "sobe"`
    }

    raizAfim.value = calculoAfim(a, b)
    xDaFuncao = Number(raizAfim.value)

    spanCortaY.textContent = b

}

//Função preechimento automático

function calcularAfim() {
  if (modoAtual !== 'pratico') return

  const a = Number(coeficienteA.value)
  const b = Number(termoIndpB.value)

  if (coeficienteA.value === '' || termoIndpB.value === '' || a === 0) {
    raizAfim.value = ''
    return
  }

  raizAfim.value = (-b /  a).toFixed(2)
}

//Função de execução ao clicar em calcular

function realizarCalculoAfim() {
  let valA = Number(coeficienteA.value)
  let valB = Number(termoIndpB.value)

  if (valA != 0) {

    const divExplicacao = caixaFuncaoAfim.querySelector('.explicando')

    divExplicacao.classList.remove('invisivel')

     const spanElementos = caixaFuncaoAfim.querySelector('.elementos')

    //passo apasso elementos 
    preechendoFormula()

    passosAfim()

    graficoPrimeiroGrau()

      
    //Termos da Função
    spanElementos.textContent = `a = ${valA}; b = ${valB}`

  }
}

//eventos Afim

botaoAfim.addEventListener('click', () => {
  caixaFuncaoAfim.classList.toggle('invisivel')
  btnDeVoltar.classList.toggle('invisivel')
})

btnCalcAf.addEventListener('click', realizarCalculoAfim)


//Botao apagar f-afim
const btnApagarAfim = caixaFuncaoAfim.querySelector('.apagar')
const inputsAfim = caixaFuncaoAfim.querySelectorAll('input')

btnApagarAfim.addEventListener('click',() =>{

    const divExplicacao = caixaFuncaoAfim.querySelector('.explicando')

    divExplicacao.classList.add('invisivel')

    const spansAfim = caixaFuncaoAfim.querySelectorAll('span')

    inputsAfim.forEach( (el) => {
      el.value = ''
    })

    spansAfim.forEach((el) => {
       el.textContent = ''
    });
})

//Eventos modos de uso
btnEstudoAfim.addEventListener('click', () => {
  seuModo = 'estudando'
  modoUsoEstudo()
})

btnPratAfim.addEventListener('click', () => {
  seuModo = 'pratico'
  modoUsoPratico()
})