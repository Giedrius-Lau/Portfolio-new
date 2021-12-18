import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FooterContainer } from './../../layout/LayoutStyles';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <LinkList>
                    <LinkColumn>
                        <LinkTitle>Call</LinkTitle>
                        <LinkItem href='tel:+37069054694'>+370 690 54694</LinkItem>
                    </LinkColumn>
                    <LinkColumn>
                        <LinkTitle>Email</LinkTitle>
                        <LinkItem href='mailto:lauruska.giedrius@gmail.com'>lauruska.giedrius@gmail.com</LinkItem>
                    </LinkColumn>
                </LinkList>
                <SocialIconsContainer>
                    <CompanyContainer>
                        <Slogan>The bad news is time flies. The good news is you’re the pilot.</Slogan>
                    </CompanyContainer>
                    <SocialContainer>
                        <SocialIcons href='https://github.com/Giedrius-Lau' target='_blank'>
                            <AiFillGithub size='3rem'></AiFillGithub>
                        </SocialIcons>
                        <SocialIcons href='https://www.linkedin.com/in/giedriuslaur/' target='_blank'>
                            <AiFillLinkedin size='3rem'></AiFillLinkedin>
                        </SocialIcons>
                        <SocialIcons href='https://www.instagram.com/lauruskagiedrius/' target='_blank'>
                            <AiFillInstagram size='3rem'></AiFillInstagram>
                        </SocialIcons>
                    </SocialContainer>
                </SocialIconsContainer>
            </FooterWrapper>
        </FooterContainer>
    );
};

export default Footer;
