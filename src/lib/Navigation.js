import { logOut } from "./logOut.js";

export const navBar = () => {
<<<<<<< HEAD
  const navigation = document.createElement("div");
  const viewNavigation = `
    <div class='Bar'>
    <img class='basicIcon' src='.Assets/caja.png'></img>
=======
    const navigation = document.createElement('div');
    const viewNavigation = `
    <div class='Bargit'>
    
>>>>>>> ef5b55724ff405fbf22b99c54eed243d52366339
    <h3 class='wallTitle'>Eluney</h3>
    </div>
    <div class="functions">
    <a>¿Quieres postear?</a>
    <a>Mi Perfil</a>
    <button id="close">Cerrar Sesión</button>
    </div>
    `;
<<<<<<< HEAD
  navigation.innerhtml = viewNavigation;
  return navigation;
};
=======
    navigation.innerHTML = viewNavigation;
     
    const buttonLogOut = navigation.querySelector('#close');
    console.log('buttonLogOut', buttonLogOut);
    buttonLogOut.addEventListener("click", ()=>{
        console.log("addEventListenerLogout")
    });    
    
    return navigation;
};


>>>>>>> ef5b55724ff405fbf22b99c54eed243d52366339
