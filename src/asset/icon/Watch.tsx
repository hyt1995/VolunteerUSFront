import { SvgIcon } from 'component/atoms';

type IconProps = {
    size: number;
    color?: string;
};

const IconWatch = ({ size, color, ...props }: IconProps) => {
    return (
        <SvgIcon width={size} height={size} {...props} viewBox="0 0 16 16" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.00004 14.0001C11.3138 14.0001 14.0001 11.3138 14.0001 8.00004C14.0001 4.68631 11.3138 2 8.00004 2C4.68631 2 2 4.68631 2 8.00004C2 11.3138 4.68631 14.0001 8.00004 14.0001Z"
                stroke="#3282FA"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M8 4.3999V7.99993L10.4 9.19993" stroke="#3282FA" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </SvgIcon>
    );
};
export default IconWatch;
