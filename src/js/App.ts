import $ from 'jquery';

// import { fabric } from "fabric";
const fabric = require('fabric'); 

export default class App {
  
    canvas: fabric.Canvas;

    constructor(private readonly selector: string, canvasHeight: number, canvasWidth: number) {
      
      $(`#${selector}`).replaceWith(`<canvas id="${selector}" height=${canvasHeight} width=${canvasWidth}> </canvas>`);

      this.canvas = new fabric.Canvas(`${selector}`, { selection: false });

    }

}

export { App };