## Webpack  externals are resolving to undefined
> This repo demonstrates an issue when trying to set up the fabric js library as an external within a (typescript + webpack ) project. Fabric should not be bundled in the output file since it will be the responsability of the consumer to provide (eg. through a browser script tag).

Note: jQuery has also been added as an external library and works as expected. Fabric on the other hand does not.

In this repo, fabric (and jquery) has been configured as an external so that it will not be included in the webpack bundle. 

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
import { fabric } from "fabric";
import $ from 'jquery';
```

You can view and run the files to confirm that fabric resolves to undefined within the class App.ts with the error:
```
TypeError: Cannot read property 'Canvas' of undefined
```

##### stackoverflow issue
https://stackoverflow.com/questions/63623980/webpack-externals-are-resolving-to-undefined

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


