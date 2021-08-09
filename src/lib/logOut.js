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
