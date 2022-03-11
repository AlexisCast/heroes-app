import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.search)

  // const query = queryString.parse(location.search);
  // console.log(query)
  const {q=''} = queryString.parse(location.search);
  console.log('q= ',q);

  const [formValues, handleInputChange, reset] = useForm({
    searchText: q,
  });
  const { searchText } = formValues;
  const heroesFiltered = getHeroesByName(q);
  console.log(heroesFiltered);


  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
    navigate(`?q=${searchText}`);
  }
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Search for:</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type='text'
              placeholder="Search for a herore"
              className='form-control'
              name="searchText"
              autoComplete='off'
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              className='btn btn-outline-primary mt-1'
              type='submit'
            >
              Search...
            </button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <hr />
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
    </>
  )
}
