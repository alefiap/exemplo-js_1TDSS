/*document.write("Versão Navegador : " + navigator.userAgent);*/
/*var variavel_01 = "TESTE"
variavel_01 = 100;
alert("Valor da variavel: " + variavel_01);*/

function validaCampo(formulario) {
//var formulario = document.getElementById('form_01');

  if(formulario.iNUser.value ==""){
    formulario.iNUser.style = "box-shadow:1px 1px 20px #ff0000; background-color: pink;";
    return false;
  }else {
    return true;
  }


}

function tiraFormatacao(formulario){
  iNUser.style = "none;";
  }
}
