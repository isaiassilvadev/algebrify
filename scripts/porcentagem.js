//elementos dom
const caixaPorcento = document.querySelector('#porcento')
const divBotoesModo = document.querySelector('.modo-pct')

const por100 = caixaPorcento.querySelector('#por100')
const deValor = caixaPorcento.querySelector('#num-valor')
const botaoPorCem = document.querySelector('#por-cem')
const resultado = caixaPorcento.querySelector('#resulta-pct')
const btnCalcPc = document.querySelector('#porcento .enviar')

const btnEstudoPorc = divBotoesModo.querySelector('#estudo')
const btnPratPorc = divBotoesModo.querySelector('#pratico')

const botaoVoltar = document.querySelector('#btn-menu')

const todosInputsNumeroPorc = caixaPorcento.querySelectorAll("input[type='number']")

let modoUso = ''

const passoApassoPorc = caixaPorcento.querySelector('.passo-a-passo')

//separando modos

function noModoAtivoPorc() {

  btnCalcPc.classList.remove('invisivel')

}

function noModoPassivoPorc() {

  btnCalcPc.classList.add('invisivel')
 
}


//Modo de uso
function modoUsoEstudoPorc() {
    modoUso = 'estudante'

    noModoAtivoPorc()

    passoApassoPorc.classList.remove('invisivel')


}

function modoUsoPraticoPorc() {
    modoUso = 'pratico'
    noModoPassivoPorc()
   

    passoApassoPorc.classList.add('invisivel')


  todosInputsNumeroPorc.forEach( (el) => {
    el.removeEventListener('input', calculoPorCentagem)

    el.addEventListener('input', calculoPorCentagem)

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

//função calcular porcentagem
function calculoPorCento() {
  let parteDeCem = Number(por100.value)
  let todo = Number(deValor.value)

  return (parteDeCem/100) * todo

}

//passo-a-passo - porcentagem
function passoPorcentOpe() {
  let parteDeCem = Number(por100.value)
  let todo = Number(deValor.value)
  let resta = (parteDeCem / 100) * todo

  const spanOp = caixaPorcento.querySelector('.passos-pct .oper')

  spanOp.textContent = `(${parteDeCem} / 100) x ${todo} = ${resta}`

}


//Simplificando
function verificarSimplificacao() {
  let parteDeCem = Number(por100.value)
  let todo = Number(deValor.value)
  let simplesPorc
  let simplificador

    const spanSimples = caixaPorcento.querySelector('.passos-pct .simples')

    const spanContaSimples = caixaPorcento.querySelector('.passos-pct .conta-simples')

    const spanNumFrac = caixaPorcento.querySelector('.passos-pct .termo-c')
    const spanDenomFrac = caixaPorcento.querySelector('.passos-pct .termo-b')
    const spanSimplificadorFrac = caixaPorcento.querySelector('.passos-pct .divisor')

  const contSimp = {
    numerador: 0,
    denominador: 0,
  }

   if(parteDeCem % 50 === 0) {
      contSimp.numerador = parteDeCem/50
    contSimp.denominador = 2

    simplificador = 50

    simplesPorc = `${parteDeCem/50} / ${100/50}`

   } else if(parteDeCem % 25 === 0) {
   
   contSimp.numerador = parteDeCem/25
    contSimp.denominador = 4

    simplificador = 25

    simplesPorc = `${parteDeCem/25} / ${100/25}`
   } else if(parteDeCem % 20 === 0) {
      contSimp.numerador = parteDeCem/20
      contSimp.denominador = 5

      simplificador = 20

      simplesPorc = `${parteDeCem/20} / ${100/20}`
   } else if(parteDeCem % 10 === 0) {
    contSimp.numerador = parteDeCem/10
    contSimp.denominador = 10

    simplificador = 10

    simplesPorc = `${parteDeCem/10} / ${100/10}`
  } else if (parteDeCem % 5 === 0) {
    contSimp.numerador = parteDeCem/5
    contSimp.denominador = 20

    simplificador = 5

    simplesPorc = `${parteDeCem/5} / ${100/5}`
  }else if (parteDeCem %  4 === 0) {
    contSimp.numerador = parteDeCem/4
    contSimp.denominador = 25

    simplificador = 4

    simplesPorc = `${parteDeCem/4} / ${100/4}`
  }else if (parteDeCem %  2 === 0) {
    contSimp.numerador = parteDeCem/2
    contSimp.denominador = 50

    simplificador = 2

    simplesPorc = `${parteDeCem/2} / ${100/2}`
  }

   //span simplificações

  spanSimples.textContent = `${parteDeCem}/100 => ${simplesPorc}`

   spanContaSimples.textContent = `${contSimp.numerador}/${contSimp.denominador} x ${todo} => ${contSimp.numerador * todo}/${contSimp.denominador} = ${((parteDeCem/10)/10) * todo}`

   spanNumFrac.textContent = parteDeCem
   spanDenomFrac.textContent = 100
   spanSimplificadorFrac.textContent = simplificador
}

function decimalPorcentagem() {
    let parteDeCem = Number(por100.value)
    let todo = Number(deValor.value)

    let valDecimal = parteDeCem / 100
    let resta

    const spanPctg = caixaPorcento.querySelector('.passos-pct .pctg')
    const spanConv = caixaPorcento.querySelector('.passos-pct .conv')
    const spanTotal = caixaPorcento.querySelector('.passos-pct .total')
    const spanDecimal = caixaPorcento.querySelector('.passos-pct .decimal')
    const spanPorCtg = caixaPorcento.querySelector('.passos-pct .porctg')
    const spanMult = caixaPorcento.querySelector('.passos-pct .mult')
    const spanFatia = caixaPorcento.querySelector('.passos-pct .fatia')

    resultado.value = calculoPorCento(parteDeCem, todo)

    resta = Number(resultado.value)

    spanPctg.textContent = `${parteDeCem}%`
    spanConv.textContent = `${parteDeCem}/100 = ${parteDeCem/100}`

    spanTotal.textContent = todo
    spanDecimal.textContent = valDecimal

    spanPorCtg.textContent = `${parteDeCem}%`

    spanMult.textContent = `${todo} x ${parteDeCem/100} = ${resta}`

    spanFatia.textContent = valDecimal

}

function fracaoPorcentagem() {
    let parteDeCem = Number(por100.value)
    let todo = Number(deValor.value)
    let resta = (parteDeCem/100) * todo

    const spanMultFrac = caixaPorcento.querySelector('.passos-pct .mult-frac')
    const spanParaFrac = caixaPorcento.querySelector('.passos-pct .mult-frac-passo')
    const spanDivFrac = caixaPorcento.querySelector('.passos-pct .div-frac')


    spanMultFrac.textContent = `${parteDeCem}% é igual a parte ${parteDeCem}/100 do valor ${todo}`

    spanParaFrac.textContent = `${parteDeCem} x ${todo}  e 100 x 1 resultando em uma única fração de base 100 -> ${parteDeCem*todo}/100`

    spanDivFrac.textContent = `${parteDeCem*todo}/100 = ${(parteDeCem*todo)/100}`

}

function exibindoSimplicacao() {
    let parteDeCem = Number(por100.value)
    let todo = Number(deValor.value)
    let simplesPorc

    const spanSimples = caixaPorcento.querySelector('.passos-pct .simples')

    const spanContaSimples = caixaPorcento.querySelector('.passos-pct .conta-simples')

     //span simplificações
    simplesPorc = verificarSimplificacao(parteDeCem, 100)

    spanSimples.textContent = `${parteDeCem}/100 => ${simplesPorc}`

   spanContaSimples.textContent = `${parteDeCem/100} x ${todo} = ${((parteDeCem/10)/10) * todo}`
}

//Funções de execução ao clicar em calcular

function executarCalculoPorcentagem() {

  let resultado = calculoPorCento()

  const resultadoPorC = caixaPorcento.querySelector('#resulta-pct')

  const divExplicacao = caixaPorcento.querySelector('.explicando')

  divExplicacao.classList.remove('invisivel')

  resultadoPorC.value = resultado

//passo-a-passo

  passoPorcentOpe()

  decimalPorcentagem()

  fracaoPorcentagem()

  verificarSimplificacao()
  
  //exibindoSimplicacao()

}

//calculo automatico
function realizarCalculo() {
  if(!caixaPorcento.classList.contains('invisivel')) {
    calculoPorCentagem()
  }
}

//Função preechimento automático
function calculoPorCentagem() {

  if (modoUso !== 'pratico') return

  const porcento = Number(por100.value)
  const valor = Number(deValor.value)

  if(por100.value === '' || deValor.value === '') {
    resultado.value = ''
    return
  }

  resultado.value = ((porcento / 100) * valor).toFixed(2)

}


//eventos porcentagem

botaoPorCem.addEventListener('click', () => {
  caixaPorcento.classList.toggle('invisivel')
  botaoVoltar.classList.toggle('invisivel')

})

btnCalcPc.addEventListener('click', () => {
  let parteDeCem = Number(por100.value) 
  let todo = Number(deValor.value) 


  if (todo <= 0) {
    alert('O valor total deve ser maior que zero')
    return
  }

  if (parteDeCem < 0 ) {
    alert('O valor da porcentagem não pode ser negativo')
    return
  }

  executarCalculoPorcentagem() 

})

//Botao apagar porc
const btnApagarPorc = caixaPorcento.querySelector('.apagar')
const inputsPorc = caixaPorcento.querySelectorAll('input')

btnApagarPorc.addEventListener('click',() =>{

    const spansPorc = caixaPorcento.querySelectorAll('span')

    const divExplicacao = caixaPorcento.querySelector('.explicando')

    divExplicacao.classList.add('invisivel')
    

    inputsPorc.forEach( (el) => {
      el.value = ''
    })

    spansPorc.forEach((el) => {
       el.textContent = ''
    });

})

// Eventos dos modos de uso

btnEstudoPorc.addEventListener('click', () => {
  modoUso = 'estudando'
  modoUsoEstudoPorc()

})

btnPratPorc.addEventListener('click', () => {
  modoUso = 'pratico'
  modoUsoPraticoPorc()
})
