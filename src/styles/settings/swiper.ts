import { css } from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const resetSwiper = css`
    .swiper {
    }

    /* slide */
    .swiper-slide {
        height: 25vw !important;
        border: 1px solid ${({ theme }) => theme.color.gray1};
    }

    /* pagination */
    .swiper-horizontal > .swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal,
    .swiper-pagination-custom,
    .swiper-pagination-fraction {
        bottom: 10px !important;
    }
`;

export default resetSwiper;
