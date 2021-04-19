

/*
    ===== Código de TypeScript =====
*/

class PersonaNomral{
    constructor(
        public nombre:string,
        public direccion:string)
        {}
}

class Heroe extends PersonaNomral{
   // private : visible dento de la clase
   // public  : fuera de la clase se podra ver la propiedad
   // static  : acceder al valor de la propiedad sin crear una instancia de la Clase
    //public alterEgo: string;
    //public edad: number;
    //public nombreReal: number;

   // imprimirNombre(){
    //    return this.alterEgo +' ' + this.nombreReal;
   // }

   constructor (public alterEgo: string,
    public edad?:number,
    public nombreReal?: string)
    {
        super(nombreReal,'New York, USA');
    }
}

//interface Personaje2{
//    alterEgo?: string;
//    edad?: number;
 //   nombreReal?: number;  
//}

const iroman =new Heroe('Iroman',45,'Tony');
//const spiderman: Personaje2 = {}


console.log(iroman);
//console.log(spiderman)