// variáveis
var btn = document.querySelector('#recarregar')
btn.addEventListener('click', function(){
location.reload();
});

var buttonSomaDePontos = document.getElementById('somar')

var buttonSomaDePontos2 = document.getElementById('somar')

var pontos = document.getElementById('pontos')

var pontos2 = document.getElementById('pontos2')

var pontuacaoTime1 = document.getElementById('pontuacaoTime1')

var pontuacaoTime2 = document.getElementById('pontuacaoTime2')

var pontuacaoTotal = 0

var pontuacaoTotal2 = 0

// funções
function somarPontuacao() {
  console.log('Valor inicial: ',pontuacaoTime1.value)
  if (pontuacaoTime1.value == '') {
    pontuacaoTime1.value = '0'
  }
  pontuacaoTotal = pontuacaoTotal + parseInt(pontuacaoTime1.value)
  console.log('Pontuação total:', pontuacaoTotal)
  pontos.style.color = 'blue'
  pontos.innerHTML = pontuacaoTotal
  pontuacaoTime1.value = ''
  console.log(pontuacaoTime1.value)
  if (parseInt(pontos.innerHTML) >= 2000) {
    pontos.innerHTML = '<?xml version="1.0" ?><svg width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Flat"><g id="Color"><polygon fill="#212529" points="8.26 3 25.94 33.62 38.06 26.62 24.42 3 8.26 3"/><path d="M38.06,26.62l-7.21-12.5-3.28,5.67A8.81,8.81,0,0,1,25.65,21c-2,.48-4.44-.13-6.42,1.06l6.71,11.61Z" fill="#111315"/><polygon fill="#dd051d" points="34.6 28.62 29.4 31.62 12.87 3 19.8 3 34.6 28.62"/><path d="M34.6,28.62l-6.06-10.5a4.88,4.88,0,0,1-5.18,3.05l6,10.45Z" fill="#a60416"/><polygon fill="#212529" points="39.58 3 25.94 26.62 38.06 33.62 55.74 3 39.58 3"/><path d="M38.06,33.62,44.77,22c-2-1.19-4.46-.59-6.42-1.06-2.21-1-4.53-3.65-7.52-2.81l-4.89,8.48Z" fill="#111315"/><polygon fill="#dd051d" points="51.13 3 34.6 31.62 29.4 28.62 44.2 3 51.13 3"/><path d="M34.6,31.62l6-10.45A9,9,0,0,1,38.35,21,36.55,36.55,0,0,1,35,18.89L29.4,28.62Z" fill="#a60416"/><path d="M50.55,40.5c0-2.11,1.57-4.44,1-6.34S48.2,31.24,47,29.6s-1.3-4.48-3-5.69-4.35-.42-6.32-1.05S34.11,20,32,20s-3.83,2.24-5.73,2.86-4.68-.14-6.32,1.05-1.75,4-3,5.69-3.85,2.59-4.49,4.56.95,4.23.95,6.34-1.57,4.44-.95,6.34S15.8,49.76,17,51.4s1.3,4.48,3,5.69,4.35.42,6.32,1S29.89,61,32,61s3.83-2.24,5.73-2.86,4.68.14,6.32-1,1.75-4,3-5.69,3.85-2.59,4.49-4.56S50.55,42.61,50.55,40.5Z" fill="#fccd1d"/><circle cx="32" cy="40.5" fill="#f9a215" r="14.5"/><path d="M33.37,33l1.52,2.63a1.54,1.54,0,0,0,1.06.76L39,37a1.53,1.53,0,0,1,.85,2.56l-2.1,2.22a1.5,1.5,0,0,0-.4,1.22l.36,3a1.57,1.57,0,0,1-2.22,1.58l-2.81-1.27a1.6,1.6,0,0,0-1.32,0l-2.81,1.27A1.57,1.57,0,0,1,26.31,46l.36-3a1.5,1.5,0,0,0-.4-1.22l-2.1-2.22A1.53,1.53,0,0,1,25,37l3-.59a1.54,1.54,0,0,0,1.06-.76L30.63,33A1.59,1.59,0,0,1,33.37,33Z" fill="#fccd1d"/></g></g></svg>'
  }
}

function somarPontuacao2() {
  console.log(pontuacaoTime2.value)
  if (pontuacaoTime2.value == '') {
    pontuacaoTime2.value = '0'
  }
  pontuacaoTotal2 = pontuacaoTotal2 + parseInt(pontuacaoTime2.value)
  console.log(pontuacaoTotal2)
  pontos2.style.color = 'red'
  pontos2.innerHTML = pontuacaoTotal2
  pontuacaoTime2.value = ''
  console.log(pontuacaoTime2.value)
  
  if (parseInt(pontos2.innerHTML) >= 2000) {
    pontos2.innerHTML = '<?xml version="1.0" ?><svg width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Flat"><g id="Color"><polygon fill="#212529" points="8.26 3 25.94 33.62 38.06 26.62 24.42 3 8.26 3"/><path d="M38.06,26.62l-7.21-12.5-3.28,5.67A8.81,8.81,0,0,1,25.65,21c-2,.48-4.44-.13-6.42,1.06l6.71,11.61Z" fill="#111315"/><polygon fill="#dd051d" points="34.6 28.62 29.4 31.62 12.87 3 19.8 3 34.6 28.62"/><path d="M34.6,28.62l-6.06-10.5a4.88,4.88,0,0,1-5.18,3.05l6,10.45Z" fill="#a60416"/><polygon fill="#212529" points="39.58 3 25.94 26.62 38.06 33.62 55.74 3 39.58 3"/><path d="M38.06,33.62,44.77,22c-2-1.19-4.46-.59-6.42-1.06-2.21-1-4.53-3.65-7.52-2.81l-4.89,8.48Z" fill="#111315"/><polygon fill="#dd051d" points="51.13 3 34.6 31.62 29.4 28.62 44.2 3 51.13 3"/><path d="M34.6,31.62l6-10.45A9,9,0,0,1,38.35,21,36.55,36.55,0,0,1,35,18.89L29.4,28.62Z" fill="#a60416"/><path d="M50.55,40.5c0-2.11,1.57-4.44,1-6.34S48.2,31.24,47,29.6s-1.3-4.48-3-5.69-4.35-.42-6.32-1.05S34.11,20,32,20s-3.83,2.24-5.73,2.86-4.68-.14-6.32,1.05-1.75,4-3,5.69-3.85,2.59-4.49,4.56.95,4.23.95,6.34-1.57,4.44-.95,6.34S15.8,49.76,17,51.4s1.3,4.48,3,5.69,4.35.42,6.32,1S29.89,61,32,61s3.83-2.24,5.73-2.86,4.68.14,6.32-1,1.75-4,3-5.69,3.85-2.59,4.49-4.56S50.55,42.61,50.55,40.5Z" fill="#fccd1d"/><circle cx="32" cy="40.5" fill="#f9a215" r="14.5"/><path d="M33.37,33l1.52,2.63a1.54,1.54,0,0,0,1.06.76L39,37a1.53,1.53,0,0,1,.85,2.56l-2.1,2.22a1.5,1.5,0,0,0-.4,1.22l.36,3a1.57,1.57,0,0,1-2.22,1.58l-2.81-1.27a1.6,1.6,0,0,0-1.32,0l-2.81,1.27A1.57,1.57,0,0,1,26.31,46l.36-3a1.5,1.5,0,0,0-.4-1.22l-2.1-2.22A1.53,1.53,0,0,1,25,37l3-.59a1.54,1.54,0,0,0,1.06-.76L30.63,33A1.59,1.59,0,0,1,33.37,33Z" fill="#fccd1d"/></g></g></svg>'
  } 
}

// ação dos botões
buttonSomaDePontos.addEventListener('click', somarPontuacao)

buttonSomaDePontos2.addEventListener('click', somarPontuacao2)






