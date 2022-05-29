import styled, { css } from 'styled-components';

const TabBox = styled.div<any>`
    .tab-menu {
        display: flex;
        list-style: none;
        text-align: center;
        background: #fff;

        li {
            flex: 1;
            height: 61px;
            line-height: 61px;
            color: ${({ theme }) => theme.color.gray3};
            border-bottom: 3px solid ${({ theme }) => theme.color.gray1};

            &.active {
                border-color: ${({ theme }) => theme.color.primary};
            }
        }
    }
    .tab-content {
        &__item {
            padding: ${({ theme }) => theme.space.md};
        }
    }
`;
export default TabBox;
