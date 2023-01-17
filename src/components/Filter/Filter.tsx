import React, { useCallback, useEffect, useState } from 'react';
import { FormControl, InputAdornment, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import debounce from 'lodash.debounce';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setQuery } from '../../features/querySlice';
import styles from './Filter.module.scss';

export const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  const { query } = useAppSelector((state) => state.query);
  const [visibleQuery, setVisibleQuery] = useState(`${query}`);
  const onInputQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVisibleQuery(event.target.value);
  };
  const applyQuery = useCallback(
    debounce((value) => dispatch(setQuery(value)), 800),
    [],
  );

  useEffect(() => {
    applyQuery(visibleQuery);
  }, [visibleQuery]);

  return (
    <>
      <Typography
        className={styles.filter__title}
        sx={{ fontWeight: 600, mb: '10px', lineHeight: '20px' }}
      >
        Filter by keywords
      </Typography>
      <FormControl className={styles.filter__form} sx={{ mb: '40px' }}>
        <TextField
          id="search"
          className={styles.filter__text}
          sx={{ height: '50px' }}
          value={visibleQuery}
          onChange={onInputQuery}
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment sx={{ height: '50px' }} position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    </>
  );
};
