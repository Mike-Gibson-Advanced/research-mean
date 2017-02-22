# MEAN Test App

## Overview

Started this repo to gain experience using components of the MEAN stack and try and piece them together myself.

## What I Did

1. Used the [express generator](https://expressjs.com/en/starter/generator.html) to generate an emptyish node/express app
2. Mashed in code from a [starter template](https://github.com/AngularClass/angular2-webpack-starter) for Angular 2.
3. Chopped out some code and integrated Webpack into the node app (so the node app serves the client assets)
4. Added an API route to serve a very simple API to GET a list of data and POST and DELETE items.

## Running

1. `npm install`
2. `npm start`
3. Go to `http://localhost:3000`

## Notes

There's lots of code in here that I'm not sure of what it does and/or how it works. I've tried to cut out bloat from the Angular 2 starter template. Might not have been the best way to start.

I'm not sure how Webpack has been configured - very long config file with a lot going on. It was taken from the starter template again, and haven't had time to go through much of it. Seems to be "chunking" up the bundled files. Also, Chrome doesn't seem to work with the sourcemaps.

The Angular CLI might be another option to use as a starting point.

I'm not sure how the node backend should be structured. When there are many more classes/services/components whatever you want to call them. And how DI would be configured (can it?) in node.

Not looked at any of the "prod" configs - they probably don't work as-is.

## Interesting(?) Bits of Code/Things

The express API configuration in 
 - [server.js](src/server/app.js) and
 - [api.js](src/server/routes/api.js)

Debugging the Node app in VS Code was amazingly simple. Just went to debug tab and pressed F5. VS Code guessed(?) the app.js file to start. After that, breakpoints were hit as expected and the debugging experience was actually very nice (for the small amount of debugging I had to do).

## What Next?

Currently only really have an "EAN" stack. Need to add Mongo into this mixing bowl of configuration and pain.

Would be interesting to look at DI in node and ways to organise node backend code.

Might be interesting to add "Universal" support to the angular app, and see how straight forward/complicated it is.