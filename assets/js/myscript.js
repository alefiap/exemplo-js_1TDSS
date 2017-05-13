/*document.write("Versão Navegador : " + navigator.userAgent);*/

//var minhaVari = "UM VALOR QUALQUER";
//minhaVari = 100;
//alert("Valor da variavel: " + minhaVari);

function validaCampo(meuForm) {
  //var meuForm = document.getElementById("form_01");

    if(meuForm.iNUser.value == ""){
      meuForm.iNUser.style = "box-shadow: 1px 1px 20px #ff0000;";

      return false;
    }else if (meuForm.iSenha.value == "") {
      meuForm.iSenha.style = "box-shadow: 1px 1px 20px #ff0000;";

      return false;
    }else{
      return true;
    }
}

function validaCampoEx(meuForm) {
    meuForm.style="box-shadow: none;";
}
