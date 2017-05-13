/*document.write("Versão Navegador : " + navigator.userAgent);*/

function validarCampo(meuForm) {
  //var meuForm = document.getElementById("form_01");
  if(meuForm.iNUser.value == ""){
    meuForm.iNUser.style = "box-shadow:1px 1px 20px #ff0000;";
    return false;
  }else{
    return true;
  }
}

function retornoCampo() {

  iNUser.style = "none;";

}
