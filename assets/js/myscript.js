/*document.write("Versão Navegador : " + navigator.userAgent);*/
var minhaVariavel= "Qualquer valor";


function validaCampo(meuForme) {
  //var meuForme=document.getElementById("form_01");

    if(meuForme.iNUser.value == ""){
      meuForme.iNUser.style="box-shadow:1px 1px 20px #ff0000;";
      return false;
    }else {
      return true;
    }
}

function voltaAoNormal(meuForme){
    .meuForme.iNUser.style="box-shadow: none;";

}
