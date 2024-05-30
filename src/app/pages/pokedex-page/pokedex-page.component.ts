import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../shared/pokemon.service';
import { Pokemon } from '../../shared/pokemon.model';
import { PokemonListComponent } from '../../components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from '../../components/pokemon-detail/pokemon-detail.component';
@Component({
  selector: 'app-pokedex-page',
  standalone: true,
  imports: [PokemonListComponent,PokemonDetailComponent],
  templateUrl: './pokedex-page.component.html',
  styleUrl: './pokedex-page.component.scss'
})
export class PokedexPageComponent implements OnInit {
  pokemons!: Pokemon[];
  selectedPokemon!: Pokemon;


  constructor( private pokemonservice: PokemonService ) { }
  ngOnInit(): void {
    this.pokemons = this.pokemonservice.getPokemons()
  }
  onPokemonSelected(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }

}
