const showNavBar = (event) =>{
    event.preventDefault();
    navBar= document.querySelector('.side-bar');
    navBar.style.display='flex';
}
const hideNavBar = (event) =>{
    event.preventDefault();
    navBar= document.querySelector('.side-bar');
    navBar.style.display='none';
}
