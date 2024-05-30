import { Component } from '@angular/core';
import { PokemonService } from '../../shared/pokemon.service';
import { Router } from '@angular/router'; // Import the 'Router' module from '@angular/router'
import { Pokemon } from '../../shared/pokemon.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-pokemon-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-pokemon-page.component.html',
  styleUrl: './create-pokemon-page.component.scss'
})
export class CreatePokemonPageComponent {
  name: string = '';
  imageUrl: string = '';
  description: string = '';

  constructor(private pokemonService: PokemonService ,private router: Router) {}

  onAddPokemon() {
    if(this.name&&this.imageUrl&&this.description){
      const newPokemon= new Pokemon(this.name, this.imageUrl, this.description);
      this.pokemonService.addPokemon(newPokemon);
      this.router.navigate(['/']);
    }else{
      alert('Please fill all the fields');

    }
  }

}
