// Global app controller
import Search from './models/Search';
import { elements, renderLoader, clearLoader } from './views/base';
import * as searchView from './views/searchView';
import Recipe from './models/Recipe';

const state = {};
const controlSearch = async () => {
  const query = searchView.getInput();
  if (query) {
    state.search = new Search(query);
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);
    try {
      await state.search.getResults();
      //console.log(state.search.result);
      clearLoader();
      searchView.renderResults(state.search.result);
    } catch (error) {
      console.log(`Error processing search results`);
      clearLoader();
    }
  }
};

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
  const btn = e.target.closest('.btn-inline');
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
  }
});

const controlRecipe = async () => {
  const id = window.location.hash.replace('#', '');
  console.log(id);
  if (id) {
    state.recipe = new Recipe(id);
    try {
      await state.recipe.getRecipe();
      state.recipe.calcTime();
      state.recipe.calcServings();
      console.log(state.recipe);
    } catch (error) {
      console.log('error processing recipe.');
    }
  }
};

window.addEventListener('hashchange', controlRecipe);
window.addEventListener('load', controlRecipe);
