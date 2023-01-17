import React, { useEffect, useState } from 'react';
import { Alert, Container } from '@mui/material';
import { getArticles } from '../../api';
import { Filter } from '../Filter';
import { ArticleList } from '../ArticleList';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setArticles } from '../../features/articlesSlice';
import { Loader } from '../Loader';
import styles from './HomePage.module.scss';

export const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { articles } = useAppSelector((state) => state.articles);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getArticlesFromServer = async () => {
      try {
        setIsLoading(true);
        const articlesFromServer = await getArticles();

        dispatch(setArticles(articlesFromServer));
      } catch (error) {
        throw new Error('Data loading error');
      } finally {
        setIsLoading(false);
      }
    };

    getArticlesFromServer();
  }, []);

  return (
    <Container disableGutters maxWidth={false} className={styles.homepage}>
      <Filter />
      {isLoading && !articles.length && <Loader />}
      {!isLoading && articles.length > 0 && <ArticleList />}
      {!isLoading && !articles.length && (
        <Alert severity="warning">There are no articles - try to load later!</Alert>
      )}
    </Container>
  );
};
