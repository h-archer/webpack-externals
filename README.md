## Webpack  externals are resolving to undefined

> This repo demonstrates the issues when trying to set up two js libraries as externals within a (typescript + webpack ) project.

The two libraries, jquery and fabric should not be bundled in the output file since they will be the responsability of the consumer to provide them (eg. through a browser script tag).

An attempt has been made to configure them as externals so that they are not bundled. Here's what has been done in this repo:

1. Added as externals within the webpack.config.js file:
```
...
  externals: {
    jquery: 'JQuery',
    fabric: 'fabric',
  },
...
```

2. Installed the decleration files for both libraries:
``` bash
npm install @types/jquery -D
npm install @types/fabric -D
```

3. Added the libraries in the public folder and the html file within script tags (since they must not be part of the app bundle)
```
  <script src="js/lib/jquery.min.js"></script>
  <script src="js/lib/fabric.min.js"></script>
```

4. Created a class App.ts. Imported and implemented instances of these two libraries. Imported like so:
```
import { fabric } from "fabric";
import $ from 'jquery';
```

You can view and run the files to confirm that both libraries resolve to undefined within the class file, App.ts

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


