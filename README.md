# Markdown Forge
An online editor for creating and saving markdown files.  

**Short Technical Overview:**

Markdown Forge is bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It uses [Overmind](https://overmindjs.org/) for state management, [Emotion (styled)](https://emotion.sh/docs/styled) for styling, and [ESLint](https://eslint.org/) with a [Husky](https://github.com/typicode/husky) commit step for keeping code tidy. It is hosted on [Netlify](https://www.netlify.com/) and will automatically trigger a new build when the master branch is updated.

[![GitHub license](https://img.shields.io/github/license/justinjunodev/markdown-forge)](https://github.com/justinjunodev/markdown-forge/blob/master/LICENSE) [![GitHub issues](https://img.shields.io/github/issues/justinjunodev/markdown-forge)](https://github.com/justinjunodev/markdown-forge/issues) ![Twitter Follow](https://img.shields.io/twitter/follow/justinjunodev?label=follow)


## Getting Started
1. Download or clone the project files locally and navigate to the project directory. 
``` 
cd markdown-forge
```

2. Install the project dependencies. 
```
yarn
```


3. Then start the site. Once compiled, you should see and be able to access your site locally at localhost:3000
```
yarn start
```

4. If you are using a [VSCode](https://code.visualstudio.com/) or another modern ide with ESLint enabled, your files should lint automatically after each save. If not, you can run the following command to lint your changes. 

```
yarn lint
```

_Note: when contributing to this project, Husky, will check to make sure that all of your files are linted properly before you can push any commits._

### Contributions Welcome 
If you'd like to contribute to this project, please open an issue with a description of the changes you'd like to make. If the changes pertain to a bug you encountered while using the app, please include environment/ browser details, screenshots, and any steps needed to reproduce the bug.

**Lastly, when opening or responding to an issue, please be kind, patient, and open to constructive criticism. Derogatory comments, insults/ personal attacks, and harassment isn't cool, nor tolerated.**


