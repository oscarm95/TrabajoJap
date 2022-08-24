function login() {
    let userName = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if( userName != 0 && password != 0){
        localStorage.setItem('user', userName);
        location.href="index.html";
    } else {
        alert('Usuario y contraseña requeridos');
    };
};



document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById('submit');
    button.addEventListener('click', (e) => {
        e.preventDefault();
        login();
    });
});
