const caixaFuncaoQuadrada = document.querySelector('#f-quadrada')
const divModosQuad = document.querySelector('.modo-quad')

const cAngular = document.querySelector('#coef-ang')
const cLinear = document.querySelector('#coef-lin')
const termoIndpC = document.querySelector('#c')
const botaoQuadrada = document.querySelector('#fun-quad')
const inputRaizesQuadradas = document.querySelector('#resulta-quad')

const btnDeVoltar = document.querySelector('#btn-menu')
const BtnQuad = caixaFuncaoQuadrada.querySelector('.enviar')

const btnEstudoQuad = divModosQuad.querySelector('#estudo')
const btnPratQuad = divModosQuad.querySelector('#pratico')

const resultadoSimplificado = caixaFuncaoQuadrada.querySelector('#resulta-quad-com-raiz')
const labelResultadoComRaiz = caixaFuncaoQuadrada.querySelector('#result-raiz')

const todosInputsNumeroQuad = caixaFuncaoQuadrada.querySelectorAll("input[type='number']")

let modos = ''

const passoApassoQuad = caixaFuncaoQuadrada.querySelector('.passo-a-passo')

//separando modos

function noModoAtivoQuad() {

  const botoesCalculo = document.querySelectorAll('button.enviar')

  botoesCalculo.forEach( (el) => {
    el.classList.add('invisivel')
  })

  BtnQuad.classList.remove('invisivel')

  resultadoSimplificado.classList.remove('invisivel')
  labelResultadoComRaiz.classList.remove('invisivel')

}

function noModoPassivoQuad() {
  const botoesCalculo = document.querySelectorAll('button.enviar')

  passoApassoQuad.classList.add('invisivel')

  BtnQuad.classList.add('invisivel')

  resultadoSimplificado.classList.add('invisivel')
  labelResultadoComRaiz.classList.add('invisivel')
  
}


//Modo de uso
function modoUsoEstudoQuad() {
    modos = 'estudante'

    noModoAtivoQuad()


  passoApassoQuad.classList.remove('invisivel')


}

function modoUsoPraticoQuad() {
    modos = 'pratico'
    noModoPassivoQuad()

   
    passoApassoQuad.classList.add('invisivel')

  todosInputsNumeroQuad.forEach( (el) => {
    el.removeEventListener('input', calcularSegundoGrau)

    el.addEventListener('input',calcularSegundoGrau)

  })
}

//Funções preechimentos automáticos

function calcularSegundoGrau() {
  if (modos !== 'pratico') return

  const a = Number(cAngular.value)
  const b = Number(cLinear.value)
  const c = Number(termoIndpC.value)
  let x

  if(cAngular.value === '' || cLinear.value === '' || termoIndpC.value === '' || a === 0) {
    inputRaizesQuadradas.value = ''
    return
  }

  const delta = b**2 - 4  * a * c

  if(delta < 0) {
    inputRaizesQuadradas.value = 'Sem raízes reais'
    return
  }


  const raizDelta = Math.sqrt(delta)

  const x1 = (-b + raizDelta) / (2 * a)
  const x2 = (-b - raizDelta) / (2 * a)

    inputRaizesQuadradas.value = `${x1.toFixed(2)} e ${x2.toFixed(2)}`
}

function montarExpressaoGrau2(a, b, c) {

  let parteA = (a === 1) ? "x²" : `${a}x²`

  let parteB = ""
  if (b > 0) {
    parteB = ` + ${b}x`
  } else if (b < 0) {
    parteB = ` - ${Math.abs(b)}x`
  }

  let parteC = ""
  if (c > 0) {
    parteC = ` + ${c}`
  } else if (c < 0) {
    parteC = ` - ${Math.abs(c)}`
  }

  return `${parteA}${parteB}${parteC} = 0`
}

function calculoDasRaizes() {
    let a = Number(cAngular.value)
    let b = Number(cLinear.value)
    let c = Number(termoIndpC.value)

    let delta = b ** 2 - 4 * a * c;
    let raizDelta = Math.sqrt(delta);

    let X1 = (-b + raizDelta) / (2 * a);
    let X2 = (-b - raizDelta) / (2 * a);

    document.getElementById("calcX1").textContent = `x1 = (-${b} + ${raizDelta.toFixed(2)}) / (2·${a}) ≈ ${X1.toFixed(2)}`;


    if (delta !== 0) {
      document.getElementById("calcX2").textContent = ` x2 = (-${b} - ${raizDelta.toFixed(2)}) / (2·${a}) ≈ ${X2.toFixed(2)}`;

      inputRaizesQuadradas.value = `${X1.toFixed(2)} e ${X2.toFixed(2)}`
    } else {
      document.getElementById("calcX2").textContent = "";
    }
}

function montarRaizesSimplificadas(a, b, c) {

  let delta = b ** 2 - 4 * a * c

  if (delta < 0) {
    return "Não existem raízes reais"
  }

  let d = 2 * a
  let raiz = simplificarRaiz(delta)

  // 🔹 Caso Δ = 0
  if (delta === 0) {
    return `${-b / d}`
  }

  let parteInteira = -b / d
  let parteRaiz = raiz.fora / d

  // 🔹 Se a raiz é exata
  if (raiz.dentro === 1) {

    let x1 = (-b + raiz.fora) / d
    let x2 = (-b - raiz.fora) / d

    return `${x1} e ${x2}`
  }

  // 🔹 Raiz não exata

  // Se ambos forem divisíveis
  if (Number.isInteger(parteInteira) && Number.isInteger(parteRaiz)) {

    if (parteRaiz === 1) {
      return `${parteInteira} + √${raiz.dentro} e ${parteInteira} - √${raiz.dentro}`
    }

    return `${parteInteira} + ${parteRaiz}√${raiz.dentro} e ${parteInteira} - ${parteRaiz}√${raiz.dentro}`
  }

  // 🔹 Caso não seja divisível → mantém fração
  return `(${ -b } + ${raiz.fora}√${raiz.dentro}) / ${d} 
e 
(${ -b } - ${raiz.fora}√${raiz.dentro}) / ${d}`
}

function resultadoComRaiz() {

  let a = Number(cAngular.value)
  let b = Number(cLinear.value)
  let c = Number(termoIndpC.value)

  let delta = b ** 2 - 4 * a * c


  const pDelta = document.getElementById("deltaAprox")
  const subDelta = document.querySelector("#subDelta")
  const pRaizDelta = document.getElementById("raizDeltaAprox")
  const pRaizes = document.getElementById("raizes")


  // Limpa antes de atualizar (evita congelamento)
  pDelta.textContent = ""
  pRaizDelta.textContent = ""
  subDelta.textContent = ""
  pRaizes.textContent = ""

  if (delta < 0) {
    pDelta.textContent = `Δ = ${delta}`
    pRaizDelta.textContent = "Não existem raízes reais."
    return
  }

  let resultado = simplificarRaiz(delta)

  pDelta.textContent = `Δ = ${b}² - 4·${a}·${c} =`
  subDelta.textContent = `Δ = ${b**2} - ${4*a*c} = ${delta}`

  if (delta === 0) {

  let raizUnica = -b / (2*  a)

  pRaizDelta.textContent = `√Δ = √${delta} = 0`

  pRaizes.textContent =
    `Raiz única: X = ${-b} / ${2*a} = ${raizUnica}`

    resultadoSimplificado.value = raizUnica

    return
  }

  // 🔹 CASO RAIZ EXATA
  if (resultado.dentro === 1) {

    let raiz = resultado.fora
    let x1 = (-b + raiz) / (2 * a)
    let x2 = (-b - raiz) / (2 * a)

    pRaizDelta.textContent = `√Δ = ${raiz}`

    if (delta === 0) {
      pRaizes.textContent = `Raiz única: X = ${x1}`
      resultadoSimplificado.value = x1
    } else {
      pRaizes.textContent =
        `X1 = ${x1}  |  X2 = ${x2}`
      
      resultadoSimplificado.value = `${x1} e ${x2}`
    }

  }

  // 🔹 CASO RAIZ NÃO EXATA (tipo 6√2)
  else {

    let mult2a = 2 * a
    let parteInteira = -b / mult2a
    let parteRaiz = resultado.fora / mult2a

    pRaizDelta.textContent =
      `√Δ = ${resultado.fora}√${resultado.dentro}`

    if (resultado.dentro !== 1) {

     let fatorQuadrado = resultado.fora * resultado.fora
    
      pRaizDelta.innerHTML =
    `√${delta} = √(${fatorQuadrado} × ${resultado.dentro}) <br>
     √${delta} = ${resultado.fora}√${resultado.dentro}`
     
   }

   parteInteira = -b / (2*a)
   parteRaiz = resultado.fora / (2*a)

   if (-b % (2*a) === 0 && resultado.fora % (2*a) === 0 ) {
   pRaizes.innerHTML =
  `x₁ = ${parteInteira} + ${parteRaiz}√${resultado.dentro} <br>
   x₂ = ${parteInteira} - ${parteRaiz}√${resultado.dentro}`

   resultadoSimplificado.value = `${parteInteira} + ${parteRaiz}√${resultado.dentro} e ${parteInteira} - ${parteRaiz}√${resultado.dentro}`
  } else if (-b % (2*a) !== 0 || resultado.fora % (2*a) !== 0) {
    pRaizes.innerHTML =
    `x₁ = (${parteInteira} + ${resultado.fora}√${resultado.dentro}) / ${2*a} <br>
     x₂ = (${parteInteira} - ${resultado.fora}√${resultado.dentro}) / ${2*a}`

     resultadoSimplificado.value = `(${parteInteira} + ${resultado.fora}√${resultado.dentro}) / ${2*a} e (${parteInteira} - ${resultado.fora}√${resultado.dentro}) / ${2*a}`
  } else {
    pRaizes.innerHTML = `x₁ = (${ -b } + ${resultado.fora}√${resultado.dentro}) / ${2*a} <br>
     x₂ = (${-b} - ${resultado.fora}√${resultado.dentro}) / ${2*a}`

     resultadoSimplificado.value = `(${ -b } + ${resultado.fora}√${resultado.dentro}) / ${2*a} e (${ -b } - ${resultado.fora}√${resultado.dentro}) / ${2*a}`
    }
  }

}

function simplificarRaiz(delta) {

  if (delta < 0) return null

  let n = delta
  let divisor = 2
  let fatores = {}

  // Decomposição em fatores primos
  while (n > 1) {
    if (n % divisor === 0) {
      fatores[divisor] = (fatores[divisor] || 0) + 1
      n /= divisor
    } else {
      divisor++
    }
  }

  let fora = 1
  let dentro = 1

  for (let fator in fatores) {
    fator = Number(fator) // importante: chave vira string

    let expoente = fatores[fator]

    let pares = Math.floor(expoente / 2)
    let resto = expoente % 2

    if (pares > 0) {
      fora *= fator ** pares
    }

    if (resto > 0) {
      dentro *= fator
    }
  }

  return {
    fora,
    dentro,
  }
}

function atualizarExplicacao(a, b, c) {
    // Limpar textos antigos
    document.getElementById("elementos").textContent = "";
    document.getElementById("formulaBhaskara").textContent = "";
    document.getElementById("calcDelta").textContent = "";
    document.getElementById("raizDelta").textContent = "";
    document.getElementById("calcX1").textContent = "";
    document.getElementById("calcX2").textContent = "";

    // Fórmula
  const expressao = document.querySelector(".oper")  
  
  expressao.textContent = montarExpressaoGrau2(a, b, c)

    document.getElementById("elementos").textContent = `f(x) = ${montarExpressaoGrau2(a, b, c)}`;

    document.getElementById("formulaBhaskara").textContent = "X = (-b ± √Δ) / (2·a)";

    // Cálculo do Delta
    let delta = b*b - 4*a*c;
    document.getElementById("calcDelta").textContent = `Δ = (${b})² - 4·(${a})·(${c}) = ${delta}`;

    // Caso delta negativo
    if (delta < 0) {
        document.getElementById("raizDelta").textContent = "Δ < 0 → raízes imaginárias";
        document.getElementById("calcX1").textContent = "";
        document.getElementById("calcX2").textContent = "";
        document.getElementById("raizes").textContent = "Não há raízes reais.";
        inputRaizesQuadradas.value = "Sem raízes reais"
        return;
    }

    // Raiz do Delta
    let raizDelta = Math.sqrt(delta);
    document.getElementById("raizDelta").textContent = `√Δ = √${delta} ≈ ${raizDelta.toFixed(2)}`;
   

    // Cálculo das raízes
    calculoDasRaizes()

    // Resultado aproximado
    resultadoComRaiz()

    graficoSegundoGrau(a, c)
}

//Montar Gráfico
function graficoSegundoGrau(a, c) {

  const grafico = document.getElementById("grafico-funcao")
  grafico.textContent = ""


  let texto = ''


  if (a < 0) {
       texto += `O valor de <strong>a (${a})</strong> é negativo, então a parábola fica "triste" (voltada para baixo).<br>`
  } else {
      texto += `O valor de <strong>a (${a})</strong> é positivo, então a parábola fica "feliz" (voltada para cima).<br>`
    }

    texto += `Ela toca o eixo vertical no ponto <strong>(0, ${c})</strong>.<br>
    <i>Dica: X₁ e X₂ são onde a curva toca o eixo X.</i>`

    grafico.innerHTML = texto

}


//Funções de execução ao clicar em calcular

function validarCampos(...valores) {
  for (let valor of valores) {
    if (isNaN(valor)) {
      return false;
    }
  }
  return true;
}


// Listener do botão
BtnQuad.addEventListener("click",() => {

    let a = parseFloat(cAngular.value);
    let b = parseFloat(cLinear.value);
    let c = parseFloat(termoIndpC.value);

    if (!validarCampos(a, b, c)) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    if (a === 0) {
      alert("O valor de 'a' não pode ser 0.");
      return;
    }

    atualizarExplicacao(a, b, c);


    const divExplicacao = caixaFuncaoQuadrada.querySelector('#explicacaoDelta')

    divExplicacao.classList.remove('invisivel')

});

//Eventos de Botão
//Botao apagar f-quad
const btnApagarQuad = caixaFuncaoQuadrada.querySelector('.apagar')
const inputsQuad = caixaFuncaoQuadrada.querySelectorAll('input')

btnApagarQuad.addEventListener('click',() =>{

    const divExplicacao = caixaFuncaoQuadrada.querySelector('#explicacaoDelta')

    divExplicacao.classList.add('invisivel')

    inputsQuad.forEach( (el) => {
      el.value = ''
    })

    const spansQuad = caixaFuncaoQuadrada.querySelectorAll('span')

    spansQuad.forEach((el) => {
      el.textContent = ''
    });

})

//Eventos modos de uso
btnEstudoQuad.addEventListener('click', () => {
  modos = 'estudando'
  modoUsoEstudoQuad()

})

btnPratQuad.addEventListener('click', () => {
  modos = 'pratico'
  modoUsoPraticoQuad()
})