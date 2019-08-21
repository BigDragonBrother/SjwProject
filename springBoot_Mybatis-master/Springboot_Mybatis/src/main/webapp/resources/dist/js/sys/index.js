var map;

Tools = {
    data: {},
    initExtends: function (status) {
        // Tools.partSetData("part1-1-data", status ? 34 : 45);//本级
        // Tools.partSetData("part1-2-data", status ? 46 : 27);//派驻
        // Tools.partSetData("part1-3-data", status ? 28 : 39);//市县
        Tools.partSetData("part2-1-data", status ? 7 : 4);//虚拟化
        Tools.partSetData("part2-2-data", status ? 8 : 12);//网络设备
        Tools.partSetData("part2-3-data", status ? 6 : 2, 10, 2);//中间件
        Tools.partSetData("part2-4-data", status ? 130 : 125, 150, 2);//存储
        Tools.partSetData("part4-1-data", status ? 5 : 2, 10, 1);//安全设备
        Tools.partSetData("part4-2-data", status ? 11 : 16, 20, 1);//服务器
        Tools.partSetData("part4-3-data", status ? 85 : 60, 100, 2);//数据库
        Tools.partSetData("part4-4-data", status ? 145 : 175, 200, 2);//其他
        Tools.partSetData("part3-left", status ? 97 : 95);
        // Tools.partSetData("part3-right", status ? 18 : 20);
        Tools.partSetData("part5-3-body1", status ? "30" : "31");
        Tools.partSetData("part5-3-body2", status ? 115 : 100);
        Tools.partSetData("part5-3-body3", status ? "76" : "90");
        Tools.partSetData("part-7-1", status ? 20 : 23);
        Tools.partSetData("part-7-2", status ? 8 : 12);
        Tools.partSetData("con-part8-1", status ? "23%" : "19%");
        Tools.partSetData("con-part8-2", status ? "25%" : "21%");
        Tools.partSetData("con-part8-3", status ? "16%" : "12%");

        // Tools.partSetData("con-part9-1", status ? 56 : 50);
        // Tools.partSetData("con-part9-2", status ? 49 : 48);
        // Tools.partSetData("con-part9-3", status ? 35 : 42);
        // Tools.partSetData("con-part9-4", status ? 45 : 37);

        Tools.partSetData("con-part9-1", status ? "22<span>℃</span>" : "23<span>℃</span>");
        Tools.partSetData("con-part9-3", status ? "21<span>℃</span>" : "22<span>℃</span>");
        Tools.partSetData("con-part9-5", status ? "22<span>℃</span>" : "20<span>℃</span>");
        Tools.partSetData("con-part9-7", status ? "21<span>℃</span>" : "23<span>℃</span>");

        Tools.partSetData("con-part9-2", status ? "54<span>%RH</span>" : "55<span>%RH</span>");
        Tools.partSetData("con-part9-4", status ? "55<span>%RH</span>" : "54<span>%RH</span>");
        Tools.partSetData("con-part9-6", status ? "54<span>%RH</span>" : "53<span>%RH</span>");
        Tools.partSetData("con-part9-8", status ? "55<span>%RH</span>" : "56<span>%RH</span>");

    },
    init: function () {
        var status = true;
        setInterval(function () {
            Tools.initExtends(status);
            status = !status;
        }, 10000);
        Tools.initExtends(status);
        Tools.part3();
        Tools.part6();
        Tools.part5XDT();
        Tools.upsFn();
        document.onkeydown = function (event) {
            var e = event || window.event || arguments.callee.caller.arguments[0];
            console.log(e.keyCode)
            if (e && e.keyCode == 27) {
                $("#part1PZ-modal").hide();
                $("#part5JSDD-modal").hide().empty();
                console.log("1")
                $("#part5YWYY-modal").hide().empty();
                console.log("2")
            }
        }
        //测试地图入口
        // Tools.part1PZ();
    },
    part3: function () {
        createArea();
        setInterval(function () {
            var width = +Math.floor((Math.random() + 0.2) * $("#leida").width() * 0.6);
            var height = +Math.floor((Math.random() + 0.2) * $("#leida").height() * 0.6);
            //模拟数据--只允许出现一个告警睡觉  正式数据这里要删掉判断
            if (height % 5 == 0 && $(".point-error").length == 0) {
                $("#leida").append("<div class='point-error' style='left:" + width + "px;top:" + height + "px;'></div>")
                $("#part-3-warning").show();
            } else {
                if ($(".point-success").length < 15) {
                    $("#leida").append("<div class='point-success' style='left:" + width + "px;top:" + height + "px;'></div>")
                }
            }
            $("#part3-right").html($(".point-error").length);
            if ($(".point-error").length == 0) {
                $("#part3-right").removeClass("fontError").addClass("fontSuccess");
            } else {
                $("#part3-right").removeClass("fontSuccess").addClass("fontError");
            }
        }, 2500);
        setInterval(function () {
            $(".point-error").remove();
            $(".point-success:nth-child(1),.point-success:nth-child(2)").remove();
            $("#part-3-warning").hide();
            $("#part3-right").html($(".point-error").length);
            if ($(".point-error").length == 0) {
                $("#part3-right").removeClass("fontError").addClass("fontSuccess");
            } else {
                $("#part3-right").removeClass("fontSuccess").addClass("fontError");
            }
        }, 13000)

        function createArea() {
            var height = 2.48;
            var radarStyle = document.createElement("style");
            var str = "#radar:after {width: " + height + "rem;height: " + height + "rem;}";
            if (radarStyle.styleSheet) {         //ie下
                radarStyle.styleSheet.cssText = str;
            } else {
                radarStyle.innerHTML = str;
            }
            ;
            document.getElementsByTagName("head")[0].appendChild(radarStyle);
        }
    },
    partSetData: function (target, data) {
        $("#" + target).html(data);
    },
    /**
     * part5XDT:即使调度 动画
     */
    part5XDT: function () {
        XDT("part5-2-canvas");
    },
    /**
     * 工单表格
     */
    part6: function () {
        var data = [{ext0: 1, ext1: "郭志强", ext2: "服务器异常", ext3: "F-00FWQ0002", ext4: "2019.7.26", ext5: 3},
            {ext0: 2, ext1: "张明会", ext2: "网络设备异常", ext3: "W-00WLSB0009", ext4: "2019.7.24", ext5: 2},
            {ext0: 3, ext1: "刘明哲", ext2: "存储设备异常", ext3: "C-00CCSB0004", ext4: "2019.7.13", ext5: 2},
            {ext0: 4, ext1: "王德凯", ext2: "安全设备告警", ext3: "A-00AQSB0001", ext4: "2019.7.1", ext5: 3},
            {ext0: 5, ext1: "王智达", ext2: "网络连接异常", ext3: "W-00WLLJ0010", ext4: "2019.6.30", ext5: 1},
            {ext0: 6, ext1: "王德凯", ext2: "存储检测异常", ext3: "C-00CCSB0001", ext4: "2019.6.25", ext5: 1},
            {ext0: 7, ext1: "张明会", ext2: "中间件异常", ext3: "Z-00ZJJ0006", ext4: "2019.6.21", ext5: 1},
            {ext0: 8, ext1: "郭志强", ext2: "UPS检测异常", ext3: "U-00UPS0012", ext4: "2019.6.18", ext5: 1},
            {ext0: 9, ext1: "刘明哲", ext2: "存储设备异常", ext3: "C-00CCSB0008", ext4: "2019.6.10", ext5: 1},
            {ext0: 10, ext1: "王德凯", ext2: "服务器异常", ext3: "F-00FWQ0022", ext4: "2019.6.2", ext5: 3}]
        var index = 5;
        var i = 0;
        animationFn()

        function animationFn() {
            $(".table-ul>li").removeClass("flipInX");
            var a = setInterval(function () {
                $(".table-ul>li:nth-child(" + (i + 2) + ")").removeClass(".tr-status-1 .tr-status-2 .tr-status-3").addClass("flipInX" +
                    " tr-status-" + data[index + i].ext5);
                $(".table-ul>li:nth-child(" + (i + 2) + ")>div:nth-child(1)").html(data[index + i].ext0);
                $(".table-ul>li:nth-child(" + (i + 2) + ")>div:nth-child(2)").html(data[index + i].ext1);
                $(".table-ul>li:nth-child(" + (i + 2) + ")>div:nth-child(3)").html(data[index + i].ext2);
                $(".table-ul>li:nth-child(" + (i + 2) + ")>div:nth-child(4)").html(data[index + i].ext3);
                $(".table-ul>li:nth-child(" + (i + 2) + ")>div:nth-child(5)").html(data[index + i].ext4);
                // $(".table-ul>li:nth-child(" + (i + 2) + ")>div:nth-child(6)").html(data[index + i].ext5);
                i++;
                if (i > 4) {
                    i = 0;
                    window.clearInterval(a)
                }
            }, 300)
            index = (index == 5) ? 0 : 5;
        }

        setInterval(animationFn, 10000)
    },

    /**
     * part1:派驻点击弹出模态框
     */
    part1PZ: function () {
        $("#part1PZ-modal").show();
        if (!map) {
            // Tools.part1PZMap();
            Tools.part1PZMapOnline()
        }
    },
    /**
     * part5:即时调度
     */
    part5JSDD: function () {
        $("#part5JSDD-modal").show().html('<iframe frameborder="0" scrolling="no" src="jsdd.html" width="100%"' +
            ' height="100%"></iframe>');
    },
    /**
     * 业务应用
     */
    part5YWYY: function () {
        $("#part5YWYY-modal").show().html('<iframe frameborder="0" scrolling="no" src="oa.html" width="100%"' +
            ' height="100%"></iframe>');
    },
    /**
     * part1:派驻机构地图
     * @desc 离线
     * @desc 黑色
     */
    part1PZMap: function () {
        var data = [{name: "驻省委办公厅纪检监察组", lng: "125.329027", lat: "43.902784", status: 1},
            {name: "驻省委宣传部纪检监察组", lng: "125.328609", lat: "43.90116", status: 2},
            {name: "驻省委政法委纪检监察组", lng: "125.326604", lat: "43.903417", status: 1},
            {name: "驻省人大常委会机关纪检监察组", lng: "125.330312", lat: "43.877023", status: 1},
            {name: "驻省政府办公厅纪检监察组", lng: "125.329027", lat: "43.902777", status: 1},
            {name: "驻省发展和改革委员会纪检监察组", lng: "125.332526", lat: "43.902264", status: 1},
            {name: "驻省教育厅纪检监察组", lng: "125.330321", lat: "43.901103", status: 1},
            {name: "驻省科学技术厅纪检监察组", lng: "125.338835", lat: "43.889844", status: 2},
            {name: "驻省工业和信息化厅纪检监察组", lng: "125.315256", lat: "43.9", status: 1},
            {name: "驻省公安厅纪检监察组", lng: "125.32624", lat: "43.900867", status: 1},
            {name: "驻省民政厅纪检监察组", lng: "125.288446", lat: "43.891362", status: 1},
            {name: "驻省司法厅纪检监察组", lng: "125.324046", lat: "43.901072", status: 1},
            {name: "驻省财政厅纪检监察组", lng: "125.332655", lat: "43.881935", status: 1},
            {name: "驻省人力资源和社会保障厅纪检监察组", lng: "125.35625", lat: "43.885745", status: 3},
            {name: "驻省自然资源厅纪检监察组", lng: "125.337226", lat: "43.89449", status: 1},
            {name: "驻省生态环保厅纪检监察组", lng: "125.332278", lat: "43.900724", status: 1},
            {name: "驻省住房和城乡建设厅纪检监察组", lng: "125.335088", lat: "43.904143", status: 2},
            {name: "驻省交通运输厅纪检监察组", lng: "125.326098", lat: "43.883544", status: 1},
            {name: "驻省水利厅纪检监察组", lng: "125.368332", lat: "43.838557", status: 1},
            {name: "驻农业农村厅纪检监察组", lng: "125.331587", lat: "43.901243", status: 1},
            {name: "驻省商务厅纪检监察组", lng: "125.330973", lat: "43.880483", status: 2},
            {name: "驻省文化和旅游厅纪检监察组", lng: "125.316077", lat: "43.873486", status: 3},
            {name: "驻卫生健康委员会纪检监察组", lng: "125.330538", lat: "43.901271", status: 1},
            {name: "驻省应急管理厅纪检监察组", lng: "125.330626", lat: "43.881243", status: 1},
            {name: "驻省审计厅纪检监察组", lng: "125.344703", lat: "43.859493", status: 1},
            {name: "驻省市场监督管理厅纪检监察组", lng: "125.357878", lat: "43.857822", status: 1},
            {name: "驻省政府国有资产监督管理委员会纪检监察组", lng: "125.318691", lat: "43.870255", status: 1},
            {name: "驻省统计局纪检监察组", lng: "125.329615", lat: "43.901191", status: 1},
            {name: "驻省机关事务管理局纪检监察组", lng: "125.328643", lat: "43.90012", status: 1},
            {name: "驻省粮食和物资储备局纪检监察组", lng: "125.310402", lat: "43.891425", status: 1},
            {name: "驻省政务服务和数字化建设管理局纪检监察组", lng: "125.388634", lat: "43.821389", status: 1},
            {name: "驻省林业和草原局纪检监察组", lng: "125.355461", lat: "43.882251", status: 1},
            {name: "驻省政协机关纪检监察组", lng: "125.341538", lat: "43.90495", status: 1},
            {name: "驻省高级人民法院纪检监察组", lng: "125.386673", lat: "43.852874", status: 2},
            {name: "驻省人民检察院纪检监察组", lng: "125.348788", lat: "43.825634", status: 1},
            {name: "驻省总工会机关纪检监察组", lng: "125.332902", lat: "43.849293", status: 1}];
        var tileLayer = new BMap.TileLayer();
        tileLayer.getTilesUrl = function (tileCoord, zoom) {
            var x = tileCoord.x;
            var y = tileCoord.y;
            var url = outputPath + zoom + '/' + x + '/' + y + format;
            return url;
        }
        var tileMapType = new BMap.MapType('tileMapType', tileLayer, {minZoom: minZoom, maxZoom: maxZoom});
        window.map = new BMap.Map('allmap', {mapType: tileMapType});
        // 定位到地图中心点
        map.centerAndZoom(new BMap.Point(centX, centY), initZoom);
        // map.enableDragging();
        // 启用滚轮放大缩小
        map.enableScrollWheelZoom();
        map.enableContinuousZoom();

        //省纪委
        window.ptList = [];
        var pt = new BMap.Point(centX, centY);
        ptList.push(pt);
        $.each(data, function (index, item) {
            var pt2 = new BMap.Point(item.lng, item.lat);
            var icon = (item.status == 1 ? "dist/images/map-icon-3.png" : (item.status == 2 ? "dist/images/map-icon-4.png" : "dist/images/map-icon-5.gif"));
            var myIcon = new BMap.Icon(icon, new BMap.Size(40, 40));
            var marker2 = new BMap.Marker(pt2, {icon: myIcon});  // 创建标注
            map.addOverlay(marker2); // 将标注添加到地图中
            ptList.push(pt2);
        })

        var pt_ = new BMap.Point(centX, centY);
        var myIcon_ = new BMap.Icon("dist/images/map-icon-2.png", new BMap.Size(50, 50));
        var marker1 = new BMap.Marker(pt_, {icon: myIcon_});  // 创建标注
        map.addOverlay(marker1); // 将标注添加到地图中
        setTimeout(function () {
            $("img[src*=map-icon-2]").parents(".BMap_Marker").css("z-index", "99999")
        }, 1000)
        // map.setViewport(ptList);
        map.addEventListener("click", function (e) {
            console.log(e.point.lng + "," + e.point.lat);
        });
    },
    //添加覆盖物线,并返回覆盖物
    mapAddPolyline: function (map, points, lineColor, lineOpacity, strokeWeight) {
        if (strokeWeight == null) {
            strokeWeight = 1;
        }
        var pl = new BMap.Polyline(points, {
            strokeColor: lineColor,
            strokeOpacity: lineOpacity,
            strokeWeight: strokeWeight
        });
        // var curve = new BMapLib.CurveLine(points, {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.5}); //创建弧线对象
        // map.addOverlay(curve); //添加到地图中
        map.addOverlay(pl);
        return pl;
    },

    part1PZMapOnline: function () {
        var data = [{name: "驻省委办公厅纪检监察组", lng: "125.329027", lat: "43.902784", status: 1},
            {name: "驻省委宣传部纪检监察组", lng: "125.328609", lat: "43.90116", status: 2},
            {name: "驻省委政法委纪检监察组", lng: "125.326604", lat: "43.903417", status: 1},
            {name: "驻省人大常委会机关纪检监察组", lng: "125.330312", lat: "43.877023", status: 1},
            {name: "驻省政府办公厅纪检监察组", lng: "125.329027", lat: "43.902777", status: 1},
            {name: "驻省发展和改革委员会纪检监察组", lng: "125.332526", lat: "43.902264", status: 1},
            {name: "驻省教育厅纪检监察组", lng: "125.330321", lat: "43.901103", status: 1},
            {name: "驻省科学技术厅纪检监察组", lng: "125.338835", lat: "43.889844", status: 2},
            {name: "驻省工业和信息化厅纪检监察组", lng: "125.315256", lat: "43.9", status: 1},
            {name: "驻省公安厅纪检监察组", lng: "125.32624", lat: "43.900867", status: 1},
            {name: "驻省民政厅纪检监察组", lng: "125.288446", lat: "43.891362", status: 1},
            {name: "驻省司法厅纪检监察组", lng: "125.324046", lat: "43.901072", status: 1},
            {name: "驻省财政厅纪检监察组", lng: "125.332655", lat: "43.881935", status: 1},
            {name: "驻省人力资源和社会保障厅纪检监察组", lng: "125.35625", lat: "43.885745", status: 3},
            {name: "驻省自然资源厅纪检监察组", lng: "125.337226", lat: "43.89449", status: 1},
            {name: "驻省生态环保厅纪检监察组", lng: "125.332278", lat: "43.900724", status: 1},
            {name: "驻省住房和城乡建设厅纪检监察组", lng: "125.335088", lat: "43.904143", status: 2},
            {name: "驻省交通运输厅纪检监察组", lng: "125.326098", lat: "43.883544", status: 1},
            {name: "驻省水利厅纪检监察组", lng: "125.368332", lat: "43.838557", status: 1},
            {name: "驻农业农村厅纪检监察组", lng: "125.331587", lat: "43.901243", status: 1},
            {name: "驻省商务厅纪检监察组", lng: "125.330973", lat: "43.880483", status: 2},
            {name: "驻省文化和旅游厅纪检监察组", lng: "125.316077", lat: "43.873486", status: 3},
            {name: "驻卫生健康委员会纪检监察组", lng: "125.330538", lat: "43.901271", status: 1},
            {name: "驻省应急管理厅纪检监察组", lng: "125.330626", lat: "43.881243", status: 1},
            {name: "驻省审计厅纪检监察组", lng: "125.344703", lat: "43.859493", status: 1},
            {name: "驻省市场监督管理厅纪检监察组", lng: "125.357878", lat: "43.857822", status: 1},
            {name: "驻省政府国有资产监督管理委员会纪检监察组", lng: "125.318691", lat: "43.870255", status: 1},
            {name: "驻省统计局纪检监察组", lng: "125.329615", lat: "43.901191", status: 1},
            {name: "驻省机关事务管理局纪检监察组", lng: "125.328643", lat: "43.90012", status: 1},
            {name: "驻省粮食和物资储备局纪检监察组", lng: "125.310402", lat: "43.891425", status: 1},
            {name: "驻省政务服务和数字化建设管理局纪检监察组", lng: "125.388634", lat: "43.821389", status: 1},
            {name: "驻省林业和草原局纪检监察组", lng: "125.355461", lat: "43.882251", status: 1},
            {name: "驻省政协机关纪检监察组", lng: "125.341538", lat: "43.90495", status: 1},
            {name: "驻省高级人民法院纪检监察组", lng: "125.386673", lat: "43.852874", status: 2},
            {name: "驻省人民检察院纪检监察组", lng: "125.348788", lat: "43.825634", status: 1},
            {name: "驻省总工会机关纪检监察组", lng: "125.332902", lat: "43.849293", status: 1},
            {name: "东北师范大学", lng: "125.337958", "lat": "43.867592", status: 1},
            {name: "长春理工大学", lng: "125.319786", "lat": "43.839548", status: 2},
            {name: "延边大学", lng: "129.494816,42.91832", status: 3},
            {name: "东北电力大学", lng: "126.509698", "lat": "43.829456", status: 1}];
        var map = new BMap.Map("allmap");    // 创建Map实例
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
        //添加地图类型控件
        map.addControl(new BMap.MapTypeControl({
            mapTypes: [
                BMAP_NORMAL_MAP,
                BMAP_HYBRID_MAP
            ]
        }));
        map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        // 定位到地图中心点
        map.centerAndZoom(new BMap.Point(centX, centY), initZoom);
        // map.enableDragging();
        // 启用滚轮放大缩小
        map.enableScrollWheelZoom();
        map.enableContinuousZoom();

        //省纪委
        window.ptList = [];
        var pt = new BMap.Point(centX, centY);
        ptList.push(pt);
        $.each(data, function (index, item) {
            var pt2 = new BMap.Point(item.lng, item.lat);
            var icon = (item.status == 1 ? "dist/images/map-icon-3.png" : (item.status == 2 ? "dist/images/map-icon-4.png" : "dist/images/map-icon-5.gif"));
            var myIcon = new BMap.Icon(icon, new BMap.Size(40, 40));
            var marker2 = new BMap.Marker(pt2, {icon: myIcon});  // 创建标注
            map.addOverlay(marker2); // 将标注添加到地图中
            var label = new BMap.Label("<div class='marker-status-" + item.status + "'>" + item.name + "</div>", {offset: new BMap.Size(30, 0)});
            marker2.setLabel(label);
            ptList.push(pt2);
        })

        var pt_ = new BMap.Point(centX, centY);
        var myIcon_ = new BMap.Icon("dist/images/map-icon-2.png", new BMap.Size(50, 50));
        var marker1 = new BMap.Marker(pt_, {icon: myIcon_});  // 创建标注
        map.addOverlay(marker1); // 将标注添加到地图中
        setTimeout(function () {
            $("img[src*=map-icon-2]").parents(".BMap_Marker").css("z-index", "99999")
        }, 1000)
        // map.setViewport(ptList);
        map.addEventListener("click", function (e) {
            console.log(e.point.lng + "," + e.point.lat);
        });
    },


    /**
     * @desc UPS供电系统
     */
    upsFn: function () {
        $.ajax({
            url: "../ups/selectupsinfo",
            type: "post",
            success: function (data) {
                //还有一个字段：wdzt:默认值正常，该怎么使用 尚未确定
                //电池温度
                $("#part5-3-body1").html(data.wd);
                //电池容量
                $("#part5-3-body3").html(data.rl);
                //续航时间
                $("#part5-3-body2").html(data.sj);

                setTimeout(function () {
                    Tools.upsFn();
                }, timeout)
            }
        })
    },

    /**
     * @desc 涉密机房
     */
    smjfFn:function () {
        $.ajax({
            url: "../ups/selectsmjfwsd",
            type: "post",
            success: function (data) {
                //还有一个字段：wdzt:默认值正常，该怎么使用 尚未确定
                //温度
                $("#con-part9-1").html(data.wd+"<span>℃</span>");
                //湿度
                $("#con-part9-2").html(data.rl+"<span>%RH</span>");

                /**
                 * wsdzt:温湿度状态
                 wd:温度
                 sd:湿度

                 */
                setTimeout(function () {
                    Tools.smjfFn();
                }, timeout)
            }
        })
    },

    /**
     * @desc 告警数 接口
     */
    gjsFn:function(){
        $.ajax({
            url: "../jgs/selectjgsnum",
            type: "post",
            success: function (data) {
                $("#part3-right").html(data.jgs);
                setTimeout(function () {
                    Tools.gjsFn();
                }, timeout)
            }
        })
    },
    /**
     * @desc 告警信息
     */
    gjxxFn:function(){
        $.ajax({
            url: "../jgs/selectjginfo",
            type: "post",
            success: function (data) {
                $("#part-3-warningInfo").html(` <marquee style="    transform: scale(0.8);" font-size="10px" behavior="scroll"
                             onMouseOut="this.start()" onMouseOver="this.stop()">${data.ca}</marquee>`);
                setTimeout(function () {
                    Tools.gjxxFn();
                }, timeout)
            }
        })
    },


}


Tools.init();