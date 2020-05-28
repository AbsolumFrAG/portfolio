---
title: Setup dotenv to Access Environment Variables in Angular 9
subtitle: Keeping sensitive information like API keys safe
author: Ninad Subba
date: 2020-05-21
path: /blog/setup-dotenv-to-access-environment-variables-in-angular-9
---

![](https://images.unsplash.com/photo-1558244380-0114648a908d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80)

<br>

Let's face it. There will always be some things which you won't be able to share with everyone. In the context of web development, these are often API keys or administrator passwords. Sensitive information like these are dangerous to keep in a remote repository on Github where anyone can have a look at it.

Googling for help on setting up environment variables for Angular is a nightmare; Either the article was too old or it was for AngularJS or it was simply using an ancient version of the Angular CLI.

It took me a while but I managed to find a proper workaround, which turned out to be quite interesting.

<br>

## The Problem 👨‍🏫

In Angular, we have our `environment.ts` &nbsp;and `environment.prod.ts` &nbsp;files defined in the _src/environments_ folder. The `environment.ts` &nbsp;file (shown below) is where we usually keep our environment variables by convention, as the Angular compiler looks for these files before the build process.

```typescript
export const environment = {
  production: false,
  API_KEY: '1234_API_KEY_5678',
  ANOTHER_API_SECRET: '__ANOTHER__SECRET__',
};
```

We use this environment object in our components/services like so:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class SomeService {
  apiKey: string;

  constructor(private http: HttpClient) {
    this.apikey = environment.API_KEY;
    ...
  }

  ...
}
```

Now, the problem is, these environment files are required by Angular for the build process, meaning they have to be pushed to the repository so that others can also install the project locally. If you have your API keys explicitly written in these files, consider those keys compromised, because anyone who has access to your repository can see them.

<br>

## The Solution 🔐

We'll use a lightweight package named [dotenv](https://www.npmjs.com/package/dotenv).

> Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.

Basically what it does is it takes variables defined in a _.env_ file, and injects them into Node's [process.env](https://nodejs.org/docs/latest/api/process.html#process_process_env) object. It's in this .env file where you'll keep all your secret credentials and sensitive information, and this file should not be pushed to your remote repository.

```
API_KEY=1234_API_KEY_5678
ANOTHER_API_SECRET=__ANOTHER__SECRET__
```

A simple key-value pair creates these environment variables for you.

Now using it just takes one line of code:

```typescript
require('dotenv').config();
```

Believe me that's it.

I thought it would be okay if I did this in the _environment.ts_ file:

```typescript
require('dotenv').config();

export const environment = {
  production: false,
  API_KEY: process.env.API_KEY,
  ANOTHER_API_SECRET: process.env.ANOTHER_API_SECRET,
};
```

However, the Angular compiler treats these _environment.\*.ts_ files as static, and it wouldn't compile.

**_Workaround:_** Write a script to generate the _environment_ file dynamically before the build!

<br>

## The Process 🧪

**TL;DR**:<br>

1. Install [yargs](https://www.npmjs.com/package/yargs) and [dotenv](https://www.npmjs.com/package/dotenv).
2. Create a _.env_ file at the root of your project folder and populate it with your variables.
3. Write a script which creates the required environment file (_environment.ts_ for development and _environment.prod.ts_ for production) and populates it with the variables from your _.env_ file (available in `process.env`).
4. Run the script before running `ng serve` &nbsp;or `ng build`.

<br>

So, installing yargs and dotenv shouldn't be a problem:

```shell
npm install --save-dev yargs dotenv
```

I'll use the _.env_ file from above with the same contents:

```
API_KEY=1234_API_KEY_5678
ANOTHER_API_SECRET=__ANOTHER__SECRET__
```

The script which does all the magic is a relatively simple one. Create a _setenv.ts_ inside a _scripts_ folder on the root of your project.

```typescript
const { writeFile } = require('fs');
const { argv } = require('yargs');

// read environment variables from .env file
require('dotenv').config();

// read the command line argument passed
// with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';

const targetPath = isProduction
  ? `./src/environments/environment.prod.ts`
  : `./src/environments/environment.ts`;

// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
export const environment = {
  production: ${isProduction},
  API_KEY: "${process.env.API_KEY}",
  ANOTHER_API_SECRET: "${process.env.ANOTHER_API_SECRET}" 
};
`;

// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Wrote variables to ${targetPath}`);
});
```

Easy? Now we just need to modify our start and build script so that these files are generated dynamically. Do this in the _package.json_ file:

```json
{
  ...
  "scripts": {
    "ng": "ng",
    "config": "ts-node ./scripts/setenv.ts",
    "start": "npm run config -- --environment=dev && ng serve",
    "build": "npm run config -- --environment=prod && ng build"
    ...
  },
  ...
}
```

You can tweak the script a little bit by adding a check to see if all your environment variables have been passed or not.

```typescript
...

// read the command line argument passed
// with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';

if (!process.env.API_KEY || !process.env.ANOTHER_API_SECRET) {
  console.error('All the required environment variables were not provided!);
  process.exit(-1);
}

...
```

If you don't specify the proper environment variables then this process will automatically exit!

Remember that you should not push the _.env_ file to a remote repository, or the environment files that have been generated! Simply keep a template on the repo and share credentials only with trusted people.

Cheers! ✨