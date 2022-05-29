import { SvgIcon } from 'component/atoms';

type IconProps = {
    size: number;
    color?: string;
};

const IconCheck = ({ size, color, ...props }: IconProps) => {
    return (
        <SvgIcon width={size} height={size} {...props} viewBox="0 0 14 10" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.697 0.285927C13.9974 0.582528 13.9974 1.06341 13.697 1.36001L5.23548 9.71444C4.93508 10.011 4.44803 10.011 4.14763 9.71444L0.301474 5.91697C0.00107104 5.62037 0.00107104 5.13949 0.301474 4.84289C0.601878 4.54629 1.08893 4.54629 1.38933 4.84289L4.69156 8.10331L12.6092 0.285927C12.9096 -0.0106736 13.3966 -0.0106736 13.697 0.285927Z"
                fill="white"
            />
        </SvgIcon>
    );
};
export default IconCheck;
