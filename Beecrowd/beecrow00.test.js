import { main } from "./beecrow00"

describe('cenarios de teste', () => {


    cenarios.forEach((cenario, i) => {
        test ('caso #' + i, () => {
            let { lines, result} = cenarios;
            let output = main(lines);

            expect(output).toBe(result);
        });
    });
});