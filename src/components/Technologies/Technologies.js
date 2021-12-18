import React from 'react';
import { DiReact, DiCssTricks, DiMongodb } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle, BigBg } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
    <Section id='tech'>
        <SectionDivider />
        <br />
        <SectionTitle>Technologies</SectionTitle>
        <BigBg>Tech</BigBg>
        <SectionText>
            I've worked with a range of technologies in the web development world. And I'm still willing to learn Mobile App development, Ethereum Blockchain
            technology
        </SectionText>
        <List>
            <ListItem>
                <DiReact size='3rem' />
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                        Exprecience with <br /> React, SCSS, Tailwind, Next
                    </ListParagraph>
                </ListContainer>
            </ListItem>

            <ListItem>
                <DiCssTricks size='3rem' />
                <ListContainer>
                    <ListTitle>A/B Testing</ListTitle>
                    <ListParagraph>
                        Exprecience with <br /> Testing various UX implementations for Ecommerce
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiMongodb size='3rem' />
                <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>
                        Exprecience with <br /> Node and Mongo
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
