const hasNumber = (value: string) => isNaN(Number(value));
const hasSlash = (value: string | number) => value === '/';
const includeSlash = (value: string) => value.includes('/');

export const birthdayFormatter = (birthday: string) => {
    const lastStr = birthday[birthday.length - 1];
    if (birthday.length === 4) {
        birthday += '/';
    } else if (birthday.length === 7) {
        birthday += '/';
    }

    if (birthday.length === 8 && !includeSlash(birthday)) {
        birthday = birthday.slice(0, 4) + '/' + birthday.slice(4, 6) + '/' + birthday.slice(6, 8);
    } else if (birthday.length >= 5 && !includeSlash(birthday)) {
        birthday = birthday.slice(0, 4) + '/' + birthday.slice(4, birthday.length);
    }

    if (hasNumber(lastStr) && !hasSlash(lastStr)) {
        birthday = birthday.slice(0, -1);
    }

    if (birthday.length > 10) {
        birthday = birthday.slice(0, 10);
    }
    return birthday;
};

export const dateFormatter = (date: Date) => {
    const result = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    return result;
};
