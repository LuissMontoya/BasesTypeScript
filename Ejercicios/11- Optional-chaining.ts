

/*
    ===== Código de TypeScript =====
*/

//  ? : usos

interface Pasajero{
  nombre: string;
  hijos?: string[]
}

const pasajero1: Pasajero={
  nombre:'Luis'
}


const pasajero2: Pasajero={
  nombre:'Melissa',
  hijos: ['Maria', 'Jorge']
}

function imprimeHijos(pasajero: Pasajero):void{
  const cuantosHijos = pasajero.hijos?.length || 0;

  console.log(cuantosHijos);
}

imprimeHijos(pasajero2);
imprimeHijos(pasajero1);