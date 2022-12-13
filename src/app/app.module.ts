import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { RecipeImportFormModule } from './modules/recipe/recipe.module';
import { IngredientsService } from './modules/recipe/services/ingredients.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecipeImportFormModule,
    HttpClientModule,
  ],
  providers: [IngredientsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
