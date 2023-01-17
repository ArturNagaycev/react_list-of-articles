import React from 'react';
import { Alert, Divider, Grid, Typography } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import styles from './ArticleList.module.scss';

export const ArticleList: React.FC = () => {
  const { articles } = useAppSelector((state) => state.articles);
  const { query } = useAppSelector((state) => state.query);
  const getVisibleArticles = () => {
    const lowerQuery = query.toLowerCase().trim();
    if (lowerQuery !== '') {
      const keywords = lowerQuery.split(' ');
      const uniqueKeywords = Array.from(new Set(keywords)).filter((word) => word !== '');
      const articlesFilteredByTitle = articles.filter((article) =>
        uniqueKeywords.some((word) => article.title.toLowerCase().includes(word)),
      );
      const articlesFilteredByDesc = articles.filter((article) =>
        uniqueKeywords.some((word) => article.summary.toLowerCase().includes(word)),
      );
      const visibleArticlesSet = new Set([...articlesFilteredByTitle, ...articlesFilteredByDesc]);
      const visibleArticles = Array.from(visibleArticlesSet);

      if (lowerQuery !== '') {
        for (let i = 0; i < visibleArticles.length; i += 1) {
          for (let j = 0; j < keywords.length; j += 1) {
            const re = new RegExp(keywords[j], 'i');
            const { title: articleTitle, summary: articleSummary } = visibleArticles[i];
            const newArticleTitle = articleTitle.replace(re, (match) => `<mark>${match}</mark>`);
            visibleArticles[i] = { ...visibleArticles[i], title: newArticleTitle };

            const newArticleSummary = articleSummary.replace(
              re,
              (match) => `<mark>${match}</mark>`,
            );
            visibleArticles[i] = { ...visibleArticles[i], summary: newArticleSummary };
          }
        }
      }

      return visibleArticles;
    }

    return articles;
  };

  const visibleArticles = getVisibleArticles();
  const resultsQuantity = getVisibleArticles().length;

  return resultsQuantity > 0 ? (
    <>
      <Typography
        className={styles.list__results}
        sx={{ fontWeight: 600, mb: '5px', fontSize: 'inherit' }}
      >
        Results: {resultsQuantity}
      </Typography>
      <Divider sx={{ mb: '45px' }} />
      <Grid container spacing={6}>
        {visibleArticles.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </Grid>
    </>
  ) : (
    <Alert severity="info">There are no articles with these keywords</Alert>
  );
};
