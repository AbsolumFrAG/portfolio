---
title: Créer un sélecteur de thème CSS à l'aide de Gatsby et TailwindCSS
subtitle: Un tutoriel complet sur la création d'un sélecteur de thème avec Gatsby et Tailwind
author: Lou Tigroudja
date: 2020-06-06
path: /blog/creer-un-selecteur-de-theme-css-a-l-aide-de-gatsby-et-tailwindcss
---

![](https://mir-s3-cdn-cf.behance.net/project_modules/fs/1fc03876863921.5c767bc091030.jpg)

<br>

Avoir un sélecteur de thème CSS n'est pas rare de nos jours, et vous trouverez de nombreux tutoriels qui vous montrent comment le créer en utilisant HTML, CSS et JavaScript Vanilla. Je voulais également l'incorporer sur mon site Web, mais je n'ai pas pu trouver de guide approprié qui m'a appris comment depuis que j'utilisais Gatsby et TailwindCSS pour mon site Web.

Après un peu de recherche et beaucoup de bugs, j'ai finalement pu le faire fonctionner correctement.
Ce guide est spécifiquement destiné aux développeurs travaillant avec Gatsby et TailwindCSS, car il y a quelques choses que vous devez faire différemment pour y parvenir.

**_Par souci de simplicité, je vais l'expliquer en utilisant le modèle de démarrage par défaut de Gatsby._**<br>

_Si vous êtes débutant, vous voudrez peut-être lire ceci [guide](https://www.gatsbyjs.org/tutorial/part-zero/#familiarize-yourself-with-the-command-line) d'abord._

<br>

## Mise en place du projet 🛠

- Créez un nouveau site Gatsby et changez les répertoires en dossier de site

```shell
gatsby new theme-toggle && cd theme-toggle
```

- La structure des dossiers ressemble à ceci :

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

- Installer Tailwind

```shell
npm install tailwindcss --save
```

- Générer un fichier de configuration Tailwind

```shell
npx tailwindcss init
```

Cette commande créera un fichier _tailwind.config.js_ avec le contenu suivant :

```javascript
module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
```

- Installer le plugin Gatsby PostCSS

```shell
npm install --save gatsby-plugin-postcss
```

Nous utiliserons PostCSS pour générer des classes Tailwind, puis appliquerons ces classes en utilisant `className`.

- Incluez le plugin dans votre fichier _gatsby-config.js_

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

- Créez un _postcss.config.js_ dans le dossier racine de votre projet avec le contenu suivant :

```javascript
const tailwindcss = require(`tailwindcss`);

module.exports = {
  plugins: [tailwindcss(`./tailwind.config.js`)],
};
```

- Créez un fichier _main.css_ dans le dossier **_src/styles_** et placez les directives tailwind en haut du fichier :

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Dans le fichier _gatsby-browser.js_, importez le fichier _main.css_ que vous avez créé :

```javascript
import './src/styles/main.css';
```

- Maintenant, pour tester si la configuration fonctionne, ouvrez le fichier _src/components/layout.js_ et collez-y le code suivant. J'ai modifié le composant pour plus de simplicité :

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

- Démarrez le serveur de développement

```shell
gatsby develop
```

Accédez à http://localhost: 8000. Votre page devrait ressembler à ceci :

![screenshot-1](https://i.imgur.com/jOkfIJs.png)

Hourra ! Nous pouvons maintenant commencer à construire notre thème !

<br>

## Construire les thèmes 🌈

Nous utiliserons des variables CSS pour construire nos deux thèmes. Dans le fichier _main.css_, créez ces deux classes contenant les mêmes noms de variables. Lorsque nous appliquons l'une de ces classes à notre composant racine principal, elles agissent comme des espaces de noms pour les styles à appliquer :
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

Puisque nous pouvons référencer les classes Tailwind directement depuis notre JSX en utilisant `className`, nous allons procéder à référencer ces variables dans le fichier _tailwind.config.js_ :
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

Maintenant, nous pouvons revenir au fichier _layout.js_ et nous débarrasser de la couleur verte odieuse. Tailwind crée facilement des classes utilitaires (comme bg-, text- etc.) avec les noms de propriété que nous avons définis dans le fichier _tailwind.config.js_.
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

Cela devrait ressembler à ceci maintenant :

![screenshot-2](https://i.imgur.com/QrjuMPu.png)

Changez `className` de 'theme-dark' en 'theme-light' et enregistrez. Vous devriez obtenir un bel effet de transition lorsque le thème change.

![screenshot-3](https://i.imgur.com/sPUY1v7.png)

<br>

## Création de la fonctionnalité de bascule 🎯

Maintenant, le thème est quelque chose que nous aimerions être cohérent sur toutes nos pages et nous devons donc stocker son état dans le monde entier. Nous utiliserons l'API Context pour gérer cet état et le localStorage du navigateur pour conserver la sélection de thème de l'utilisateur.
Créez un fichier _themeContext.js_ dans le dossier **_src/context/_** et placez-y le code suivant :

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

Notez que nous ne pouvons référencer l'objet _localStorage_ qu'à l'intérieur d'un hook `useEffect`. C'est parce que les sites Gatsby sont construits sur le serveur, et toutes les pages sont générées au moment de la construction, donc il [n'a pas accès](https://www.gatsbyjs.org/docs/debugging-html-builds/) à l'objet global _window_.

Ensuite, nous devrons envelopper notre élément racine avec notre `ThemeContextProvider` afin que nous puissions accéder au contexte de n'importe où dans notre application. Nous pouvons le faire en implémentant une API de navigateur Gatsby appelée [wrapRootElement](https://www.gatsbyjs.org/docs/browser-apis/#wrapRootElement).

Dans le fichier _gatsby-browser.js_ (qui ne contient jusqu'à présent que l'importation css globale), insérez le code suivant :

```javascript
import './src/styles/main.css';

import React from 'react';
import ThemeContextProvider from './src/context/themeContext';

export const wrapRootElement = ({ element }) => {
  return <ThemeContextProvider>{element}</ThemeContextProvider>;
};
```

Maintenant que notre contexte de thème est configuré, tout ce que nous devons faire est d'ajouter un élément d'interface utilisateur qui serait approprié pour nous donner la fonctionnalité de basculement. J'utiliserai [react-toggle](https://aaronshaf.github.io/react-toggle/).

```shell
npm install react-toggle --save
```

Copiez le CSS du composant depuis [ici](https://raw.githubusercontent.com/instructure-react/react-toggle/master/style.css) et collez-le dans votre fichier _main.css_.

Ensuite, nous allons importer le composant `Toggle` dans notre fichier _layout.js_ et l'utiliser avec notre ThemeContext.

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

Ajoutons également un style au fichier **_src/pages/index.js_** :

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

Eeeeeeet voilà ! Vous avez un bascule de thème dans votre application Gatsby + Tailwind !

![Thème bascule finale](https://i.imgur.com/fCJ7k44.gif)

Maintenant, évidemment, je ne me suis pas beaucoup concentré sur la partie stylistique réelle, mais le point principal de ce tutoriel était de créer la fonctionnalité du basculeur de thème. Vous pouvez faire preuve de créativité et l'utiliser comme vous le souhaitez.

Je l'ai également utilisé sur mon site Web. Vous pouvez voir le code source [ici](https://github.com/AbsolumFrAG/portfolio).

Merci ! ✨