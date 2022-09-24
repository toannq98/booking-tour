import { createSlice } from '@reduxjs/toolkit';

export const tourSlice = createSlice({
    name: "tour",
    initialState: {
        filters: {
            toursSearch: []
        },
        tour: {},
        tours: [],
        toursCatePage: [],
        categories: [],
        toursByCategoryInCountry: [],
        toursByCategoryOverseas: [],
        toursBooked: []
    },
    reducers: {
        loadTourHot: (state, action) => {
            state.tours = action.payload.tours;

        },
        loadCategories: (state, action) => {
            state.categories = action.payload.categories;

        },
        loadTourByCategoryInCountry: (state, action) => {
            state.toursByCategoryInCountry = action.payload.tours;
        },
        loadTourByCategoryOverseas: (state, action) => {
            state.toursByCategoryOverseas = action.payload.tours;
        },
        loadTourSearch: (state, action) => {
            state.filters.toursSearch = action.payload.tours;
        },
        loadTourSearchEmpty: (state, action) => {
            state.filters.toursSearch = action.payload.tours;
        },
        loadSortPriceHightToLow: (state, action) => {
            state.toursCatePage = action.payload.tours;
        },
        loadSortPriceLowToHight: (state, action) => {
            state.toursCatePage = action.payload.tours;
        },
        loadToursCatePage: (state, action) => {
            state.toursCatePage = action.payload.tours;
        },
        loadTour: (state, action) => {
            state.tour = action.payload.tour;
        },
        loadToursBooked: (state, action) => {
            state.toursBooked = action.payload;
        },
    }
})

// Action
export const {
    loadTourHot,
    loadCategories,
    loadTourByCategoryInCountry,
    loadTourByCategoryOverseas,
    loadTourSearch,
    loadSortPriceHightToLow,
    loadSortPriceLowToHight,
    loadToursCatePage,
    loadTour,
    setToursBooked,
    loadToursBooked
} = tourSlice.actions;

// Reducer
const tourReducer = tourSlice.reducer;

export default tourReducer;