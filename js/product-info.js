let p = document.getElementById('user');
p.innerHTML = localStorage.getItem('user');


let itemId = localStorage.getItem('itemID');
let url = `https://japceibal.github.io/emercado-api/products/${itemId}.json`;


let comentUrl = `https://japceibal.github.io/emercado-api/products_comments/${itemId}.json`;
fetch(comentUrl)
.then(response => response.json())
.then(coment => coment.forEach(element => {
    
    let coment = document.getElementById('comentariesBox');
    if(element.score == 1){ starCount = `<span class="fa fa-star checked"></span><span class="fa fa-star noChequed"></span></span><span class="fa fa-star noChequed"></span></span><span class="fa fa-star noChequed"></span></span><span class="fa fa-star noChequed"></span>`}
    else if(element.score == 2){ starCount = `<span class="fa fa-star checked"></span><span class="fa fa-star chequed"></span></span><span class="fa fa-star noChequed"></span></span><span class="fa fa-star noChequed"></span></span><span class="fa fa-star noChequed"></span>`}
    else if(element.score == 3){ starCount = `<span class="fa fa-star checked"></span><span class="fa fa-star chequed"></span></span><span class="fa fa-star chequed"></span></span><span class="fa fa-star noChequed"></span></span><span class="fa fa-star noChequed"></span>`}
    else if(element.score == 4){ starCount = `<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span></span><span class="fa fa-star checked"></span></span><span class="fa fa-star checked"></span></span><span class="fa fa-star noChequed"></span>`}
    else if(element.score == 5){ starCount = `<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span></span><span class="fa fa-star checked"></span></span><span class="fa fa-star checked"></span></span><span class="fa fa-star checked"></span>`}
    coment.innerHTML += `
    <div style='margin-left:50%'class="container">
        <div class="row">
            <div class="col">
                <div>${element.user} - ${element.dateTime} - ${starCount}</div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div>${element.description}</div>
            </div>
        </div>
    </div>
    `
}));



function setItemID(id) {
    localStorage.setItem("itemID", id);
    window.location = "product-info.html"
}

fetch(url)
.then(response => response.json())
.then(data => {

    let item = document.getElementById('product')
    item.innerHTML = `
    
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="images">
                    <div>
                        <img class="pImg" src="${data.images[0]}">
                        <img class="pImg" src="${data.images[1]}">
                        <img class="pImg" src="${data.images[2]}">
                        <img class="pImg" src="${data.images[3]}">
                    </div>
                </div>    
            </div>
            <div class="col">
                <h1>${data.name}</h1>
                <hr/>
                <div class="price">
                    <h2>Precio:</div>
                    <p>${data.cost} ${data.currency}</p>
                <div class="category">
                    <h2>categoría</h2>
                    <p>${data.category}</p>
                </div>
                <div class="description">
                    <h2>Descripción</h2>
                    <p>${data.description}</p>
                </div>
                <div class="sold">
                    <p>${data.soldCount} Vendidos</p>
                </div>
                
        </div>
        <div class="related">
            <h2>Productos Relacionados</h2>
            <div class="card" style="width: 18rem;" onclick="setItemID(${data.relatedProducts[0].id})">
                <div>
                    <img class="card-img-top" src="${data.relatedProducts[0].image}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${data.relatedProducts[0].name}</h5>
                    </div>  
                </div>
            </div >
            <div class="card" style="width: 18rem;" onclick="setItemID(${data.relatedProducts[1].id})">
                <div>
                    <img class="card-img-top" src="${data.relatedProducts[1].image}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${data.relatedProducts[1].name}</h5>
                    </div>   
                </div>
            </div>
        </div>
        
       
        
    </div>
    `
    
});

let input = document.getElementById('form-control');
let addBtn = document.getElementById('addBtn');
let stars = document.getElementById('stars');




 addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    let userName = localStorage.getItem('user');
    let description = input.value;
    let rate = stars.value;
    let today = new Date();
    let date = today.getDate() + '-' + ( today.getMonth() + 1 ) + '-' + today.getFullYear();
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    let dateAndTime = date + ' ' + time;

    let coment = document.getElementById('comentariesBox');
    if(rate == 1){ starCount = `<span class="fa fa-star checked"></span><span class="fa fa-star noChequed"></span></span><span class="fa fa-star noChequed"></span></span><span class="fa fa-star noChequed"></span></span><span class="fa fa-star noChequed"></span>`}
    else if(rate == 2){ starCount = `<span class="fa fa-star checked"></span><span class="fa fa-star chequed"></span></span><span class="fa fa-star noChequed"></span></span><span class="fa fa-star noChequed"></span></span><span class="fa fa-star noChequed"></span>`}
    else if(rate == 3){ starCount = `<span class="fa fa-star checked"></span><span class="fa fa-star chequed"></span></span><span class="fa fa-star chequed"></span></span><span class="fa fa-star noChequed"></span></span><span class="fa fa-star noChequed"></span>`}
    else if(rate == 4){ starCount = `<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span></span><span class="fa fa-star checked"></span></span><span class="fa fa-star checked"></span></span><span class="fa fa-star noChequed"></span>`}
    else if(rate == 5){ starCount = `<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span></span><span class="fa fa-star checked"></span></span><span class="fa fa-star checked"></span></span><span class="fa fa-star checked"></span>`}
    coment.innerHTML += `

    
    <div style='margin-left:50%'class="container">
        
        <div class="row">
            <div class="col">
                <div>${userName} - ${dateAndTime} - ${starCount}</div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div>${description}</div>
            </div>
        </div>
    </div>
    `

    input.value = "";
    stars.value = "";
 });   

 document.getElementById("bye").addEventListener("click",()=>{
    logOut();
});


 function logOut() {
    localStorage.removeItem("user");
    alert("Nos vemos pronto");
    location.href="index.html";
};
