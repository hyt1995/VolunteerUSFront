import { SvgIcon } from 'component/atoms';

type IconProps = {
    size: number;
    color?: string;
    isFill?: boolean;
};

const IconHeart = ({ size, color, isFill, ...props }: IconProps) => {
    return (
        <SvgIcon width={size} height={size} {...props} viewBox="0 0 16 16" fill={color} xmlns="http://www.w3.org/2000/svg">
            {isFill ? (
                <path
                    d="M13.8941 3.07357C13.5536 2.73291 13.1493 2.46267 12.7043 2.2783C12.2593 2.09392 11.7824 1.99902 11.3007 1.99902C10.8191 1.99902 10.3421 2.09392 9.89716 2.2783C9.45219 2.46267 9.0479 2.73291 8.7074 3.07357L8.00073 3.78024L7.29406 3.07357C6.60627 2.38578 5.67342 1.99938 4.70073 1.99938C3.72804 1.99938 2.79519 2.38578 2.1074 3.07357C1.4196 3.76137 1.0332 4.69422 1.0332 5.66691C1.0332 6.6396 1.4196 7.57245 2.1074 8.26024L2.81406 8.96691L8.00073 14.1536L13.1874 8.96691L13.8941 8.26024C14.2347 7.91974 14.505 7.51545 14.6893 7.07048C14.8737 6.6255 14.9686 6.14857 14.9686 5.66691C14.9686 5.18525 14.8737 4.70831 14.6893 4.26334C14.505 3.81836 14.2347 3.41408 13.8941 3.07357Z"
                    fill={color}
                />
            ) : (
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.4145 3.78068L8.70784 4.48735C8.31731 4.87787 7.68415 4.87787 7.29362 4.48735L6.58696 3.78068C6.0867 3.28042 5.4082 2.99938 4.70073 2.99938C3.99326 2.99938 3.31476 3.28042 2.8145 3.78068C2.31425 4.28094 2.0332 4.95943 2.0332 5.66691C2.0332 6.37438 2.31425 7.05288 2.8145 7.55313L8.00073 12.7394L13.187 7.55313C13.4347 7.30549 13.6314 7.0113 13.7655 6.68769C13.8996 6.36407 13.9686 6.0172 13.9686 5.66691C13.9686 5.31661 13.8996 4.96975 13.7655 4.64613C13.6314 4.32251 13.4349 4.02849 13.1871 3.78085L13.8941 3.07357C14.2347 3.41408 14.505 3.81836 14.6893 4.26334C14.8737 4.70831 14.9686 5.18525 14.9686 5.66691C14.9686 6.14857 14.8737 6.6255 14.6893 7.07048C14.505 7.51545 14.2347 7.91974 13.8941 8.26024L8.00073 14.1536L2.1074 8.26024C1.4196 7.57245 1.0332 6.6396 1.0332 5.66691C1.0332 4.69422 1.4196 3.76137 2.1074 3.07357C2.79519 2.38578 3.72804 1.99938 4.70073 1.99938C5.67342 1.99938 6.60627 2.38578 7.29406 3.07357L8.00073 3.78024L8.7074 3.07357C9.0479 2.73291 9.45219 2.46267 9.89716 2.2783C10.3421 2.09392 10.8191 1.99902 11.3007 1.99902C11.7824 1.99902 12.2593 2.09392 12.7043 2.2783C13.1493 2.46267 13.5536 2.73291 13.8941 3.07357L13.1871 3.78085C12.9395 3.53309 12.6451 3.33622 12.3215 3.20213C11.9979 3.06804 11.651 2.99902 11.3007 2.99902C10.9504 2.99902 10.6036 3.06804 10.28 3.20213C9.95634 3.33622 9.66214 3.53293 9.4145 3.78068Z"
                    fill={color}
                />
            )}
        </SvgIcon>
    );
};
export default IconHeart;
