// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyB7r-82OZ7v1-lQqBNdT8gldBgvSbhoW3w",
    authDomain: "productosdjimo.firebaseapp.com",
    projectId: "productosdjimo"
});
  
  var db = firebase.firestore();


function validarFormulario(){
    let contadorValidacion= 0
    let camposEntrada= document.getElementsByTagName("input")
    let mensajeUsuario= document.getElementsByTagName("textarea")
    let estadoChip = document.getElementsByClassName("estadoEntrada")
    let nomUs= camposEntrada[0].value
    let emailUs=camposEntrada[1].value
    let telUs= camposEntrada[2].value
    let txtUs=mensajeUsuario[0].value

    //validamos el campo de nombre
    if(nomUs===""){
        estadoChip[0].className +="red lighten-1"
        estadoChip[0].style.display="block"
        estadoChip[0].innerHTML="No puedes dejar este espacio vacío <i class='close material-icons'>close</i>"
    }else if(nomUs.length < 3){
        estadoChip[0].className +="red lighten-1"
        estadoChip[0].style.display="block"
        estadoChip[0].innerHTML="Porfaaa, ingresa al menos 3 carácteres <i class='close material-icons'>close</i>"
        
    }else{
       
        contadorValidacion ++
    }

    if(emailUs ===""){
        estadoChip[1].className +="red lighten-1"
        estadoChip[1].style.display="block"
        estadoChip[1].innerHTML="No puedes dejar este espacio vacío <i class='close material-icons'>close</i>"
    }else if(emailUs.includes("@")===false && emailUs.includes(".com")===false){
        estadoChip[1].className +="red lighten-1"
        estadoChip[1].style.display="block"
        estadoChip[1].innerHTML="No!, tu correo debe incluir un '@' y un '.com' <i class='close material-icons'>close</i>"
    }else{
        contadorValidacion ++
    }
    if(telUs==""){
        estadoChip[2].className +="red lighten-1"
        estadoChip[2].style.display="block"
        estadoChip[2].innerHTML="No puedes dejar este espacio vacío <i class='close material-icons'>close</i>"
    }else if(telUs.length < 8 || telUs.length >8){
        estadoChip[2].className +="red lighten-1"
        estadoChip[2].style.display="block"
        estadoChip[2].innerHTML="Tu número de tel, debe contener 8 dígitos <i class='close material-icons'>close</i>"
    }else{
        contadorValidacion ++
    }

    if(contadorValidacion===3){
         //agregamos los datos a la coleccion formularios de firebase
        db.collection("formularios").add({
            nombreUsuario: nomUs,
            telefonoUsuario:telUs,
            correoUsuario: emailUs,
            mensajeUsuario: txtUs
        })
        .then(function(docRef) {
            for(i=0;i <camposEntrada.length;i++){
                camposEntrada[i].value=""
            }
           mensajeUsuario[0].value=""
            contador=0
            window.alert("Gracias!!!!! Pronto te responderemos")
        })
        .catch(function(error) {
            window.alert("Tenemos problemas para enviar tu mensaje, inténtalo luego")
            console.error("Error adding document: ", error);
        });
    }

}
    //agregamos los datos a la coleccion formularios de firebase
    /*db.collection("formularios").add({
        nombreUsuario: nombreUs,
        telefonoUsuario:telUs,
        correoUsuario: correoUs,
        mensajeUsuario: mensajeUs
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });*/