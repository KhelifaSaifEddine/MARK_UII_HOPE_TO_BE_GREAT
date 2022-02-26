const canvas = document.querySelector(".canvas_selection_logo");
const ctx = canvas.getContext("2d");
let cw = canvas.style.width = document.querySelector(".doubledborder").clientWidth ;
let ch = canvas.style.height = document.querySelector(".doubledborder").clientHeight;

var grad = ctx.createLinearGradient(0, 100, cw+320,  100);
  
grad.addColorStop(0.47, 'rgba(156, 110, 63, 1)');
grad.addColorStop(0.5, 'rgba(254, 190, 124, 1)');
grad.addColorStop(1, 'rgba(156, 110, 63, 1)');
ctx.strokeStyle = grad
ctx.lineWidth = 45
ctx.scale(0.2,0.2)
function drawShape(ctx, xoff, yoff) {
  ctx.beginPath();
  ctx.moveTo(312 + xoff, 228 + yoff);
  ctx.bezierCurveTo(240 + xoff, 193 + yoff, 223 + xoff, 188 + yoff, 167 + xoff, 155 + yoff);
  ctx.bezierCurveTo(165 + xoff, 134 + yoff, 166 + xoff, 128 + yoff, 164 + xoff, 108 + yoff);
  ctx.bezierCurveTo(242 + xoff, 160 + yoff, 255 + xoff, 163 + yoff, 296 + xoff, 185 + yoff);
  ctx.bezierCurveTo(334 + xoff, 168 + yoff, 343 + xoff, 162 + yoff, 427 + xoff, 108 + yoff);
  ctx.bezierCurveTo(428 + xoff, 130 + yoff, 427 + xoff, 142 + yoff, 428 + xoff, 155 + yoff);
  ctx.bezierCurveTo(396 + xoff, 175 + yoff, 378 + xoff, 183 + yoff, 295 + xoff, 229 + yoff);
  ctx.stroke();
}
drawShape(ctx,0,0)