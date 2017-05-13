/*document.write("Versão Navegador : " + navigator.userAgent);*/
//var minhaVariavel = "Bundinha";
//minhaVariavel=100;
//alert("valor variavel: " + minhaVariavel);
function validaCampo(meuForm){
//  var meuForm = document.getElementById('form_01');
  if(meuForm.iNUser.value == ""){
    meuForm.iNUser.style = "box-shadow:1px 1px 20px #ff0000;";
    return  false;
  }else{
    return true;
  }
}
function resetaCampo(idCampo){
  idCampo.style = "box-shadow: none;";
}
