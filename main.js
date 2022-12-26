canvas = document.getElementById('my_canvas');
ctx=canvas.getContext("2d")

ctx.beginPath()
ctx.strokeStyle="red"
ctx.lineWidth=5
ctx.arc(400,175,50,0,2*Math.PI)
ctx.stroke()

//#2
ctx.beginPath()
ctx.strokeStyle="green"
ctx.lineWidth=5
ctx.arc(350,225,50,0,2*Math.PI)
ctx.stroke()

//#3
ctx.beginPath()
ctx.strokeStyle="blue"
ctx.lineWidth=5
ctx.arc(290,175,50,0,2*Math.PI)
ctx.stroke()

//#4
ctx.beginPath()
ctx.strokeStyle="black"
ctx.lineWidth=5
ctx.arc(460,225,50,0,2*Math.PI)
ctx.stroke()

//#5
ctx.beginPath()
ctx.strokeStyle="yellow"
ctx.lineWidth=5
ctx.arc(510,175,50,0,2*Math.PI)
ctx.stroke()