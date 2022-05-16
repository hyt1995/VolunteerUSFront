import React from 'react';
import { SvgBox } from '../atoms';

interface Props {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    width?: number;
    height?: number;
}

const SvgIcon: React.FC<Props> = (props) => {
    const { Icon } = props;
    return (
        <SvgBox {...props}>
            <Icon />
        </SvgBox>
    );
};

export default SvgIcon;
