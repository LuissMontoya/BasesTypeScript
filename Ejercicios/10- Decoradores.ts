

/*
    ===== Código de TypeScript =====
*/

function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T) {
    return class extends constructor {
      newProperty = "new Property";
      hello= "Override";
    };
  }
  
  
@classDecorator
class MiSuperClase{
    public miPropiedad:String ='ABC123';

    imprimir(){
        console.log('Hola Mundo');
    }
}
console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log(miClase.miPropiedad);