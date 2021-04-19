/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen: number;
    segundo:number;
    cancion: string;
    detalles: Detalles

}

interface Detalles{
    autor:string;
    anio: number
}

const reproductor: Reproductor ={
    volumen:90,
    segundo: 36,
    cancion: 'Mess',
    detalles:{
        autor:'Ed Sheeran',
        anio: 2015
    }
}

//Desestructuración

const {volumen,segundo, cancion,detalles}= reproductor;
const {autor}=detalles;

//2. Opción
//const {volumen,segundo, cancion,detalles:{autor}}= reproductor;
// Sacar con diferente nombre
//const {volumen,segundo, cancion,detalles:{autorDetalle}}= reproductor;

//const autor = ''; 

console.log('El volumen actual es de: ',volumen);
console.log('El segundo actual es de: ',segundo);
console.log('La canción actual es de: ',cancion);
console.log('El autor es: ',autor);


//Desestructuración de Arreglos
console.log('----------------------- ');

const dbz:string []=['Goku','Vegeta','Trunks'];

console.log('Personaje 1: ',dbz[0]);
console.log('Personaje 2: ',dbz[1]);
console.log('Personaje 3: ',dbz[2]);
console.log('----------------------- ');
const [,,p3]=dbz;

//console.log('Personaje 1: ',p1);
//console.log('Personaje 2: ',p2);
console.log('Personaje 3: ',p3);