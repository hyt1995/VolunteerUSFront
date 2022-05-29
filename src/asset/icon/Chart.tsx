import { SvgIcon } from 'component/atoms';

type IconProps = {
    size: number;
    color?: string;
};

const IconChart = ({ size, color, ...props }: IconProps) => {
    return (
        <SvgIcon width={size} height={size} {...props} viewBox="0 0 16 16" fill={color} xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_317_1703)">
                <path
                    d="M15.3327 4L8.99935 10.3333L5.66602 7L0.666016 12"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M11.334 4H15.334V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_317_1703">
                    <rect width="16" height="16" fill="white" />
                </clipPath>
            </defs>
        </SvgIcon>
    );
};
export default IconChart;
