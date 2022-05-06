const hasNumber: StringBoolFunc = (number) => new RegExp(/[0-9]/).test(number);

// has mix of small and capitals
const hasMixed: StringBoolFunc = (number) => new RegExp(/[a-z]/).test(number) && new RegExp(/[A-Z]/).test(number);

const hasString: StringBoolFunc = (number) => new RegExp(/[a-zA-Z]/).test(number);

const hasLength: StringBoolFunc = (number) => number.length >= 6;

// has special chars
const hasSpecial: StringBoolFunc = (number) => new RegExp(/[!#@$%^&*)(+=._-]/).test(number);

type StringBoolFunc = (s: string) => boolean;

export const passwordStrength = (password: string) => {
    const result = hasSpecial(password) && hasNumber(password) && hasString(password) && hasString(password) && hasLength(password);

    return result;
};
