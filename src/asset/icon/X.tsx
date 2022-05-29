import { SvgIcon } from 'component/atoms';

type IconProps = {
    size: number;
    color?: string;
};

const IconX = ({ size, color, ...props }: IconProps) => {
    return (
        <SvgIcon width={size} height={size} {...props} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4L4 20" stroke="#344052" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 4L20 20" stroke="#344052" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </SvgIcon>
    );
};
export default IconX;
