export function main(lines) {
    let N = lines[0].split(' ');
    let a = Number(N[0]);
    let b = Number(N[1]);
    let c = Number(N[2]);


    let maoir = math.max(a,b);
    maoir = math.max(maoir,c);

    return maoir + "eh o maior";
}