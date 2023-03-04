var state = 'standard';
var lastType;

function insert(value, type){
    
    if(lastType == 'operator' && type == 'operator'){
        backspace();
    }
    if(state == 'continue' && type == 'number'){
        clearAll();
        
    }
    if(state != 'standard' && type == 'operator'){
        state =  'standard';
    }
    
    document.getElementById("current").innerHTML += value;
    lastType = type;

    console.log(state);
}


function clearAll(){
    document.getElementById("current").innerHTML = "";
    document.getElementById("previous").innerHTML = "";
    state =  'standard';
}

function backspace(){
    let value = document.getElementById("current").innerHTML;
    document.getElementById("current").innerHTML = value.substring(0, value.length - 1);
}

function equal(){
    let current = document.getElementById("current");
    let previous = document.getElementById("previous");

    if(state != 'continue'){
        previous.innerHTML = current.innerHTML;
    }else if(state != 'continue'){
        previous.innerHTML += current.innerHTML;
    }
    previous.innerHTML += '=';

    try {
        eval(current.innerHTML);
    } catch (error) {
        current.innerHTML = 'ERROR';
        state = 'continue';
    }
    
    let value = eval(current.innerHTML);
    current.innerHTML = value;

    
    state = 'continue';

    console.log(state);
}