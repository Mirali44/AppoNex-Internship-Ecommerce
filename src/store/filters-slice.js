import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        price: 20,
        starCount: 0,
        isDropdownOpen: false,
        selectedCategory: ''
    },
    reducers: {
        setPrice(state, action) {
            state.price = action.payload.price
        },
        setStarCount(state, action) {
            state.starCount = action.payload.starCount
        },
        setIsDropdownOpen(state) {
            state.isDropdownOpen = !state.isDropdownOpen
        },
        setSelectedCategory(state, action) {
            state.selectedCategory = action.payload.category
        } 
    }
})

export const filtersActions = filtersSlice.actions

export default filtersSlice