/*document.write("Versão Navegador : " + navigator.userAgent);*/


var minhavariavel="teste"

minhavariavel = 100;

function validaCampo(meuForm){
    // var meuForm = document.getElementById("form_01");

    if(meuForm.iNUser.value == ""){
        meuForm.iNUser.style = "box-shadow:1px 1px 20px #ff0000;";
        return false;

    }
    else{
        return true;
    }
}

//minhavariavel = {"100","70","90"}