import React from 'react';
import Link from 'next/link';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, ImgMobile } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, BigBg } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => {
    return (
        <Section nopadding id='projects'>
            <SectionDivider></SectionDivider>
            <SectionTitle main>My Personal mini Projects</SectionTitle>
            <p>These projects were developed on my free time, to learn React, Next, Mongo, Node and TailwindCss technologies</p>
            <BigBg>Work</BigBg>
            <GridContainer>
                {projects.map(({ id, title, description, image, tags, website, code, imageMobile }) => (
                    <BlogCard key={id}>
                        <Link target='_blank' href={website}>
                            <Img src={image} />
                        </Link>
                        <Link target='_blank' href={website}>
                            <ImgMobile src={imageMobile} />
                        </Link>

                        <TitleContent>
                            <Link target='_blank' href={website}>
                                <HeaderThree title='true'>{title}</HeaderThree>
                            </Link>
                        </TitleContent>
                        <CardInfo>{description}</CardInfo>
                        <TitleContent style={{ textDecoration: 'underline', marginTop: '30px' }}>Stack</TitleContent>
                        <TagList>
                            {tags.map((tag, i) => (
                                <Tag key={i}>{tag}</Tag>
                            ))}
                        </TagList>
                        <UtilityList>
                            <ExternalLinks target='_blank' href={website}>
                                Visit
                            </ExternalLinks>
                            <ExternalLinks target='_blank' href={code}>
                                Github
                            </ExternalLinks>
                        </UtilityList>
                    </BlogCard>
                ))}
            </GridContainer>
        </Section>
    );
};

export default Projects;
