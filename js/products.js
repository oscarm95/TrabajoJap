cars="https://japceibal.github.io/emercado-api/cats_products/101.json";

function BringCars(url){
    fetch(cars)
    .then(res=>res.json())
    .then(data=>{
    console.log(data);
    let productList = document.getElementById("products")
    for (let products of data.products){
        console.log(products)
        productList.innerHTML += `
            <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="${products.image}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <div class="mb-1">
                                <h4> ` + products.name +`</h4>  
                                <p>  `  + products.description +`</p> 
                            </div>
                            <small class="text-muted">` + products.soldCount +` Vendidos</small> 
                            
                        </div>     
                    </div>       
                </div>
            </div>`
        console.log(productList)
    }});
};



BringCars(cars);