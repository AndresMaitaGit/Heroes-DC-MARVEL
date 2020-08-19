import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({history}) => {

    // const params = useParams();
    // console.log(params);
    const {heroeId} = useParams();


    // const hero = getHeroById(heroeId);
        // se puede realizar usando useMemo Para mejorar la interfaz de carga.
    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
    

    if( !hero ) {
        return <Redirect to="/" />;
    }

    const handleReturn = () => {
 
        if( history.length <=2 ) {
            history.push('/'); // en caso de que la pagina anterior este vacia.
        } else {
            history.goBack();
        }
    }

    const { 
        superhero,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/heroes/${heroeId }.jpg`}
                alt= {superhero}
                className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8 animate__animated animate__bounceIn">
                <h3> {superhero} </h3>
                <ul>
                    <li className="list-group-item"><b> Alter ego: </b> {alter_ego} </li>
                    <li className="list-group-item"><b> Publisher: </b> {alter_ego} </li>
                    <li className="list-group-item"><b> First appearance: </b> { first_appearance } </li>
                </ul>

                <h5> characters </h5>
                <p> { characters} </p>

                <button 
                className="btn btn-outline-info"
                onClick={handleReturn}
                >
                    Regresar
                </button>
            </div>
                 
        </div>
    )
}
