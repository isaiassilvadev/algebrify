# 📐 Algebrify

Aplicação web para realizar cálculos matemáticos fundamentais com explicações passo a passo e visualização gráfica.

Aplicação web desenvolvida para realizar cálculos matemáticos fundamentais com exibição clara dos resultados e explicações passo a passo.

---

## 🚀 Funcionalidades

### 📊 Porcentagem
- Cálculo de percentual de um valor
- Aumento percentual
- Desconto percentual
- Explicação da fórmula aplicada

---

### 📈 Função Afim (1º Grau)
- Forma geral: `f(x) = ax + b`
- Cálculo do valor da função para um determinado **x**
- Identificação do coeficiente angular (**a**) e linear (**b**)
- Substituição demonstrada passo a passo
- Visualização gráfica da função usando **Canvas**

---

### 📉 Função Quadrática (2º Grau)
- Forma geral: `f(x) = ax² + bx + c`
- Inserção dos coeficientes **a**, **b** e **c**
- Cálculo automático do **Delta (Δ)**
- Determinação das raízes da função
- Visualização gráfica da parábola utilizando **Canvas**

---

### 🔺 Cálculo de Áreas Geométricas
- Cálculo de área de figuras planas
- Interface dedicada para inserção das medidas
- Aplicação automática das fórmulas geométricas
- Exibição do resultado da área calculada
- Explicação da fórmula utilizada

---

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Manipulação de DOM
- Eventos de clique

---

## 📂 Estrutura do Projeto

```
📁 projeto
 ├── index.html
 ├── 📁 Pages
 │   ├── porcentagem.html
 │   ├── afim.html
 │   └── quadrada.html
 │
 ├── 📁 Styles
 │   ├── global.css
 │   ├── porcentagem.css
 │   ├── afim.css
 │   └── quadrada.css
 │
 ├── 📁 scripts
 │   ├── main.js
 │   ├── porcentagem.js
 │   ├── afim.js
 │   └── quadrada.js
 │
 └── 📁 src
     └── 📁 images
```

Novos arquivos foram adicionados para suportar as funcionalidades de **gráficos** e **cálculo de áreas geométricas**:

/area
 ├── area.html
 ├── area.css
 └── area.js

/index
 ├── index.js
 └── index.css

 - **area.html** → Interface para cálculo de áreas geométricas  
- **area.css** → Estilização da página de áreas  
- **area.js** → Lógica de cálculo das áreas e manipulação da interface  

- **index.js** → Script da página inicial (incluindo controle do tutorial com overlay)  
- **index.css** → Estilos da página inicial

---

## 🎯 Objetivo da Versão 1.0.0

- Consolidar três funcionalidades matemáticas essenciais
- Garantir organização modular do projeto
- Separar responsabilidades (HTML, CSS e JS)
- Criar base escalável para futuras versões

## 🎯 Objetivo da Versão 1.1.0

- Expandir as funcionalidades matemáticas da aplicação
- Adicionar visualização gráfica com **Canvas** para funções **afim** e **quadrática**
- Implementar uma nova página dedicada ao **cálculo de áreas geométricas**
- Incluir um **tutorial interativo com overlay** na página inicial
- Manter a organização modular do projeto
- Preservar a separação de responsabilidades (**HTML, CSS e JavaScript**)
- Continuar estruturando uma base escalável para futuras versões
---

## 📌 Autor

Desenvolvido por **Isaias S. Silva**

---

## 📄 Licença

Este projeto está sob licença MIT.
