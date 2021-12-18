import React from 'react';

import { Section, SectionDivider, SectionTitle, BigBg } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, BoxDate } from './AcomplishmentsStyles';
import { ExperienceData } from '../../constants/constants';

const Acomplishments = () => (
    <Section>
        <SectionTitle>Companies I worked with</SectionTitle>
        <BigBg>Work</BigBg>
        <Boxes>
            {ExperienceData.map((card, index) => (
                <Box key={index}>
                    <BoxNum>{card.number}</BoxNum>
                    <BoxDate>{card.date}</BoxDate>
                    <BoxText>{card.text}</BoxText>
                </Box>
            ))}
        </Boxes>
        <SectionDivider />
    </Section>
);

export default Acomplishments;
