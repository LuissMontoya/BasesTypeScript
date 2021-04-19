

/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(argumento:T){   //Tipo Genérico
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(18);
let soyArreglo = queTipoSoy([1,2,3,4,5,6,7,8,9]);
let soyExplicito = queTipoSoy<number>(5512);

console.log(soyNumero);
console.log(soyString);
console.log(soyArreglo);
console.log(soyExplicito);