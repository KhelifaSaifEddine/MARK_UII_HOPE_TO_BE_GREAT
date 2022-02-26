const canvas = document.querySelector(".canvas0");
const ctx = canvas.getContext("2d");
let cw = canvas.style.width = document.querySelector(".doubledborder").clientWidth ;
let ch = canvas.style.height = document.querySelector(".doubledborder").clientHeight;

var grd = ctx.createRadialGradient(cw, 0, 0, cw, 0, 300.46);
grd.addColorStop(0, "#febe7c");
grd.addColorStop(1, "#9c6e3f");
ctx.strokeStyle = grd
ctx.lineWidth = 10
ctx.scale(0.2,0.2)
function drawShapeBefore1(ctx, xoff, yoff) {
    ctx.beginPath();
    ctx.moveTo(270 + xoff, 0 + yoff);
    ctx.bezierCurveTo(291 + xoff, 98 + yoff, 233 + xoff, 120 + yoff, 212 + xoff, 150 + yoff);
    ctx.bezierCurveTo(400 + xoff ,350 + yoff, 400 + xoff, 359 + yoff, 436 + xoff, 500 + yoff);
    ctx.stroke();
  }
function drawShapeBefore(ctx, xoff, yoff) {
    ctx.beginPath();
    ctx.moveTo(150 + xoff, 49 + yoff);
    ctx.bezierCurveTo(300 + xoff, 108 + yoff, 327 + xoff, 150 + yoff, 436 + xoff, 250 + yoff);
    ctx.stroke();
  }
function drawShapeAfter(ctx, xoff, yoff) {
    ctx.beginPath();
    ctx.moveTo(320 + xoff, 49 + yoff);
    ctx.bezierCurveTo(280 + xoff, 50 + yoff, 120 + xoff, 150 + yoff, 40 + xoff, 300 + yoff);
    ctx.stroke();
  }
  function drawShapeAfter1(ctx, xoff, yoff) {
    ctx.beginPath();
    ctx.moveTo(200 + xoff, 0 + yoff);
    ctx.bezierCurveTo(215 + xoff, 92 + yoff, 233 + xoff, 110 + yoff, 277 + xoff, 150 + yoff);
    ctx.bezierCurveTo(250 + xoff, 180 + yoff, 94 + xoff, 359 + yoff, 80 + xoff, 424 + yoff);
    ctx.stroke();

  }
drawShapeBefore(ctx,1108,-40)
drawShapeBefore1(ctx,1108,-40)
const canvas1 = document.querySelector(".canvas1");
const ctx1 = canvas1.getContext("2d");
let cw1 = canvas1.style.width = document.querySelector(".doubledborder").clientWidth ;
let ch1 = canvas1.style.height = document.querySelector(".doubledborder").clientHeight;
var grd1 = ctx1.createRadialGradient(75, 50, 5, 90, 60, 100);
grd1.addColorStop(0, "#febe7c");
grd1.addColorStop(1, "#9c6e3f");
ctx1.strokeStyle = grd1
ctx1.lineWidth = 10
ctx1.scale(0.2,0.2)
drawShapeAfter(ctx1,-90,-40)

drawShapeAfter1(ctx1,-100,-40)
