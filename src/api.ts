import { Article } from './types/Article';

const BASE_URL = 'https://api.spaceflightnewsapi.net/v3';

function wait(delay: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function get<T>(url: string): Promise<T> {
  const fullURL = BASE_URL + url;

  return wait(300)
    .then(() => fetch(fullURL))
    .then((res) => res.json());
}

export const getArticles = () => get<Article[]>('/articles');

export const getArticle = (articleId: number) => get<Article>(`/articles/${articleId}`);
