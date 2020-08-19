import { heroes } from '../data/heroes';

export const getHeroesByName = (name) => {
    
    //en caso de recibir un string vacio, retornar
    //un arreglo vacio.
    if(name=== ''){
        return [];
    }


    name = name.toLocaleLowerCase(); // para pasarlo a minuscula
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes( name ) );
    
}
