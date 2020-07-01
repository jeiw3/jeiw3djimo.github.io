
window.onload=function(){
    document.getElementById("nombre-sms-producto").value=""
    document.getElementById("mensaje-sms-producto").value=""
}

function enviarMensajeProducto(){
    let nomUsuario=document.getElementById("nombre-sms-producto").value
    let menUsuario=document.getElementById("mensaje-sms-producto").value
    if(nomUsuario==="" && menUsuario===""){
        document.getElementById("error-nombre").textContent="* Este campo está vacío :-("
        document.getElementById("error-mensaje").textContent="* Este campo está vacío :-("
    }else if(nomUsuario===""){
        document.getElementById("error-nombre").textContent="* Este campo está vacío :-("

    }else if(menUsuario===""){
        document.getElementById("error-mensaje").textContent="* Este campo está vacío :-("

    }else{
        window.location.assign(`https://api.whatsapp.com/send?phone=50689961138&text=Holaa!!%20me%20llamo%20${nomUsuario},%20y%20me%20interesa%20"${menUsuario}"`)    

    }
}


