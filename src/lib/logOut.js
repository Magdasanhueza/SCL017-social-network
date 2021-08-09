export const navigationEvents = (context) => {
  console.log('context', context);
  // cierre de sesion

  
};



export const logOut = () => {
<<<<<<< HEAD
  return firebase
    .auth()
    .signOut()
    .then(() => {
      
      window.location.href = "";
    })
    .catch((error) => {
     
=======
  console.log('Hola');
  firebase.auth()
  .signOut()
  .then(() => {
      console.log("cerré sesión");
      window.location.href = "";
  })
  .catch((error) => {
      console.log(error);
>>>>>>> ef5b55724ff405fbf22b99c54eed243d52366339
      // An error happened.
  });
};