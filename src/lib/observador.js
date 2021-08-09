export const observer = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user && user.emailVerified === true) {
     
    } else {
      console.log("no existe el usuario");
    }
  });
};
