/*document.write("Versão Navegador : " + navigator.userAgent);*/
//var minhaVariavel = "Um valor qualquer";
//minhaVariavel = 100;
//alert("Valor da variável: " + minhaVariavel);

function validaCampo(meuForm){

  // var meuForm = document.getElementById("form_01");
    if (meuForm.iNUser.value == "") {
      meuForm.iNUser.style = "box-shadow:1px 1px 20px #ff0000;";
      return false;
    }
    else if(meuForm.iSenha.value == ""){
      meuForm.iSenha.style = "box-shadow:1px 1px 20px #ff0000;";
      return false;
    }
    else{
      return true;
    }

function campoEmPreenchimento(idCampo){
  idCampo.style = "box-shadow:none;";
  }
}
