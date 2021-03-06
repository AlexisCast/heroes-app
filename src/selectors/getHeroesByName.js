
import { heroes } from '../data/heroes';

export const getHeroesByName = (name = '') => {
   console.log('getHeroesByName called');
   if (name.length === 0) {
      return [];
   }
   name = name.toLocaleLowerCase();
   return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name));

}
