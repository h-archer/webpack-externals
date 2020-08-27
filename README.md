# ithar-holding-website

> This repo demonstrates the issues when trying to set up two js libraries as externals within a (typ[escript + webpack ) project.

The two libraries, jquery and fabric should not be bundled in the output file since they will be the responsability o9f the consumer to provide them (eg. with a browser script tag).

An attempt has been made to configure them as externals so that they are not bundled. Here's what has been done in this repo:

- Added as externals within the webpack.config.js file:
```
...
  externals: {
    jquery: 'JQuery',
    fabric: 'fabric',
  },
...
```

- Installed the decleration files for both libraries:
``` bash
npm install @types/jquery -D
npm install @types/fabric -D
```

- Added the libraries in the html file within script tags
```
  <script src="js/lib/jquery.min.js"></script>
  <script src="js/lib/fabric.min.js"></script>
```

- Created a class App.ts. Imported and implemented instances of these two libraries. Imported like so:
```
import { fabric } from "fabric";
import $ from 'jquery';
```

You can view and run the files to confirm that both libraries resolve to undefined within App.ts

## Build Setup

``` bash
# install dependencies
$ npm install

# webpack serve dev with hot reload
$ npm run dev-server

# build dev
$ npm run dev

# build for production
$ npm run build
```


