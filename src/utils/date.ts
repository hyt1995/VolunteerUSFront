export const birthdayFormatter = (birthday: string) => {
    if (birthday.length === 4) {
        birthday += '/';
    } else if (birthday.length === 7) {
        birthday += '/';
    }

    return birthday;
};
