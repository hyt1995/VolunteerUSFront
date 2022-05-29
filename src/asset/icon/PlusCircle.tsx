import { SvgIcon } from 'component/atoms';

type IconProps = {
    size: number;
    color?: string;
};

const IconPlusCircle = ({ size, color, ...props }: IconProps) => {
    return (
        <SvgIcon width={size} height={size} {...props} viewBox="0 0 49 48" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M24.5 44C35.5457 44 44.5 35.0457 44.5 24C44.5 12.9543 35.5457 4 24.5 4C13.4543 4 4.5 12.9543 4.5 24C4.5 35.0457 13.4543 44 24.5 44Z"
                fill="white"
            />
            <path d="M24.5 16V32" stroke="#77828F" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.5 24H32.5" stroke="#77828F" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </SvgIcon>
    );
};
export default IconPlusCircle;
