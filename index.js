// let textcont=document.getElementById('text');
   
// function display(){
//     console.log(textcont.value);
//     localStorage.setItem("text",textcont.value);
// } 
// if(text){
//     textcont.value=localStorage.getItem("text");
// }
// textcont.addEventListener('change',display);


let textcont=document.getElementById('text');

function store(){
    console.log(textcont.value);
    localStorage.setItem("words",textcont.value);
}

if("words"){
    textcont.value=localStorage.getItem("words");
}



textcont.addEventListener('change',store);