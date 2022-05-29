import { SvgIcon } from 'component/atoms';

type IconProps = {
    size: number;
    color?: string;
};

const IconLogout = ({ size, color, ...props }: IconProps) => {
    return (
        <SvgIcon width={size} height={size} {...props} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H11C11.55 21 12 20.55 12 20C12 19.45 11.55 19 11 19H5V5Z" />
            <path d="M20.65 11.65L17.86 8.85999C17.7905 8.78855 17.7012 8.73947 17.6036 8.71906C17.506 8.69865 17.4045 8.70782 17.3121 8.74541C17.2198 8.78299 17.1408 8.84728 17.0851 8.93005C17.0295 9.01281 16.9999 9.11028 17 9.20999V11H10C9.45 11 9 11.45 9 12C9 12.55 9.45 13 10 13H17V14.79C17 15.24 17.54 15.46 17.85 15.14L20.64 12.35C20.84 12.16 20.84 11.84 20.65 11.65Z" />
        </SvgIcon>
    );
};
export default IconLogout;
