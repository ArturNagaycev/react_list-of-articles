import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Grid } from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import parse from 'html-react-parser';
import { Article } from '../../types/Article';
import styles from './ArticleItem.module.scss';
import { getDate } from '../../utils/getDate';

type Props = {
  article: Article;
};

export const ArticleItem: React.FC<Props> = ({ article }) => {
  const { id, title, imageUrl, publishedAt, summary } = article;
  return (
    <Grid item xs={12} sm={6} md={4} className={styles.article}>
      <Card className={styles.article__card}>
        <CardActionArea component={RouterLink} to={`/article/${id}`}>
          <CardMedia
            className={styles.article__image}
            component="img"
            image={imageUrl}
            alt={title}
          />
          <CardContent sx={{ p: '25px' }}>
            <Typography variant="body1" className={styles.article__date} sx={{ mb: '24px' }}>
              <CalendarTodayOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
              {getDate(publishedAt)}
            </Typography>
            <Typography id="title" sx={{ marginBottom: '20px' }} variant="h5" component="h2">
              {parse(title)}
            </Typography>
            <Typography sx={{ marginBottom: '20px' }} variant="body2">
              {parse(summary.length <= 100 ? summary : `${summary.slice(0, 97)}...`)}
            </Typography>
            <Typography>
              <Button sx={{ color: '#363636', p: 0, fontWeight: '700', textTransform: 'none' }}>
                Read more
                <ArrowForwardIcon sx={{ ml: '6px' }} fontSize="small" />
              </Button>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
