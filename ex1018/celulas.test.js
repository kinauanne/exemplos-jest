import { solucao } from './celulas';
describe('celula', () => {
    test('caso de teste ', () => {
        let n1=578
    
        let result = solucao(n1)
        expect(result).toBe("Aprovado")
    });
});