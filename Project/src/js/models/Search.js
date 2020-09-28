import axios from 'axios';

class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      const myResults = await axios.get(
        `https://forkify-api.herokuapp.com/api/search?&q=${this.query}`
      );
      this.result = myResults.data.recipes;
      //console.log(this.results);
    } catch (error) {
      console.log(`Error from search results ${error}`);
    }
  }
}

export default Search;
