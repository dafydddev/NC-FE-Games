export const parseDate = (dateString) => {
    const date = dateString.slice(0, 10).split('-').reverse().join('-');
    const time = dateString.slice(11, 16);
    return `${date} ${time}`;
};