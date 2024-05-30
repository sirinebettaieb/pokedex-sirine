import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon.model';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemons: Pokemon[] = [
    new Pokemon(
    'Bulbasaur', 
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png', 
    'A strange seed was planted on its back at birth.'),
    new Pokemon(
      'Charmander',
      'https://img.pokemondb.net/artwork/large/charmander.jpg', 
      'Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.'),
    new Pokemon(
      'Pikachu', 
      'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/025.png', 
      'An electric-type Pokémon.'),
 
  ]
 
   
    getPokemons(): Pokemon[] {
      return this.pokemons;
    }
  
    getPokemonByName(name: string): Pokemon | undefined {
      return this.pokemons.find(pokemon => pokemon.name === name);
    }
    addPokemon(pokemon: Pokemon) {
      this.pokemons.push(pokemon);
    }

  constructor() { }
}
