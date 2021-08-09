export const navigationEvents = (context) => {
  console.log('context', context);
  // cierre de sesion

  
};



export const logOut = () => {
  return firebase
    .auth()
    .signOut()
    .then(() => {
      
      window.location.href = "";
    })
    .catch((error) => {
     
      // An error happened.
  });
};