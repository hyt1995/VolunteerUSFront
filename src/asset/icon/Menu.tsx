import { SvgIcon } from 'component/atoms';

type IconProps = {
    size: number;
    color?: string;
};

const IconMenu = ({ size, color, ...props }: IconProps) => {
    return (
        <SvgIcon width={size} height={size} {...props} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.66667 20H21.3333C21.975 20 22.5 19.4 22.5 18.6667C22.5 17.9333 21.975 17.3333 21.3333 17.3333H2.66667C2.025 17.3333 1.5 17.9333 1.5 18.6667C1.5 19.4 2.025 20 2.66667 20ZM2.66667 13.3333H21.3333C21.975 13.3333 22.5 12.7333 22.5 12C22.5 11.2667 21.975 10.6667 21.3333 10.6667H2.66667C2.025 10.6667 1.5 11.2667 1.5 12C1.5 12.7333 2.025 13.3333 2.66667 13.3333ZM1.5 5.33333C1.5 6.06667 2.025 6.66667 2.66667 6.66667H21.3333C21.975 6.66667 22.5 6.06667 22.5 5.33333C22.5 4.6 21.975 4 21.3333 4H2.66667C2.025 4 1.5 4.6 1.5 5.33333Z"
            />
        </SvgIcon>
    );
};
export default IconMenu;
