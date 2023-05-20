const connect ={
    res : document.querySelector('#result'),
    start : document.querySelector('#start'),
    labelNum1 :document.querySelector('#num1'),
    labelNum2 : document.querySelector('#num2')
};

const vars = {
    num1 : 0,
    num2 : 0,
    numAray: [],
    i:1
}

window.addEventListener('load', init)

function init(){
    setData()

};

function reStart(){
    setData()
 }

function setData(){
    for (let i = 0; i < 2; i++) {
        vars.numAray.push(Math.floor((Math.random() * 10)+1))
        
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
        connect.res.value=""
        
    } else {
        //console.log(vars.num1)
        //console.log(vars.num2)
       // console.log(result)
        console.log('no')
        connect.res.value=""
    }
    reStart()
}