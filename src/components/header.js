import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { anime } from 'react-anime';
import Toggle from 'react-toggle';

const Header = (props) => {
    const {theme, setTheme} = props;

    useEffect(() => {
        anime
            .timeline({loop: false})
            .add({
                targets: '.ml .line',
                opacity: [0.5, 1],
                scaleX: [0, 1],
                easing: 'easeInOutExpo',
                duration: 700,
            })
            .add({
                targets: '.ml .line',
                duration: 600,
                easing: 'easeOutExpo',
                translateY: (el, i) => -0.625 + 0.625 * 2 * i + 'em',
            })
            .add({
                targets: '.ml .letters-left',
                opacity: [0, 1],
                translateX: ['0.5em', 0],
                easing: 'easeOutExpo',
                duration: 600,
                offset: '-=300',
            })
            .add({
                targets: '.ml .letters-right',
                opacity: [0, 1],
                translateX: ['-0.5em', 0],
                easing: 'easeOutExpo',
                duration: 600,
                offset: '-=600',
            })
            .add({
                targets: '.ml .line',
                opacity: [1, 0],
                easing: 'easeOutExpo',
                duration: 600,
            });
    }, []);

    const handleThemeToggle = () => {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    };

    return (
        <nav className="bg-transparent flex items-center justify-between py-6 px-5 md:px-8 lg:px-10">
            <Link to="/">
                <div className="ml flex items-center flex-shrink-0 border border-solid border-transparent hover:border-accent rounded-sm text-white p-2 cursor-pointer transition duration-200 ease-out bg-accent hover:text-accent hover:bg-transparent">
                    <span className="font-semibold text-xl tracking-tight italic text-wrapper">
                        <span className="line line1"/>
                        <span className="letters letters-left">L</span>
                        <span className="letters letters-right">T</span>
                        <span className="line line2"/>
                    </span>
                </div>
            </Link>
            <div className="flex text-sm justify-end items-center w-auto">
                <Toggle
                    className="mr-2"
                    checked={theme === 'light'}
                    icons={{
                        checked: '🌞',
                        unchecked: '🌙'
                    }}
                    onChange={handleThemeToggle}
                />
                <Link
                    to="/"
                    className="inline-block hover:bg-accent transition duration-200 ease-out text-accent hover:text-white px-2 py-1 mr-2 border border-solid border-accent rounded-sm">
                    Portfolio
                </Link>
                <Link
                    to="/blog"
                    className="inline-block hover:bg-accent transition duration-200 ease-out text-accent hover:text-white px-2 py-1 border border-solid border-accent rounded-sm">
                    Blog
                </Link>
            </div>
        </nav>
    );
};

export default Header;