/*
    ===== Código de TypeScript =====
*/

function sumar(a:number,b:number):number{
    return a+b;
   //return (a+b).toString();
}

const sumarFlecha = (a:number,b:number):number =>{
    return a+b;
}

function multiplicar(numero:number, otroNumero?:number, base:number=2){
    //para los argumentos opcionales usar ?

    return numero * base;
}

interface PersonajeLOR{
    nombre: string;
    pv: number;
    mostrarHp:()=>void;

}

function curar(personaje: PersonajeLOR, curarX:number):void{
    personaje.pv+=curarX;
    console.log(personaje);
    return undefined;
}


//const resultado = sumar('Luis','Montoya');
const resultado = sumar(10,5);
const resultado1 = multiplicar(5,0,10);
const newPersonaje:PersonajeLOR={
    nombre: 'Strider',
    pv: 50,
    mostrarHp(){
        console.log('Puntos de vida ',this.pv);
    }
}


console.log(resultado);
console.log(resultado1);
curar(newPersonaje,20);
newPersonaje.mostrarHp();