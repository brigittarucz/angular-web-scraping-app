import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-ingredient-form',
  template: `
    Link Ingredient Website:
    <input type="text" name="link" [formControl]="link" (keyup)="getInput()" />
  `,
})
export class RecipeIngredientFormComponent {
  // Multiple values
  // formGroup: FormGroup = new FormGroup({
  //   link: new FormControl('', [Validators.required]),
  // });
  link = new FormControl('', [Validators.required]);

  getInput() {
    console.log(this.link.value);
  }
}
