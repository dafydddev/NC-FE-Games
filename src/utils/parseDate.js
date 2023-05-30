export const parseDate = (dateString) => {
    let date = dateString.slice(0, 10).split('-').reverse().join('-');
    let time = dateString.slice(11, 16);
    return `${date} ${time}`;
};