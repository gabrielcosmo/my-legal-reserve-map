
function reserveDimensions(area){

    var dim = allDivisors(Math.trunc(area))
    
    //caso: area é um numero primo
    if(dim.length==0) dim = allDivisors(area+1)

    //caso: area é um numero de raiz exata
    if(dim.length % 2 == 1){
        var sqr_dim = dim[(dim.length/2)-0.5]

        return [sqr_dim, sqr_dim]

    }
    //caso: area é um numero de raiz não exata
    if(dim.length%2 == 0){
        var widthRnd
        if(dim.length==2)
            widthRnd=dim[0]
        else
            widthRnd = dim[dim.length/2]

        var heightRnd =  area / widthRnd

        return [widthRnd, heightRnd]
    }

}


function allDivisors(n){
    var divisors = []
    for(var i=2; i<n; i++){
        if(n % i == 0){
            divisors.push(i)
        }
    }
    return divisors
}

