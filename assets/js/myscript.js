/*document.write("Versão Navegador : " + navigator.userAgent);*/

var minhaVariavel = "UM VALOR QUALQUER";

//minhaVariavel = 100;

// minhaVariavel = {"100", "70", "90"};

//alert ("Valor da variavel:" + minhaVariavel);


function validaCampo(meuform){

  //var meuform = document.getElementById ("form_01");

  if (meuform.iNUser.value ==""){
     meuform.iNUser.style = "box-shadow: 1px 1px 20px #ff0000;";

     return false;
   } else {
     return true;

   }

}
