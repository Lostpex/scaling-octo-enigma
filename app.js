const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')
const cookieBox = document.querySelector(".wrapper"),
acceptBtn = cookieBox.querySelector(".buttons button");

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

acceptBtn.onclick = ()=>{
    console.log("Cookies wurden akzeptiert")
    document.cookie = "Cookies=Hagen Keßler; dauer der Cookies"+60*60*24*30;
    if(document.cookie){
        cookieBox.classList.add("hide");

    }else{
        alert("Cookies koenen nich gesetzt werden");
    }
}

let checkCookie = document.cookie.indexOf("Cookies=Hagen Keßler")
checkCookie != -1 ? cookieBox.classList.add("hide"): cookieBox.classList.remove("hide");