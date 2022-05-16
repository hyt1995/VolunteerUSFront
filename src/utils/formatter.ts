const hasNumber = (value: string) => isNaN(Number(value));
const hasHyphen = (value: string | number) => value === '-';
const includeHyphen = (value: string) => value.includes('-');
const hasSlash = (value: string | number) => value === '/';
const includeSlash = (value: string) => value.includes('/');

export const phoneNumberFormatter = (phone: string) => {
    const lastStr = phone[phone.length - 1];

    if (phone.length >= 8 && !includeHyphen(phone)) {
        phone = phone.slice(0, 3) + '-' + phone.slice(3, 7) + '-' + phone.slice(7, 11);
    } else if (phone.length >= 4 && !includeHyphen(phone)) {
        phone = phone.slice(0, 3) + '-' + phone.slice(3, phone.length);
    }

    if (phone.length === 3) {
        phone += '-';
    } else if (phone.length === 8) {
        phone += '-';
    }

    if (hasNumber(lastStr) && !hasHyphen(lastStr)) {
        phone = phone.slice(0, -1);
    }

    if (phone.length > 13) {
        phone = phone.slice(0, 13);
    }
    return phone;
};

export const resetFormatter = (value: string) => {
    const regex = /[^0-9]/g;
    value = value.replace(regex, '');
    return value;
};

export const birthdayFormatter = (birthday: string) => {
    const lastStr = birthday[birthday.length - 1];
    console.log(birthday.length);

    if (birthday.length >= 5 && !includeSlash(birthday)) {
        birthday = birthday.slice(0, 2) + '/' + birthday.slice(2, 4) + '/' + birthday.slice(4, 6);
    } else if (birthday.length >= 5 && !includeSlash(birthday)) {
        birthday = birthday.slice(0, 2) + '/' + birthday.slice(2, birthday.length);
    }

    if (birthday.length === 2) {
        birthday += '/';
    } else if (birthday.length === 5) {
        birthday += '/';
    }

    if (hasNumber(lastStr) && !hasSlash(lastStr)) {
        birthday = birthday.slice(0, -1);
    }

    if (birthday.length > 8) {
        birthday = birthday.slice(0, 8);
    }
    return birthday;
};
