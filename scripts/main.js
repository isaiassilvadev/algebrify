//elementos dom
const rodape = document.querySelector('.ano-atual')


rodape.textContent = new Date().getFullYear()

const containerMenu = document.querySelector('#menu')

const botaoMenuLateral = document.querySelector('#menu-btn')

const botaoFecharMenuLateral = document.querySelector('#btn-fecharMenu')


//Funcoes


//Eventos

botaoMenuLateral.addEventListener('click', () => {
  containerMenu.classList.toggle('ativo')
})

botaoFecharMenuLateral.addEventListener('click', ()=> {
  containerMenu.classList.remove('ativo')
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