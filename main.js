var canvas = document.getElementById("my_canvas");
ctx=canvas.getcontext("2d");

ctx.beginPath()
ctx.strokeStyle="red"
ctx.lineWidth = 5
ctx.arc(300,300,50,0,2*Math.PI)
ctx.stroke()

