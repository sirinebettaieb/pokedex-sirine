import { RouterModule, Routes } from '@angular/router';

import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';
import { CreatePokemonPageComponent } from './pages/create-pokemon-page/create-pokemon-page.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: PokedexPageComponent },
  { path: 'create', component: CreatePokemonPageComponent }
];

