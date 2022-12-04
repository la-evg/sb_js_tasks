function ExpProd(list){
    price = 0;
    prod = ""
    for (item of list){
        if(item.price > price){
            price = item.price;
            prod = item.product;
        }
}
return(prod)
}

console.log(ExpProd(list))