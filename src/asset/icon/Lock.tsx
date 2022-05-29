import { SvgIcon } from 'component/atoms';

type IconProps = {
    size: number;
    color?: string;
};

const IconLock = ({ size, color, ...props }: IconProps) => {
    return (
        <SvgIcon width={size} height={size} {...props} viewBox="0 0 56 56" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M44.3333 25.667H11.6667C9.08934 25.667 7 27.7563 7 30.3337V46.667C7 49.2443 9.08934 51.3337 11.6667 51.3337H44.3333C46.9107 51.3337 49 49.2443 49 46.667V30.3337C49 27.7563 46.9107 25.667 44.3333 25.667Z"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M16.334 25.667V16.3337C16.334 13.2395 17.5631 10.272 19.7511 8.08408C21.939 5.89616 24.9065 4.66699 28.0007 4.66699C31.0948 4.66699 34.0623 5.89616 36.2502 8.08408C38.4382 10.272 39.6673 13.2395 39.6673 16.3337V25.667"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            ={' '}
        </SvgIcon>
    );
};
export default IconLock;
