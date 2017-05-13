/* document.write ("versão do navegador" + navigator.userAgent) */

//var minhaVariavel = 100;
//alert("Valor da Variável " + minhaVariavel);

function validaCampo(meuForm) {
  //var meuForm = document.getElementById("form_01");

  if(meuForm.iNUser.value == "") {
    meuForm.iNUser.style = "box-shadow:1px 1px 20px #ff0000;";
    return false
  } else {
    return true;
  }

  function resetCampo(idCampo) {
    idCampo.style. = "box-shadow: none";
  }
}
