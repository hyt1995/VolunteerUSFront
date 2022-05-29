import { SvgIcon } from 'component/atoms';

type IconProps = {
    size: number;
    color?: string;
};

const IconLocation = ({ size, color, ...props }: IconProps) => {
    return (
        <SvgIcon width={size} height={size} {...props} viewBox="0 0 16 16" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13 6.88867C13 10.7776 8 14.1109 8 14.1109C8 14.1109 3 10.7776 3 6.88867C3 5.56259 3.52678 4.29082 4.46447 3.35314C5.40215 2.41546 6.67392 1.88867 8 1.88867C9.32608 1.88867 10.5979 2.41546 11.5355 3.35314C12.4732 4.29082 13 5.56259 13 6.88867Z"
                stroke="#3282FA"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.00065 8.5555C8.92113 8.5555 9.66732 7.80931 9.66732 6.88883C9.66732 5.96836 8.92113 5.22217 8.00065 5.22217C7.08018 5.22217 6.33398 5.96836 6.33398 6.88883C6.33398 7.80931 7.08018 8.5555 8.00065 8.5555Z"
                stroke="#3282FA"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </SvgIcon>
    );
};
export default IconLocation;
