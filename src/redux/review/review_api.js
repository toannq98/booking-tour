import axios from 'axios';

export function addReview(review) {
    return axios.post(`https://json-server-booking-tour.herokuapp.com/tourReviews`, review)
}
export function fetchReviews(id) {
    return axios.get(`https://json-server-booking-tour.herokuapp.com/tourReviews?tourId=${id}&_expand=user`)
}