import { SvgIcon } from 'component/atoms';

type IconProps = {
    size: number;
    color?: string;
};

const IconPersonCheck = ({ size, color, ...props }: IconProps) => {
    return (
        <SvgIcon width={size} height={size} {...props} viewBox="0 0 16 16" fill={color} xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_317_1664)">
                <path
                    d="M11.166 14V12.6667C11.166 11.9594 10.8851 11.2811 10.385 10.781C9.88487 10.281 9.20659 10 8.49935 10H3.83268C3.12544 10 2.44716 10.281 1.94706 10.781C1.44697 11.2811 1.16602 11.9594 1.16602 12.6667V14"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M6.16667 7.33333C7.63943 7.33333 8.83333 6.13943 8.83333 4.66667C8.83333 3.19391 7.63943 2 6.16667 2C4.69391 2 3.5 3.19391 3.5 4.66667C3.5 6.13943 4.69391 7.33333 6.16667 7.33333Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M11.834 7.33333L13.1673 8.66667L15.834 6"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_317_1664">
                    <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                </clipPath>
            </defs>
        </SvgIcon>
    );
};
export default IconPersonCheck;
