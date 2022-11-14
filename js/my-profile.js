let p = document.getElementById('user');
p.innerHTML = localStorage.getItem('user');


//verificar si esta logueado y llevar a login
window.addEventListener('load', function() {
       
    if (localStorage.getItem('user') === null) {
        location.href="index.html";
    } 
    //si hay datos en el perfil ponerlos en los placeholder
    if(localStorage.getItem('userData') !== null) {
        let nameInput = document.getElementById('name');
        nameInput.placeholder = obj[0].name;
        let secondNameInput = document.getElementById('second-name');
        secondNameInput.placeholder = obj[0].secondName;
        let surnameInput = document.getElementById('surname');
        surnameInput.placeholder = obj[0].surname;
        let secondSurnameInput = document.getElementById('second-surname');
        secondSurnameInput.placeholder = obj[0].secondSurname;
        let emailInput = document.getElementById('email');
        emailInput.placeholder = localStorage.getItem('user');
        let phoneInput = document.getElementById('phone');
        phoneInput.placeholder = obj[0].phone;
    } else {
        let nameInput = document.getElementById('name');
        nameInput.placeholder = "Nombre";
        let secondNameInput = document.getElementById('second-name');
        secondNameInput.placeholder = "Segundo Nombre";
        let surnameInput = document.getElementById('surname');
        surnameInput.placeholder = "Apellido";
        let secondSurnameInput = document.getElementById('second-surname');
        secondSurnameInput.placeholder = "Segundo Apellido";
        let emailInput = document.getElementById('email');
        emailInput.placeholder = localStorage.getItem('user');
        let phoneInput = document.getElementById('phone');
        phoneInput.placeholder = "Telefono";
    }
});





(() => {
    //verificar formulario
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          
          
        } else{
            event.preventDefault()
        
            
        }
  
        form.classList.add('was-validated')
      }, false) 

    }) 
    
    
})()

//añadir datos a localStorage



document.getElementById("actualize").addEventListener("click",()=>{

        
    
    let dataList;
    const lsUser = {
        name: document.getElementById('name').value,
        secondName: document.getElementById('second-name').value,
        surname: document.getElementById('surname').value,
        secondSurname: document.getElementById('second-surname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        img: document.getElementById('archive')
    };
    
    dataList = [];
    
    dataList.push(lsUser);
    localStorage.setItem('userData', JSON.stringify(dataList));
    
        
});

//Traer datos de local storage
const obj = JSON.parse(localStorage.getItem('userData'));

//añadir imagen
const input = document.getElementById('thumbnail');

input.addEventListener('change', (event) => {
    const image = event.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(image);

    reader.addEventListener('load', () => {
        localStorage.setItem('thumbnail', reader.result);
    });
});

const thumbnail = localStorage.getItem('thumbnail');

const previewImage = document.getElementById('preview');

if (thumbnail) {
    previewImage.setAttribute('src', thumbnail);
}


document.getElementById("bye").addEventListener("click",()=>{
    logOut();
});


function logOut() {
    localStorage.removeItem("user");
    alert("Nos vemos pronto");
    location.href="index.html";
};