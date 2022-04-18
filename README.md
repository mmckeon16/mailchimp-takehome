# Getting Started with Mailchimp Project

Use the correct node version

```
nvm use
```

Install the dependencies

```
npm i
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run wdio`

Launches a chrome browser and runs all tests in the `e2e` directory (besides the axe scan). Configuration for these tests can be found in the `wdio.conf.js` file. **Note** to run these tests, the application needs to be running on `localhost:3000`. You can do this by running `npm start`, and then run this in a separate terminal.

### `npm run wdio:axe`

Launches a chrome browser and runs the `axe.e2e.js` test. Right now, the results are just logged to the console. **Note** to run these tests, the application needs to be running on `localhost:3000`. You can do this by running `npm start`, and then run this in a separate terminal.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more inform

## MailChimp Project Topics

### Decisions

#### [Material UI](https://mui.com/)

This project uses [Material UI](https://mui.com/). Using Material UI at my current job, I've seen it's many improvements for accessibility. For example, their current [Tabs](https://mui.com/material-ui/react-tabs/) component currently has an [experimental version](https://mui.com/material-ui/react-tabs/#experimental-api) which automatically inject props for accessible tabs according to the [WAI-ARIA authoring practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel).

I decided not to use this experimental version to show my implementation for accessible tabs, and in typical company, it is not practical to use an experimental version for a production-facing product.

#### WDIO

Webdriverio is a common used framework for automated browser testing. The only accessibility error is that there is no level 1 Heading on the page. This can be viewed in the console when the the `npx wdio:axe` is run.

### Clarifications

- Should the keyboard left/right while focused on the tabs section activate the current focused tab? This is a simple as removing or adding the `selectionFollowsFocus` prop in the MuiTabs component of the [Tabs](https://github.com/mmckeon16/mailchimp-takehome/blob/main/src/components/Tabs/Tabs.js#L47) component in this project.

### TODO

- ~~Unit tests with React Testing Library~~
- ~~WDIO Tests for each view: at least axe scan~~
- ~~Fix aria labels on tabs~~
- improve styling on the Tab focus state: need to have border be across whole component
- separate the tab panel content into a separate component
- ~~change non-focused color of tabs to be accurate for the prompt~~
- ~~add in skip-to-content button before the tabs~~
- ~~clean up README~~

### Improvements

- Better WDIO integration
- Better browser test running setup - probably using docker
