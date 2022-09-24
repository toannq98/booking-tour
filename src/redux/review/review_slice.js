import { createSlice } from '@reduxjs/toolkit';

export const reviewSlice = createSlice({
    name: "review",
    initialState: {
        reviews: []
    },
    reducers: {
        loadReviews: (state, actions) => {
            state.reviews = actions.payload;
        }
        // addReview: (state, actions) => {
        //     state.reviews.push(actions.payload);;
        // }
    }
})
export const reviewActions = reviewSlice.actions;

const reviewReducer = reviewSlice.reducer;

export default reviewReducer;