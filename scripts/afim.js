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

const todosInputsNumeroAfim = caixaFuncaoAfim.querySelectorAll("input[type='number']")

let seuModo = ''

const passoApassoAfim = caixaFuncaoAfim.querySelector('.passo-a-passo')

//separando modos

function noModoAtivoAfim() {

  const botoesCalculo = document.querySelectorAll('button.enviar')

  botoesCalculo.forEach( (el) => {
    el.classList.add('invisivel')
  })

  btnCalcAf.classList.remove('invisivel')

}

function noModoPassivoAfim() {
  const botoesCalculo = document.querySelectorAll('button.enviar')

  passoApassoAfim.classList.add('invisivel')

  btnCalcAf.classList.add('invisivel')
  
}


//Modo de uso
function modoUsoEstudoAfim() {
    modoAtual = 'estudante'

    noModoAtivoAfim()


  passoApassoAfim.classList.remove('invisivel')


}

function modoUsoPraticoAfim() {
    modo = 'pratico'
    noModoPassivoAfim()

   
    passoApassoAfim.classList.add('invisivel')

  todosInputsNumeroAfim.forEach( (el) => {
    el.removeEventListener('input', calcularAfim)

    el.addEventListener('input',calcularAfim)

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
    

    if (termoIndpB.value == '') {
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
  if (seuModo !== 'pratico') return

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

function gradesGraficoAfuim(cx, cy, escala) {
  const caixaGrafico = document.querySelector('#grafico')
  const canvas = document.getElementById('desenho');
  const ctx = canvas.getContext('2d');


  const lX = Math.ceil(canvas.width / (2 * escala))
  const lY = Math.ceil(canvas.height / (2 * escala))

  ctx.strokeStyle = "#ddd"
  ctx.lineWidth = 1

  //linhas verticais
  for (let i = -lX; i <= lX; i++) {
    let xCanvas = cx + i * escala

    ctx.beginPath()
    ctx.moveTo(xCanvas, 0)
    ctx.lineTo(xCanvas, canvas.height)
    ctx.stroke()
  }

  //linhas Horizintais
  for (let j = -lY; j <= lY; j++) {
    let yCanvas = cy - j * escala

    ctx.beginPath()
    ctx.moveTo(0, yCanvas)
    ctx.lineTo(canvas.width, yCanvas)
    ctx.stroke()
  }
}

//Desenhar Grafico
function desenharGraficoAfim(a, b) {
  const caixaGrafico = document.querySelector('#grafico')

  const canvas = document.getElementById('desenho');
  const ctx = canvas.getContext('2d');

  ctx.beginPath()
  ctx.rect(0, 0, canvas.width, canvas.height)
  ctx.clip()

  caixaGrafico.classList.remove('invisivel')


  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const centroX = canvas.width / 2;
  const centroY = canvas.height / 2
  const escala = 20

  gradesGraficoAfuim(centroX, centroY, escala)

  ctx.strokeStyle = "black"
  ctx.lineWidth = 2

  //Eixo X
  ctx.beginPath()
  ctx.moveTo(0, centroY)
  ctx.lineTo(canvas.width, centroY)
  ctx.stroke()

  //Eixo Y
  ctx.beginPath()
  ctx.moveTo(centroX, 0)
  ctx.lineTo(centroX, canvas.height)
  ctx.stroke()

  //Numeros nos eixos
  ctx.font = "12px Arial"
  ctx.fillStyle = "black"

  //Numeros X

  const limiteX = Math.floor(canvas.width / (2 * escala))
  
  for (let i = -limiteX; i <= limiteX; i++) {
    ctx.fillText(i, centroX + i * escala - 5, centroY + 15)
  }

  //Numeros Y

  const limiteY = Math.floor(canvas.height / (2 * escala))

  for (let i = -limiteY; i <= limiteY; i++) {
    ctx.fillText(i, centroX + 5, centroY - i * escala + 4)
  } 

  ctx.strokeStyle = "blue";
  ctx.lineWidth = 2

  ctx.beginPath()

  for (let x = -limiteX; x <= limiteX; x+= 0.1) {
    let y = a * x + b

    let xCanvas = centroX + x * escala

    let yCanvas = centroY - y * escala

    if (x === -limiteX) {
      ctx.moveTo(xCanvas, yCanvas)
    } else {
      ctx.lineTo(xCanvas, yCanvas)
    }
    
  }

  ctx.stroke()

  centralizarVizuGrafico()

}

function centralizarVizuGrafico() {
  const caixaGrafico = document.querySelector('#grafico')

  caixaGrafico.scrollLeft =  (caixaGrafico.scrollWidth - caixaGrafico.clientWidth) / 2;
  caixaGrafico.scrollTop = (caixaGrafico.scrollHeight - caixaGrafico.clientHeight) / 2;
}

function validarCamposAfim(...valores) {
  for (let valor of valores) {
    if (isNaN(valor)) {
      return false;
    }
  }
  return true;
}

//eventos Afim

btnCalcAf.addEventListener('click', () => {
  let a = Number(coeficienteA.value)
  let b = Number(termoIndpB.value)

  if (!validarCamposAfim(a, b)) {
    alert("Por favor, insira valores válidos para os coeficientes.");
    return;
  }

  if (a === 0) {
    alert("O valor de 'a' não pode ser 0.");
    return;
  }

  realizarCalculoAfim()

  desenharGraficoAfim(a, b)
})


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
  modoUsoEstudoAfim()
})

btnPratAfim.addEventListener('click', () => {
  seuModo = 'pratico'
  modoUsoPraticoAfim()
})