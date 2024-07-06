import { createSlice } from "@reduxjs/toolkit";

const mealSlice = createSlice({
  name: "meal",
  initialState: {
    items: [],
    filteredItems: [],
    filters: {
      category: "",
      priceRange: 0,
      rating: 0
    },
  },
  reducers: {
    replaceMeals(state, action) {
      state.items = action.payload.items;
      state.filteredItems = action.payload.items
    },
    sortByCategory(state, action) {
        const category = action.payload.category;
        state.filters.category = category;
  
        state.filteredItems = state.items.filter(item => {
          const matchesCategory = category ? item.category === category : true;
          const matchesPrice = state.filters.priceRange ? Number(item.price) < state.filters.priceRange : true;
          const matchesRating = state.filters.rating ? Number(item.rating) === state.filters.rating : true;
          return matchesCategory && matchesPrice && matchesRating;
        });
    },
    sortByPrice(state, action) {
        const price = action.payload.price;
        state.filters.priceRange = price;
  
        state.filteredItems = state.items.filter(item => {
          const matchesCategory = state.filters.category ? item.category === state.filters.category : true;
          const matchesPrice = price ? Number(item.price) < price : true;
          const matchesRating = state.filters.rating ? Number(item.rating) === state.filters.rating : true;
          return matchesCategory && matchesPrice && matchesRating;
        });
    },
    sortByRating(state, action) {
        const rating = action.payload.rating;
        state.filters.rating = rating;
  
        state.filteredItems = state.items.filter(item => {
          const matchesCategory = state.filters.category ? item.category === state.filters.category : true;
          const matchesPrice = state.filters.priceRange ? Number(item.price) < state.filters.priceRange : true;
          const matchesRating = rating ? Number(item.rating) === rating : true;
          return matchesCategory && matchesPrice && matchesRating;
        });
      },
  },
});

export const mealActions = mealSlice.actions;

export default mealSlice;
