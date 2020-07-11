// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyB7r-82OZ7v1-lQqBNdT8gldBgvSbhoW3w",
    authDomain: "productosdjimo.firebaseapp.com",
    projectId: "productosdjimo"
});
  
  var db = firebase.firestore();

db.collection("accesorios").get().then((querySnapshot) => {
    let productosCamisas= document.getElementById("productos-accesorios")
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().nombre}`);
        productosCamisas.innerHTML+= `
        <div class="col s6 m3 l4">
                    <div class="card small" >
                        <div class="card-image">
                            <img src=${doc.data().imagen}>
                             
                        </div>
                        <div class="card-content">
                            <span class="card-title black-text text-darken-4 activator  "><i class="material-icons right pink-text small">add</i></span><br>
                            <p class=" teal-text ">${doc.data().descripcionResumida} </p>
                        </div>
                        <div class="card-action center-align">
                            <a href="#modalEnviar" class="btn-small green modal-trigger btn-producto"><i class="material-icons">local_mall</i> </a>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title "><i class="material-icons right pink-text">close</i></span>
                            <p class="tile-text ">${doc.data().descripcionGeneral}</p>
                        </div>
                    </div>
                </div>
        
        
        
        `
    });
});