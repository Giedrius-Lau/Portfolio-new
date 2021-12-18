import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle, BigLetter } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';

import { LeftSection } from './HeroStyles';

const Hero = (props) => (
    <Section style={{ marginTop: '-20px' }} row nopadding={true}>
        <LeftSection>
            <SectionTitle main center>
                Hi,
                <br />
                I'm <BigLetter>G</BigLetter>iedrius
                <br />
                Front-end Developer
            </SectionTitle>
            <SectionText>
                A/B Testing /<br /> Shopify /<br /> React /<br /> MERN Stack
            </SectionText>
            <Link href='mailto:lauruska.giedrius@gmail.com'>
                <Button>Message me!</Button>
            </Link>
        </LeftSection>
    </Section>
);

export default Hero;
