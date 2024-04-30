//export function toString(algarismo) {
//    let resposta;
//if(algarismo == 0) resposta = "zero"
//if(algarismo == 1) resposta = "um"
//if(algarismo == 2) resposta = "dois"
//if(algarismo == 3) resposta = "tres"
//if(algarismo == 4) resposta = "quatro"
//if(algarismo == 5) resposta = "cinco"
//if(algarismo == 6) resposta = "seis"
//if(algarismo == 7) resposta = "sete"
//if(algarismo == 8) resposta = "oito"
//if(algarismo == 9) resposta = "nove"
    
//    return resposta;
//}

export function toString(x) {
    switch (x) {
        case 0: case "0": return "zero"
        case "1": case 1: return "um"
        case 2: case "2": return "dois"
        case 3: case "3": return "tres"
        case 4: case "4": return "quatro"
        case 5: case "5": return "cinco"
        case 6: case "6": return "seis"
        case 7: case "7": return "sete"
        case 8: case "8": return "oito"
        case 9: case "9": return "nove"
        default: return `não corresponde a um algarismo entre 0 a 9.`
    }
}
export function toStringDez(y) {
    switch (y) {
        case 10: case "10": return "dez"
        case 20: case "20": return "vinte"
        case 30: case "30": return "trinta"
        case 40: case "40": return "quarenta"
        case 50: case "50": return "cinquenta"
        case 60: case "60": return "sessenta"
        case 70: case "70": return "setenta"
        case 80: case "80": return "oitenta"
        case 90: case "90": return "noventa"
        default: return `não corresponde a uma dezena valida.`
    }
}