let p = document.getElementById('user');
p.innerHTML = localStorage.getItem('user');


document.getElementById("bye").addEventListener("click",()=>{
    logOut();
});


function logOut() {
    localStorage.removeItem("user");
    alert("Nos vemos pronto");
    location.href="index.html";
};