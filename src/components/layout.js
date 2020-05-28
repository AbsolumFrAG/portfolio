import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';
import './layout.css';
import { ThemeContext } from '../context/themeContext';

const Layout = ({ children }) => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <main
            className={`${
                theme === 'light' ? 'theme-light' : 'theme-dark'
            } bg-custom-primary text-custom-text transition duration-500 ease-in-out m-0 p-0 min-h-screen`}>
            <Header theme={theme} setTheme={setTheme} />
            <section className="flex">
                <div className="w-0 lg:w-1/6"/>
                <div className="w-full lg:w-4/6 p-3 md:p-5">{children}</div>
                <div className="w-0 lg:w-1/6"/>
            </section>
            <Footer />
        </main>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;