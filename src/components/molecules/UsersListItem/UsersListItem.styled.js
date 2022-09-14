import styled from 'styled-components'

export const Wrapper = styled.li`
    display: flex;
    align-items: center;
    position: relative;
    
    &:not(:last-child)::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: lightgrey;
}
`;

export const StyledInfo = styled.div`
    padding: 25px 20px;
    
    p {
        margin: 0;
        color: ${({ theme }) => theme.colors.slateGrey};
    }
    p:first-child{
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: ${({ theme }) => theme.fontSize.l};
    }
    p:last-child {
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`;

export const StyledAverage = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({theme}) => theme.fontSize.s};
    font-weight: bold;
    background-color: ${({theme, value}) => {
        if (value > 4) return theme.colors.success;
        if (value > 3) return theme.colors.warning;
        if (value > 2) return theme.colors.grey;
        return theme.colors.error;
    }};
    
`;