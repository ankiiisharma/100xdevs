function square(n){
    return n*n;
}

function SumOfSquare(a,b){
    const var1 = square(a);
    const var2 = square(b);

    return var1 + var2;
}

console.log(SumOfSquare(1,2));