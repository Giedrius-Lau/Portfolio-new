import styled from 'styled-components';

export const Boxes = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin: 24px 0 40px;

    @media ${(props) => props.theme.breakpoints.md} {
        gap: 16px;
        margin: 20px 0 32px;
        grid-template-columns: repeat(2, minmax(140px, 1fr));
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 10px;
        max-width: 500px;
        margin: 24px auto;
    }
`;

export const Box = styled.div`
    border-top: 3vw solid rgb(8 253 216 / 50%);
    border-bottom: 3vw solid rgb(94 21 108 / 70%);
    box-shadow: rgb(0 0 0 / 73%) 0px 0px 30px -12px;
    transition: all 0.25s ease 0s;
    background: rgba(9, 47, 56, 0.81);
    border-radius: 14vw;
    padding: 4vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
        box-shadow: 0px 20px 40px -12px #000000d4;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        border-radius: 5vw;
    }
`;
export const BoxNum = styled.h5`
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 40px;
    letter-spacing: 0.01em;
    color: #ffffff;
    margin-bottom: 8px;

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 28px;
        line-height: 32px;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 24px;
        line-height: 26px;
    }
`;

export const BoxText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: rgba(255, 255, 255, 0.75);

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 13px;
        line-height: 20px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 10px;
        line-height: 14px;
    }
`;

export const BoxDate = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: rgba(255, 255, 255, 0.75);
    position: relative;
    top: -10px;

    @media ${(props) => props.theme.breakpoints.md} {
        line-height: 20px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 10px;
        line-height: 14px;
    }
`;

export const Join = styled.div`
    display: flex;
    max-width: 1200px;
    justify-content: center;
    align-items: center;
    padding-bottom: 80px;

    @media ${(props) => props.theme.breakpoints.md} {
        display: flex;
        justify-content: center;
        padding-bottom: 64px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 32px;
    }
`;

export const JoinText = styled.h5`
    display: flex;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: 0.02em;
    color: rgba(255, 255, 255, 0.5);

    @media ${(props) => props.theme.breakpoints.md} {
        line-height: 32px;
        font-size: 20px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 16px;
        line-height: 24px;
        margin: 0 0 16px;
    }
`;

export const IconContainer = styled.div`
    display: flex;

    @media ${(props) => props.theme.breakpoints.sm} {
        width: 160px;
        justify-content: space-between;
    }
`;
