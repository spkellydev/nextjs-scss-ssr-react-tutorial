## Next JS Tutorial

The following repository has been updated in the past year to represent the following changes:

- Dependencies were out of date
  - @zeit/next-sass => 1.0.1
  - autoprefixer => 9.6.1
  - next => 9.0.3
  - postcss-loader => 3.0.0
  - raw-loader => 3.1.0
- Changes in NextJS best practices
  - `<title>` should not be in `_document.js` => moved to `_app.js`
  - Differences in query param masking directory structure
- More robust server-side routing
  - Provided example to pass app as parameter into router, to make use of `app.render`