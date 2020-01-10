import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      // tslint:disable-next-line: max-line-length
      imageUrl: 'https://www.cookingclassy.com/wp-content/uploads/2012/11/spaghetti+with+meat+sauce11.jpg',
      ingredients: ['French Fries', 'Burger', 'Salad'],

    },
    {
      id: 'r2',
      title: 'Spaghetti',
      // tslint:disable-next-line: max-line-length
      imageUrl: 'https://www.cookingclassy.com/wp-content/uploads/2012/11/spaghetti+with+meat+sauce11.jpg',
      ingredients: ['Spaghetti', 'Tomatoes', 'Pasta'],

    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => {
      // tslint:disable-next-line: triple-equals
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      // tslint:disable-next-line: triple-equals
      return recipe.id !== recipeId;
    });

  }
}
