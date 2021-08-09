import { logOut } from "./logOut.js";

export const navBar = () => {
    const navigation = document.createElement('div');
    const viewNavigation = `
    <div class='Bargit'>
    
    <h3 class='wallTitle'>Eluney</h3>
    </div>
    <div class="functions">
    <a>¿Quieres postear?</a>
    <a>Mi Perfil</a>
    <button id="close">Cerrar Sesión</button>
    </div>
    `;
    navigation.innerHTML = viewNavigation;
     
    const buttonLogOut = navigation.querySelector('#close');
    console.log('buttonLogOut', buttonLogOut);
    buttonLogOut.addEventListener("click", ()=>{
        console.log("addEventListenerLogout")
    });    
    
    return navigation;
};


