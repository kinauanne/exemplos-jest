test('soma', () => {
    let a = 2;
    let b = 10;

    let  resultado = soma(a, b);
    expect(resultado).toBe(12);
});
function soma(a,b) {
    return a+b
    
}

test('subtração ', () => {
    let a = 9;
    let b = 5;

    let resultado = sub(a, b);
    expect(resultado).toBe(4)
    
});
function sub(a,b) {
    return a-b
    
}


test('multiplicação ', () => {
    let a = 2;
    let b = 4;

    let resultado = multiplica(a, b);
    expect(resultado).toBe(8)
    
});
function multiplica(a,b) {
    return a*b
    
}
//cv