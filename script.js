let registro = document.getElementById("registro");
let login = document.getElementById("login");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");





registro.onclick = function() {
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "registro";
    login.classList.remove("disable");
    registro.classList.add("disable");
    
}


login.onclick = function() {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "login";
    login.classList.add("disable");
    registro.classList.remove("disable");
    

}

