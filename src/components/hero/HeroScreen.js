import React, { useMemo, useState } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';



export const HeroScreen = () => {

  // const [counter, setCounter] = useState(0);

  const { heroeId } = useParams();
  const navigate = useNavigate();
  // console.log(heroeId);
  // const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
  const hero = getHeroById(heroeId);
  // console.log(hero);

  const handleReturn = () => {
    // setCounter(counter + 1);
    navigate(-1);
  }

  if (!hero) {
    return <Navigate to='/' />
  }


  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  const imagePath = `/assets/${hero.id}.jpg`;

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
          src={imagePath}
          alt={superhero}
          className='img-thumbnail animate__animated animate__bounceInLeft'
        />
      </div>
      <div className='col-8 animate__animated animate__fadeIn'>
        <h3>{superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego:</b>{alter_ego}</li>
          <li className='list-group-item'><b>Publisher:</b>{publisher}</li>
          <li className='list-group-item'><b>Firs Appearance:</b>{first_appearance}</li>
        </ul>
        <h5 className='mt-3'>
          Characters
        </h5>
        <p>{characters}</p>
        <button
          className='btn btn-outline-info'
          onClick={handleReturn}
        >
          Return 
          {/* {counter} */}
        </button>
      </div>
    </div>
  )
}
