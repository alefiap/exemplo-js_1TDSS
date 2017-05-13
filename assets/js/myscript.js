/*document.write("Versão Navegador : " + navigator.userAgent);*/

//var minhaVariavel = "UM VALOR QUALQUER";

//int nr = 0;

//minhaVariavel = {"100","70","90"}

//minhaVariavel = 100;

//alert("Valor da variavel: " + minhaVariavel);


//pegou o formulario inteiro e jogou dentro dessa variavel
function validaCampo(meuForm) {

  //var meuForm = document.getElementById("form_01"); - não precisa mais disso
  if(meuForm.iNUser.value == ""){
  meuForm.iNUser.style = "box-shadow:1px 1px 20px #ff0000;";
  return false;
}else {
  return true;
 }

}

//EXERCICIO 01Quando o usuario retornar ao campo, o campo deve voltar ao normal
function retornaCampo(meuForm){

iNUser.style = "none;";

}
