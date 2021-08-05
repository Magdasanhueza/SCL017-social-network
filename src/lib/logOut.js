export const navigationEvents = (context) => {
  console.log('context', context);
  // cierre de sesion

  
};



export const logOut = () => {
  console.log('Hola');
  firebase.auth()
  .signOut()
  .then(() => {
      console.log("cerré sesión");
      window.location.href = "";
  })
  .catch((error) => {
      console.log(error);
      // An error happened.
  });
};