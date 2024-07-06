import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { mealActions } from '../../store/meal-slice';
import { filtersActions } from '../../store/filters-slice';

export default function BasicRating() {
  const starCount = useSelector(state => state.filters.starCount)
  const dispatch = useDispatch()

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
      style={{
        display: 'flex', flexDirection: 'row'
      }}

    >
      <Typography style={{marginRight: '5px'}}>Select Rating:</Typography>
      <Rating
        name="simple-controlled"
        value={starCount}
        onChange={(event, newValue) => {
          dispatch(
            filtersActions.setStarCount({
              starCount: newValue
            })
          )
          dispatch(
            mealActions.sortByRating({
              rating: newValue
            })
          )
        }}
      />
    </Box>
  );
}