# Week 1

# Create React App

```sh
npx create-react-app week1
cd week1
yarn start // npm start
```

# Install Flow

To add Flow to a Create React App project, follow these steps:
[https://stephenmann.io/post/how-to-setup-flow-with-create-react-app-and-visual-studio-code/](Link)

1. Run `npm install --save flow-bin` (or `yarn add flow-bin`).
2. Add `"flow": "flow"` to the `scripts` section of your `package.json`.
3. Run `npm run flow init` (or `yarn flow init`) to create a [`.flowconfig` file](https://flowtype.org/docs/advanced-configuration.html) in the root directory.
4. Run `npm install --save-dev flow-typed` (or `yarn add flow-typed`).
5. Edit your flow config file.
6. Edit index.js file.
7. Edit registerServiceWorker.js.
. Add `// @flow` to any files you want to type check (for example, to `src/App.js`).
