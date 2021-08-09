import { logOut } from "./logOut.js";

export const navBar = () => {
  const navigation = document.createElement("div");
  const viewNavigation = `
    <div class='Bar'>
    <img class='basicIcon' src='.Assets/caja.png'></img>
    <h3 class='wallTitle'>Eluney</h3>
    </div>
    <div class="functions">
    <a>¿Quieres postear?</a>
    <a>Mi Perfil</a>
    <button id="close">Cerrar Sesión</button>
    </div>
    `;
  navigation.innerhtml = viewNavigation;
  return navigation;
};
