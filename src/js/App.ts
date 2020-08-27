import { fabric } from "fabric";
import $ from 'jquery';

export default class App {
  
    canvas: fabric.Canvas;

    constructor(private readonly selector: string, canvasHeight: number, canvasWidth: number) {
      
      // Error
      // Uncaught TypeError: jquery__WEBPACK_IMPORTED_MODULE_1___default(...) is not a function
      $(`#${selector}`).replaceWith(`<canvas id="${selector}" height=${canvasHeight} width=${canvasWidth}> </canvas>`);

      // Error:
      // Uncaught TypeError: Cannot read property 'Canvas' of undefined
      this.canvas = new fabric.Canvas(`${selector}`, { selection: false });

    }

}

export { App };