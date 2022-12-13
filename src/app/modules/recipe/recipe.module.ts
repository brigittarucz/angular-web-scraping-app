import { NgModule } from '@angular/core';
import { RecipeImportFormComponent } from './recipe.component';
import { RecipeIngredientFormComponent } from './components/recipe-ingredient-form/recipe-ingredient-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecipeIngredientsComponent } from './components/recipe-ingredients/recipe-ingredients.component';
@NgModule({
  declarations: [
    RecipeImportFormComponent,
    RecipeIngredientFormComponent,
    RecipeIngredientsComponent,
  ],
  imports: [ReactiveFormsModule, CommonModule],
  providers: [],
  bootstrap: [],
})
export class RecipeImportFormModule {}
