import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { RecipeImportFormModule } from './modules/recipe/recipe.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RecipeImportFormModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
