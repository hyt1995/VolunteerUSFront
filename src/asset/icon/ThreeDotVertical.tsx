import { SvgIcon } from 'component/atoms';

type IconProps = {
    size: number;
    color?: string;
};

const IconThreeDotVertical = ({ size, color, ...props }: IconProps) => {
    return (
        <SvgIcon width={size} height={size} {...props} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
            <circle cx="12.16" cy="5.43051" r="2.16" fill="#DBDFE5" />
            <circle cx="12.16" cy="11.9105" r="2.16" fill="#DBDFE5" />
            <circle cx="12.16" cy="18.3905" r="2.16" fill="#DBDFE5" />
        </SvgIcon>
    );
};
export default IconThreeDotVertical;
