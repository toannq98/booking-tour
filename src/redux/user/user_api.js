import axios from 'axios';

export function fetchCreateUser(params) {
    return axios.post(`https://chalk-eminent-tangerine.glitch.me/users`, params)
}
export function addLogged(params) {
    return axios.post(`https://chalk-eminent-tangerine.glitch.me/signin`, params)
}

export function checkLogin(id, accessToken) {
    return axios.get(`https://chalk-eminent-tangerine.glitch.me/600/users/${id}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        }
    })
}


// handle update user infor
export function handleUpdateUserInfor(user) {
    return axios.put(`https://chalk-eminent-tangerine.glitch.me/users/${user.id}`, user);
}

export function fetchAccoutAdmin() {
    return axios.get(`https://chalk-eminent-tangerine.glitch.me/adminUsers/1`)
}