$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobileresponsive').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x')
    })
});

let frentebotao = document.getElementById('frente')
let atrasbotao = document.getElementById('atras')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.lista .item')
let indicator = document.querySelector('.indicadores')
let dots = indicator.querySelectorAll('ul li')



let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

function setSlider(){

    let itemOld = container.querySelector('.lista .item.active')
    itemOld.classList.remove('active')

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.numeros').innerHTML = '0' + (active + 1)
}

frentebotao.onclick = () => {
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
    items[active].classList.add('active')
}




atrasbotao.onclick = () => {
    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()
    items[active].classList.add('active')
}
