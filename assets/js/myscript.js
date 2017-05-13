/*document.write("Versão Navegador : " + navigator.userAgent);*/
/*var minhaVariavel = "UM VALOR QUALQUER";*/
/*int nr = 100;*/
/*alert("Valor da Variável: " + minhaVariavel);*/

function validaCampo (meuForm) {

  //var meuForm = document.getElementById("Form_01");

    if (meuForm.iNUser.value == ""){
      meuForm.iNUser.style = "box-shadow: 1px 1px 20px #ff000;"
      return false;
    } else{
      return true;
    }

}
