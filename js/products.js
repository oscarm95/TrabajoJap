let p = document.getElementById('user');
p.innerHTML = localStorage.getItem('user');

let contenedor = document.getElementById('container');
let count = document.getElementById('sortByCount');
let aToZ = document.getElementById('sortAsc');
let zToA = document.getElementById('sortDesc');
let minPrice = undefined;
let maxPrice = undefined;


let categoryId = localStorage.getItem('catID');

let productss=`https://japceibal.github.io/emercado-api/cats_products/${categoryId}.json`;

let originalProducts = [];
let products2 = [];

fetch(productss) 
    .then(res=>res.json())
    .then(data=>{
        originalProducts = data.products;
        products2 = data.products;
        BringProducts();
    });

function BringProducts(){
    
    let productList = document.getElementById("products");
    productList.innerHTML = "";
    for (let products of originalProducts){
        console.log(products)
        if (((minPrice == undefined) || (minPrice != undefined && parseInt(products.cost) >= minPrice)) &&
            ((maxPrice == undefined) || (maxPrice != undefined && parseInt(products.cost) <= maxPrice))){
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
                                    <h4> Precio: ` + products.cost +`</h4> 
                                    <p>  `  + products.description +`</p> 
                                </div>
                                <small class="text-muted">` + products.soldCount +` Vendidos</small> 
                                
                            </div>     
                        </div>       
                    </div>
                </div>`
            console.log(productList)};
    };
};

count.addEventListener('click', function() {
    originalProducts.sort((a, b) => {
        if (a.soldCount > b.soldCount) {return -1;}
        if (a.soldCount < b.soldCount) {return 1;}
        return 0;
    });
    BringProducts();
});

aToZ.addEventListener('click', function() {
    originalProducts.sort((a, b) => {
        if (a.name < b.name) {return -1;}
        if (a.name > b.name) {return 1;}
        return 0;
    });
    BringProducts();
});

zToA.addEventListener('click', function() {
    originalProducts.sort((a, b) => {
        if (a.name > b.name) {return -1;}
        if (a.name < b.name) {return 1;}
        return 0;
    });
    BringProducts();
});

document.getElementById("rangeFilterCount").addEventListener("click", function(){

    minPrice = document.getElementById("rangeFilterCountMin").value;
    maxPrice = document.getElementById("rangeFilterCountMax").value;


    if ((minPrice != undefined) && (minPrice != "") && (parseInt(minPrice)) >= 0){
        minPrice = parseInt(minPrice);
    }
    else{
        minPrice = undefined;
    }

    if ((maxPrice != undefined) && (maxPrice != "") && (parseInt(maxPrice)) >= 0){
        maxPrice = parseInt(maxPrice);
    }
    else{
        maxPrice = undefined;
    }

    BringProducts();
});

document.getElementById("clearRangeFilter").addEventListener("click", function(){
    document.getElementById("rangeFilterCountMin").value = "";
    document.getElementById("rangeFilterCountMax").value = "";

    minCount = undefined;
    maxCount = undefined;

    BringProducts();
});