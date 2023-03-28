//evento onclick
function funcaoClick(){

alert("Essa é a função Onclick");

}


function funcaodblClick(){


    alert("Essa é a função dblClick");


}

function funcaoonChange() {
    var select = document.getElementById("select").value;
    document.getElementById("demo").innerHTML = "voce selecionou o professor: " + select;
  }



  function checkCookies()
{
if (navigator.cookieEnabled==true)
	{
	alert("Esse é o evento onload e os Cookies são permitidos")
	}
else
	{
	alert("Esse é o evento onload e os Cookies Cookies não são permitidos")
	}
}

function mOver(obj)
{
obj.innerHTML="Obrigado"
}

function mOut(obj)
{
obj.innerHTML="Passe o mouse em mim"
}


function mDown(obj)
{
obj.style.backgroundColor="#1ec5e5";
obj.innerHTML="Solte o clique"
}

function mUp(obj)
{
obj.style.backgroundColor="#D94A38";
obj.innerHTML="Obrigado"
}


function myFunction(x) {
    x.style.background = "yellow";
  }