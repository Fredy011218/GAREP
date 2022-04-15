
function valor(){
    u = document.getElementById("usuariol").value;
    p = document.getElementById("pss").value;
    
    

    if(u =='118921'){
        
        if(p=='123456'){
            
              location.href="../GAREP/vista/principal.html";
            
            
        }
        else{
            alert("Clave Invalida");
        }
    }else
    {
        alert("Usuario Invalido");
    }

}


function valor2(){

  document.getElementById("userCla").innerHTML = "Fredy Romero";
}




