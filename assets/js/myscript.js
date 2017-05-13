/*document.write("Versão Navegador : " + navigator.userAgent);*/


var minhaVariavel = "Um Valor Qualquer";

minhaVariavel = 100;

function validaCampo(meuForm) {

//var meuForm = document.getElementsByID("form_01");

 if (meuForm.iNUser.value =="") {
   meuForm.iNUser.style = "box-shadow:1px 1px 20px #ff0000;";
 return false;
}
 else {
   return true;
 }
}
