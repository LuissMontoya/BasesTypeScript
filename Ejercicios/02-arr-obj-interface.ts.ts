

/*
    ===== Código de TypeScript =====
*/

let habilidades:(string)[] =[ "Luis"];


interface personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: String;//es opcional, de tipo String, ? para definir el tipo opcional  
}


//objetos:
const personaje:any = {
nombre: 'Strider',
hp: 100,
habilidades: ['Bash','Counter','Healing']
} 

personaje.puebloNatal = 'Pueblo Paleta';


console.table(personaje);