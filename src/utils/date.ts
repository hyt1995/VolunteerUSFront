export const birthdayFormatter = (birthday: string) => {
    if (birthday.length === 4) {
        birthday += '/';
    } else if (birthday.length === 7) {
        birthday += '/';
    }

    return birthday;
};

export const dateFormatter = (date: Date) => {
    const result = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    return result;
};
