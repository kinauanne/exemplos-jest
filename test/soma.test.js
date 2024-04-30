//test('soma', () => {
 //   let a = 2;
//    let b = 10;

//    let  resultado = soma(a, b);
//    expect(resultado).toBe(12);
//});
//function soma(a,b) {
//    return a+b
    
//}


describe('soma()',() =>{
    describe('A soma de dois números inteiros deverá resulta em um inteiro.', () => {
        test('quando a = 2 e b = 2, deve retonar 4 ', () => {
            expect(soma(2,2)).toBe(4)
        });
    });
    test('quando a = 10 e b = 2, deve retonar 12', () => {
        expect(soma(10,2)).toBe(12)
    });
    test('quando a = 0 e b = 0, deve retonar 0', () => {
        expect(soma(0,0)).toBe(0)
    });
    describe('A soma de dois números literais deverá resulta em um inteiro.', () => {
        test('quando a = "2" e b = "2", deve retonar 4 ', () => {
            expect(soma('2','2')).toBe(4)
        });
    });
    test('quando a = "10" e b = "2", deve retonar 12', () => {
        expect(soma('10','2')).toBe(12)
    });
    test('quando a = "0" e b = "0", deve retonar 0', () => {
        expect(soma('0','0')).toBe(0)
    });
    describe('A soma de um número literal e um inteiro deverá resultar em um inteiro.', () => {
        test('quando a = "2" e b = 2, deve retonar 4 ', () => {
            expect(soma('2',2)).toBe(4)
        });
    });
    test('quando a = "10" e b = 2, deve retonar 12', () => {
        expect(soma('10',2)).toBe(12)
    });
    test('quando a = "0" e b = 0, deve retonar 0', () => {
        expect(soma('0',0)).toBe(0)
    });
        test('quando a = 2 e b = "2", deve retonar 4 ', () => {
            expect(soma(2,'2')).toBe(4)
        });
    });
    test('quando a = 10 e b = "2", deve retonar 12', () => {
        expect(soma(10,'2')).toBe(12)
    });
    test('quando a = 0 e b = "0", deve retonar 0', () => {
        expect(soma(0,'0')).toBe(0)
    });
    describe('A soma de duas strings deve gerar uma mensagem de erro.', () => {
        test('quando a = "abc" e b = "2", deve retonar 4 ', () => {
            expect(()=>soma('abc','2')).toThrow(Error)
        });
    });
    test('quando a = "10" e b = "cde", deve retonar 12', () => {
        expect(()=>soma('10','cde')).toThrow(Error)
    });
    test('quando a = "ijk" e b = "xyz", deve retonar 0', () => {
        expect(()=>soma('ijk','xyz')).toThrow(Error)
    });

function soma(a,b){
    let errorMsg = "erro: um ou mais parâmetros com tipo(s) não suportado(s).";
    let [x, y] = [Number(a), Number(b)];
    if(isNaN(x) || (isNaN(y))){
        throw Error(errorMsg)
    } 
    return x + y;
 //   return Number(a)+Number(b)
}
