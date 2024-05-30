import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../shared/pokemon.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  @Input() pokemons: Pokemon[] = [];
  @Output() pokemonSelected = new EventEmitter<Pokemon>();

  onPokemonClick(pokemon: Pokemon) {
    this.pokemonSelected.emit(pokemon);
  }

}
