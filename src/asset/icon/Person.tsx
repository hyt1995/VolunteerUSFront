import { SvgIcon } from 'component/atoms';

type IconProps = {
    size: number;
    color?: string;
};

const IconPerson = ({ size, color, ...props }: IconProps) => {
    return (
        <SvgIcon width={size} height={size} {...props} viewBox="0 0 16 17" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13.3327 14.5V13.1667C13.3327 12.4594 13.0517 11.7811 12.5516 11.281C12.0515 10.781 11.3733 10.5 10.666 10.5H5.33268C4.62544 10.5 3.94716 10.781 3.44706 11.281C2.94697 11.7811 2.66602 12.4594 2.66602 13.1667V14.5"
                stroke="#3282FA"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.00065 7.83333C9.47341 7.83333 10.6673 6.63943 10.6673 5.16667C10.6673 3.69391 9.47341 2.5 8.00065 2.5C6.52789 2.5 5.33398 3.69391 5.33398 5.16667C5.33398 6.63943 6.52789 7.83333 8.00065 7.83333Z"
                stroke="#3282FA"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </SvgIcon>
    );
};
export default IconPerson;