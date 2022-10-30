let p = document.getElementById('user');
p.innerHTML = localStorage.getItem('user');
let premium = document.getElementById('premium');
let express = document.getElementById('express');
let standard = document.getElementById('standard');


var myModal = new bootstrap.Modal(document.getElementById('modalPayment'))
function seeModal() {
    myModal.show()
};

(() => {
    //verificar formulario y despues abrir modal
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          
          
        } else{
            event.preventDefault()
            seeModal()
            
        }
  
        form.classList.add('was-validated')
      }, false) 

    }) 
    
    
})()

let bank = document.getElementById("bank");
let card = document.getElementById("card");

card.addEventListener("click",()=>{
    document.getElementById("bank-input").setAttribute("disabled", "");
    document.getElementById("card-name").removeAttribute("disabled", "");
    document.getElementById("card-code").removeAttribute("disabled", "");
    document.getElementById("card-date").removeAttribute("disabled", "");
    document.getElementById("finish-buy").removeAttribute("disabled", "");
})
bank.addEventListener("click",()=>{
    document.getElementById("bank-input").removeAttribute("disabled", "");
    document.getElementById("card-name").setAttribute("disabled", "");
    document.getElementById("card-code").setAttribute("disabled", "");
    document.getElementById("card-date").setAttribute("disabled", "");
    document.getElementById("finish-buy").removeAttribute("disabled", "");
    
})


let buyButton = document.getElementById("finish-buy");
buyButton.addEventListener("click",()=>{
    alert("Haz realizado tu compra con exito!");
    window.location = "cart.html";
})

let url = `https://japceibal.github.io/emercado-api/user_cart/25801.json`;

fetch(url)
.then(response => response.json())
.then(data => {
    let x = data.articles[0].unitCost;
    let y = data.articles[0].count;
    let z = x * y;

    let cartList = document.getElementById('cart');
    cartList.innerHTML += `
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Imagen</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Costo</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr id="cartArt">
                        <td scope="row"><img src="${data.articles[0].image}" class="img-thumbnail" alt="Cinque Terre" width="250" height="180"></td>
                        <td scope="row" class="align-middle">${data.articles[0].name}</td>
                        <td scope="row" class="align-middle">${data.articles[0].unitCost} ${data.articles[0].currency}</td>
                        <td scope="row" class="align-middle"><input id="quantity" type="number" value="${y}" ></td>
                        <td scope="row" class="align-middle" id="subTotal">${z} ${data.articles[0].currency}</td>
                        
                    </tr>
                </tbody>  
            </table>
            
            
            `
    let itemsLS = localStorage.getItem('products');
    let parsedItems = JSON.parse(itemsLS);
    console.log(parsedItems)


    for (let i = 0; i < parsedItems.length; i++) {

        let parsedItem = parsedItems[i];
        let cartLSList = document.getElementById('cart');
        let sss = parsedItem.price * parsedItem.quantity;
        cartLSList.innerHTML += `
            <table class="table" border="1">
                <tbody>
                    <tr id="cartArt">
                        <td scope="row"><img src="${parsedItem.img}" class="img-thumbnail" alt="imagen" width="250" height="180"></td>
                        <td scope="row" class="align-middle">${parsedItem.name}</td>
                        <td scope="row" class="align-middle"><span class="price2">${parsedItem.price}</span> ${parsedItem.currency}</td>
                        <td scope="row" class="align-middle"><input class="amount" type="number" value="${parsedItem.quantity}" ></td>
                        <td scope="row" class="align-middle">$ <span class="totalsub">${sss}</span> ${parsedItem.currency}</td>
                        
                    </tr>
                </tbody>   
            </table> 
        `

        document.querySelectorAll(".amount").forEach((x) => x.addEventListener( 'input', function() {
            let totalsub = x.parentNode.parentNode.querySelector(".totalsub")
            let price = x.parentNode.parentNode.querySelector(".price2")
            totalsub.textContent = parseFloat(price.textContent) * x.value
            recalcularTotal()
        }))
        
      
    }
    
    recalcularTotal()

    
    
    
    
    document.getElementById("quantity").addEventListener('input', function() {
        let y = quantity.value;
        let z = x * y;
        subTotal.innerHTML = `${z} ${data.articles[0].currency}`;

        document.getElementById('total-payment').textContent= `${z} ${data.articles[0].currency}`;
        
    });

    function recalcularTotal() {
        let sum = 0;
        document.querySelectorAll(".amount").forEach((x) => {
            let totalsub = x.parentNode.parentNode.querySelector(".totalsub")
            sum = sum + parseFloat(totalsub.textContent)
        })

        let totalTotal = sum + z;
        document.getElementById('product-payment').textContent = totalTotal

        document.getElementById('total-payment').textContent = totalTotal

        let premiumShippment = (totalTotal/100)*15;
        let expressShippment = (totalTotal/100)*7;
        let standardShippment = (totalTotal/100)*5;
        
        premium.addEventListener( 'change', function() {
            if(this.checked) {
                document.getElementById('total-payment').textContent= totalTotal+premiumShippment;
                document.getElementById('send-cost').textContent=premiumShippment;
            }
        });
        express.addEventListener( 'change', function() {
            if(this.checked) {
                document.getElementById('total-payment').textContent= totalTotal+expressShippment;
                document.getElementById('send-cost').textContent=expressShippment;
            }
        });
        standard.addEventListener( 'change', function() {
            if(this.checked) {
                document.getElementById('total-payment').textContent= totalTotal+standardShippment;
                document.getElementById('send-cost').textContent=standardShippment;
            }
        });

    }

    
})




document.getElementById("bye").addEventListener("click",()=>{
    logOut();
});


function logOut() {
    localStorage.removeItem("user");
    alert("Nos vemos pronto");
    location.href="index.html";
};