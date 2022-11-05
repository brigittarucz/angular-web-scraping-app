import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeImportFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('Lifecycle Recipe Import');
  }
}
