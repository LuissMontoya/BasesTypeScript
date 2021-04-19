import { calcularISV, Producto } from "./06-desestructuracion-funcion.ts";
//Control + . 

/*
    ===== Código de TypeScript =====
*/



const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    }
];


const [total, isv] = calcularISV(carritoCompras);

console.log('Total ',total);
console.log('ISV ',isv);

