import { SvgIcon } from 'component/atoms';

type IconProps = {
    size: number;
    color?: string;
};

const IconUserRound = ({ size, color, ...props }: IconProps) => {
    return (
        <SvgIcon width={size} height={size} {...props} viewBox="0 0 31 31" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 0C7.09745 0 0 7.09745 0 15.5C0 23.9025 7.09745 31 15.5 31C23.9025 31 31 23.9025 31 15.5C31 7.09745 23.9025 0 15.5 0ZM15.5 7.75C18.1768 7.75 20.15 9.7216 20.15 12.4C20.15 15.0784 18.1768 17.05 15.5 17.05C12.8247 17.05 10.85 15.0784 10.85 12.4C10.85 9.7216 12.8247 7.75 15.5 7.75ZM7.5857 22.8966C8.97605 20.8506 11.2948 19.4866 13.95 19.4866H17.05C19.7067 19.4866 22.024 20.8506 23.4143 22.8966C21.4334 25.017 18.6232 26.35 15.5 26.35C12.3767 26.35 9.5666 25.017 7.5857 22.8966Z" />
        </SvgIcon>
    );
};
export default IconUserRound;
