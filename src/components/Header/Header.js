import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaInfinity } from 'react-icons/fa';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
    <Container>
        <Div1>
            <Link href='/'>
                <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                    <FaInfinity size='5rem'></FaInfinity>
                </a>
            </Link>
        </Div1>
        <Div2>
            <li>
                <Link href='#projects'>
                    <NavLink>Projects</NavLink>
                </Link>
            </li>
            <li>
                <Link href='#tech'>
                    <NavLink>Technologies</NavLink>
                </Link>
            </li>
            <li>
                <Link href='#about'>
                    <NavLink>About</NavLink>
                </Link>
            </li>
        </Div2>
        <Div3>
            <SocialIcons href='https://github.com/Giedrius-Lau' target='_blank'>
                <AiFillGithub size='3rem'></AiFillGithub>
            </SocialIcons>
            <SocialIcons href='https://www.linkedin.com/in/giedriuslaur/' target='_blank'>
                <AiFillLinkedin size='3rem'></AiFillLinkedin>
            </SocialIcons>
            <SocialIcons href='https://www.instagram.com/lauruskagiedrius/' target='_blank'>
                <AiFillInstagram size='3rem'></AiFillInstagram>
            </SocialIcons>
        </Div3>
    </Container>
);

export default Header;
