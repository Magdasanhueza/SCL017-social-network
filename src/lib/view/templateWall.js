import { navigationEvents } from "./../logOut.js";
import { getComments } from "../post.js"; // const que se trae los comentarios de la coleccion
import { navBar } from "../Navigation.js";

export const wall = (e) => {
  const wallHome = document.createElement("div");
  console.log('wallHome', wallHome);
  console.log('navBar', navBar());
  wallHome.appendChild(navBar());
  //navigationEvents(wallHome);
  const viewWall = `
    
    <div class="wallContainer">
    <div class="postFull" id='postFull'></div>     
    </div>
    <a href="#/post"> Postear mensaje     
    </a>
    
    `;

  wallHome.innerHTML += viewWall;
  

  /*const insertComments = (postDiv, data) => {
  //postDiv.innerHTML += data.comments;
    const date = new Date(data.date.toDate())
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const hour = date.getHours()
    const minute= date.getMinutes();
    postDiv.innerHTML +=
      "<div class='divComments'>" +
      "<button id='edit' class='buttonEdit'>Editar</button>" +
      "<button id='delete' class='buttonDelete'>Borrar</button>" +
      "<button id='like' class='buttonLike'>Like</button>" +
      "<div id='photo' class='photoProfile'> <img class='IconoProfile' src='Assets/iconoUsuario.png'></div>" +
      data.nombre +
      " " +
      data.comments +
      " " +
     (year + "-" + month + "-" + day + " " + hour+":"+minute) +
     "<img src = '"+ data.imgURL + "'>" + 
      "</div>";
    console.log(data);
  };

  //llama a coleccion y devuelve promesa
  getComments().then((querySnapshot) => {
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      const postDiv = wallHome.querySelector("#postFull");
      /*postDiv.innerHTML = '';
        postDiv.innerHTML
      insertComments(postDiv, doc.data());

      // aqui crear elementos
      console.log("hola may");
      console.log(doc.data().comments);
    });
  });
  console.log('wallHome', wallHome);*/

  return wallHome;
};
