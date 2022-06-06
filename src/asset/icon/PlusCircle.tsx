import { SvgIcon } from 'component/atoms';

type IconProps = {
    size: number;
    color?: '#77828F';
};

const IconPlusCircle = ({ size, color, ...props }: IconProps) => {
    return (
        <SvgIcon width={size} height={size} {...props} viewBox="0 0 49 48" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                fill="white"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.5 16C26.5 14.6193 25.3807 13.5 24 13.5C22.6193 13.5 21.5 14.6193 21.5 16V21.5H16C14.6193 21.5 13.5 22.6193 13.5 24C13.5 25.3807 14.6193 26.5 16 26.5H21.5V32C21.5 33.3807 22.6193 34.5 24 34.5C25.3807 34.5 26.5 33.3807 26.5 32V26.5H32C33.3807 26.5 34.5 25.3807 34.5 24C34.5 22.6193 33.3807 21.5 32 21.5H26.5V16Z"
                fill={color}
            />
        </SvgIcon>
    );
};
export default IconPlusCircle;
