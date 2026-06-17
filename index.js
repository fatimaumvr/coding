let hom=document.getElementById('home')
let gues=document.getElementById('guest')

let num1=Number(hom.textContent)
let num2=Number(gues.textContent)

function a(){
    num1+=1
    hom.textContent=num1
}

function aa(){
     num1+=2
    hom.textContent=num1
}

function aaa(){
     num1+=3
    hom.textContent=num1
}


function s(){
    num2+=1
    gues.textContent=num2
}

function ss(){
    num2+=2
    gues.textContent=num2
}

function sss(){
    num2+=3
    gues.textContent=num2
}

