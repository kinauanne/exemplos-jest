
var input = "12 1 5.30\n16 2 5.20\n"
function codigo(input){
    var lines = input.split('\n');
    let linha1 = (lines.shift().split(" "))

    let codp1 = linha1[0];
    let np1 = Number(linha1[1]);
    let vuc1 = parseFloat(linha1[2]);
    let tot1 = np1*vuc1
    
    let linha2 = (lines.shift().split(" "))
    
    let codp2 = linha2[0];
    let np2 = Number(linha2[1]);
    let vuc2 = parseFloat(linha2[2]);
    let tot2 = np2*vuc2
    let total = tot1+tot2
    console.log("VALOR A PAGAR: R$ "+total.toFixed(2))
}

codigo(input)
export default lib