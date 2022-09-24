const currentTime = new Date();
export const currentDay = currentTime.getDate();
export const currentMonth = currentTime.getMonth() + 1;
export const currentYear = currentTime.getFullYear();
const days = [];
const months = [];
const years = [];

for (let i = 1; i <= 31; i++) {
    days.push(i);
}
for (let i = 1; i <= 12; i++) {
    months.push(i);
}
for (let i = currentYear; i >= 1905; i--) {
    years.push(i);
}

export const birthdayTimes = {
    days,
    months,
    years
}