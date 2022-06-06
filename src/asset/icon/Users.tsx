import { SvgIcon } from 'component/atoms';

type IconProps = {
    size: number;
    color?: string;
};

const IconUsers = ({ size, color, ...props }: IconProps) => {
    return (
        <SvgIcon width={size} height={size} {...props} viewBox="0 0 16 17" fill={color} xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_146_1159)">
                <path
                    d="M11.3327 14.5V13.1667C11.3327 12.4594 11.0517 11.7811 10.5516 11.281C10.0515 10.781 9.37326 10.5 8.66602 10.5H3.33268C2.62544 10.5 1.94716 10.781 1.44706 11.281C0.946967 11.7811 0.666016 12.4594 0.666016 13.1667V14.5"
                    stroke="#3282FA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M6.00065 7.83333C7.47341 7.83333 8.66732 6.63943 8.66732 5.16667C8.66732 3.69391 7.47341 2.5 6.00065 2.5C4.52789 2.5 3.33398 3.69391 3.33398 5.16667C3.33398 6.63943 4.52789 7.83333 6.00065 7.83333Z"
                    stroke="#3282FA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M15.334 14.4998V13.1664C15.3335 12.5756 15.1369 12.0016 14.7749 11.5346C14.4129 11.0677 13.9061 10.7341 13.334 10.5864"
                    stroke="#3282FA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M10.666 2.58643C11.2396 2.73329 11.748 3.06689 12.1111 3.53463C12.4742 4.00237 12.6712 4.57765 12.6712 5.16976C12.6712 5.76187 12.4742 6.33715 12.1111 6.80489C11.748 7.27262 11.2396 7.60623 10.666 7.75309"
                    stroke="#3282FA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_146_1159">
                    <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                </clipPath>
            </defs>
        </SvgIcon>
    );
};
export default IconUsers;