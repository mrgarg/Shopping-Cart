

$(function(){
    let productList =$('#product_list')
    fetchProducts(function(products){
        productList.empty()
        for(product of products)
        {
            productList.append(createProductCard(product))
        }

    })
})