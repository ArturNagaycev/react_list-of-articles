import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from '../features/articlesSlice';
import queryReducer from '../features/querySlice';

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    query: queryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
