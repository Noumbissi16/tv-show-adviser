import axios from "axios";
// import { FAKE_POPULARS, FAKE_RECOMMENDATIONS } from "./fake-data";
import { BASE_URL } from "../config";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.REACT_APP_BEARER_KEY,
  },
};
const url = "https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1";


console.log(options);

export class TVShowAPI {
  static async fetchPopulars() {
    try {
      // perform request
      const response = (await axios.get(url, options)).data;
      // return the request
      return response.results;
    } catch (e) {
      alert(e);
    }
    // return FAKE_POPULARS;
  }
  static async fetchRecommendations(tvShowId) {
    // perform request
    const response = (
      await axios.get(
        `${BASE_URL}/movie/${tvShowId}/recommendations?language=fr-FR&page=1`,
        options
      )
    ).data;
    // return the request
    return response.results.filter((mov) => {
      return mov.backdrop_path !== null;
    });
    // return FAKE_RECOMMENDATIONS;
  }
  static async fetchByTitle(title) {
    const response = (
      await axios.get(
        `${BASE_URL}/search/movie?query=${title}&language=fr-FR&page=1`,
        options
      )
    ).data;
    console.log(response.results);
    return response.results.filter((mov) => {
      return mov.backdrop_path !== null;
    });
  }
}
