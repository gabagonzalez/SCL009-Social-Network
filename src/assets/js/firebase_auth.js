// Function createUser
export const createUser = (user, age, email, password) => {
  console.log(user);
  console.log(age);
  console.log(email);
  console.log(password);

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function() {
      confirmationEmail();
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

  // let db = firebase.firestore();

  // firebase.auth().createUserWithEmailAndPassword(email, password)
  // .then(function(){
  //   /*Base de datos, para almacenar de manera paralela en cloud firestore
  //   dichos datos del usuario*/
  //        db.collection('users').add({
  //         email:email,
  //         password:password
  //        })
  // })

  // .then(function(docRef){
  //   console.log("Document written with ID: ", docRef.id);
  // })

  // .catch(function(error){
  //   console.error("Error  adding document: ", error);
  // });
};

export const confirmationEmail = () => {
  var user = firebase.auth().currentUser;
  user
    .sendEmailVerification()
    .then(function() {
      console.log("estoy aqui casi envio tu mensaje de confirmacion");
    })
    .catch(function(error) {
      // Ha ocurrido un error.
    });
    
};
