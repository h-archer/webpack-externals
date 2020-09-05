## Fabric and jQuery configured as an external on a webpack project
> This repo demonstrates how to set up the fabric js and jQuery libraries as externals within a (typescript + webpack ) project. This project requires that they are not to be bundled in the output file since it will be the responsability of the consumer to provide.

Here's what has been done in this repo:

1. Added as an external within the webpack.config.js
```
...
  externals: {
    jquery: 'jQuery',
    fabric: 'fabric',
  },
...
```

2. Installed the decleration files for both libraries
``` bash
npm install @types/jquery -D
npm install @types/fabric -D
```

3. Added the libraries in public folder and index.html (since they must not be part of the app bundle)
```
  <script src="js/lib/jquery.min.js"></script>
  <script src="js/lib/fabric.min.js"></script>
```

4. Created a class App.ts, imported and implemented instances of these two libraries. (see App.ts)
```
// import { fabric } from "fabric"; /* The fabric decleration files do not support this import syntax */
const fabric = require('fabric'); /* Use commonjs to import fabric */
import $ from 'jquery';
```
## Build Setup
``` bash
# install dependencies
$ npm install

# webpack dev with hot reload
$ npm run dev-server

# webpack dev
$ npm run dev

# webpack build for production
$ npm run build
```


