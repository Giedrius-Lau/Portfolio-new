import styled from 'styled-components';

export const Img = styled.img`
    width: 100%;
    object-fit: cover;
    overflow: hidden;
    display: block;
    cursor: pointer;

    @media ${(props) => props.theme.breakpoints.sm} {
        display: none;
    }
`;

export const ImgMobile = styled.img`
    width: 100%;
    object-fit: cover;
    overflow: hidden;
    display: none;

    @media ${(props) => props.theme.breakpoints.sm} {
        display: block;
    }
`;

export const GridContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    column-gap: 4rem;
    row-gap: 3rem;
    margin-top: 80px;

    @media ${(props) => props.theme.breakpoints.sm} {
        display: flex;
        flex-direction: column;
        padding-bottom: 0;
        column-gap: 8rem;
    }
`;
export const BlogCard = styled.div`
    border-radius: 10px;
    width: 400px;
    opacity: 0.8;
    transition: 0.25s ease-in-out;

    &:hover {
        opacity: 1;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        width: 100%;
        opacity: 1;
    }
`;
export const TitleContent = styled.div`
    width: 100%;
    margin-top: 15px;
`;

export const HeaderThree = styled.h3`
    font-weight: 500;
    letter-spacing: 2px;
    color: #ffffff;
    padding: 0.5rem 0;
    font-size: ${(props) => (props.title ? '3rem' : '2rem')};
    cursor: pointer;
    margin-top: 20px;
`;

export const Hr = styled.hr`
    width: 50px;
    height: 3px;
    margin: 20px auto;
    border: 0;
    background: #d0bb57;
`;

export const Intro = styled.div`
    width: 170px;
    margin: 0 auto;
    color: #dce3e7;
    font-family: 'Droid Serif', serif;
    font-size: 13px;
    font-style: italic;
    line-height: 18px;
`;

export const CardInfo = styled.p`
    width: 100%;
    opacity: 0.8;
    margin-top: 15px;
    color: #ffffff;
    font-style: 2rem;
    line-height: 24px;
    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 0.3rem;
    }
`;

export const UtilityList = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    gap: 2rem;
    /* justify-content: space-around; */
    margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
    color: #000000;
    font-weight: 800;
    font-size: 1.6rem;
    padding: 1rem 3rem;
    background: #cdcdcd;
    border-radius: 4px;
    transition: 0.5s;
    &:hover {
        background: #ffffff;
    }
`;

export const TagList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
`;
export const Tag = styled.li`
    opacity: 0.8;
    color: #ffffff;
    font-size: 1.3rem;
`;
