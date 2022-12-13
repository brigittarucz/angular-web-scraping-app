import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-ingredient-form',
  template: `
    <p>Insert below the link to the website to extract ingredients from:</p>
    <form [formGroup]="formGroup" (ngSubmit)="onSubmit()">
      <input
        type="url"
        name="url"
        pattern="https://.*"
        formControlName="url"
        list="supportedUrls"
        (focus)="onFocusIn()"
        (focusout)="onFocusOut()"
      />

      <datalist id="supportedUrls">
        <option value="https://developer.mozilla.org/"></option>
      </datalist>

      <div
        *ngIf="
          !isInputFocused &&
          !formGroup.controls['url'].pristine &&
          formGroup.controls['url'].errors
        "
        [ngStyle]="{ color: 'red', 'font-weight': 700 }"
      >
        <div *ngIf="formGroup.controls['url'].errors['required']">
          <p>Please insert a value in the url field</p>
        </div>

        <div *ngIf="formGroup.controls['url'].errors['pattern']">
          <p>Please add an https based url</p>
        </div>
      </div>

      <button type="submit">Get ingredients</button><br />

      <div
        *ngIf="isFormSubmitted && this.formGroup.status === 'INVALID'"
        [ngStyle]="{ color: 'red', 'font-weight': 700 }"
      >
        <p>Cannot submit form until errors are handled</p>
      </div>
    </form>
    <small>Currently supported: xyz.recipes.com</small>
  `,
})
export class RecipeIngredientFormComponent {
  // Multiple values
  formGroup: FormGroup = new FormGroup({
    url: new FormControl('', [Validators.required]),
  });
  isInputFocused: boolean = false;
  isFormSubmitted: boolean = false;

  onSubmit() {
    if (this.formGroup.status === 'INVALID') {
      this.isFormSubmitted = true;
      return;
    }
  }

  onFocusIn() {
    this.isInputFocused = true;
  }

  onFocusOut() {
    this.isInputFocused = false;
  }
}
