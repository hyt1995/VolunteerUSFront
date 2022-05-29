import { css } from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const resetSwiper = css`
    .mySwiper {
        /* slide */
        .swiper-slide {
            height: 200px;
            border: 1px solid ${({ theme }) => theme.color.gray1} !important;

            img {
                display: block;
                width: 100%;
            }
        }

        /* pagination */
        .swiper-horizontal > .swiper-pagination-bullets,
        .swiper-pagination-bullets.swiper-pagination-horizontal,
        .swiper-pagination-custom,
        .swiper-pagination-fraction {
            bottom: 10px !important;
        }
        .swiper-pagination-bullet {
            opacity: 0.5;
            background: #fff;

            &-active {
                opacity: 1;
            }
        }
    }
`;

export default resetSwiper;
