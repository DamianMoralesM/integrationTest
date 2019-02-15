

//var user = firebase.auth().currentUser;

// Initialize Cloud Firestore through Firebase
/* var db = firebase.firestore();
db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
}); */

var cantidadDeVotos = 0; //se obtiene de la base de datos

//GET cantidadDeVotos FROM DATA BASE 


function puedeVotar(cantidadDeVotos){   
    
    if (cantidadDeVotos > 0 ) {        
        return false;          
    }
    return true;

}


function activarPopUpNoVotar(cantidadDeVotos){

    if ((puedeVotar(cantidadDeVotos))){

        window.location.replace("https://agilesapp-bf9e7.firebaseapp.com/vote")     

    }
    else {

        $('#myModal').modal('show');
        console.log('activarmodal')
    }
} 

function dejarVotar(){

    activarPopUpNoVotar(cantidadDeVotos);
    console.log('hi')
}