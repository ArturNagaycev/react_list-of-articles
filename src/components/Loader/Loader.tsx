import { Box, CircularProgress } from '@mui/material';
import React from 'react';

export const Loader: React.FC = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <CircularProgress size={200} thickness={1} />
  </Box>
);
