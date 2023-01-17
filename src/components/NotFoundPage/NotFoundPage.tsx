import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Container } from '@mui/material';
import styles from './NotFoundPage.module.scss';

export const NotFoundPage: React.FC = () => (
  <Container
    sx={{ display: 'flex', justifyContent: 'center' }}
    disableGutters
    maxWidth={false}
    className={styles.container}
  >
    <Alert sx={{ fontSize: '24px', display: 'flex', justifyContent: 'center' }} severity="warning">
      Page not found
    </Alert>
    <Button
      sx={{ fontWeight: '700' }}
      color="success"
      size="large"
      variant="contained"
      component={RouterLink}
      to="/home"
    >
      Back to homepage
    </Button>
  </Container>
);
