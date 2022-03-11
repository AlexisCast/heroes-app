import React, { useMemo, useState } from 'react'
import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'

export const HeroList = ({ publisher }) => {

   // const [counter, setCounter] = useState(0);

   const heroes =useMemo(()=>getHeroesByPublisher(publisher),[publisher]);
   // const heroes= getHeroesByPublisher(publisher);

   // const handleCounter = () => {
   //    setCounter(counter + 1);
   //  }
   return (
      <div
         className='row rows-cols-1 row-cols-md-3 g-3'
      >

         {
            heroes.map(hero => (
               <HeroCard
                  key={hero.id}
                  {...hero}
               />
            ))
         }
         {/* {counter}
         <button
          className='btn btn-outline-info'
          onClick={handleCounter}
        >
          Return 
        </button> */}
      </div>
   )
}
