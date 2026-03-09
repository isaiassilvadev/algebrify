//elementos dom
const rodape = document.querySelector('.ano-atual')


rodape.textContent = new Date().getFullYear()

const containerMenu = document.querySelector('#menu')

const botaoMenuLateral = document.querySelector('#menu-btn')

const botaoFecharMenuLateral = document.querySelector('#btn-fecharMenu')


//Eventos

botaoMenuLateral.addEventListener('click', () => {
  containerMenu.classList.toggle('ativo')
})

botaoFecharMenuLateral.addEventListener('click', ()=> {
  containerMenu.classList.remove('ativo')
})
