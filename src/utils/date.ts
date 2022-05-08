export const dateFormatter = (date: Date) => {
    const result = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    return result;
};
