/*document.write("Versão Navegador : " + navigator.userAgent);*/

//var minhaVariavel = "UM VALOR QUALQUER"

//minhaVariavel = 100;

//alert("Valor da variavel :" + minhaVariavel); /*alert = função interna do javascript*/

function validaCampo (meuForm) {

  //var meuForm = document.getElementById("form_01");

  if(meuForm.iNUser.value == "" ){
    meuForm.iNUser.style = "box-shadow:1px 1px 20px #ff0000;";
    return false;
  } else {
    return true;
  }
}

if(meuForm.iNUser.value == "" ){
  meuForm.iNUser.style = "";
  return false;
} else {
  return true;
}
}
