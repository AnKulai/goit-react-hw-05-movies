import axios from 'axios';
import config from './../configuration/config';

const movieApi = {
  async fetchTrends() {
    try {
      const { data } = await axios.get(`${config.BASE_URL}/trending/all/day`, {
        params: {
          api_key: config.API_KEY,
        },
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  },

  async fetchDetails(movieId) {
    try {
      const { data } = await axios.get(`${config.BASE_URL}movie/${movieId}`, {
        params: {
          api_key: config.API_KEY,
        },
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  },

  async fetchCredits(movieId) {
    try {
      const { data } = await axios.get(
        `${config.BASE_URL}movie/${movieId}/credits`,
        {
          params: {
            api_key: config.API_KEY,
          },
        }
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  async fetchReviews(movieId) {
    try {
      const { data } = await axios.get(
        `${config.BASE_URL}movie/${movieId}/reviews`,
        {
          params: {
            api_key: config.API_KEY,
          },
        }
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  },

  async fetchMoviesByQuery(query) {
    try {
      const { data } = await axios.get(`${config.BASE_URL}search/movie`, {
        params: {
          api_key: config.API_KEY,
          query,
        },
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  },
};

export default movieApi;
