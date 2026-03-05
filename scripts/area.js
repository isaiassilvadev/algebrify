const containerValores = document.querySelector('.entrada-valores-area');
const selecionaFigura = document.querySelector('#figura');

const containerArea = document.querySelector('#cont-area');

const passoApassoArea = containerArea.querySelector('.passo-a-passo');

const btnCalcular = containerArea.querySelector('#calcular');
const btnApagar = containerArea.querySelector('#apagar');

const conatainerModos = document.querySelector('.modos-area');

const btnEstudoArea = conatainerModos.querySelector('#estudo');
const btnPratArea = conatainerModos.querySelector('#pratico');

const todosInputsNumeroArea = containerArea.querySelectorAll('input[type="number"]');


let modoDeUso = ''

//separando modos

function noModoAtivoArea() {

  btnCalcular.classList.remove('invisivel')

}

function noModoPassivoArea() {

  btnCalcular.classList.add('invisivel')
 
}


//Modo de uso
function modoUsoEstudoArea() {
    modoDeUso = 'estudante'

    noModoAtivoArea()

    passoApassoArea.classList.remove('invisivel')


}

function modoUsoPraticoArea() {
    modoDeUso = 'pratico'

    noModoPassivoArea()
   
    passoApassoArea.classList.add('invisivel')

}

//Criando os inputs para o usuário inserir os valores
function criarInputs(figura) {
  const inputBase = document.createElement('input');
  const labelBase = document.createElement('label'); 
  const inputAltura = document.createElement('input');
  const labelAltura = document.createElement('label');
  const inputArea = document.createElement('input')
  const labelArea = document.createElement('label');
  let inputBaseMaior = null
  let labelBaseMaior = null

  inputBase.type = 'number';
  inputAltura.type = 'number';
  inputArea.type = 'text';

  //classes separadas
  inputBase.classList.add('base')
  inputAltura.classList.add('altura')

  //classes de estilo
  labelBase.classList.add('label-valor');
  labelAltura.classList.add('label-valor');
  labelArea.classList.add('label-valor');
  inputBase.classList.add('input-valor');
  inputAltura.classList.add('input-valor');
  inputArea.classList.add('input-area');

  //Identificador Input area
  inputArea.id = 'input-area';

  labelBase.textContent = 'Base:';
  labelAltura.textContent = 'Altura:';
  labelArea.textContent = 'Área:';
//montando os inputs na tela

      if (figura === 'quadrado') {

        labelBase.textContent = 'Lado do Quadrado:';
        labelArea.textContent = 'Área do Quadrado:';

      containerValores.appendChild(labelBase);
      containerValores.appendChild(inputBase);

      containerValores.appendChild(labelArea);
      containerValores.appendChild(inputArea);
  
      
    } else if (figura === 'retangulo') {  

      labelBase.textContent = 'Base do Retângulo:';
      labelAltura.textContent = 'Altura do Retângulo:';
      labelArea.textContent = 'Área do Retângulo:';

      containerValores.appendChild(labelBase);
      containerValores.appendChild(inputBase);

      containerValores.appendChild(labelAltura);
      containerValores.appendChild(inputAltura);

      containerValores.appendChild(labelArea);
      containerValores.appendChild(inputArea);


    } else if (figura === 'triangulo') {
      labelBase.textContent = 'Base do Triângulo:';
      labelAltura.textContent = 'Altura do Triângulo:';


      containerValores.appendChild(labelBase);
      containerValores.appendChild(inputBase);

      containerValores.appendChild(labelAltura);
      containerValores.appendChild(inputAltura);

      containerValores.appendChild(labelArea);
      containerValores.appendChild(inputArea);

    } else if (figura === 'circulo') {
      labelBase.textContent = 'Raio do Círculo:';
      labelArea.textContent = 'Área do Círculo:';

      containerValores.appendChild(labelBase);
      containerValores.appendChild(inputBase);

      containerValores.appendChild(labelArea);
      containerValores.appendChild(inputArea);


    } else if (figura === 'losango') {
      labelBase.textContent = 'Diagonal Maior do Losango:';
      labelAltura.textContent = 'Diagonal Menor do Losango:'; 
      labelArea.textContent = 'Área do Losango:';

      containerValores.appendChild(labelBase);
      containerValores.appendChild(inputBase);
      
      containerValores.appendChild(labelAltura);
      containerValores.appendChild(inputAltura);

      containerValores.appendChild(labelArea);
      containerValores.appendChild(inputArea);

    } else if (figura === 'trapezio') {
      labelBase.textContent = 'Base Maior do Trapézio:';
      labelAltura.textContent = 'Altura do Trapézio:';
      labelArea.textContent = 'Área do Trapézio:';

      inputBaseMaior = document.createElement('input');
      labelBaseMaior = document.createElement('label');

      inputBaseMaior.type = 'number';
      labelBaseMaior.textContent = 'Base Maior do Trapézio:';

      //classes de estilo
      labelBaseMaior.classList.add('label-valor');
      inputBaseMaior.classList.add('input-valor');

      inputBaseMaior.classList.add('base-trapezio')

      containerValores.appendChild(labelBaseMaior);
      containerValores.appendChild(inputBaseMaior);

      containerValores.appendChild(labelBase);
      containerValores.appendChild(inputBase);

      containerValores.appendChild(labelAltura);
      containerValores.appendChild(inputAltura);

      containerValores.appendChild(labelArea);
      containerValores.appendChild(inputArea);

    } else if (figura === 'escolher-figura') {
      containerValores.innerHTML = '';
      
      if (containerValores.classList.contains('borda-area')) {
        containerValores.classList.remove('borda-area');
      }
    }

  const calcularAut = () => {

    const base = Number(inputBase.value)
    const altura = Number(inputAltura?.value)

    if (figura === 'circulo') {
      inputArea.value = (Math.PI * base * base).toFixed(2)

    } else if (figura === 'quadrado') {
      inputArea.value = base * base

    } else if (figura === 'retangulo') {
      inputArea.value = base * altura

    } else if (figura === 'triangulo') {
      inputArea.value = (base * altura) / 2

    } else if (figura === 'losango') {
      inputArea.value = (base * altura) / 2

    } else if(figura === 'trapezio') {
      const base2 = Number(inputBaseMaior.value)
      
      inputArea.value = ((base + base2) * altura) / 2

    }
  }

    if(modoDeUso === 'pratico') {
      inputBase.addEventListener('input', calcularAut)
      inputAltura.addEventListener('input', calcularAut)

      const inputTrap = document.querySelector('.base-trapezio').value

      inputTrap.addEventListener('input', calcularAut)

    }
  
    if (figura !== 'escolher-figura') {

       containerValores.classList.add('borda-area');
    }

}

function calcularArea(figura, ...valores) {

  if (figura === 'retangulo') {
    const [base, altura] = valores;
    return base * altura;

  } else if (figura === 'quadrado') {
    const [lado] = valores;
    return lado * lado;

  } else if (figura === 'triangulo') {
    const [base, altura] = valores;
    return (base * altura) / 2;

  } else if (figura === 'circulo') {
    const [raio] = valores;
    const areaCirc = Math.PI * Math.pow(raio, 2);
    return Number(areaCirc.toFixed(2));

  } else if (figura === 'losango') {
    const [diagonalMaior, diagonalMenor] = valores;
    return (diagonalMaior * diagonalMenor) / 2;

  } else if (figura === 'trapezio') {
    const [baseMaior, baseMenor, altura] = valores;
    return ((baseMaior + baseMenor) * altura) / 2;
  }
}

console.log(selecionaFigura)
console.log(selecionaFigura.value)
console.log(selecionaFigura.length)


function calculoAreaAut() {

  console.log('olá') 

  console.log('fim')
}

function preencherPassoAPassoArea(figura, ...valores) {
  const passoApassoArea = containerArea.querySelector('.passo-a-passo');

  const ContainerPassosArea = document.querySelector('#paragrafos');

  const paragrafosArea = ContainerPassosArea.querySelectorAll('p');

  paragrafosArea.forEach(paragrafo => {
    paragrafo.classList.remove('invisivel');
  })

  const paragrafoFormula = passoApassoArea.querySelector('.passo-1');
  const paragrafoSubstituicao = passoApassoArea.querySelector('.passo-2');
  const paragrafoResultado = passoApassoArea.querySelector('.passo-3');
  const paragrafoPasso4 = passoApassoArea.querySelector('.passo-4');
  const tituloResolvendo = passoApassoArea.querySelector('#tit-resolvendo');
  const tituloResultado = passoApassoArea.querySelector('#tit-resultado');
  const spanOperacao = passoApassoArea.querySelector('.oper'); 

  if (figura === 'retangulo') {
    tituloResolvendo.classList.add('invisivel');

    paragrafoResultado.innerHTML = ``;
    paragrafoResultado.classList.add('invisivel');

  } else {
    tituloResolvendo.classList.remove('invisivel');

    paragrafoResultado.classList.remove('invisivel');
  }

  if (figura === 'circulo') {
    const [raio] = valores;
    paragrafoFormula.textContent = 'Fórmula: A = π × r²';

    spanOperacao.textContent = 'π x ' + raio + '²' + ' = ' + 3.14 * Math.pow(raio, 2);

    paragrafoSubstituicao.textContent = `Substituição: A = π × ${raio}²`;
    paragrafoResultado.textContent = `Resultado: A = 3,14 × ${Math.pow(raio, 2)}`;

    let areaDoCirc = 3.14 * Math.pow(raio, 2);

    paragrafoPasso4.textContent = `Resultado: A = ${areaDoCirc.toFixed(2)}`;

    tituloResultado.textContent = 'A área do círculo é aproximadamente:';


  } else if (figura === 'quadrado') {
    const [lado] = valores;
    paragrafoFormula.textContent = 'Fórmula: A = L²';

    spanOperacao.textContent = lado + '²' + ' = ' + Math.pow(lado, 2);

    paragrafoSubstituicao.textContent = `Substituição: A = ${lado}²`;
    paragrafoResultado.textContent = `Resultado: A = ${lado} x ${lado}`;
    paragrafoPasso4.textContent = `Resultado: A = ${Math.pow(lado, 2)}`;

    tituloResultado.textContent = 'A área do quadrado é:';

  } else if (figura === 'retangulo') {

    const [base, altura] = valores;

    spanOperacao.textContent = `${base} x ${altura} = ${base * altura}`;

    spanOperacao.textContent = `${base} x ${altura} = ${base * altura}`;

    paragrafoFormula.textContent = 'Fórmula: A = b × h';
    paragrafoSubstituicao.textContent = `Substituição: A = ${base} × ${altura}`;

    paragrafoPasso4.textContent = `Resultado: A = ${base * altura}`;

    tituloResultado.textContent = 'A área do retângulo é:';

  } else if (figura === 'triangulo') {
    const [base, altura] = valores;

    spanOperacao.textContent = `${base} x ${altura} = ${base * altura}`;

    spanOperacao.textContent = `(${base} x ${altura}) / 2 = ${(base * altura) / 2}`;

    paragrafoFormula.textContent = 'Fórmula: A = (b × h) / 2';
    paragrafoSubstituicao.textContent = `Substituição: A = (${base} × ${altura}) / 2`;
    paragrafoResultado.textContent = `Resultado: A = ${base * altura} / 2`;
    paragrafoPasso4.textContent = `Resultado: A = ${(base * altura) / 2}`;

    tituloResultado.textContent = 'A área do triângulo é:';

  } else if (figura === 'losango') {
    const [diagonalMaior, diagonalMenor] = valores;

    spanOperacao.textContent = `${diagonalMaior} x ${diagonalMenor} = ${diagonalMaior * diagonalMenor}`;

    paragrafoFormula.textContent = 'Fórmula: A = (D × d) / 2';
    paragrafoSubstituicao.textContent = `Substituição: A = (${diagonalMaior} × ${diagonalMenor}) / 2`;
    paragrafoResultado.textContent = `Resultado: A = ${diagonalMaior *diagonalMenor} / 2`;
    paragrafoPasso4.textContent = `Resultado: A = ${(diagonalMaior * diagonalMenor) / 2}`;

    tituloResultado.textContent = 'A área do losango é:';

  } else if (figura === 'trapezio') {
    const [baseMaior, baseMenor, altura] = valores;

    spanOperacao.textContent = `(${baseMaior} + ${baseMenor}) x ${altura} = ${(baseMaior + baseMenor) * altura}`;

    paragrafoFormula.textContent = 'Fórmula: A = ((B + b) × h) / 2';
    paragrafoSubstituicao.textContent = `Substituição: A = ((${baseMaior} + ${baseMenor}) × ${altura}) / 2`;
    paragrafoResultado.textContent = `Resultado: A = ${baseMaior + baseMenor} × ${altura}) / 2`;
    paragrafoPasso4.textContent = `Resultado: A = ${((baseMaior + baseMenor) * altura) / 2}`;

    tituloResultado.textContent = 'A área do trapézio é:';

  }

}


//Evento select
selecionaFigura.addEventListener('change', () => {
  
  if (selecionaFigura.value === 'retangulo') {
    containerValores.innerHTML = '';
    criarInputs(selecionaFigura.value);
  } else if (selecionaFigura.value === 'triangulo') {
    containerValores.innerHTML = '';
    criarInputs(selecionaFigura.value);
  } else if (selecionaFigura.value === 'circulo') {
    containerValores.innerHTML = '';
    criarInputs(selecionaFigura.value);
  } else if (selecionaFigura.value === 'quadrado') {
    containerValores.innerHTML = '';
    criarInputs(selecionaFigura.value);
  } else if (selecionaFigura.value === 'trapezio') {
    containerValores.innerHTML = '';
    criarInputs(selecionaFigura.value);
  } else if (selecionaFigura.value === 'losango') {
    containerValores.innerHTML = '';
    criarInputs(selecionaFigura.value);
  }

})


btnCalcular.addEventListener('click', () => {
  const inputs = containerValores.querySelectorAll('input[type="number"]');

  const inputArea = containerValores.querySelector('#input-area');

  const ContainerPassosArea = document.querySelector('.passos-area');

  const divTitulosArea = ContainerPassosArea.querySelector('#paragrafos');


  const valores = Array.from(inputs).map(input => parseFloat(input.value));

  //verificando se os campos estão preenchidos e são positivos
  if (valores.some(valor => valor === '' || isNaN(valor))) {
    alert('Preencha todos os campos.');
    return;
  } 
  
  if (valores.some(valor => valor <= 0)) {
    alert('Preencha todos os campos com valores numéricos positivos.');
    return;
  }

  if (valores.length !== 0) {
    divTitulosArea.classList.remove('invisivel');
  }

  

  //coverter valores para numeros
  const numeros = valores.map(valor => parseFloat(valor));

  const figura = selecionaFigura.value;

  const area = calcularArea(figura, ...valores);

  preencherPassoAPassoArea(figura, ...valores);

  inputArea.value = area;
})

// limpar

btnApagar.addEventListener('click', () => {
  containerValores.innerHTML = '';

  const ContainerPassosArea = document.querySelector('.passos-area');

  const spanOpercao = ContainerPassosArea.querySelector('.oper');

  spanOpercao.textContent = '';

  const divTitulosArea = ContainerPassosArea.querySelector('#paragrafos');

  divTitulosArea.classList.add('invisivel');

  const paragrafosPassos = divTitulosArea.querySelectorAll('p');

  paragrafosPassos.forEach(paragrafo => {
    paragrafo.classList.add('invisivel');
  })

  divTitulosArea.classList.add('invisivel');

  selecionaFigura.value = 'escolher-figura';

  containerValores.classList.remove('borda-area');
})

//eventos de modo
// Eventos dos modos de uso

btnEstudoArea.addEventListener('click', () => {
  modoDeUso = 'estudante'

  modoUsoEstudoArea()

})

btnPratArea.addEventListener('click', () => {
  modoDeUso = 'pratico'

  modoUsoPraticoArea()

})