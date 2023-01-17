import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { Alert, Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getArticle } from '../../api';
import { Article } from '../../types/Article';
import { Loader } from '../Loader';
import styles from './ArticlePage.module.scss';

export const ArticlePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [article, setArticle] = useState<Article | null>(null);
  const { articleId } = useParams();

  useEffect(() => {
    const getArticleFromServer = async () => {
      try {
        setIsLoading(true);
        const articleFromServer = await getArticle(Number(articleId));

        setArticle(articleFromServer);
      } catch (error) {
        throw new Error('Data loading error');
      } finally {
        setIsLoading(false);
      }
    };

    getArticleFromServer();
  }, []);

  return (
    <Container disableGutters maxWidth={false} className={styles.article}>
      {isLoading && !article && <Loader />}
      {!isLoading && article && (
        <Card>
          <CardMedia component="img" height="245" image={article.imageUrl} alt={article.title} />
          <CardContent className={styles.article__content} sx={{ p: '35px 75px 50px' }}>
            <Typography align="center" sx={{ mb: '50px' }} variant="h5" component="h1">
              {article.title}
            </Typography>
            <Typography sx={{ color: '#000' }} variant="body2" color="text.secondary">
              {article.summary}
            </Typography>
          </CardContent>
          <Typography>
            <Button
              sx={{ color: '#363636', m: '0 150px 45px', fontWeight: '700', textTransform: 'none' }}
              component={RouterLink}
              to="/home"
            >
              <ArrowBackIcon sx={{ mr: '6px' }} fontSize="small" />
              Back to homepage
            </Button>
          </Typography>
        </Card>
      )}
      {!isLoading && !article && (
        <Alert severity="warning">There is no article - try to load later!</Alert>
      )}
    </Container>
  );
};
