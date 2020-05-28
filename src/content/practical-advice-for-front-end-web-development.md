---
title: Practical Advice for Front-End Web Development
subtitle: A curated collection of tips, best practices and resources from my experience
author: Ninad Subba
date: 2020-04-18
path: /blog/practical-advice-for-front-end-web-development
---

![](https://images.unsplash.com/photo-1546900703-cf06143d1239?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1291&q=80)

Modern Front-End Development is a curious blend of creativity and logic. It's got something for everyone. You can get really creative and create one-of-a-kind experiences on the web, work with graphics and animations, or you can build robust applications with complicated build workflows consisting of unit tests and continuous integration/deployment.

📝 _Note: This article can be kept as a reference (bookmark this) so that you can come back and have a look when you're confused about what technology to learn next._

For anybody who knows a programming language or has done some programming previously, and is just getting introduced to Front-End web development, their initial reaction is usually:

> This is way too easy to be considered seriously.

Keep in mind, I'm not pointing a finger at anyone. In fact I've heard this from a lot people (usually most "programmers") who belittle Front-End as if it were some child's play. I myself am guilty for thinking this way, back when I was still quite young and ignorant 😅.

_I couldn't have been more wrong._

<br>

## The Truth 🤔

The most obvious reason for these types of misconceptions, atleast from my point of view, is a lack of knowledge as to what exactly it is that Front-End developers do, apart from making layouts for displaying data. You learn a bit of HTML, write your first "Hello World" document (which is literally typing in "Hello World" in a .html file), learn a bit of CSS to spice it up, write a few lines of JavaScript and there you go! Websites are too easy to build!

If you had to say it in simple terms, yes, it is primarily making layouts for displaying data, but nowadays it's not the kind that can be achieved with a static HTML page.

The layout could be an analytics dashboard with multiple components having their own internal state, and dynamic values in each section. Or it could be rendering a map, or a chart, which requires processing a lot of data on the fly. The _data_ itself could be coming from a REST API, or a GraphQL API.

The developer needs to know how and when to fetch this data dynamically from different APIs, process it internally, as well as keep a clean and understandable user interface on top of it. The interface itself has to be responsive (optimized for viewports of mobile devices), needs to have complementing color schemes, fonts, typography. Add user authentication, SEO (Search Engine Optimization), testing, build configurations, deployments, performance optimization techniques, and you see, it starts getting a little overwhelming.

<br>

## Honest Observations and Advice 🎙

HTML, CSS and JavaScript, the three pillars of Front-End web development. These three technologies are different in their definition, but are always used together. People usually tend to neglect HTML and CSS after learning the basics, and jump straight into JavaScript Frameworks because that's where the good stuff is right?

_Wrong!_

https://twitter.com/chriscoyier/status/1192091004007923712

<br />

The reason I'm stressing on this is because it's more important to solidify the fundamental concepts of Front-End development (i.e. HTML, CSS and JavaScript). If you invest time and energy in learning them properly, you'll realize that everything else is adding another layer of abstraction over the basic stuff, offering new features or providing you pre-built stuff so that you won't have to reinvent the wheel every time.

- My number one advice for all web developers is to **read the documentation**. I cannot stress this enough. Make a habit of reading because 90% of the time you have a question about implementation, it's most likely already documented.
- Learn about [how the web works](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works), the [HTTP Protocol](https://www.w3schools.com/whatis/whatis_http.asp), the different [HTTP methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) and [HTTP Status Codes](https://www.restapitutorial.com/httpstatuscodes.html).
- **Write semantic HTML** ([What is semantics?](https://developer.mozilla.org/en-US/docs/Glossary/semantics))<br>
  Your markup should not be an endless nesting of `<div>` tags. HTML has other tags like `<main>`, `<section>`, `<header>`, `<article>` and [many more](https://www.w3schools.com/html/html5_semantic_elements.asp).<br>
  The benefit of writing semantic HTML stems from what should be the driving goal of any web page: the desire to communicate. By adding semantic tags to your document, you provide additional information about that document, which aids in communication. Specifically, semantic tags make it clear to the browser what the meaning of a page and its content is. That clarity is also communicated with search engines, ensuring that the right pages are delivered for the right queries.<br>
- **Focus on CSS!**<br>
  CSS is like the neglected middle child who comes back to haunt you later on in your development journey. Often we assume there's no real depth to it, but in reality we realise it's importance later on, when we just can't get our web pages to look as good as we want to. Or when we encounter a CSS bug, and nothing we do seems to fix it.<br>
  - Learn about how CSS works internally, especially topics like [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity), [pseudo-classes](https://www.w3schools.com/css/css_pseudo_classes.asp) and [responsive design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design).<br>
  - Learn about different modern CSS layout models like [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) and [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/). [Flexbox Froggy](http://flexboxfroggy.com/) and [Grid Garden](https://cssgridgarden.com/) are two websites where you can learn these concepts while playing a game!
  - Learn atleast one CSS framework. A CSS framework is a usually a library containing predefined classes and components that makes the job easier for developers. There are many to choose from but the most popular one is [Bootstrap](https://getbootstrap.com/). There are others like [SemanticUI](https://semantic-ui.com/), [Bulma](https://bulma.io/), [TailwindCSS](https://tailwindcss.com/) or [MaterializeCSS](https://materializecss.com/).
  - Learn a CSS preprocessor. A CSS preprocessor is a CSS-like language which offers more functionality to the developers like nested syntax, variables, mixins, which then compiles to regular CSS. I would recommend learning [SASS](https://sass-lang.com/), but there are others too like [less](http://lesscss.org/#) or [Stylus](https://stylus-lang.com/).
- **Learn JavaScript before learning a framework**<br>
  Another common mistake learners make, is to dive straight into learning a framework without learning about the language first. It's called a _JavaScript framework_, meaning the prerequisite is a sound knowledge of JavaScript.
  - JavaScript is a multi-paradigm programming language. It conforms to the philosophies of procedural, functional as well as object-oriented programming. If you want an overview about the differences, [watch this video](https://www.youtube.com/watch?v=aoE-92Ac4zE).
  - Learn about the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) and how JavaScript [interacts](https://www.youtube.com/watch?v=0ik6X4DJKCc) with it.
  - JavaScript is at it's best as a functional programming language. Watch [this talk](https://www.youtube.com/watch?v=e-5obm1G_FY) by Anjana Vakil for an introduction to functional programming with JavaScript. In addition to that, here's [a playlist](https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84) which talks about concepts like [Higher Order Functions](https://dev.to/damcosset/higher-order-functions-in-javascript-4j8b), [Closures](https://javascript.info/closure) and [Currying](https://javascript.info/currying-partials). All these concepts are essential for understanding and writing clean, readable and reusable code.
  - [JavaScript30](https://javascript30.com/) is a course I highly recommend doing to improve your skills.
  - There are many, many more quirks and intricacies about JavaScript. [Here's a valuable resource](https://javascript.info/) which you can keep as a reference.

<br>

## What Framework Should You Learn? 😵

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*raWO3dhM4jMjf9VY-kZzNg.png&f=1&nofb=1)

Front-End frameworks are all the rage right now, and I'm 99% sure that you've seen this debate somewhere on the internet, which is:

**_Angular vs React vs Vue_**

[Angular](https://angular.io/), [React](https://reactjs.org/) and [Vue](https://vuejs.org/) are all highly popular JavaScript libraries and frameworks that help developers build complex, reactive and modern user interfaces for the web. From my experience (having worked with React and Angular, and a little bit of Vue), neither one is "better" than the other.

All three are component-focused frameworks, and ultimately serve the purpose of creating a presentation layer for your web app.

The differences though, are subtle and the choice comes down to _you_ as the developer.

- **Background**
  - Angular is an [open-source](https://github.com/angular/angular) web application framework developed and maintained by Google.
  - React is an [open-source](https://github.com/facebook/react) JavaScript library for building user interfaces, developed and maintained by Facebook.
  - Vue is an [open-source](https://github.com/vuejs/vue) JavaScript framework for building user interfaces and single-page applications, created by [Evan You](https://www.linkedin.com/in/evanyou/), and is maintained by him and the rest of their active core team members.
- **Syntax**
  - Angular uses TypeScript and splits HTML and TypeScript logic into different parts.
  - React uses JavaScript and a syntax extension to it called “[JSX](https://reactjs.org/docs/introducing-jsx.html)” (basically it combines HTML and JavaScript logic).
  - Vue uses regular JavaScript and splits HTML and JavaScript logic into different parts.
- **Popularity**
  - All three frameworks are popular but React is a bit more popular than Angular, which in turn is getting used more than Vue.
- **Built-In Features**
  - Angular offers a lot of built-in features, Vue has some built-in features, while React is very minimalistic.

In simple words,

- If you like Object-Oriented programming, and separation of concerns for your HTML views and your TypeScript logic, **learn Angular**.
- If you like Functional programming with JavaScript and are comfortable using it for maintaining your views and logic, **learn React**.
- If you like separation of concerns for your HTML views but want to use Vanilla JavaScript for your logic, then **learn Vue**.

There is no downside when learning either one of these frameworks, and once you learn one, you can definitely move forward and learn another one. They're syntactically different, but similar in their core fundamentals!

_These three are not the only frameworks in the market, but they're the more popular ones. There are other frameworks like [Ember](https://www.emberjs.com/), [Svelte](https://svelte.dev/), [Preact](https://preactjs.com/) and [Mithril](https://mithril.js.org/). If you want a more in-depth insight into the JavaScript ecosystem, and how these technologies compare with each other, check out [The State of JS 2019](https://stateofjs.com/)._

<br>

## Contribute to Open Source! 🌐

[Git](https://www.freecodecamp.org/news/what-is-git-and-how-to-use-it-c341b049ae61/) is a free and open source [version control system](https://www.atlassian.com/git/tutorials/what-is-version-control). [Github](https://lab.github.com/githubtraining/introduction-to-github) is a company that provides hosting for software development version control using Git.

As you may know, most of the technologies that Front-End Devs use is open source, therefore it is absolutely essential that you also know how the open source community works, and how you too can contribute.

[Read this article](https://codeburst.io/why-open-source-contribution-is-important-a4cf53da3311), or [this one](https://opensource.guide/how-to-contribute/) to gain an insight as to why open source contribution is important.

[Follow this article](https://www.firsttimersonly.com/) to make your first contribution!

<br>

## In conclusion 🥁

The world of modern Front-End development is a daunting place, especially for beginners. It's easy to get overwhelmed and lose motivation, but it can also be a wonderful and rewarding environment if you make smart decisions and keep yourself updated.

Don't stress over each and every new technology that comes out. Focus on developing your own skillsets, and development practices that work best for you.

I highly recommend watching [this talk](https://www.youtube.com/watch?v=k7n2xnOiWI8) from Adrian Holovaty, the co-creator of [django](https://www.djangoproject.com/), which is a web framework for Python. He delivers an interesting take on the complexity of the JavaScript ecosystem, especially on the Front-End.

Remember! Just as a musician practices hundreds of hours before actually creating his best work, likewise you need to keep practicing. Not just reading an article or watching a video on a topic but applying it by creating small demo projects. The more you apply, the faster your skills and problem solving abilities improve.

That's it! ✌