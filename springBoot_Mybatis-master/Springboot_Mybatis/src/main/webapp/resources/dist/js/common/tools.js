/**
 * Created by Yu on 2019/8/21.
 */
//系统请求轮询时间间隔
var timeout = 5000;

function XDT(id){
    var canvas = document.getElementById(id);
    var context = canvas.getContext('2d');
    var x = 0;
    var coords = new Array();
    var step = 2;
    function draw() {
        canvas.width = 100//canvas.width;
        canvas.height = 100//canvas.width;
        context.moveTo(0, 50);
        x += step;
        if (x > 200) {
            for (var i in coords) {
                coords[i].x = coords[i].x - step;
            }
        }
        var temp = {
            x: x,
            y: (50 - Math.tan((Math.cos(x) * Math.random() *60)) )
        };
        coords.push(temp);
        for (var i in coords) {
            context.lineTo(coords[i].x, coords[i].y);
        }
        context.strokeStyle = "#00fff0";
        context.lineWidth = 2;
        context.shadowColor = '#00fff0';
        context.shadowBlur = 15;
        context.stroke();
        context.closePath();
        if (coords.length > 6000) {
            coords = [];
            x = 0;
        }
    }
    setInterval(draw, 20);
}