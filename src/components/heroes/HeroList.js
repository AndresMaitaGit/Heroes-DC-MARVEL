import React, { useMemo } from 'react'
import { getHeroesByPublisgher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {
    
    // const heroes = getHeroesByPublisgher(publisher);
    // se puede realizar usando useMemo Para mejorar la interfaz de carga.
    const heroes = useMemo(() => getHeroesByPublisgher(publisher), [publisher]);
    
    
    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map(hero => (
                    <HeroCard key={ hero.id }
                    {...hero}
                    >
                        {hero.superhero}
                    </HeroCard>
                ))

            }
        </div>
    )
}
