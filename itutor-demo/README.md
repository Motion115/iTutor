# Standards and Abouts

## Commit Messages

```
Demo(<update type>): <a short description, in Chinese or English>
```

**Update types**

- feat (add new features): used when a feature is completed development
- chore (maintain documents, restructure folder)
- dev (partial development for a feature): pair this with the feature and a short description
- other: TODO (if there is any)

## Running the code for development

```shell
// switch to the working folder
cd itutor-demo
// install all the dependencies
yarn
// run the interface
yarn start
```

## Naming

- Folders & File names: use dashes, all lowercase (E.g. `picture-selector.js`)
- Classname for React & others: Upper camel case (E.g. `class PictureSelctor`)
- Function/Method name: Lower camel case (E.g. `createLink()`)
- Variable name: use underscore and all lowercase (E.g. `value_counter`)

## Structure

Our project is not that big, thus it is forbidden to create another react app inside `itutor-demo`.

This demo is supposed to be a one page application with no real backend (except possibly calling some APIs from LLMs and ML models). We don't maintain any backend in this project. The aim is to present the methods used for iTutor, including:

- Metadata Retrieval
- Instruction Generation from LLM
- Instruction to Interface Translation

The primary language should be English, although it would be good to make this page multilingual.

When creating folders, you should keep this principal in mind:

- app.js & index.js (some defaults when scaffolding the project)
  - modules (folder)
    - multiple modules (in a .js or folder)
      - submodules ... (recursively)

In each module folder, if data and other content should be present, put these in a folder named `helper`. In helper, you can put data (i.e. json files) or .js helper functions.



## About Create React App

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Available Scripts

In the project directory, you can run:

`yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

`yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Unsupported Script

`yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Forbidden Script

`yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
