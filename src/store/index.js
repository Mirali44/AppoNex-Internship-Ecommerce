import { configureStore } from "@reduxjs/toolkit";

import mealSlice from "./meal-slice";
import filtersSlice from "./filters-slice";

const store = configureStore({
    reducer: {meal: mealSlice.reducer, filters: filtersSlice.reducer}
})

export default store;