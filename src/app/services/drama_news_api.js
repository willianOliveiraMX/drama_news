import config from "../config";
import request from "../utils/request";

const dramaNewsApi = {
  getAllArticles: async (limit = 5, offset = 0) => {
    try {
      const response = await request({
        url: `${config.drama_news_api.url}/api/v1/articles?limit=${limit}&offset=${offset}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        token: process.env.DRAMA_NEWS_API_KEY || null,
      });
      const { data: { body } } = response;

      return body.data;
    } catch (error) {
      console.error('Error fetching articles:', error);
      throw error;
    }
  },
  getArticleBySlug: async (slug) => {
    try {
      const response = await request({
        url: `${config.drama_news_api.url}/api/v1/articles/slug/?slug=${slug}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        token: process.env.DRAMA_NEWS_API_KEY || null,
      });
      const { data: { body } } = response;

      return body.data;
    } catch (error) {
      console.error(`Error fetching article with slug ${slug}:`, error);
      throw error;
    }
  },
};

export default dramaNewsApi;