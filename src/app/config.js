const config = {
  drama_news_api: {
    url: process.env.DRAMA_NEWS_API_URL || 'http://localhost:5000',
    api_key: process.env.DRAMA_NEWS_API_KEY || 'API_KEY_HERE',
    timeout: process.env.DRAMA_NEWS_API_TIMEOUT || 5000,
  }
};

export default config;
