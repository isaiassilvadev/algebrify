const containerTutorial = document.querySelector('#tutorial')

const botaofechar = containerTutorial.querySelector('.oX')

const btnVerTutorial = document.querySelector('#btn-tutorial')

const footerIndex = document.querySelector('#rodape-main')

const checkTutorial = containerTutorial.querySelector('#mostrar')

const overlay = document.querySelector('#overlay')

botaofechar.addEventListener('click', () => {

  containerTutorial.classList.add('invisivel')

  overlay.classList.add('invisivel')

  footerIndex.classList.remove('invisivel')
})

document.addEventListener('DOMContentLoaded', () => {
  const jaLeu = localStorage.getItem('leuTutorial')

  if (jaLeu === 'sim') {

    containerTutorial.classList.add('invisivel')
    overlay.classList.add('invisivel')
    footerIndex.overlay.classList.remove('invisivel')

    checkTutorial.checked = true
  } else {

    containerTutorial.classList.remove('invisivel')
    overlay.classList.remove('invisivel')
    footerIndex.classList.add('invisivel')
  }
})

btnVerTutorial.addEventListener('click', () => {

  containerTutorial.classList.remove('invisivel')
  overlay.classList.remove('invisivel')
  footerIndex.classList.add('invisivel')
})

checkTutorial.addEventListener('change', () => {
  
    localStorage.setItem('leuTutorial' , checkTutorial.checked ? 'sim' : 'nao')
  
})
