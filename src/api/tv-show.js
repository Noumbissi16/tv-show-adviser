import axios from "axios";
// import { FAKE_POPULARS, FAKE_RECOMMENDATIONS } from "./fake-data";
import { BASE_URL } from "../config";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWZjN2QxMTY2ZDQ4ZTc1MDYxYjQ5MDA2OTIxNDFiMCIsInN1YiI6IjY0ZDY5MzE4ZDA1MWQ5MDBhZjM0OWRmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.29O6k26mRPj2ek1XCwPRd8VDP34tptRJcxHQUMEjR3U",
  },
};
const url = "https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1";

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
