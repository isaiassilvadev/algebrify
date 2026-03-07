const containerTutorial = document.querySelector('#tutorial')

const botaofechar = containerTutorial.querySelector('.oX')

const btnVerTutorial = document.querySelector('#btn-tutorial')

const checkTutorial = containerTutorial.querySelector('#mostrar')

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
  
    localStorage.setItem('leuTutorial' , checkTutorial.checked ? 'sim' : 'nao')
  
})