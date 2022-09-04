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
    
    let p = document.getElementById('user');
    p.innerHTML = localStorage.getItem('user');

});

function logOut() {
    localStorage.removeItem("user");
    alert("Nos vemos pronto");
    location.href="index.html";
};