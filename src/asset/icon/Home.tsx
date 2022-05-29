import { SvgIcon } from 'component/atoms';

type IconProps = {
    size: number;
    color?: string;
};

const IconHome = ({ size, color, ...props }: IconProps) => {
    return (
        <SvgIcon width={size} height={size} {...props} viewBox="0 0 16 17" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path
                vectorEffect="non-scaling-stroke"
                d="M2 6.50016L8 1.8335L14 6.50016V13.8335C14 14.1871 13.8595 14.5263 13.6095 14.7763C13.3594 15.0264 13.0203 15.1668 12.6667 15.1668H3.33333C2.97971 15.1668 2.64057 15.0264 2.39052 14.7763C2.14048 14.5263 2 14.1871 2 13.8335V6.50016Z"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6 15.1667V8.5H10V15.1667"
                vectorEffect="non-scaling-stroke"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </SvgIcon>
    );
};
export default IconHome;
