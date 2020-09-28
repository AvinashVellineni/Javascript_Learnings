import axios from 'axios';

class Recipe {
  constructor(id) {
    this.id = id;
  }
  async getRecipe() {
    try {
      const response = await axios.get(
        `https://forkify-api.herokuapp.com/api/get?rId=${this.id}`
      );
      this.title = response.data.recipe.title;
      this.author = response.data.recipe.publisher;
      this.image = response.data.recipe.image_url;
      this.url = response.data.recipe.source_url;
      this.ingredients = response.data.recipe.ingredients;
    } catch (error) {
      console.log(error);
    }
  }

  calcTime() {
    const numberOfIngredients = this.ingredients.length;
    const periods = Math.ceil(numberOfIngredients / 3);
    this.time = periods * 15;
  }

  calcServings() {
    this.servings = 4;
  }
}

export default Recipe;
