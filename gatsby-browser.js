import 'typeface-lora';
import 'typeface-raleway';
import './src/styles/main.css';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import React from 'react';
import ThemeContextProvider from './src/context/themeContext';

export const wrapRootElement = ({ element }) => {
    return <ThemeContextProvider>{element}</ThemeContextProvider>;
};