//elementos dom
const rodape = document.querySelector('.ano-atual')


rodape.textContent = new Date().getFullYear()

const itensMenu = document.querySelector('#lista-operacoes')

const containerTutorial = document.querySelector('#tutorial')

const botaofechar = document.querySelector('.oX')

const btnVerTutorial = document.querySelector('#voltar')

const checkTutorial = document.querySelector('#mostrar')


//Funcoes


//Eventos
botaofechar.addEventListener('click', () => {

  containerTutorial.classList.add('invisivel')
})

document.addEventListener('DOMContentLoaded', () => {
  const jaLeu = localStorage.getItem('leuTutorial')

  if (jaLeu === 'sim') {

    containerTutorial.classList.add('invisivel')

    checkTutorial.checked = true
  } else {

    containerTutorial.classList.remove('invisivel')
  }
})

btnVerTutorial.addEventListener('click', () => {

  containerTutorial.classList.remove('invisivel')
})

checkTutorial.addEventListener('change', () => {
  if (checkTutorial.checked) {
    localStorage.setItem('leuTutorial' , 'sim')
  } else {
    localStorage.setItem('leuTutorial' , 'nao')
  }
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