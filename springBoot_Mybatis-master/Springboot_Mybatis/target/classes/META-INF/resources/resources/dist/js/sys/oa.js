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
                $(window.parent.document.getElementById("part5YWYY-modal")).hide().empty();
                $("#part5YWYY-modal").hide().empty()
            }
        }
        Tools.bmSentFile("part1-1");
        //部门收文
        Tools.radiusFn("part1-2", function (e) {
            Tools.radiusGetData(e);
        });
        //督办件概况
        Tools.linesAreaFn("part2-1", function (e) {
            // var data = {
            //     legend: ["领导指示类", "会议研究类", "调研讲话类", "任务分解类"],
            //     data1: [18, 30, 40, 70, 100, 80],
            //     data2: [40, 20, 45, 65, 110, 75],
            //     data3: [20, 60, 50, 80, 120, 100],
            //     data4: [40, 90, 80, 100, 120, 150],
            //     date: []
            // };
            Tools.linesAreaSetData(e);
        });
        Tools.onlineGetData();
        //会议概况
        Tools.meetingGetData();
        Tools.barsGetData("part4-1", "part4-2");

        Tools.graphFn("part6-1", function (e) {
            Tools.graphGetDataFn(e)
        })
        Tools.tableFn();
    },
    //各地区扽分呢情况
    everyScoreFn: function (target, data) {
        $.ajax({
            url: "../oayw/SendFile",
            type: "post",
            success: function (res) {
                var data = JSON.parse(res);
                var param = [];
                for (var i = 0; i < data.count.length; i++) {
                    param.push({
                        name: data.deptName[i],
                        value: data.count[i],
                        color: color[i]
                    })
                }
                Tools.amBarFn(target, param)
            }
        })
    },
//部门发文
    bmSentFile: function (target) {
        $.ajax({
            url: "../oayw/SendFile",
            type: "post",
            success: function (res) {
                var data = JSON.parse(res);
                var param = [];
                for (var i = 0; i < data.count.length; i++) {
                    param.push({
                        name: data.deptName[i],
                        value: data.count[i],
                        color: color[i]
                    })
                }
                Tools.amBarFn(target, param)
            }
        })
    },
    //当前在线人数
    onlineGetData: function () {
        $.ajax({
            url: "../oayw/getOnlineNum",
            type: "post",
            success: function (res) {
                var data = JSON.parse(res);
                $("#onlineNum").html(data.onlineNum)
                $("#peopleNum").html(data.peopleNum)
                $("#deptNum").html(data.deptNum)
                $("#orgNum").html(data.orgNum)
                $("#StationedNum").html(data.StationedNum)
                setTimeout(function () {
                    Tools.onlineGetData();
                }, timeout)
            }
        })
    },

    //会议概况::返回数据格式存在争议  延后
    meetingGetData: function () {
        $.ajax({
            url: "../oayw/getMeetingInfo",
            type: "post",
            success: function (res) {
                var data = JSON.parse(res);
                $("#meeting-con").empty();
                for (var i = 0; i < (data.meetingname.length > 2 ? 2 : data.meetingname.length); i++) {
                    $("#meeting-con").append(` <div class="list-style-1">
                        <div class="list-style-no">1</div>
                        <div class="list-style-content">
                            <div>${data.meetingname[i]}</div>
                            <div>
                                <div class="list-style-desc">
                                    <div>开会时间：<span class="color-title">${data.hosttimes[i]}</span></div>
                                    <div>开会位置：<span class="color-title">${data.palces[i]}</span></div>
                                </div>
                                <div class="list-style-date">倒计时：<span class="fontNumber color-orange">${data.surplusTimes[i]}</span>
                                </div>
                            </div>
                        </div>
                    </div>`)
                }
                setTimeout(function () {
                    Tools.meetingGetData();
                }, timeout)
            }
        })
    },

    // 部门发文：初始化统计图
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

    //部门发文：获取数据
    barGetData: function (color_, e) {
        $.ajax({
            url: "../oayw/SendFile",
            type: "post",
            success: function (res) {
                var data = JSON.parse(res);
                var data_ = [];
                for (var i = 0; i < data.count.length; i++) {
                    data_.push({name: data.deptName[i], value: data.count[i]})
                }
                //发文总数
                $("#fwzs").html(data.sendAllCounts);
                Tools.barSetData(color_, e, data_);
                setTimeout(function () {
                    Tools.barGetData(color_, e);
                }, timeout)
            }
        })
    },

    //部门发文：统计图填充数据
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
    //信息报送
    barsGetData: function (tar1, tar2) {
        $.ajax({
            url: "../oayw/getSubInfo",
            type: "post",
            success: function (res) {
                var data = JSON.parse(res);
                var data_1 = [];
                $("#totalScore").html(data.sumAllScore);
                $("#totalCount").html(data.sumCounts);
                for (var i = 0; i < data.regions.length; i++) {
                    data_1.push({name: data.regions[i], value: data.scores[i], color: "#00fff0"})
                }
                Tools.amBarFn(tar1, data_1);
                var data_2 = [];
                for (var i = 0; i < data.allSubCounts.length; i++) {
                    data_2.push({
                        name: data.subregions[i],
                        value1: data.allSubCounts[i],
                        value2: data.PDCommissions[i],
                        value3: data.CDCommissions[i],
                    })
                }
                Tools.amBarsFn(tar2, data_2, data.subregions);
            }
        })
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

    //部门收文：初始化统计图
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
    //部门收文：获取数据
    radiusGetData: function (e) {
        $.ajax({
            url: "../oayw/receiveFile",
            type: "post",
            success: function (res) {
                var data = JSON.parse(res);
                var data_ = [];
                for (var i = 0; i < data.count.length; i++) {
                    data_.push({name: data.deptName[i], value: data.count[i]})
                }
                //收文总数
                $("#swzs").html(data.receiveAllCounts);
                Tools.radiusSetData(e, data_);
                setTimeout(function () {
                    Tools.radiusGetData(e);
                }, timeout)
            }
        })
    },
    //部门收文：统计图填充数据
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
        $.ajax({
            url: "../oayw/getDubanInfo",
            type: "post",
            success: function (res) {
                var data = JSON.parse(res);
                var legend = data.dubanfenlei;
                var xAixs = data.Months;
                var param = {}
                for (var j = 0; j < legend.length; j++) {
                    var arr = [];
                    for (var i = 0; i < xAixs.length; i++) {
                        arr.push(data["data" + (i + 1)][j])
                    }
                    param["data" + (j + 1)] = arr;
                }
                target.setOption({
                    legend: [{
                        data: legend
                    }],
                    xAxis: [{
                        data: xAixs
                    }],
                    series: (function () {
                        var series = [];
                        for (var i = 0; i < legend.length; i++) {
                            series.push({
                                name: legend[i],
                                type: 'line',
                                smooth: true,
                                itemStyle: {
                                    normal: {
                                        color: i == (legend.length - 1) ? new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: '#64CAFA' // 0% 处的颜色
                                        }, {
                                            offset: 0.5,
                                            color: '#64CAFA' // 50% 处的颜色
                                        }, {
                                            offset: 1,
                                            color: '#0078D7' // 100% 处的颜色
                                        }]) : color[i],
                                        lineStyle: {
                                            width: 3,
                                            type: 'solid',
                                            color: color[i]
                                        }
                                    }, //线条样式
                                },
                                symbolSize: 3, //折线点的大小
                                data: param["data" + i]
                            })
                        }
                        return series;
                    })()
                })
            }
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
    graphGetDataFn: function (e) {
        $.ajax({
            url: "../oayw/getPartyInfo",
            type: "post",
            success: function (res) {
                var data = JSON.parse(res);
                Tools.tableFn((function () {
                    var data_ = [];
                    for (var i = 0; i < data.actNames.length; i++) {
                        data_.push({
                            ext0: i + 1,
                            ext1: data.actNames[i],
                            ext2: data.joinCounts[i] + "人"
                        })
                    }
                    return data_;
                })());

                /**
                 * 1 OrgNames：党支部名称集合
                 2 baseNums：各党支部人数集合
                 */
                $("#enter_counts").html(data.enter_counts);
                $("#Allactivities").html(data.Allactivities);
            }
        })
    },
    tableFn: function (data) {
        var index = 2;
        var i = 0;
        if (data) {
            animationFn();
            setInterval(animationFn, 2000);
        }

        function animationFn() {
            $(".table-ul>li").removeClass("flipInX");
            var a = setInterval(function () {
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
    },
    resizeFn: function (target) {
        window.addEventListener("resize", function () {
            fontSize = 30 * window.innerWidth / 1920 / 4;
            target.resize();
        });
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

    amBarsFn: function (target, data, data2) {
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
            for (let i = data2.length-1; i >=0 ; i--) {
                let graph1 = new AmCharts.AmGraph();
                graph1.title = data2[i];
                graph1.valueField = ("value"+(i+1));
                graph1.type = "column";
                graph1.lineAlpha = 0;
                graph1.lineColor = color[i];
                graph1.fillAlphas = 1;
                // graph1.balloonText = "GDP grow in [[category]] (2004): <b>[[value]]</b>";
                chart.addGraph(graph1);
            }

            //
            // // second graph
            // var graph2 = new AmCharts.AmGraph();
            // graph2.title = "2005";
            // graph2.valueField = "value2";
            // graph2.type = "column";
            // graph2.lineAlpha = 0;
            // graph2.lineColor = "#32A8FD";
            // graph2.fillAlphas = 1;
            // // graph2.balloonText = "GDP grow in [[category]] (2005): <b>[[value]]</b>";
            // chart.addGraph(graph2);
            //
            // // second graph
            // var graph3 = new AmCharts.AmGraph();
            // graph3.title = "2005";
            // graph3.valueField = "value3";
            // graph3.type = "column";
            // graph3.lineAlpha = 0;
            // graph3.lineColor = "#8C71F7";
            // graph3.fillAlphas = 1;
            // // graph3.balloonText = "GDP grow in [[category]] (2005): <b>[[value]]</b>";
            // chart.addGraph(graph3);

            chart.write(target);
        });
    },

}

Tools.init();