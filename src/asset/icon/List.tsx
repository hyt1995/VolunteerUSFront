import { SvgIcon } from 'component/atoms';

type IconProps = {
    size: number;
    color?: string;
};

const IconList = ({ size, color, ...props }: IconProps) => {
    return (
        <SvgIcon width={size} height={size} {...props} viewBox="0 0 16 17" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9.33268 1.83331H3.99935C3.64573 1.83331 3.30659 1.97379 3.05654 2.22384C2.80649 2.47389 2.66602 2.81302 2.66602 3.16665V13.8333C2.66602 14.1869 2.80649 14.5261 3.05654 14.7761C3.30659 15.0262 3.64573 15.1666 3.99935 15.1666H11.9993C12.353 15.1666 12.6921 15.0262 12.9422 14.7761C13.1922 14.5261 13.3327 14.1869 13.3327 13.8333V5.83331L9.33268 1.83331Z"
                stroke="#3282FA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M9.33398 1.83331V5.83331H13.334" stroke="#3282FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.6673 9.16669H5.33398" stroke="#3282FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.6673 11.8333H5.33398" stroke="#3282FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.66732 6.5H6.00065H5.33398" stroke="#3282FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </SvgIcon>
    );
};
export default IconList;
