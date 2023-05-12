import axios from 'axios';

export function fetchTours() {
    return axios.get('https://chalk-eminent-tangerine.glitch.me/tours');
}
export function fetchCategories() {
    return axios.get('https://chalk-eminent-tangerine.glitch.me/categories');
}
export function fetchTourByCategoryInCountry(id) {
    return axios.get(`https://chalk-eminent-tangerine.glitch.me/tours?idCate=${id}`);
}
export function fetchTourByCategoryOverseas(id) {
    return axios.get(`https://chalk-eminent-tangerine.glitch.me/tours?idCate=${id}`);
}
export function fetchSearchTours(text) {
    return axios.get(`https://chalk-eminent-tangerine.glitch.me/tours?q=${text}`);
}
export function fetchSortPriceHightToLow(id) {
    return axios.get(`https://chalk-eminent-tangerine.glitch.me/tours?idCate_like=${id}_&_sort=price&_order=desc`);
}
export function fetchSortPriceLowToHight(id) {
    return axios.get(`https://chalk-eminent-tangerine.glitch.me/tours?idCate_like=${id}_&_sort=price&_order=asc`);;
}
export function fetchToursCatePage(id) {
    return axios.get(`https://chalk-eminent-tangerine.glitch.me/tours?idCate_like=${id}_`);
}
export function fetchFilterToursByCate(params) {
    return axios.get(`https://chalk-eminent-tangerine.glitch.me/tours?${params}`);
}
export function fetchTour(id) {
    return axios.get(`https://chalk-eminent-tangerine.glitch.me/tours/${id}`)
}
export function addItemForToursUserBooked(item) {
    return axios.post(`https://chalk-eminent-tangerine.glitch.me/toursUserBooked`, item)
}
export function fetchToursBooked() {
    return axios.get(`https://chalk-eminent-tangerine.glitch.me/toursUserBooked`)
}
export function deleteTourAfterBook(id) {
    return axios.delete(`https://chalk-eminent-tangerine.glitch.me/tours/${id}`)
}
