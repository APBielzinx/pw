//evento onclick
function funcaoClick(){

alert("Essa é a função Onclick");

}

//evento dblClick
function funcaodblClick(){


    alert("Essa é a função dblClick");


}

//evento dblClick

function funcaoonChange() {
    var select = document.getElementById("select").value;
    document.getElementById("demo").innerHTML = "você selecionou o professor: " + select;
  }


//evento onLoad

  function funcaoonLoad(){

if (navigator.cookieEnabled==true)
	{
	alert("Esse é o evento onload e os Cookies são permitidos")
	}
else
	{
	alert("Esse é o evento onload e os Cookies Cookies não são permitidos")
	}
}
//evento onMouseOver

function funcaoonMouseOver(obj){
  obj.innerHTML="Obrigado"
}

//evento onMouseOut


function funcaoonMouseOut(obj){

obj.innerHTML="Passe o mouse em mim"

}

//evento onMouseDown


function funcaoonKeyDown(obj){
obj.style.backgroundColor="#FFFF00";
obj.innerHTML="Solte o clique"
}

//evento onMouseUp

function funcaoonKeyUp(obj){
obj.style.backgroundColor="#0088ff";
obj.innerHTML="Obrigado"
}


function funcaoonFocus(x) {
    x.style.background = "yellow";
  }