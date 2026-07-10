function entrar(){

let grupo=document.getElementById("grupo").value;

if(grupo==""){

alert("Introduza o nome do grupo.");

return;

}

localStorage.setItem("grupo",grupo);

window.location="quiz.html";

}