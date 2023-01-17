import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ArticlePage } from './components/ArticlePage';
import { HomePage } from './components/HomePage';
import { NotFoundPage } from './components/NotFoundPage';

export const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/home" element={<Navigate to="/" replace />} />
    <Route path="/article/:articleId" element={<ArticlePage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
