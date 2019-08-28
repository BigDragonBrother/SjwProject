var fontSize = 30 * window.innerWidth / 1920 / 4;
var color = ["#18de7c", "#32a8fd", "#8c71f7", "#fa9148", "#f76563", "#e8ef47"]
Tools = {
    data: {},
    initExtends: function (status) {
    },
    init: function () {
        document.onkeydown = function (event) {
            var e = event || window.event || arguments.callee.caller.arguments[0];
            if (e && e.keyCode == 27) {
                $(window.parent.document.getElementById("part5YWYY-modal")).hide().empty()
            }
        }
        //部门发文
        Tools.amBarFn("part1-1", [
            {name: '部门1', value: 30, color: color[0]},
            {name: '部门2', value: 36, color: color[1]},
            {name: '部门3', value: 49, color: color[2]},
            {name: '部门4', value: 40, color: color[3]},
            {name: '部门5', value: 37, color: color[4]},
            {name: '部门6', value: 53, color: color[5]}]);
        // Tools.barFn("part1-1", function (e) {
        //     var data = [{name: '部门1', value: 30}, {name: '部门2', value: 36}, {name: '部门3', value: 49}, {
        //         name: '部门4',
        //         value: 40
        //     }, {name: '部门5', value: 37}, {name: '部门6', value: 53},];
        //     Tools.barSetData(color, e, data);
        // });

        //部门收文
        Tools.radiusFn("part1-2", function (e) {
            var data = [{name: '部门1', value: 30}, {name: '部门2', value: 36}, {name: '部门3', value: 49}, {
                name: '部门4',
                value: 40
            }, {name: '部门5', value: 37}, {name: '部门6', value: 53},];
            Tools.radiusSetData(e, data);
        });

        //督办件概况
        Tools.linesAreaFn("part2-1", function (e) {
            var data = {
                legend: ["领导指示类", "会议研究类", "调研讲话类", "任务分解类"],
                data1: [18, 30, 40, 70, 100, 80],
                data2: [40, 20, 45, 65, 110, 75],
                data3: [20, 60, 50, 80, 120, 100],
                data4: [40, 90, 80, 100, 120, 150],
            };
            Tools.linesAreaSetData(e, data);
        });

        //各地区得分情况
        Tools.amBarFn("part4-1", [{name: '长春市', value: 30, color: "#00fff0"},
            {name: '吉林市', value: 36, color: "#00fff0"},
            {name: '辽源市', value: 49, color: "#00fff0"},
            {name: '通化市', value: 40, color: "#00fff0"},
            {name: '白山市', value: 37, color: "#00fff0"},
            {name: '松原市', value: 53, color: "#00fff0"}])
        // Tools.barFn("part4-1", function (e) {
        //     var data = [{name: '长春市', value: 30}, {name: '吉林市', value: 36}, {name: '辽源市', value: 49}, {
        //         name: '通化市',
        //         value: 40
        //     }, {name: '白山市', value: 37}, {name: '松原市', value: 53},];
        //     Tools.barSetData(["#00fff0"], e, data);
        // });

        //各地区报送及采用情况
        Tools.amBarsFn("part4-2",[{
            name:"长春市",
            value1:15,
            value2:18,
            value3:21,
        },{
            name:"吉林市",
            value1:13,
            value2:15,
            value3:12,
        },{
            name:"四平市",
            value1:10,
            value2:12,
            value3:16,
        },{
            name:"辽源市",
            value1:8,
            value2:6,
            value3:7,
        },{
            name:"通化市",
            value1:5,
            value2:4,
            value3:7,
        },{
            name:"白山市",
            value1:3,
            value2:4,
            value3:2,
        }])

        // Tools.barsFn("part4-2", function (e) {
        //     var data = {
        //         xAxis: ["长春市", "吉林市", "辽源市", "通化市", "白山市", "松原市"],
        //         data: [{
        //             "data": [5, 2, 5, 7, 5, 6],
        //             "name": "报送总条数",
        //         }, {
        //             "data": [2, 5, 7, 5, 6, 5],
        //             "name": "被省纪委采用",
        //         }, {
        //             "data": [5, 7, 5, 6, 5, 2],
        //             "name": "被中央纪委采用",
        //         }]
        //     };
        //     Tools.barsSetData(e, data);
        // });

        Tools.graphFn("part6-1", function (e) {

        })


        Tools.tableFn();
    },

    barFn: function (id, callback) {
        var myChart = echarts.init(document.getElementById(id));
        myChart.setOption({
            color: color,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                textStyle: {
                    fontSize: fontSize
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                top: "15%",
                bottom: '5%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                axisLabel: {
                    textStyle: {
                        fontSize: fontSize,
                        color: '#afb6d5'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#272a72'
                    }
                },
                splitLine: {show: false},
                data: ['--', '--', '--', '--', '--', '--'],
            }],
            yAxis: {
                type: 'value',
                name: '',
                axisLabel: {
                    textStyle: {
                        fontSize: fontSize,
                        color: '#afb6d5'
                    },
                    formatter: '{value} 件'
                },
                axisLine: {
                    lineStyle: {
                        color: '#272a72'
                    }
                },
                splitLine: {show: false},

            },
            series: [{
                name: '部门发文',
                type: 'bar',
                barWidth: '50%',
                data: []
            }]
        });
        Tools.resizeFn(myChart);
        return callback(myChart);
    },
    barSetData: function (color_, target, data) {
        target.setOption({
            xAxis: [{
                data: (function () {
                    var arr = [];
                    $.each(data, function (index, item) {
                        arr.push(item.name)
                    })
                    return arr;
                })()
            }],
            series: [{
                data: (function () {
                    $.each(data, function (index, item) {
                        item.itemStyle = {
                            color: color[index]
                        }
                        $.extend(item, {
                            "type": "bar",
                            itemStyle: {
                                color: color_[index] || color_[0]
                            },
                            "label": {
                                show: true,
                                position: "top",
                                fontSize: fontSize
                            }
                        })
                    })

                    return data;
                })()
            }]
        })
    },

    barsFn: function (id, callback) {
        var myChart = echarts.init(document.getElementById(id));
        myChart.setOption({
            grid: {
                left: '3%',
                right: '4%',
                top: "18%",
                bottom: '5%',
                containLabel: true
            },
            legend: {
                type: "scroll",
                top: "0%",
                x: "center",
                itemWidth: fontSize * 2,
                itemHeight: fontSize,
                itemGap: 16,
                textStyle: {
                    color: '#A3E2F4',
                    fontSize: fontSize,
                    fontWeight: 0
                },
                icon: 'stack',
                data: ['--', '--', '--', '--']
            },
            "tooltip": {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                textStyle: {
                    fontSize: fontSize
                }
            },
            "color": color,
            "xAxis": [{
                type: 'category',
                axisLabel: {
                    textStyle: {
                        fontSize: fontSize,
                        color: '#afb6d5'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#272a72'
                    }
                },
                splitLine: {show: false},
                data: ['--', '--', '--', '--', '--', '--'],
            }],
            "yAxis": [{
                type: 'value',
                name: '',
                axisLabel: {
                    textStyle: {
                        fontSize: fontSize,
                        color: '#afb6d5'
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: '#272a72'
                    }
                },
                splitLine: {show: false},
            }],
            "series": []
        });
        Tools.resizeFn(myChart);
        return callback(myChart);
    },
    barsSetData: function (target, data) {
        target.setOption({
            legend: {
                data: (function () {
                    var arr = [];
                    $.each(data.data, function (index, item) {
                        arr.push(item.name)
                    })
                    return arr;
                })()
            },
            xAxis: [{
                data: data.xAxis
            }],
            series: (function () {
                $.each(data.data, function (index, item) {
                    $.extend(item, {
                        "type": "bar",
                        "label": {
                            show: true,
                            position: "top",
                            fontSize: fontSize
                        }
                    })
                })
                return data.data;
            })()
        })
    },

    radiusFn: function (id, callback) {
        var myChart = echarts.init(document.getElementById(id));
        myChart.setOption({
            color: color,
            grid: {
                left: "10%",
                top: "20%",
                bottom: "5%",
                containLabel: true
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)",
                textStyle: {
                    fontSize: fontSize
                }
            },
            legend: {
                type: "scroll",
                orient: "vartical",
                top: "center",
                right: "15",
                itemWidth: fontSize * 2,
                itemHeight: fontSize,
                itemGap: 16,
                textStyle: {
                    color: '#A3E2F4',
                    fontSize: fontSize,
                    fontWeight: 0
                },
                data: ['--', '--', '--', '--', '--', '--']
            },
            polar: {},
            angleAxis: {
                interval: 1,
                type: 'category',
                data: [],
                z: 10,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "#0B4A6B",
                        width: 1,
                        type: "dashed"
                    },
                },
                axisLabel: {
                    interval: 0,
                    show: true,
                    color: "#0B4A6B",
                    margin: 8,
                    fontSize: fontSize
                },
            },
            radiusAxis: {
                min: 40,
                max: 120,
                interval: 20,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "#0B3E5E",
                        width: 1,
                        type: "solid"
                    },
                },
                axisLabel: {
                    formatter: '{value} %',
                    show: false,
                    padding: [0, 0, 20, 0],
                    color: "#0B3E5E",
                    fontSize: 16
                },
                splitLine: {
                    lineStyle: {
                        color: "#0B3E5E",
                        width: 2,
                        type: "dashed"
                    }
                }
            },
            calculable: true,
            series: []
        });
        Tools.resizeFn(myChart);
        return callback(myChart);
    },
    radiusSetData: function (target, data) {
        target.setOption({
            legend: {
                data: (function () {
                    var arr = [];
                    $.each(data, function (index, item) {
                        arr.push(item.name)
                    })
                    return data;
                })()
            },
            series: [
                {
                    type: 'pie',
                    radius: ["5%", "10%"],
                    hoverAnimation: false,
                    labelLine: {
                        normal: {
                            show: false,
                            length: 10,
                            length2: 35
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    data: [{
                        name: '',
                        value: 0,
                        itemStyle: {
                            normal: {
                                color: "#7fdbff"
                            }
                        }
                    }]
                },
                {
                    type: 'pie',
                    radius: ["90.5%", "92%"],
                    hoverAnimation: false,
                    labelLine: {
                        normal: {
                            show: false,
                            length: 10,
                            length2: 35
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    name: "",
                    data: [{
                        name: '',
                        value: 0,
                        itemStyle: {
                            normal: {
                                color: "#0e5387"
                            }
                        }
                    }]
                },
                {
                    stack: 'a',
                    type: 'pie',
                    radius: ['20%', '77%'],
                    roseType: 'area',
                    zlevel: 10,
                    label: {
                        normal: {
                            show: true,
                            formatter: "{c}",
                            textStyle: {
                                fontSize: fontSize,
                            },
                            position: 'outside'
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true,
                            length: 10,
                            length2: 35
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    data: (function () {
                        $.each(data, function (index, item) {
                            item.itemStyle = {
                                color: color[index]
                            }
                        })
                        return data;
                    })()
                }]
        })
    },

    linesAreaFn: function (id, callback) {
        var myChart = echarts.init(document.getElementById(id));
        myChart.setOption({
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                textStyle: {
                    fontSize: fontSize
                }
            },
            legend: {
                type: "scroll",
                orient: "vartical",
                top: "center",
                right: "15",
                itemWidth: fontSize * 2,
                itemHeight: fontSize,
                itemGap: 16,
                textStyle: {
                    color: '#A3E2F4',
                    fontSize: fontSize,
                    fontWeight: 0
                },
                icon: 'stack',
                data: ['--', '--', '--', '--']
            },
            color: color,
            grid: {
                left: '5%',
                right: '17%',
                top: '10%',
                bottom: '0%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                data: ['2019 05/20  ', '2019 05/24', '2019 05/27', '2019 05/29 ', '2019 05/02 ', '2019 05/08'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#afb6d5',
                        fontSize: fontSize,
                    },
                    formatter: function (value) {
                        var ret = ""; //拼接加\n返回的类目项
                        var maxLength = 5; //每项显示文字个数
                        var valLength = value.length; //X轴类目项的文字个数
                        var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                        if (rowN > 1) {
                            //如果类目项的文字大于3,
                            for (var i = 0; i < rowN; i++) {
                                var temp = ""; //每次截取的字符串
                                var start = i * maxLength; //开始截取的位置
                                var end = start + maxLength; //结束截取的位置
                                //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                                temp = value.substring(start, end) + "\n";
                                ret += temp; //凭借最终的字符串
                            }
                            return ret;
                        } else {
                            return value;
                        }
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: '#272a72'
                    }
                }
            }],
            yAxis: [{
                type: 'value',
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: '#272a72'
                    }
                },
                axisLabel: {
                    formatter: function (val) {
                        return val + '';
                    },
                    show: true,
                    textStyle: {
                        fontSize: fontSize,
                        color: '#afb6d5',
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        type: 'dashed'
                    }
                },
            }],
            series: []
        });
        Tools.resizeFn(myChart);
        return callback(myChart);
    },
    linesAreaSetData: function (target, data) {
        target.setOption({
            legend: [{
                data: data.legend
            }],
            series: [
                {
                    name: data.legend[0],
                    type: 'line',
                    smooth: true,
                    // stack: 100,
                    itemStyle: {
                        normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                            lineStyle: { // 系列级个性化折线样式
                                width: 3,
                                type: 'solid',
                                color: color[0]
                            }
                        },
                    }, //线条样式
                    symbolSize: 10, //折线点的大小
                    data: data.data1
                },
                {
                    name: data.legend[1],
                    type: 'line',
                    smooth: true,
                    // stack: 100,
                    itemStyle: {
                        normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                            lineStyle: { // 系列级个性化折线样式
                                width: 3,
                                type: 'solid',
                                color: color[1]
                            }
                        },
                    }, //线条样式
                    symbolSize: 10, //折线点的大小
                    data: data.data2
                },
                {
                    name: data.legend[2],
                    type: 'line',
                    smooth: true,
                    // stack: 100,
                    itemStyle: {
                        normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                            lineStyle: { // 系列级个性化折线样式
                                width: 3,
                                type: 'solid',
                                color: color[2]
                            }
                        },
                    }, //线条样式
                    symbolSize: 10, //折线点的大小
                    data: data.data3
                },
                {
                    name: data.legend[3],
                    type: 'line',
                    smooth: true,
                    //  symbol: "none", //去掉折线点
                    stack: 100,
                    itemStyle: {
                        normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#64CAFA' // 0% 处的颜色
                            }, {
                                offset: 0.5,
                                color: '#64CAFA' // 50% 处的颜色
                            }, {
                                offset: 1,
                                color: '#0078D7' // 100% 处的颜色
                            }]), //背景渐变色
                            lineStyle: { // 系列级个性化折线样式
                                width: 1,
                                type: 'solid',
                                color: "#0078D7"
                            }
                        },
                        emphasis: {
                            color: '#02675f',
                            lineStyle: { // 系列级个性化折线样式
                                width: 0.5,
                                type: 'dotted',
                                color: "#02675f" //折线的颜色
                            }
                        }
                    }, //线条样式
                    symbolSize: 5, //折线点的大小
                    areaStyle: {
                        normal: {opacity: 0.2,}
                    },
                    data: data.data4
                }]
        })
    },

    graphFn: function (id, callback) {
        var myChart = echarts.init(document.getElementById(id));
        myChart.setOption({
            xAxis: {
                show: false,
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                show: false,
                splitLine: {
                    show: false,
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                scale: true
            },
            tooltip: {
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                textStyle: {
                    fontSize: fontSize
                },
                formatter: function (param) {
                    return "党员：" + param.data[1] + "\n" + param.data[3]
                }
            },
            series: [{
                name: '',
                data: [[20, 81.8, 120, 'Australia'], [40, 81.7, 40, 'Canada'], [66, 76.9, 166, 'China'], [77, 78.5, 77, 'Cuba'], [88, 80.8, 88, 'RU'],
                    [99, 81.9, 199, 'France'], [111, 81.1, 121, 'Germany'], [122, 82.8, 322, 'Iceland'], [133, 66.8, 133, 'India'], [144, 83.5, 244, 'Japan'],
                    [155, 71.4, 155, 'North Korea'], [166, 80.7, 66, 'South Korea'], [177, 80.6, 17, 'New Zealand'], [188, 81.6, 88, 'Norway'], [199, 77.3, 199, 'Poland'],
                    [211, 73.13, 211, 'Russia'], [222, 76.5, 251, 'Turkey'], [233, 81.4, 211, 'United Kingdom'], [244, 79.1, 211, 'United States']],
                type: 'scatter',
                symbolSize: function (data) {
                    return data[2] / 3;
                },
                label: {
                    emphasis: {
                        show: true,
                        formatter: function (param) {
                            return param.data[3];
                        },
                        position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(120, 36, 50, 0.5)',
                        shadowOffsetY: 5,
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: '#30a9fb'
                        }, {
                            offset: 1,
                            color: '#4edafb'
                        }])
                    }
                }
            }]
        });
        Tools.resizeFn(myChart);
        return callback(myChart);
    },
    tableFn: function () {
        var data = [
            {ext0: 1, ext1: "活动名称活动名称活动名称活动名称活动名称", ext2: "49人"},
            {ext0: 2, ext1: "活动名称活动名称活动名称活动名称活动名称", ext2: "48人"},
            {ext0: 3, ext1: "活动名称活动名称活动名称活动名称活动名称", ext2: "55人"},
            {ext0: 4, ext1: "活动名称活动名称活动名称活动名称活动名称", ext2: "45人"},
            {ext0: 5, ext1: "活动名称活动名称活动名称活动名称活动名称", ext2: "63人"},
            {ext0: 6, ext1: "活动名称活动名称活动名称活动名称活动名称", ext2: "21人"},
        ]
        var index = 2;
        var i = 0;
        animationFn()

        function animationFn() {
            $(".table-ul>li").removeClass("flipInX");
            var a = setInterval(function () {
                $(".table-ul>li:nth-child(" + (i + 1) + ")").removeClass(".tr-status-1 .tr-status-2 .tr-status-3").addClass("flipInX" +
                    " tr-status-" + data[index + i].ext5);
                $(".table-ul>li:nth-child(" + (i + 1) + ")>div:nth-child(1)").html("<span>" + data[index + i].ext0 + "</span><span>" + data[index + i].ext1 + "</span>");
                $(".table-ul>li:nth-child(" + (i + 1) + ")>div:nth-child(2)").html(data[index + i].ext2);
                i++;
                if (i > 1) {
                    i = 0;
                    window.clearInterval(a)
                }
            }, 300)
            index = (index == 2) ? 0 : 2;
        }

        setInterval(animationFn, 2000)
    },


    amBarFn: function (target, data) {
        var chart;
        AmCharts.ready(function () {
            // SERIAL CHART
            chart = new AmCharts.AmSerialChart();
            chart.dataProvider = data;
            chart.columnWidth = 0.4;
            chart.categoryField = "name";
            chart.color = "rgba(93, 228, 250, 1)";
            chart.fontSize = 30 * window.innerWidth / 1920 / 4;
            chart.startDuration = 1;
            // the following two lines makes chart 3D
            chart.angle = 20;
            chart.depth3D = 5;

            // category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridAlpha = 0.2;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridColor = "rgba(93, 228, 250, 1)";
            categoryAxis.axisColor = "rgba(93, 228, 250, 1)";
            categoryAxis.gridAlpha = 0;
            categoryAxis.fillAlpha = 0;
            categoryAxis.widths = 2;
            categoryAxis.fillColor = "#000";

            //categoryAxis.axisAlpha = 0;

            // value
            var valueAxis = new AmCharts.ValueAxis();
            //   valueAxis.stackType = "3d"; // This line makes chart 3D stacked (columns are placed one behind another)
            valueAxis.gridAlpha = 0.2;
            valueAxis.gridColor = "rgba(93, 228, 250, 1)";
            valueAxis.axisColor = "rgba(93, 228, 250, 1)";
            valueAxis.axisAlpha = 0.5;
            valueAxis.fillColor = "transparent";
            valueAxis.dashLength = 1;
            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.title = "2004";
            graph1.valueField = "value";
            graph1.type = "column";
            graph1.lineAlpha = 0;
            graph1.lineColor = "#3e3bc6";
            graph1.fillAlphas = 1;
            // graph1.fillColors = ["rgba(15, 217, 219, 1)", "rgba(21, 112, 235, 1)"];
            graph1.colorField = "color";
            chart.addGraph(graph1);

            chart.write(target);
        });

    },

    amBarsFn:function(target,data){
        var chart;
        AmCharts.ready(function () {
            // SERIAL CHART

            chart = new AmCharts.AmSerialChart();
            chart.dataProvider = data;
            chart.columnWidth = 0.4;
            chart.categoryField = "name";
            chart.color = "rgba(93, 228, 250, 1)";
            chart.fontSize = 30 * window.innerWidth / 1920 / 4;
            chart.startDuration = 1;
            chart.plotAreaFillAlphas = 0;
            // the following two lines makes chart 3D
            chart.angle = 30;
            chart.depth3D = 60;

            // AXES
            // category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridColor = "rgba(93, 228, 250, 1)";
            categoryAxis.axisColor = "rgba(93, 228, 250, 1)";
            categoryAxis.gridAlpha = 0;
            categoryAxis.fillAlpha = 0;
            categoryAxis.widths = 2;
            categoryAxis.fillColor = "rgba(0,0,0,0)";

            categoryAxis.gridAlpha = 2;
            categoryAxis.gridPosition = "start";
            categoryAxis.axisAlpha = 1;
            categoryAxis.dashLength = 10;

            // value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.stackType = "3d"; // This line makes chart 3D stacked (columns are placed one behind another)
            valueAxis.gridAlpha = 2;
            valueAxis.gridColor = "rgba(93, 228, 250, 0.4)";
            valueAxis.axisColor = "rgba(93, 228, 250, 0.4)";
            valueAxis.axisAlpha = 1;
            valueAxis.dashLength = 5;
            valueAxis.unit = "";
            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.title = "2004";
            graph1.valueField = "value1";
            graph1.type = "column";
            graph1.lineAlpha = 0;
            graph1.lineColor = "#18DE7C";
            graph1.fillAlphas = 1;
            // graph1.balloonText = "GDP grow in [[category]] (2004): <b>[[value]]</b>";
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.title = "2005";
            graph2.valueField = "value2";
            graph2.type = "column";
            graph2.lineAlpha = 0;
            graph2.lineColor = "#32A8FD";
            graph2.fillAlphas = 1;
            // graph2.balloonText = "GDP grow in [[category]] (2005): <b>[[value]]</b>";
            chart.addGraph(graph2);

            // second graph
            var graph3 = new AmCharts.AmGraph();
            graph3.title = "2005";
            graph3.valueField = "value3";
            graph3.type = "column";
            graph3.lineAlpha = 0;
            graph3.lineColor = "#8C71F7";
            graph3.fillAlphas = 1;
            // graph3.balloonText = "GDP grow in [[category]] (2005): <b>[[value]]</b>";
            chart.addGraph(graph3);

            chart.write(target);
        });
    },

    resizeFn: function (target) {
        window.addEventListener("resize", function () {
            fontSize = 30 * window.innerWidth / 1920 / 4;
            target.resize();
        });
    }
}

Tools.init();