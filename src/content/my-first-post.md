---
title: First Post
subtitle: Thoughts on Web Dev... and more
author: Ninad Subba
date: 2020-04-10
path: /blog/my-first-post
---

![JavaScript](https://www.designveloper.com/wp-content/uploads/2019/06/EzgdmaCQuT84bgDL4fhXZS.jpg)
<br>

## Hello reader 🤙!

I recently built my portfolio website with [Gatsby](https://gatsbyjs.org) and [Tailwind](https://tailwindcss.com/), and honestly I'm quite happy with what I've made. After almost two years going head-first into the world of web development, I've made some tangible progress and learned many new things along the way.

But... wait a minute, did I say it's been almost two years and I'm _just_ making my portfolio website?? Don't people usually _start_ by making their portfolios?

Well yes they do, but I am one of those people who cares a little too much about the work that they do. I felt I wasn't ready because I wanted it to be grand. I wanted it to be the best thing that I had ever made. After two years of learning and countless side projects, I realized that web development isn't something which one can master. I mean, it's so different from the typical scenario of _given a problem, find a solution_.

It's almost like there are an infinite amount of problems with an infinite amount of ways to solve these said problems. No one way is _the_ way, and it all comes down to the tools which one gets used to working with.<br><br>

## 🙏 JavaScript, JavaScript... and more JavaScript 🙏

It's safe to say that JavaScript is currently [the most popular programming language](https://insights.stackoverflow.com/survey/2019#most-popular-technologies). It's easy to learn and can be used in any part of the web dev stack (Front and Back end), but the most significant thing about it is that it's constantly evolving. The modern JavaScript which is used in production today looks and feels totally different from the legacy syntax that we learn in University.

It's very important for us as developers to constantly update ourselves with newer, better practices for writing cleaner and more maintainable code. New features are being added to the language that are making it even more powerful, and of course, there's [TypeScript](https://stackoverflow.com/questions/12694530/what-is-typescript-and-why-would-i-use-it-in-place-of-javascript).

Now by powerful, I mean the amount of work that gets done in comparison to the lines of code that you write. Consider the following piece of code:

```javascript
// We have two arrays that need to be combined into one new array
const firstArray = [1, 2, 3, 4, 5];
const secondArray = [6, 7, 8, 9, 10];

// Traditionally we would've done it like this
let newArray = [];
for (let i = 0; i < firstArray.length; i++) {
  newArray.push(firstArray[i]);
}
for (let i = 0; i < secondArray.length; i++) {
  newArray.push(secondArray[i]);
}
// newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Now using the spread syntax introduced in ES9
// ES9 or ECMAScript 2018 is an update to JavaScript and was released in the year 2018.

newArray = [...firstArray, ...secondArray]; // 🤯

// newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] (same output, but achieved in one line)
```

<br>

It's also given rise to the modern JAMstack (which stands for **J**avaScript **API**s and **M**arkup), which has made developing fast, efficient websites (like this one😉) more flexible and developer-friendly than ever. It's a win-win on both ends of the spectrum. Developers enjoy building products which in turn offer users a great experience.
<br>

## Not all rainbows and butterflies 😵

With all that being said, it's _definitely_ not easy to become great at developing web apps. It's much harder than it actually looks like from the outside. Granted I would say that front-end is the most accessible part for beginners, it is a grinding process to become really good at it. How good of a developer you become is directly proportional to the amount of work you put in studying/learning/practicing every topic.

I've been working with JavaScript for the best part of two years now, using it on both ends of the stack. I've finally started understanding the patterns and best practices for writing applications in JavaScript. It's been a slow and iterative process, but I'm starting to feel confident about it. So if you too find yourself stuck in a rut, or a mental block, don't worry. It happens to all of us.

Getting stuck on a problem for a long time is definitely frustrating, but keep at it. Eventually, you'll find a solution and that will be a stepping stone for you to become a better developer.

Problems are _part of the process_.<br><br>

## Final words 👾

I finally have a platform which I can safely say is built from scratch entirely by me. I'll be posting technical content as well as some random rants here, so if you enjoyed reading this post, keep an eye out for the next one!

Peace ✌