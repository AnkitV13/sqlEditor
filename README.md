
# SQL Editor

A simple online SQL editor interface designed to showcase the ability for users to easily execute queries on a table using SQL. It includes user-friendly UI components for additional features that can be incorporated.

[LIVE👈](https://sqleditorassigment.netlify.app/)

## Tech-stack/Libraries Used

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React-Ace](https://www.npmjs.com/package/react-ace)

## Let's Get Started:

1. [Download](https://github.com/AnkitV13/sqlEditor) or [Clone](https://github.com/AnkitV13/sqlEditor.git) the Repository.
2. Run `npm install` or `npm init` to install the project dependencies.

3. Run `npm start` to run the app in development mode.

4. App can be seen at: `http://localhost:3000/`

## App Performance

Web-App performace tested using the [Lighthouse Tool](https://developers.google.com/web/tools/lighthouse).

![img](https://github.com/AnkitV13/sqlEditor/assets/88629363/4d3aa6a3-efab-4765-8df3-ce576eba7eb2)

## Performance Optimisation

1. The process of importing the `react-ace` editor was causing extended loading times on the page. To address this, I transformed it into a lazily loaded component utilizing `React.lazy()`. This approach employs code-splitting and defers the loading of the editor until needed.

2. Selectively importing specific modules from a library for use in a component, rather than importing the entire library.






