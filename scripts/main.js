//elementos dom
const btnVoltar = document.querySelector('#btn-menu')
const tituloApresentacao = document.querySelector('#boas-vindas h2')
const paragrafoApresentacao = document.querySelector('.apresentacao')

const btnEstudo = document.querySelector('#estudo')
const btnPrat = document.querySelector('#pratico')

const divInfos = document.querySelector('.infos')

const dataSpan = document.querySelector('.ano-atual')

const anoAtual = new Date().getFullYear()

dataSpan.textContent = anoAtual

//Conjunto de Elementos

const caixas = document.querySelectorAll('section')
const todosInputs = document.querySelectorAll('input')
const listaMenu = document.querySelectorAll('#lista-operacoes li')

const passoAPasso = document.querySelectorAll('.passo-a-passo')

const todosOsSpans = document.querySelectorAll('span')

const todoInputsNumero = document.querySelectorAll('input[type="number"]')

//Modo e resultado alternativo

const pModo = document.querySelector('.modo-selecionado')

//Botoes de claculo

let modoAtual = ''

const resultSimplesRaiz = document.querySelector('#resulta-quad-com-raiz')

const labelSimplesRaiz = document.querySelector('#result-raiz')

//separando modos

function noModoAtivo() {

  const botoesCalculo = document.querySelectorAll('button.enviar')

  botoesCalculo.forEach( (el) => {
    el.classList.remove('invisivel')
  })

}

function noModoPassivo() {
  const botoesCalculo = document.querySelectorAll('button.enviar')

  botoesCalculo.forEach( (el) => {
    el.classList.add('invisivel')
  })
 
}


//Modo de uso
function modoUsoEstudo() {
    modoAtual = 'estudante'

    noModoAtivo()

    pModo.textContent = 'Você está no modo estudante'

  passoAPasso.forEach( (el) => {
    el.classList.remove('invisivel')
  })

}

function modoUsoPratico() {
    modoAtual = 'pratico'
    noModoPassivo()

    pModo.textContent = 'Você está no modo Calculadora'
   
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

//Eventos

//modos de uso
btnEstudo.addEventListener('click', () => {
  modoAtual = 'estudando'
  modoUsoEstudo()

  //const spansQuad = caixaFuncaoQuadrada.querySelectorAll('span')

 // alerta(spansQuad)
})

btnPrat.addEventListener('click', () => {
  modoAtual = 'pratico'
  modoUsoPratico()
})

//voltar ao inicio
btnVoltar.addEventListener('click', () => {

  caixas.forEach((el) => {
    el.classList.add('invisivel')
  });

  for(let i = 0; i < todosInputs.length; i++) {
    todosInputs[i].value = ''
  }

  todosOsSpans.forEach((el) => {
    el.textContent = ''
  });

  divInfos.classList.remove('invisivel')
  resultSimplesRaiz.classList.add('invisivel')

  //const spansQuad = caixaFuncaoQuadrada.querySelectorAll('span')

  //alerta(spansQuad)
})


//porcentagem

// 10 / 100 = 0,1 --> 100 x 0,1 = 10

//valorPorcente = (percente/100) * valor

//Função Afim

// ax + b = 0

//Função quadrática

//ax² + bx + c = 0

//delta = b^2 - 4 x a x c

//x1 = -b x a / 2 x a
//x2 = +b x a / 2 x a