var provider = new firebase.auth.GoogleAuthProvider();

export const inicioSesionGoogle = () => {
 
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      window.location.href = "#/muro";
      
    })
    .catch((error) => {
      
    });
};
