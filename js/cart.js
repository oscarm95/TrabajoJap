let p = document.getElementById('user');
p.innerHTML = localStorage.getItem('user');
let premium = document.getElementById('premium');
let express = document.getElementById('express');
let standard = document.getElementById('standard');

function getLSItems() {
    let itemsLS = localStorage.getItem('products');
    let parsedItems = JSON.parse(itemsLS);
    console.log(parsedItems)


    for(let i = 0; i < parsedItems.length; i++){
    
        let parsedItem = parsedItems[i];
        let cartLSList = document.getElementById('ls-cart');
        cartLSList.innerHTML += `
            <table class="table">
                <tbody>
                    <tr id="cartArt">
                        <td scope="row"><img src="${parsedItem.img}" class="img-thumbnail" alt="Cinque Terre" width="250" height="180"></td>
                        <td scope="row" class="align-middle">${parsedItem.name}</td>
                        <td scope="row" class="align-middle">${parsedItem.price} ${parsedItem.currency}</td>
                        <td scope="row" class="align-middle"><input id="quantity" type="number" value="${parsedItem.quantity}" ></td>
                        <td scope="row" class="align-middle" id="subTotal">$ ${parsedItem.currency}</td>
                        
                    </tr>
                </tbody>   
            </table> 
        `
    }
};



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
            ${getLSItems()}
            `
    
    
    document.getElementById("quantity").addEventListener('input', function() {
        let y = quantity.value;
        let z = x * y;
        subTotal.innerHTML = `${z} ${data.articles[0].currency}`;
        
        let premiumShippment = (z/100)*15;
        let expressShippment = (z/100)*7;
        let standardShippment = (z/100)*5;

        document.getElementById("cart-subtotal").innerHTML= `${z} ${data.articles[0].currency}`;

        premium.addEventListener( 'change', function() {
            if(this.checked) {
                document.getElementById("cart-subtotal").innerHTML= `${z + premiumShippment} ${data.articles[0].currency}`;
            }
        });
        express.addEventListener( 'change', function() {
            if(this.checked) {
                document.getElementById("cart-subtotal").innerHTML= `${z + expressShippment} ${data.articles[0].currency}`;
            }
        });
        standard.addEventListener( 'change', function() {
            if(this.checked) {
                document.getElementById("cart-subtotal").innerHTML= `${z + standardShippment} ${data.articles[0].currency}`;
            }
        });
        
    });
    
})






document.getElementById("bye").addEventListener("click",()=>{
    logOut();
});


function logOut() {
    localStorage.removeItem("user");
    alert("Nos vemos pronto");
    location.href="index.html";
};