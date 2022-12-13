import { Component, Input } from '@angular/core';
import { Ingredient } from '../../services/ingredients.service';

@Component({
  selector: 'app-recipe-ingredients',
  template: ` <ul>
    <div *ngFor="let ingredient of ingredients">
      <div *ngFor="let ingredientObj of ingredient | keyvalue">
        <li>
          {{ ingredientObj.key }}
          <div *ngFor="let offer of ingredientObj.value">
            <div *ngFor="let offerObj of offer | keyvalue">
              {{ offerObj.key }} -
              {{ offerObj.value }}
            </div>
          </div>
        </li>
      </div>
    </div>
  </ul>`,
})
export class RecipeIngredientsComponent {
  @Input() ingredients: Ingredient[] = [];
  @Input() ingredientsValues: string[] = [];
}
