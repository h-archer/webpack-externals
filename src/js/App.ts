﻿// import { fabric } from "fabric";
import $ from 'jquery';

const fabric = require('fabric'); 

export default class App {
  
    canvas: fabric.Canvas;

    constructor(private readonly selector: string, canvasHeight: number, canvasWidth: number) {
      
      $(`#${selector}`).replaceWith(`<canvas id="${selector}" height=${canvasHeight} width=${canvasWidth}> </canvas>`);

      // TypeError: Cannot read property 'Canvas' of undefined
      this.canvas = new fabric.Canvas(`${selector}`, { selection: false });

    }

}

export { App };