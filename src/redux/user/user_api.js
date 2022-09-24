import axios from 'axios';

export function fetchCreateUser(params) {
    return axios.post(`https://json-server-booking-tour.herokuapp.com/users`, params)
}
export function addLogged(params) {
    return axios.post(`https://json-server-booking-tour.herokuapp.com/signin`, params)
}

export function checkLogin(id, accessToken) {
    return axios.get(`https://json-server-booking-tour.herokuapp.com/600/users/${id}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        }
    })
}


// handle update user infor
export function handleUpdateUserInfor(user) {
    return axios.put(`https://json-server-booking-tour.herokuapp.com/users/${user.id}`, user);
}

export function fetchAccoutAdmin() {
    return axios.get(`https://json-server-booking-tour.herokuapp.com/adminUsers/1`)
}