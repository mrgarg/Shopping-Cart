function fetchProducts( done){
    $.get('/api/products',function(data){
        done(data)
    })
}


function addProduct (name, manuf, price, done) {
    $.post('/api/products', {
        name: name,
        manufacturer: manuf,
        price: price
    }, function (data) {
        done(data)
    })
}

function createProductCard(product){
    return $(`
    <div class="col-4 card mx-2 p-3">
        <h4 class="product_name">${product.name}</h4>
        <div class="product_manufacturer">${product.manufacturer}</div>
        <div class="row">
            <div class="col m-3 p-3">
            <b>${product.price}</b>
            </div>
        <button class=" col btn btn-primary m-4">Buy</button>
        </div>
    </div>`)}
