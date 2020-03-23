import { Component, OnInit } from '@angular/core';

import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
      new Recipe('Название рецепта', 'Описание рецепта','https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21.jpg'),
    new Recipe('Пицца', 'Описание рецепта пиццы','https://www.citypizza.ru/upload/img/shop/pizza/BORT/resize/4-%D1%81%D0%B5%D0%B7%D0%BE%D0%BD%D0%B0-%D0%B1%D0%BE%D1%80%D1%82-listThumb.jpg')
  ]; // Наш список из рецептов
  constructor() { }

  ngOnInit() {
  }

}
