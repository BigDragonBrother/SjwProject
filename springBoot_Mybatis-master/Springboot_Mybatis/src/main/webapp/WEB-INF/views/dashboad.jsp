<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>吉林省纪委监委信息化运维平台</title>
    <style type="text/css">
        .header{
            background-image: url('<%=request.getContextPath()%>/resources/dist/images/1/2.jpg');
            background-size: 100% 100%!important;
            -moz-background-size: 100% !important; /* 老版本的 Firefox */
            background-repeat: no-repeat !important;
            width:100%;
            height:4em;
            margin: 0 auto;
            text-align: center;
            margin-bottom: 1em;
        }
        .main{
            background-image: url('<%=request.getContextPath()%>/resources/dist/images/1/3.png');
            background-size: 100% 100% !important;
            -moz-background-size: 100% !important; /* 老版本的 Firefox */
            background-repeat: no-repeat !important;
            width: 96%;
            margin: 0 auto;
            overflow: hidden;
        }
        .chart{
            width: 100%;
            position: relative;
        }
        .main_chart{
            width: 33%;
            height:16em;
            display: inline-block;
        }
        .main_chart2{
            width: 50%;
            height:20em;
            display: inline-block;
        }
        #sy{
            background-image: url('<%=request.getContextPath()%>/resources/dist/images/1/4.png');
            background-size: 100% 100% !important;
            -moz-background-size: 100% !important; /* 老版本的 Firefox */
            background-repeat: no-repeat !important;
        }
        #bj{
            background-image: url('<%=request.getContextPath()%>/resources/dist/images/1/5.png');
            background-size: 100% 100% !important;
            -moz-background-size: 100% !important; /* 老版本的 Firefox */
            background-repeat: no-repeat !important;
            overflow: hidden;
        }
        body{
            margin: 0!important;
            background-image: url('<%=request.getContextPath()%>/resources/dist/images/1/1.jpg');
            background-size: 100% 100%!important;
            -moz-background-size: 100% !important; /* 老版本的 Firefox */
            background-repeat: no-repeat !important;
        }
        .head{
            color: #00A4FF;
            font-size: 1.2em;
            font-weight: bold;
            text-align: left;
            padding-left: 1.5em;
            padding-top: 1em;
        }
        @media (min-width: 7680px) {
            body{
                font-size:92px;
            }
        }
        @media (max-width: 1920px) {
            body{
                font-size:23px;
            }
        }
    </style>
</head>
<body>
<div class="header">
    <div style="width: 30%;margin: 0 auto;padding-top: 1em;padding-right: 1em"><img src="<%=request.getContextPath()%>/resources/dist/images/1/title.png" style="width: 100%"/></div>
    <div style="color: #00A4FF;float:right;position:fixed;text-align:right;top:2em;right: 1em" id="time"></div>
</div>
<div class="main">
    <div class="head">办案办结率统计</div>
    <div class="chart"></div>
</div>
<div style="width: 100%;margin: 1em auto;text-align: center">
    <div id="sy" style="width: 48%;height:20em;display: inline-block"></div>
    <div id="bj" style="width: 48%;height:20em;display: inline-block;">
        <div class="bj"  style="width: 100%;position: relative;"></div>
    </div>
</div>

</body>
<script type="application/javascript" src="<%=request.getContextPath()%>/resources/dist/js/common/jquery-3.3.1.min.js"></script>
<script type="application/javascript" src="<%=request.getContextPath()%>/resources/dist/js/common/echarts.min.js"></script>
<script type="application/javascript" src="<%=request.getContextPath()%>/resources/dist/js/common/amcharts/amcharts.js"></script>
<script type="application/javascript" src="<%=request.getContextPath()%>/resources/dist/js/common/halloween.js"></script>
<script type="application/javascript">
    $(document).ready(function () {
        function p(s) {
            return s < 10 ? '0' + s: s;
        }


        var myDate = new Date();
//获取当前年
        var year=myDate.getFullYear();
//获取当前月
        var month=myDate.getMonth()+1;
//获取当前日
        var date=myDate.getDate();
        var h=myDate.getHours();       //获取当前小时数(0-23)
        var m=myDate.getMinutes();     //获取当前分钟数(0-59)
        var s=myDate.getSeconds();


        var now=year+'-'+p(month)+"-"+p(date)+" "+p(h)+':'+p(m)+":"+p(s);
        $('#time').html(now);
// ====================================================================================================
        // 指定图表的配置项和数据
        var depData = [
            {
                dep:'办公厅',
                "personName": ["历树奎", "张苗", "沈庚", "李娜", "孙天阳"],
                "percentage": [30, 70, 60, 90, 20]
            },
            {
                dep:'案管室',
                "personName": ["所永吉", "租玉秋", "高明", "孙海森", "焦慧"],
                "percentage": [30, 70, 60, 90, 20]
            },
            {
                dep:'信息技术室',
                "personName": ["王洪伟", "丁昕", "胡婷婷", "赵庆斌", "王汉夫"],
                "percentage": [90, 80, 70, 60, 50]
            },
            {
                dep:'机关事务室',
                "personName": ["朱永丰", "李铎", "薛琨", "张晶", "赵青松"],
                "percentage": [30,70, 60, 90, 20]
            }
        ];
        for(var i=0;i<depData.length;i++) {
            $("<div class='main_chart' id='main"+i+"'></div>").appendTo('.chart');
            var myChart = echarts.init(document.getElementById('main'+i), 'halloween');
            var option = {
                "themeName": "halloween",
                title: {
                    text: depData[i].dep,
                    x:'center',
                    y:'bottom'
                },
                xAxis: {
                    data: depData[i].personName,
                    splitLine: {
                        "show": false
                    }
                },
                yAxis: {
                    show:false
                },
                series: [{
                    name: '办结率',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            // 定制显示（按顺序）
                            color: function(params) {
                                var colorList = ["#FF3217",
                                    "#17FFFC",
                                    "#F4F219",
                                    "#FA9022",
                                    "#8C70F8",
                                    "#19DC7C" ];
                                return colorList[params.dataIndex]
                            }
                        },
                    },
                    label: {
                        normal: {
                            position: 'top',
                            show: true
                        }
                    },
                    data: depData[i].percentage
                }]
            };
            myChart.setOption(option);
        }

        var $picture = $(".chart");
        var windowWidth = $(window).width();
        $picture.css("width", windowWidth * (Math.ceil(depData.length/3)));
        $(".main_chart").css("width", windowWidth*0.33);
        var right = 0;
        setInterval(function () {
            var moving = true;
            right += windowWidth*0.33;
            $picture.animate({right: right}, 400, "linear", function () {
                $picture.css("right", right + "px");
                moving = false;
            });
            if (right >= windowWidth * 0.33*depData.length) {
                right = 0;
            }
        }, 3000);
// =============================================================================================================================
        var myChat1 = echarts.init(document.getElementById("sy"), 'halloween');
        var syData = {
            "subTime": ["2019-07", "2019-08", "2019-09"],
            "personName": ["历树奎", "李玉海", "周光宇", "张  苗", "翟现坤", "赵  爽", "胡婷婷", "孙天阳", "李娜", "马书刚", "卢继红"],
            "doNumber1": [58,28,51,55,54,68,59,52,48,38,78],
            "doNumber2": [35,35,15,35,32,35,40,27,35,35,35],
            "doNumber3": [30,40,50,60,80,40,20,34,80,80,80],
            "allSubNum": "766"
        };
        var option1 = {
            title: {
                text: '近三月办件数-'+syData.allSubNum,
                x:'left',
                y:'10px'
            },
            tooltip: {
                trigger: 'axis',
                right:'6%'
            },
            legend: {
                data:syData.subTime,
                x:'right',
                y:'20px'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: syData.personName
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:syData.subTime[0],
                    type:'line',
                    stack: '总量',
                    data:syData.doNumber1
                },
                {
                    name:syData.subTime[1],
                    type:'line',
                    stack: '总量',
                    data:syData.doNumber2
                },
                {
                    name:syData.subTime[2],
                    type:'line',
                    stack: '总量',
                    data:syData.doNumber3
                }
            ]
        };
        myChat1.setOption(option1);
// =============================================================================================================================
        var bjData=[
            {
                dep:"办公厅办件",
                "person": [
                    {value:30, name:'历树奎'},
                    {value:70, name:'张苗'},
                    {value:60, name:'胡婷婷'},
                    {value:90, name:'李娜'},
                    {value:20, name:'孙天阳'}
                ],
                "allSubCounts":"270"
            },
            {
                dep:"案管室办件",
                "person": [
                    {value:30, name:'所永吉'},
                    {value:60, name:'租玉秋'},
                    {value:60, name:'高明'},
                    {value:20, name:'孙海森'},
                    {value:70, name:'焦慧'}
                ],
                "allSubCounts":"240"
            },
            {
                dep:"信息技术室办件",
                "person": [
                    {value:50, name:'王洪伟'},
                    {value:40, name:'丁昕'},
                    {value:70, name:'沈庚'},
                    {value:80, name:'赵庆斌'},
                    {value:30, name:'王汉夫'}
                ],
                "allSubCounts":"270"
            },
            {
                dep:"机关事务室办件",
                "person": [
                    {value:90, name:'朱永丰'},
                    {value:70, name:'李铎'},
                    {value:40, name:'薛琨'},
                    {value:30, name:'张晶'},
                    {value:80, name:'赵青松'}
                ],
                "allSubCounts":"310"
            }
        ];
        for(var i=0;i<bjData.length;i++) {
            $("<div class='main_chart2' id='bj"+i+"'></div>").appendTo('.bj');
            var myChart2 = echarts.init(document.getElementById('bj'+i), 'halloween');
            var option2 = {
                title: {
                    text: bjData[i].dep,
                    subtext:bjData[i].allSubCounts,
                    x:'center',
                    y:'10px'
                },
                calculable : true,
                label:{
                    formatter: '{b}/{c}'
                },
                series : [
                    {
                        type:'pie',
                        radius : [30, 70],
                        center : ['50%', '60%'],
                        roseType : 'radius',
                        data:bjData[i].person
                    }
                ]
            };
            myChart2.setOption(option2);
        }

        var $picture2 = $(".bj");
        var windowWidth2 = $(window).width()*0.48;
        $picture2.css("width", windowWidth2 * (Math.ceil(bjData.length/2)));
        $(".main_chart2").css("width", windowWidth2*0.48);
        var right2 = 0;
        setInterval(function () {
            var moving2 = true;
            right2 += windowWidth2*0.5;
            $picture2.animate({right: right2}, 400, "linear", function () {
                $picture2.css("right", right2 + "px");
                moving2 = false;
            });
            if (right2 >= windowWidth2 * 0.5*depData.length) {
                right2 = 0;
            }
        }, 3000)

    })
</script>
</html>