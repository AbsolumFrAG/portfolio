import React from 'react';

import SEO from '../components/seo';
import Layout from '../components/layout';
import Landing from '../components/landing';
import Skills from '../components/skills';
import Experience from '../components/experience';
import Projects from '../components/projects';
import Contact from '../components/contact';

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Portfolio" />
            <Landing />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
        </Layout>
    );
};

export default IndexPage;