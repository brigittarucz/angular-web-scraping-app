import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/about/about.component';
import { RecipeImportFormComponent } from './modules/recipe/recipe.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
  },
  {
    path: 'recipe',
    component: RecipeImportFormComponent, // look into loadComponent
    // https://angular.io/guide/lazy-loading-ngmodules - lazy loading with child routes
    // loadChildren: () =>
    //   import('./modules/recipe-import-form/recipe-import-form.module').then(
    //     m => m.RecipeImportFormModule,
    //   ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
