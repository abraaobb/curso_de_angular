let isEnoughToBeatMF = function (parsecs: number): boolean {
    return parsecs < 12
}

let distance = 14
console.log(`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'}`)

let call = (name: string) => console.log(`Do you copy, ${name}?`);
call('1')

function inc(speed: number, inc: number = 1): number {
    return speed + inc;
}

console.log(`inc (5, 3) = ${inc(5, 3)}`);
console.log(`inc (5) = ${inc(5)}`);