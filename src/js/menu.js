const btn_menu=document.querySelector(".btn_menu");
const menu=document.querySelector(".menu");
btn_menu.addEventListener("click",()=>{
    menu.classList.toggle("ocultar_menu");
    btn_menu.classList.toggle("icon-menu");
    btn_menu.classList.toggle("icon-close");
});