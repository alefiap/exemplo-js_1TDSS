/*document.write("Versão Navegador : " + navigator.userAgent);*/
//var minhaVariavel = "UM VALOR QUALQUER";
//minhaVariavel = 100;
//alert("Valor da variavel: "+ minhaVariavel);

function validaFuncao(meuForm){

  //var meuForm = document.getElementById("form_01");

  if(meuForm.iNUser.value == ""){
    meuForm.iNUser.style = "box-shadow:1px 1px 20px #ff0000;";
    return false;
  }else if(meuForm.iSenha.value == ""){
    meuForm.iSenha.style = "box-shadow:1px 1px 20px #ff0000;";
    return false;
  }else{
    return true;
  }

}

//quando o usuário retornar ao campo
//o campo deve voltar ao normal

function resetaCampo(idCampo){
  idCampo.style = "box-shadow:none"
}
