/**
 * Created by Yu on 2019/8/21.
 */
//系统请求轮询时间间隔
var timeout = 10000;
//分页条数
var iDisplayLength = 9;
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

// 初始化分页控件
function pageEvent() {
    $.jqPaginator('#pagination', {
        totalPages: parseInt($("#countindex").val()),
        visiblePages: parseInt($("#visiblePages").val()),
        currentPage: 1,
        first: '<li class="first"><a href="javascript:;">首页</a></li>',
        prev: '<li class="prev"><a href="javascript:;"><i class="arrow arrow2"></i>上一页</a></li>',
        next: '<li class="next"><a href="javascript:;">	下一页<i class="arrow arrow3"></i></a></li>',
        last: '<li class="last"><a href="javascript:;">尾页</a></li>',
        page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
        onPageChange: function (num, type) {
            if (type == "change") {
                //getList(num, iDisplayLength);
            }
        }
    });
}
$(function(){
    document.onkeydown = function (event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == 27) {
            $(window.parent.document.getElementById("part5JSDD-modal")).hide().empty()
            $(window.parent.document.getElementById("part2ZCGL-modal")).hide().empty()
            $(window.parent.document.getElementById("part6GDGL-modal")).hide().empty()
            $(window.parent.document.getElementById("part3GJXX-modal")).hide().empty()
        }
    }
})