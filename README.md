# Important!

To test the application, copy and paste the .env file sent with the email on to the project root directory before starting the application. The .env file contains the API key that is used in the API calls to the IMDB API.

# Instructions to test and run

- Clone the repo or download as a zip file.
- After extraction, open the repo folder in a code editor like VS Code.
- Run "npm i" in a terminal to install all dependencies from package.json.
- Once installation of all dependencies are completed, run "npm start".
- This will start the app in the development mode. Open http://localhost:3000 to view it in your browser.

# Feature details

- Responsive app showing the most popular movies from the IMDB API.
- React TypeScript App.
- Navigation feature to view details of the movie by clicking the movie card shown on home page.
- Pure CSS used for styling.
- All components are functional components.
- Pagination implemented on the home page.
- Search feature added to home page to search for a movie title.
- The application is structured into components and CSS for each component is also separated.
- The data for "Most popular movies" is saved on to the localstorage so that the API doesn't get called multiple times on page refresh. The data will be fetched from the API once everyday.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
