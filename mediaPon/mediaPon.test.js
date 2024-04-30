import {calculaMedia, verificaSituacao, verificaAprovacao} from './mediaPon.js';
describe('Média', () => {
    test('caso de teste ', () => {
        let n1=8
        let n2=8
        let n3=8
        let n4=8
        let result = verificaSituacao(n1,n2,n3,n4)
        expect(result).toBe("Aprovado")
    });
});
describe('Média', () => {
    test('caso de teste ', () => {
        let n1=8
        let n2=8
        let n3=8
        let n4=8
        let media = calculaMedia(n1,n2,n3,n4)
        expect(media).toBe(8)
    });
});

describe('Média', () => {
    test('caso de teste ', () => {
        let n1=8
        let n2=8
        let n3=8
        let n4=8
        let p1=1
        let p2=2
        let p3=3
        let p4=4
        let result = verificaSituacao(n1,n2,n3,n4,p1,p2,p3,p4)
        expect(result).toBe("Aprovado")
    });
});
describe('Média', () => {
    test('caso de teste ', () => {
        let n1=8
        let n2=8
        let n3=8
        let n4=8
        let p1=1
        let p2=2
        let p3=3
        let p4=4
        let media = calculaMedia(n1,n2,n3,n4,p1,p2,p3,p4)
        expect(media).toBe(8)
    });
});

describe('Média', () => {
    test('caso de teste ', () => {
        let n1=6
        let n2=9
        let n3=5
        let n4=5
        let result = verificaSituacao(n1,n2,n3,n4)
        expect(result).toBe("Reprovado")
    });
});
describe('Média', () => {
    test('caso de teste ', () => {
        let n1=6
        let n2=9
        let n3=5
        let n4=5
        let media = calculaMedia(n1,n2,n3,n4)
        expect(media).toBe(6)
    });
});

describe('Média', () => {
    test('caso de teste ', () => {
        let n1=8.5
        let n2=8
        let n3=7
        let n4=6.5
        let result = verificaSituacao(n1,n2,n3,n4)
        expect(result).toBe("Aprovado")
    });
});
describe('Média', () => {
    test('caso de teste ', () => {
        let n1=8.5
        let n2=8
        let n3=7
        let n4=6.5
        let media = calculaMedia(n1,n2,n3,n4)
        expect(media).toBe(7.4)
    });
});

describe('Média', () => {
    test('caso de teste ', () => {
        let n1="7"
        let n2="8"
        let n3="9"
        let n4="10"
        let result = verificaSituacao(n1,n2,n3,n4)
        expect(result).toBe("Aprovado")
    });
});
describe('Média', () => {
    test('caso de teste ', () => {
        let n1="7"
        let n2="8"
        let n3="9"
        let n4="10"
        let media = calculaMedia(n1,n2,n3,n4)
        expect(media).toBe(8.6)
    });
});

describe('Média', () => {
    test('caso de teste ', () => {
        let n1="1"
        let n2="1"
        let n3="1"
        let n4="10"
        let result = verificaSituacao(n1,n2,n3,n4)
        expect(result).toBe("Reprovado")
    });
});
describe('Média', () => {
    test('caso de teste ', () => {
        let n1="1"
        let n2="1"
        let n3="1"
        let n4="10"
        let media = calculaMedia(n1,n2,n3,n4)
        expect(media).toBe(2.8)
    });
});
describe('aprovacao', () => {
    test('caso de teste presenca igual a 75% ', () => {
        let n1=8
        let n2=8
        let n3=8
        let n4=8
        let precensa = 0.75
        let result = verificaAprovacao(n1,n2,n3,n4, precensa)
        expect(result).toBe("Aprovado")
    });
});
describe('aprovacao', () => {
    test('caso de teste presenca igual a 79% ', () => {
        let n1=8
        let n2=8
        let n3=8
        let n4=8
        let p1=1
        let p2=2
        let p3=3
        let p4=4
        let precensa = 0.79
        let result = verificaAprovacao(n1,n2,n3,n4, p1, p2, p3, p4, precensa)
        expect(result).toBe("Aprovado")
    });
});
describe('aprovacao', () => {
    test('caso de teste presenca igual a 65% ', () => {
        let n1=6
        let n2=9
        let n3=5
        let n4=5
        let precensa = 0.65
        let result = verificaAprovacao(n1,n2,n3,n4, precensa)
        expect(result).toBe("Reprovado")
    });
});
describe('aprovacao', () => {
    test('caso de teste presenca igual a 90% ', () => {
        let n1=8.5
        let n2=8
        let n3=7
        let n4=6.5
        let precensa = 0.90
        let result = verificaAprovacao(n1,n2,n3,n4, precensa)
        expect(result).toBe("Aprovado")
    });
});
describe('aprovacao', () => {
    test('caso de teste presenca igual a 65% ', () => {
        let n1=7
        let n2=8
        let n3=9
        let n4=10
        let precensa = 0.65
        let result = verificaAprovacao(n1,n2,n3,n4, precensa)
        expect(result).toBe("Reprovado")
    });
});
describe('aprovacao', () => {
    test('caso de teste presenca igual a 55% ', () => {
        let n1=1
        let n2=1
        let n3=1
        let n4=10
        let precensa = 0.55
        let result = verificaAprovacao(n1,n2,n3,n4, precensa)
        expect(result).toBe("Reprovado")
    });
});