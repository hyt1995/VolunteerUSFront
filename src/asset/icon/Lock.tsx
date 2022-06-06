import { SvgIcon } from 'component/atoms';

type IconProps = {
    size: number;
    color?: string;
};

const IconLock = ({ size, color, ...props }: IconProps) => {
    return (
        <SvgIcon width={size} height={size} {...props} viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M44.3333 25.6665H11.6667C9.08934 25.6665 7 27.7558 7 30.3332V46.6665C7 49.2438 9.08934 51.3332 11.6667 51.3332H44.3333C46.9107 51.3332 49 49.2438 49 46.6665V30.3332C49 27.7558 46.9107 25.6665 44.3333 25.6665Z"
                stroke="#fff"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M16.334 25.6665V16.3332C16.334 13.239 17.5631 10.2715 19.7511 8.08359C21.939 5.89567 24.9065 4.6665 28.0007 4.6665C31.0948 4.6665 34.0623 5.89567 36.2502 8.08359C38.4382 10.2715 39.6673 13.239 39.6673 16.3332V25.6665"
                stroke="#fff"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </SvgIcon>
    );
};
export default IconLock;
