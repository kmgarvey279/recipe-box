import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = "Recipe List";
  selectedRecipe = null;

  masterRecipeList: Task[] = [
    new Recipe('Chocolate Cake', 'instructions', 'ingredients'),
    new Recipe('Banana Bread', 'instructions', 'ingredients')
  ];

  addRecipe(newRecipe: Recipe) {
    this.masterRecipeList.push(newRecipe);
  }

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }
}
