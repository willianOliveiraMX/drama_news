import dramaNewsApi from "../services/drama_news_api";
 
export default async function handler(req, res) {
  const articles = await dramaNewsApi.getAllArticles(5, 0);
  res.status(200).json(articles);
}
