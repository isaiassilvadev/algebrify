const caixaFuncaoQuadrada = document.querySelector('#f-quadrada')
const divModosQuad = document.querySelector('.modo-quad')

const cAngular = document.querySelector('#coef-ang')
const cLinear = document.querySelector('#coef-lin')
const termoIndpC = document.querySelector('#c')
const botaoQuadrada = document.querySelector('#fun-quad')
const raizesQuadradas = document.querySelector('#resulta-quad')
const btnCalcQuad = document.querySelector('#f-quadrada .enviar')
const resultadoSimplesDaRaiz = document.querySelector('#resulta-quad-com-raiz')


const btnEstudoQuad = divModosQuad.querySelector('#estudo')
const btnPratQuad = divModosQuad.querySelector('#pratico')

const btnVolta = document.querySelector('#btn-menu')

let modos = ''

//separando modos

function noModoAtivo() {

  const botoesCalculo = document.querySelectorAll('button.enviar')

  botoesCalculo.forEach( (el) => {
    el.classList.add('invisivel')
  })

  resultadoSimplesDaRaiz.classList.remove('invisivel')

  btnCalcQuad.classList.remove('invisivel')

}

function noModoPassivo() {
  const botoesCalculo = document.querySelectorAll('button.enviar')

  botoesCalculo.forEach( (el) => {
    el.classList.add('invisivel')
  })

  resultadoSimplesDaRaiz.classList.remove('invisivel')

  btnCalcQuad.classList.add('invisivel')
  
}


//Modo de uso
function modoUsoEstudo() {
    modos = 'estudante'

    noModoAtivo()


  passoAPasso.forEach( (el) => {
    el.classList.remove('invisivel')
  })

  resultSimplesRaiz.classList.remove('invisivel')
  labelSimplesRaiz.classList.remove('invisivel')

}

function modoUsoPratico() {
    modos = 'pratico'
    noModoPassivo()

   
  passoAPasso.forEach( (el) => {
    el.classList.add('invisivel')
  })

  todoInputsNumero.forEach( (el) => {
    el.addEventListener('input', realizarCalculo)

   resultSimplesRaiz.classList.add('invisivel')
   labelSimplesRaiz.classList.add('invisivel')
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

  if(!caixaFuncaoQuadrada.classList.contains('invisivel')) {
    calcularSegundoGrau()
  }
}

//Função da Função Quadrática
function exibirCalculosQuadrada(a, b, c) {

  let x1 = 0
  let x2 = 0

  let delta = Number(b ** 2 - 4 * a * c)

  const raizQuadrada = Math.sqrt(delta)


    x1 = ((-b) + raizQuadrada) / (2 * a)

    x2 = ((-b) - raizQuadrada) / (2 * a)

    if (Number.isInteger(x1) && Number.isInteger(x2)) {
      return `${Number.parseInt(x1)} e ${Number.parseInt(x2)}`
    } else {
      return `${x1.toFixed(2)} e ${x2.toFixed(2)}`
    }

  
}

function calculoDiscriminante(a, b, c) {

  const delta = b ** 2 - 4 * a * c

  if (delta < 0) {
    console.log(`Delta negativo(${ delta }).Não existem raízes reais.`)
    return null
  }

  return Math.sqrt(delta)

}

function passosCalculoDelta(a, b, c) {

   const spanElementos = caixaFuncaoQuadrada.querySelector('.elementos')
   const spanCalculoDelta = caixaFuncaoQuadrada.querySelector('.calculo-delta')
   const spanCalculoDelta2 = caixaFuncaoQuadrada.querySelector('.calculo-delta2')
   const spanCalculoDelta3 = caixaFuncaoQuadrada.querySelector('.calculo-delta3')
   const spanRaizDelta = caixaFuncaoQuadrada.querySelector('.raiz-delta')

  const  dnvDelta = Number(b ** 2 - 4 * a * c)
  let maisRaiz = Math.sqrt(dnvDelta)

  if(dnvDelta < 0) return

    spanElementos.textContent = `a = ${a}, b = ${b} e c = ${c}`

    spanCalculoDelta.textContent = `${b}² - 4 x ${a} x ${c}`

    spanCalculoDelta2.textContent = `${b ** 2} - ${4 * a * c}`
    spanCalculoDelta3.textContent = `${b ** 2 - 4 * a * c}`

    if (Number.isInteger(maisRaiz)) {

      raizInteira = maisRaiz.toFixed(0)

      spanRaizDelta.textContent = `${dnvDelta.toFixed(0)} = ${maisRaiz}`

    } else if (!Number.isInteger(maisRaiz)) {
      spanRaizDelta.textContent = `${dnvDelta.toFixed(2)} = ${maisRaiz.toFixed(2)}`
    }
}   

function passosCalculoXises(a, b, c) {

  const substituirValores = caixaFuncaoQuadrada.querySelector('.subst-form')
  const formulaFinal = caixaFuncaoQuadrada.querySelector('.form-ad-sub')
  const adicaoFim = caixaFuncaoQuadrada.querySelector('.adc')
  const subtracaoFim = caixaFuncaoQuadrada.querySelector('.subt')
  const divisao1 = caixaFuncaoQuadrada.querySelector('.arm-div1')
  const divisao2 = caixaFuncaoQuadrada.querySelector('.arm-div2')
  const spanValX1 = caixaFuncaoQuadrada.querySelector('.val-x1')
  const spanValX2 = caixaFuncaoQuadrada.querySelector('.val-x2')

  

  let delta = b ** 2 - 4 * a * c

  if (delta < 0) {
    spanValX1.textContent = '---'
    spanValX2.textContent = '---'
    console.log('Delta negativo — não existem raízes reais')
    return
  }


  let raiz = Math.sqrt(delta)

  let ad = -b + raiz
  let sb = -b - raiz

  substituirValores.textContent =
    `(-${b} ± ${raiz.toFixed(2)}) / (2 × ${a})`

  let dv1 = ad / (2 * a)
  let dv2 = sb / (2 * a)

  formulaFinal.textContent =
    `(-${b} + ${raiz.toFixed(2)}) / (2 × ${a}) e (-${b} - ${raiz.toFixed(2)}) / (2 × ${a})`

  adicaoFim.textContent = ad.toFixed(2)
  subtracaoFim.textContent = sb.toFixed(2)

  divisao1.textContent =
    `${ad.toFixed(2)} / ${2 * a} = ${dv1.toFixed(2)}`

  divisao2.textContent =
    `${sb.toFixed(2)} / ${2 * a} = ${dv2.toFixed(2)}`

  spanValX1.textContent = dv1.toFixed(2)
  spanValX2.textContent = dv2.toFixed(2)

}

function inputResultadoComRaiz() {
  let a = Number(cAngular.value)
  let b = Number(cLinear.value)
  let c = Number(termoIndpC.value)


  const inputResRaiz = caixaFuncaoQuadrada.querySelector('#resulta-quad-com-raiz')

  let delta = b ** 2 - 4 * a * c

  if (delta < 0) {
    spanValX1.textContent = '---'
    spanValX2.textContent = '---'
    console.log('Delta negativo — não existem raízes reais')
    return
  }

  let resultado = simplificarRaiz(delta)

  let adRaizInt = -b + resultado.dentro
  let adRaizQueb = -b + resultado.fora
  let sbRaizInt = -b - resultado.dentro
  let sbRaizQueb = -b - resultado.fora


  let dvRaiz1Int = adRaizInt / (2 * a)
  let dvRaiz2Int = sbRaizInt / (2 * a)
  let dvRaiz1Queb = -b / (2 * a)
  let dvRaiz2Queb = -b / (2 * a)
  let dvNumComRaiz =  resultado.fora / (2 * a)

  if (resultado.dentro === 1) {
    inputResRaiz.value = `${adRaizInt} e ${sbRaizInt}`
  } else {
    inputResRaiz.value = `${dvRaiz1Queb} + ${dvNumComRaiz} \u221a${resultado.dentro} e ${dvRaiz2Queb} - ${dvNumComRaiz} \u221a${resultado.dentro}`
  }

}

function resultadoComRaiz() {

  let a = Number(cAngular.value)
  let b = Number(cLinear.value)
  let c = Number(termoIndpC.value)

  const substituirComSimplificacao = caixaFuncaoQuadrada.querySelector('.subs-simp')

  const somaComRaiz = caixaFuncaoQuadrada.querySelector('.soma-com-raiz')
  const subtComRaiz = caixaFuncaoQuadrada.querySelector('.subtrai-com-raiz')
  const resSomaComRaiz = caixaFuncaoQuadrada.querySelector('.sm-com-raiz')
  const resSubtComRaiz = caixaFuncaoQuadrada.querySelector('.sb-com-raiz')
  const calcComRaiz1 = caixaFuncaoQuadrada.querySelector('.c1-raiz')
  const calcComRaiz2 = caixaFuncaoQuadrada.querySelector('.c2-raiz')
  const contaFinalComRaizSoma = caixaFuncaoQuadrada.querySelector('.div1-com-raiz')
  const contaFinalComRaizSubt = caixaFuncaoQuadrada.querySelector('.div2-com-raiz')
  const x1Raiz = caixaFuncaoQuadrada.querySelector('.x1-raiz')
  const x2Raiz = caixaFuncaoQuadrada.querySelector('.x2-raiz')

  let delta = b ** 2 - 4 * a * c

  if (delta < 0) {
    spanValX1.textContent = '---'
    spanValX2.textContent = '---'
    console.log('Delta negativo — não existem raízes reais')
    return
  }

  let resultado = simplificarRaiz(delta)

  let adRaizInt = -b + resultado.fora
  let adRaizQueb = +resultado.fora
  let sbRaizInt = -b - resultado.fora
  let sbRaizQueb = -resultado.fora


  let dvRaiz1Int = adRaizInt / (2 * a)
  let dvRaiz2Int = sbRaizInt / (2 * a)
  let dvRaiz1Queb = -b / (2 * a)
  let dvRaiz2Queb = -b / (2 * a)
  let dvNumComRaiz =  resultado.fora / (2 * a)
  let mult2xA = (2 * a)

  if (resultado.dentro === 1) {
      substituirComSimplificacao.textContent = `(-${b} ± ${resultado.fora}) / ( 2 x ${a})`

      somaComRaiz.textContent = `-${b} + ${resultado.dentro} = ${adRaizInt}`
      subtComRaiz.textContent = `-${b} - ${resultado.dentro} = ${sbRaizInt}`

      calcComRaiz2.textContent = `${sbRaizInt} / ( 2 x ${a}) -->`

      calcComRaiz1.textContent = `${adRaizInt} / ( 2 x ${a}) -->`

      contaFinalComRaizSoma.textContent = `${adRaizInt} / ${2 * a} = ${dvRaiz1Int}`
      contaFinalComRaizSubt.textContent = `${sbRaizInt} / ${2 * a} = ${dvRaiz2Int}`

      x1Raiz.textContent = dvRaiz1Int
      x2Raiz.textContent = dvRaiz2Int


    } else {
      substituirComSimplificacao.textContent = `(-${b} ± ${resultado.fora} \u221a${resultado.dentro}) / ( 2 x ${a})`

      somaComRaiz.textContent = `-${b} + ${resultado.fora} \u221a${resultado.dentro}`

      subtComRaiz.textContent = `-${b} - ${resultado.fora} \u221a${resultado.dentro}`

      resSomaComRaiz.textContent = `(${-b} + ${adRaizQueb} \u221a${resultado.dentro})`
      resSubtComRaiz.textContent = `(${-b} ${sbRaizQueb} \u221a${resultado.dentro})`

      calcComRaiz2.textContent = `( 2 x ${a}) -->`

      calcComRaiz1.textContent = `( 2 x ${a}) -->`

      contaFinalComRaizSoma.textContent = `${-b} / ${mult2xA} e +${adRaizQueb} \u221a${resultado.dentro} / ${mult2xA} = ${dvRaiz1Queb} + ${dvNumComRaiz} \u221a ${resultado.dentro}`

      contaFinalComRaizSubt.textContent = `${-b} / ${mult2xA} e ${sbRaizQueb} \u221a${resultado.dentro} / ${mult2xA} = ${dvRaiz2Queb} - ${dvNumComRaiz}\u221a ${resultado.dentro}`

      x1Raiz.textContent = `${dvRaiz1Queb} \u221a${resultado.dentro}`
      x2Raiz.textContent = `${dvRaiz2Queb} \u221a${resultado.dentro}`

    }

    versaoComRaiz()
}

function versaoComRaiz() {
  let a = Number(cAngular.value)
  let b = Number(cLinear.value)
  let c = Number(termoIndpC.value)

  let delta = b ** 2 - 4 * a * c

  let result = simplificarRaiz(delta)

  const divResultaoAlternativo = caixaFuncaoQuadrada.querySelector('.solucao-matendo-raiz')

  if (result.fora === 1) {
      divResultaoAlternativo.classList.remove('invisivel')
  } else {
    divResultaoAlternativo.classList.add('invisivel')
  }
}

function simplificarRaiz(delta) {

  if (delta <= 0) return null

  let n = delta
  let divisor = 2
  let fatores = {}

  //Decomposição
  while(n > 1) {
    if(n % divisor === 0) {
      fatores[divisor] = (fatores[divisor] || 0) + 1

      n/= divisor
    } else {
      divisor++
    }
  }

  let fora = 1
  let dentro = 1

  for(let fator in fatores) {
    let expoente = fatores[fator]

    let pares = Math.floor(expoente / 2)

    let resto = expoente % 2

    if(pares > 0) {
      fora *= fator** pares
    }

    if(resto > 0) {
      dentro *= fora
    }
  }

  return {
    fora,
    dentro,
  }
}


function graficoSegundoGrau(a, c) {

  if (a < 0) {
       return `o a (${a}) é negativo, a parabola fica "triste"`
  } else {
      return `o a (${a}) é positivo, a parabola fica "feliz"`
    }

}

function montarExpressaoGrau2(coeficienteQuadratico, coeficienteLinear, c) {
  let op

  if (coeficienteQuadratico === 1) {
    op = `x² + ${coeficienteLinear} + ${c} = 0`

    return op

  } else if (coeficienteQuadratico !== 0 && coeficienteLinear === 1 && c === 0) {
    op = `${coeficienteQuadratico}x² + x = 0`
    
    return op

  } else if (coeficienteQuadratico !== 0 && coeficienteLinear === 1) {
    op = `${coeficienteQuadratico}x² + x + ${c}= 0`
    
    return op

  } else if (coeficienteQuadratico !== 0 && c === 0) {
    op = `${coeficienteQuadratico}x² + ${coeficienteLinear}x = 0`

    return op

  } else if (coeficienteQuadratico !== 0 && coeficienteLinear !== 1 && c !== 0) {
    op = `${coeficienteQuadratico}x² + ${coeficienteLinear}x + ${c}= 0`

    return op

  } else if (coeficienteQuadratico === 0 && coeficienteLinear === 1 && c !== 0) {
    op = `x + ${c} = 0`

    return op

  } else {
    op = `${coeficienteLinear}x + ${Math.abs(b)} = 0`

    return op
  }

}

//Funções preechimentos automáticos

function calcularSegundoGrau() {
  if (modoAtual !== 'pratico') return

  const a = Number(cAngular.value)
  const b = Number(cLinear.value)
  const c = Number(termoIndpC.value)

  if(cAngular.value === '' || cLinear.value === '' || termoIndpC.value === '' || a === 0) {
    raizesQuadradas.value = ''
    return
  }

  const delta = b**2 - 4  * a * c

  if(delta < 0) {
    raizesQuadradas.value = 'Sem raízes reais'
    return
  }

  const raizDelta = Math.sqrt(delta)

  const x1 = (-b + raizDelta) / (2 * a)
  const x2 = (-b - raizDelta) / (2 * a)

  raizQuadrada.value = `${xi.toFixed(2)} e ${x2.toFixed(2)}`
}

//Funções de execução ao clicar em calcular

function executarcalculoQuadrada() {
  let cA = Number(cAngular.value)
  let cB = Number(cLinear.value)
  let tInC = Number(termoIndpC.value)
  const resDeltaRaiz = calculoDiscriminante(cA, cB, tInC)

  const divExplicacao = caixaFuncaoQuadrada.querySelector('.explicando')

  divExplicacao.classList.remove('invisivel')

  let deltaAqui

  const spansQuad = caixaFuncaoQuadrada.querySelectorAll('span')

  const posGrafico = caixaFuncaoQuadrada.querySelector('.pos-graf')
  const cortaY = caixaFuncaoQuadrada.querySelector('.eixo-0x')

  alerta(spansQuad)

  //Passos
  const spanOpQuad = caixaFuncaoQuadrada.querySelector('.oper')

  const spanSimpRaiz = caixaFuncaoQuadrada.querySelector('.decomp')
  

  deltaAqui = Number(cB ** 2 - 4 * cA * tInC)

  raizAqui = Math.sqrt(deltaAqui)

  if (cA != 0 && resDeltaRaiz >= 0 && resDeltaRaiz != null) {

    const raizsimplificada = simplificarRaiz(deltaAqui)

    if (raizsimplificada.dentro === 1) {
      spanSimpRaiz.textContent = raizsimplificada.fora
    } else {
      spanSimpRaiz.textContent = `${raizsimplificada.fora} \u221a ${raizsimplificada.dentro}`
    }

    inputResultadoComRaiz()

    raizesQuadradas.value = exibirCalculosQuadrada(cA, cB, tInC)

    spanOpQuad.textContent = montarExpressaoGrau2(cA, cB, tInC)


    posGrafico.textContent =    graficoSegundoGrau(cA, tInC)

    cortaY.textContent = `${tInC}`

    passosCalculoDelta(cA, cB, tInC)

    passosCalculoXises(cA, cB, tInC)

    resultadoComRaiz()


  } else {
    raizesQuadradas.value = 'Não foi encontrada uma raíz real'
  }

}

//evento Quadrática
botaoQuadrada.addEventListener('click', () => {

  caixaFuncaoQuadrada.classList.toggle('invisivel')
  btnVolta.classList.toggle('invisivel')
})

btnCalcQuad.addEventListener('click', executarcalculoQuadrada)


//Eventos de Botão
//Botao apagar f-quad
const btnApagarQuad = caixaFuncaoQuadrada.querySelector('.apagar')
const inputsQuad = caixaFuncaoQuadrada.querySelectorAll('input')

btnApagarQuad.addEventListener('click',() =>{

    const divExplicacao = caixaFuncaoQuadrada.querySelector('.explicando')

    divExplicacao.classList.add('invisivel')

    inputsQuad.forEach( (el) => {
      el.value = ''
    })

    const spansQuad = caixaFuncaoQuadrada.querySelectorAll('span')

    alerta(spansQuad)

    spansQuad.forEach((el) => {
      el.textContent = ''
    });

})

//Eventos modos de uso
btnEstudoQuad.addEventListener('click', () => {
  modos = 'estudando'
  modoUsoEstudo()

})

btnPratQuad.addEventListener('click', () => {
  modos = 'pratico'
  modoUsoPratico()
})