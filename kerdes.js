const connect ={
    res : document.querySelector('#result'),
    start : document.querySelector('#start'),
    labelNum1 :document.querySelector('#num1'),
    labelNum2 : document.querySelector('#num2'),
    ezBt : document.querySelector('#easyBt'),
    midBt : document.querySelector('#mediumBt'),
    hardBt : document.querySelector('#hardBt'),
    modal : document.querySelector('#nehézségModal'),
    changeDif : document.querySelector('#changeDif')
};

const vars = {
    level : 0,
    num1 : 0,
    num2 : 0,
    numAray: [],
    i:1
}

window.addEventListener('load', init)

function init(){
    setDif()

};

function setDif(){
    connect.ezBt.addEventListener('click', () =>{
        setData(10),
        connect.modal.style.display = "none"
        connect.changeDif.style.display = "block"
    })
    connect.midBt.addEventListener('click', () =>{
        setData(100),
        connect.modal.style.display = "none"
        connect.changeDif.style.display = "block"
    })
    connect.hardBt.addEventListener('click', () =>{
        setData(1000),
        connect.modal.style.display = "none"
        connect.changeDif.style.display = "block"
    })
}


function reStart(){
    connect.changeDif.addEventListener('click', ()=>{
        connect.changeDif.style.display = "none",
        connect.modal.style.display = "block",
        setDif()
    })
    setData(vars.level)
 }

function setData(dif){
    vars.level = dif
    for (let i = 0; i < 2; i++) {
        vars.numAray.push(Math.floor((Math.random() * dif)+1))
        
    }
    vars.num1 = vars.numAray[0]
    vars.num2 = vars.numAray[1]
    connect.labelNum1.innerHTML = vars.num1
    connect.labelNum2.innerHTML = vars.num2
    getData()
    console.log(vars.numAray)
    vars.numAray.splice(0,1)
    vars.numAray.splice(0,1)
    //console.log('fut')
    //console.log('setDatalog '+vars.num1)
    //console.log('setDatalog '+vars.num2)
}


function getData(){
    connect.start.addEventListener('click', checkData)
}

function checkData(){
    if (vars.num1 + vars.num2 == connect.res.value){
        //console.log(vars.num1)
        //console.log(vars.num2)
        //console.log(result)
        console.log('yes')
        alert("helyes")
        connect.res.value=""
        
    } else {
        //console.log(vars.num1)
        //console.log(vars.num2)
       // console.log(result)
        console.log('no')
        alert("helytelen")
        connect.res.value=""
    }
    reStart()
}