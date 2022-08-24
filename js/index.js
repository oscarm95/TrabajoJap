document.addEventListener("DOMContentLoaded", function(){
    let userName = localStorage.getItem("user");

    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });

    
    document.getElementById("bye").addEventListener("click",()=>{
        logOut();
    });
    
    
    if (userName==null){
        alert("Inicia sesion para continuar");
        location.href="login.html";
    } else {
        document.getElementById("email").innerHTML = userName;
    };

});

function logOut() {
    localStorage.removeItem("user");
    alert("Nos vemos pronto");
    location.href="login.html";
};