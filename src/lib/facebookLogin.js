export const facebookLogin = (e) => {
  e.preventDefault();
 
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((results) => {
      window.location.href = "#/muro";
      
    })
    .catch((err) => {
      
    });
};
