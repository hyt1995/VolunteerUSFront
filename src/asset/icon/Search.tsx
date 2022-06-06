import { SvgIcon } from 'component/atoms';

type IconProps = {
    size: number;
    color?: string;
};

const IconSearch = ({ size, color, ...props }: IconProps) => {
    return (
        <SvgIcon width={size} height={size} {...props} viewBox="0 0 16 16" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7.33333 13.1667C10.2789 13.1667 12.6667 10.7789 12.6667 7.83333C12.6667 4.88781 10.2789 2.5 7.33333 2.5C4.38781 2.5 2 4.88781 2 7.83333C2 10.7789 4.38781 13.1667 7.33333 13.1667Z"
                stroke="#344052"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M13.9996 14.4996L11.0996 11.5996" stroke="#344052" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </SvgIcon>
    );
};
export default IconSearch;