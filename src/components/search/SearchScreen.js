import React, { useMemo } from 'react'
import queryString from 'query-string';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

    //----------QUERY PARA REALIZAR BUSQUEDAS
    const  location =  useLocation()
    // console.log(location);
    // console.log(location.search);
    const {q=''} = queryString.parse(location.search); // es q porque abado se definio como q en ?q
    // console.log(q); 
    
    //----------- END QUERYYY


    const [ formValues, handleInputChange, reset ] = useForm( { 
        searchText: q
    } );
    
    const {searchText} = formValues;

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])
    // const heroesFiltered = getHeroesByname(searchText);
     
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Formulario de Busqueda</h4>
                    <hr />
                    <form onSubmit={handleSearch} >
                        <input 
                            type="text"
                            placeholder="Buscar Héroe"
                            name="searchText"
                            className="form-control"
                            autoComplete="off"
                            onChange={handleInputChange}
                            value = {searchText}
                        />
                        <button
                            type="submit"
                            className="btn btn-block btn-outline-success my-2"
                        >
                            Buscar...
                        </button>


                    </form>

                </div>

                <div className="col-7">
                    <h4> Resultados </h4>
                    <hr />

                    {
                        (q=== '')
                        &&
                         <div className="alert alert-warning">
                            Busca un Héroe
                        </div>
                    }
                   
                    {
                        (q !== '' && heroesFiltered.length === 0)
                        &&
                         <div className="alert alert-danger animate__animated animate__shakeX">
                            No se encontraron héroes con <strong>{ q }</strong>
                        </div>
                    }

                    {
                        heroesFiltered.map(hero => (
                            <HeroCard 
                            key={hero.id}
                            {...hero}
                            />
                        ))
                    }

                </div>
                
            </div>
        </div>
    )
}
