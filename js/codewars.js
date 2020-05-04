"use stritct";

// const semas = ['Sam', 'Harris']
// const patrikas = ['Patrick', 'Feenan']
// const evanas = ['Evan', 'Cole']
// const ipas = ['P', 'Favuzzi']
// const deividas = ['David', 'Mendieta']
function abbrevName(name){
    const namesArray = name.split(' ');
    if (namesArray.length===1){
        return `${namesArray[0].charAt(0)}`
    } else {return `${namesArray[0].charAt(0)}`+'.'+`${namesArray[namesArray.length-1].charAt(0)}`}
}


console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("P Favuzzi"), "P.F");
console.log(abbrevName("David Mendieta"), "D.M");