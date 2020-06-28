<!DOCTYPE html>
<html lang="es" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Patrón</title>
    </head>
    <body style="background-color: black;">
        <center>
            <canvas id="canvas" width="400" height="400" style="background-color: gray;">

            </canvas>
        </center>
    </body>
</html>

<?php



?>
<script src="https://code.jquery.com/jquery-3.4.1.js"
integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
crossorigin="anonymous"></script>
<script src="jcanvas.min.js" charset="utf-8"></script>
<script type="text/javascript">


    $('#canvas').drawArc({
        fillStyle: 'red',
        x:100, y: 100,
        radius:50
    });



var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
var x = 100;
var x2 = x;
var y = 70;
for (var i = 0; i < 9; i++) {
    if (i==3) {
        y+=110;
        console.log("Aumento " + i);
        z = x-=x2*3;
        console.log(z)
        console.log("x2" + "=" + x2 + "|" + "x=" + x);
    }
    if (i==6) {
        y+=110;
        //console.log("Aumento " + i);
        x-=x2*3;

    }
    ctx.beginPath(0);
    ctx.arc(x, y, 35, 0, 2 * Math.PI);
    ctx.stroke();
    x+=x2;
    console.log(i + "-" + x);

}
// Hover over the triangle to rotate it
$('canvas').drawPolygon({
  layer: true,
  fillStyle: '#fff',
  strokeStyle: '#333',
  strokeWidth: 2,
  x: 160, y: 150,
  radius: 100,
  sides: 3,
  mouseover: function(layer) {
    $(this).animateLayer(layer, {
      fillStyle: '#c33'
    }, 500);
  },
  mouseout: function(layer) {
    $(this).animateLayer(layer, {
      fillStyle: '#fff'
    }, 500);
  },
});

</script>
