//variable firestone
const db = firebase.firestore();
var storage = firebase.storage();
var storageRef = storage.ref();
var imagesRef = storageRef.child('img')

//crear publicacion
export const createPost = () => {
    const userPost = firebase.auth().currentUser;    //usuario que esta comentando
    const postComment = document.getElementById('postEluney').value;  //buscar el comentario en el id
    const imageFile = document.getElementById('filePost').files[0];
    const userName = userPost.displayName;
    const userEmail = userPost.email;
    console.log(userName);

    if (userPost === null) {    
        console.log(userName);            //si no encuentra el nombre de usuario usa el email
        userName = userPost.email;
    }

    let photoUser = userPost.photoURL;  //foto de usuario
    if (userPost.photoURL === null) {    //solo toma foto de usuario cuando accede con google o facebook
        photoUser = '../Assets/user.jpg';  //foto de usuario por defecto
    }

    //cargar imagen
    console.log(imageFile);
    var commentImageRef = imagesRef.child(imageFile.name);    
    commentImageRef.put(imageFile).then(function(snapshot) {
        commentImageRef.getDownloadURL().then(function(url) {
            console.log(url);
        });
        console.log('snapshot', commentImageRef.bucket);
        console.log('snapshot', commentImageRef.bucket + '/' + commentImageRef.fullPath);
    });

    //agregar comentario a firestore
    db.collection('comments').add({  //add para que firestore genere id de comentario
        nombre: userName, 
        email: userEmail,             
        comments: postComment,
        date: new Date(),
        like: 0,
        imgURL: 'https://www.hola.com/imagenes/estar-bien/20210217184541/gatos-gestos-lenguaje-significado/0-922-380/gatos-gestos-m.jpg',
        photo: photoUser,


    })
        .then(() => {
            alert('Publicado');
            window.location.href = '#/muro';
            console.log('comentario guardado firestone');
            cleanFormPost(); 
        })
        .catch(() => {
            alert('error');
            console.error('error al guardar comentario');
        });

    
}

//agregar imagen
export const getFile = () => {
    const sendFile = document.querySelector('#filePost').file;
    console.log();


};



//funcion que limpia el texterea solo cuando sepublica el comentario
const cleanFormPost = () => {
    document.querySelector('#postEluney').value = '';
}

/*export const publishNow = (wallHome) =>{
    const publish = wallHome.querySelector('#postFull');
    db.collection('comments').orderBy('fecha', 'desc')*/  //ordenar los comentarios por fecha descendientes
    
export const getComments = () =>{
    
    return db.collection("comments").orderBy('date', 'desc').get(); //traer los comentarios de la coleccion
       

}