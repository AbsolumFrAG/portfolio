---
title: Create a CSS Theme Switcher Using Gatsby and TailwindCSS
subtitle: A full tutorial on creating a theme switcher with Gatsby and Tailwind
author: Ninad Subba
date: 2020-04-29
path: /blog/create-a-css-theme-switcher-using-gatsby-and-tailwind
---

![](https://mir-s3-cdn-cf.behance.net/project_modules/fs/1fc03876863921.5c767bc091030.jpg)

<br>

Having a CSS theme switcher is not uncommon these days, and you will find plenty of tutorials that show you how to create it using HTML, CSS and Vanilla JavaScript. I wanted to incorporate it on my website too, but wasn't able to find a suitable guide that taught me how since I was using Gatsby and TailwindCSS for my website.

After a bit of research and a lot of bugs, I was finally able to make it work correctly.
This guide is specifically for devs working with Gatsby and TailwindCSS, since there are a few things you have to do differently in order to achieve this.

**_For the purpose of simplicity, I'm going to explain it using the Gatsby default starter template._**<br>

_If you're a beginner, you may want to read this [guide](https://www.gatsbyjs.org/tutorial/part-zero/#familiarize-yourself-with-the-command-line) first._

<br>

## Setting up the project 🛠

- Create a new Gatsby site and change directories into site folder

```shell
gatsby new theme-toggle && cd theme-toggle
```

- The folder structure looks like this:

```
.
├── node_modules
├── src
  ├── components
    ├── header.js
    ├── image.js
    ├── layout.css
    ├── layout.js
    ├── seo.js
  ├── images
    ├── gatsby-astronaut.png
    ├── gatsby-icon.png
  ├── pages
    ├── 404.js
    ├── index.js
    ├── page-2.js
├── .gitignore
├── .prettierrc
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── gatsby-ssr.js
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```

- Install Tailwind

```shell
npm install tailwindcss --save
```

- Generate a Tailwind config file

```shell
npx tailwindcss init
```

This command will create a _tailwind.config.js_ file with the following contents:

```javascript
module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
```

- Install the Gatsby PostCSS plugin

```shell
npm install --save gatsby-plugin-postcss
```

We'll use PostCSS to generate Tailwind classes, then apply those classes using `className`.

- Include the plugin in your _gatsby-config.js_ file

```javascript
module.exports = {
  siteMetadata: {
    ...
  },
  plugins: [
    `gatsby-plugin-postcss`,
    ...
  ]
}
```

- Create a _postcss.config.js_ in your project’s root folder with the following contents:

```javascript
const tailwindcss = require(`tailwindcss`);

module.exports = {
  plugins: [tailwindcss(`./tailwind.config.js`)],
};
```

- Create a _main.css_ file inside the **_src/styles_** folder and place the tailwind directives at the top of the file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- In the _gatsby-browser.js_ file, import the _main.css_ file you created:

```javascript
import './src/styles/main.css';
```

- Now to test if the configuration is working, open the _src/components/layout.js_ file and paste the following code in it. I've modified the component for simplicity:

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <div className="bg-green-400 m-0 p-0 min-h-screen">
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
```

- Start the development server

```shell
gatsby develop
```

Navigate to http://localhost:8000. Your page should look like this:

![screenshot-1](https://i.imgur.com/jOkfIJs.png)

Hurray! Now we can begin building our theme!

<br>

## Building the themes 🌈

We'll be using CSS variables to build our two themes. In the _main.css_ file, create these two classes containing the same variable names. When we apply any one of these classes to our main root component, they act as namespaces for the styles to be applied:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

.theme-light {
  --primary: #f8f8f8;
  --secondary: #dbe1e8;
  --text-main: #0d0106;
  --text-secondary: #454e56;
  --accent: #009ffd;
}

.theme-dark {
  --primary: #12181b;
  --secondary: #2a2e35;
  --text-main: #eaeaea;
  --text-secondary: #b8b8b9;
  --accent: #fc7753;
}
```

Since we can reference Tailwind classes directly from our JSX using `className`, we'll proceed to reference these variables inside the _tailwind.config.js_ file:

```javascript
module.exports = {
  important: true,
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'main-text': 'var(--text-main)',
        'secondary-text': 'var(--text-secondary)',
      },
    },
  },
};
```

Now we can go back to the _layout.js_ file and get rid of the obnoxious green colour. Tailwind conveniently creates utility classes (like bg-, text- etc.) with the property names that we defined in the _tailwind.config.js_ file.

```javascript
...

const Layout = ({ children }) => {
  return (
    <div className="theme-dark bg-primary text-main-text transition-all duration-300 m-0 p-0 min-h-screen">
      ...
    </div>
  );
};
...
```

It should look like this now:

![screenshot-2](https://i.imgur.com/QrjuMPu.png)

Change `className` from 'theme-dark' to 'theme-light' and save. You should get a nice transition effect when the theme changes.

![screenshot-3](https://i.imgur.com/sPUY1v7.png)

<br>

## Creating the toggle functionality 🎯

Now, the theme is something which we would like to be consistent across all of our pages and so we would need to store it's state globally. We'll use the Context API to manage this state, and the browser's localStorage to persist the user's theme selection.

Create a _themeContext.js_ file in the **_src/context/_** folder and place the following code in it:

```jsx
import React, { useState, useEffect } from 'react';

export const ThemeContext = React.createContext({
  theme: '',
  setTheme: () => {},
});

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    function loadTheme() {
      const theme = localStorage.getItem('theme');
      return theme || 'dark';
    }
    setTheme(loadTheme());
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
```

Notice that we can only reference the _localStorage_ object inside a `useEffect` hook. That's because Gatsby sites are built on the server, and all the pages are generated at build time, hence it [does not have access](https://www.gatsbyjs.org/docs/debugging-html-builds/) to the global _window_ object.

Next, we would have to wrap our root element with our `ThemeContextProvider` so that we can access the context from anywhere in our application. We can do so by implementing a Gatsby Browser API called [wrapRootElement](https://www.gatsbyjs.org/docs/browser-apis/#wrapRootElement).

In the _gatsby-browser.js_ file (which till now contains only the global css import), insert the following code:

```javascript
import './src/styles/main.css';

import React from 'react';
import ThemeContextProvider from './src/context/themeContext';

export const wrapRootElement = ({ element }) => {
  return <ThemeContextProvider>{element}</ThemeContextProvider>;
};
```

Now that we have our theme context set up, all we need to do is add a UI element which would be suitable to give us the toggle functionality. I'll be using [react-toggle](https://aaronshaf.github.io/react-toggle/).

```shell
npm install react-toggle --save
```

Copy the component's CSS from [here](https://raw.githubusercontent.com/instructure-react/react-toggle/master/style.css) and paste it in your _main.css_ file.

Next, we'll import the `Toggle` component in our _layout.js_ file and use it along with our ThemeContext.

```jsx
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './layout.css';
import Toggle from 'react-toggle';
import { ThemeContext } from '../context/themeContext';

const Layout = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div
      className={`${
        theme === 'light' ? 'theme-light' : 'theme-dark'
      } bg-primary text-main-text text-center transition-all duration-300 m-0 px-0 py-5 min-h-screen`}>
      <Toggle
        id="theme-toggle"
        checked={theme === 'light' ? true : false}
        onChange={handleThemeToggle}
      />
      <label htmlFor="theme-toggle" className="text-accent">
        Theme toggler
      </label>
      <main>{children}</main>
      <footer className="text-secondary-text">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
```

Let's also add some styling to the **_src/pages/index.js_** file:

```jsx
import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div className="w-full">
      <div className="mx-auto max-w-sm">
        <Image />
      </div>
    </div>
    <Link className="text-accent" to="/page-2/">
      Go to page 2
    </Link>
  </Layout>
);

export default IndexPage;
```

Aaaaannnddd voila! You have a theme toggler in your Gatsby + Tailwind app!

![Theme toggle final](https://i.imgur.com/fCJ7k44.gif)

Now obviously I didn't focus much on the actual styling part, but the main point of this tutorial was to create the functionality of the theme toggler. You can get creative and use this in whatever way you want.

I've used it in my website too. You can view the source code [here](https://github.com/Ninad99/portfolio).

Cheers! ✨