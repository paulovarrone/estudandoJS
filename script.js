let n1 = document.querySelector('body')
let n2 = document.querySelector('p')
let n3 = document.querySelector('.cu')
let clicked = ""
let alturaP = document.querySelector('.alturaP')
let pesoP = document.querySelector('.pesoP')
const button = document.querySelector('.cu')
let crono = document.querySelector('#cronometro')

button.addEventListener('click', function() {
    document.querySelector('p').classList.toggle('hide')
})

    n3.onclick = function() {
        if (clicked) {
            n1.style.background = ""
            n2.style.color = ""
            n3.innerHTML = "Dark Mode"
            clicked = false
            heitor.src = './dog.webp'
            alturaP.style.color = ""
            pesoP.style.color= ""
            crono.style.color = ""
            
        } else {
            n1.style.background = "black"
            n2.style.color = "white"
            n3.innerHTML = "Light Mode"
            clicked = true
            heitor.src = './banana3.webp'
            heitor.style = 'width: 200px'
            alturaP.style.color = "white"
            pesoP.style.color= "white"
            crono.style.color = "white"
        }
    }

    
    function cu() {
        heitor.src = './banana1.png'  
        heitor.style = 'width: 200px'
    }

    function ce() {
        heitor.src = './banana2.webp'
        heitor.style = 'width: 200px'
    }


let calcular = document.querySelector('.calc')    
let altura = document.querySelector('#altura')
let peso = document.querySelector('#peso')

let imc 
let classi

let resultado = document.querySelector('.resultado')
let mensagemResultado = document.querySelector('.resultado .title span')
let botaoDoResultado = document.querySelector('.resultado button.close')
let erro = document.querySelector('.msgErro')

calcular.onclick = function() {
    imc = (peso.value / (altura.value * altura.value))
    

    if (imc <= 16) {
        classi = 'Magreza Grave'
    }
    else if (imc <= 17 ) {
        classi = 'Magreza Moderada'
    }
    else if (imc <= 18.5) {
        classi = 'Magreza Leve'
    }
    else if (imc <= 25) {
        classi = 'Saudável'
    }
    else if (imc <= 30) {
        classi = 'Sobrepeso'
    }
    else if (imc <= 35) {
        classi = 'Obeso 1'
    }
    else if (imc <= 40) {
        classi = 'Obeso 2'
    }
    else if (imc >= 40) {
        classi = 'Obeso fudido'
    }
    
    if (peso.value == '' || altura.value == '') {
        
        erro.classList.add('open')

        setTimeout( () => {
            erro.classList.remove('open');
        }, 5000);
        
        
    } else {
        mensagemResultado.innerHTML = `IMC: ${imc.toFixed(2)} ${classi}`
        resultado.classList.add('open')
        erro.classList.remove('open')
    }
} 

window.addEventListener('keydown', esc)

function esc(event){
    if(event.key === 'Escape'){
       resultado.classList.remove('open')
    }
}

botaoDoResultado.onclick = function() {
    resultado.classList.remove('open')
}




let ss = 0
let hh = 0
let mm = 0
let ml = 0;
let interval

function twoDigits(digit) {
    if (digit < 10) {
        return ('0' + digit)
    } else {
        return (digit)
    }
}

function start() {
    timer()
    interval = setInterval(timer, 10)
}

function pause() {
  clearInterval(interval)
}

function stop() {
    hh = 0
    mm = 0
    ss = 0
    clearInterval(interval)
    document.getElementById('cronometro').innerText = '00:00:00:00'
}


function timer() {
    ml++

    if(ml == 100) {
        ss++
        ml = 0
    }

    if(ss == 60) {
        mm++
        ss = 0
    }

    if (mm == 60) {
        ss = 0
        mm = 0
        hh++
    }    

    document.getElementById('cronometro').innerText = twoDigits(hh) + ':' + twoDigits(mm) + ':' + twoDigits(ss) + ':' + twoDigits(ml)
}

