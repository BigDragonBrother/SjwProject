var map;

Tools = {
    data: {
        countError: 0,//当前存在告警数
    },
    init: function () {
		
		$("body").append(`
		<iframe data-desc="可视化机房" style="display:none" src="http://156.8.11.22:8080/itims/login.action?userName=admin&pwd=21232f297a57a5a743894a0e4a801fc3&DMSN=998"></iframe>
		<iframe data-desc="终端态势感知" style="display:none" src="https://156.8.16.16/tp/login.html?login=admin&password=admin@123"></iframe>
		`)
		
        Tools.part5XDT(); //心电图动画生成方法
        Tools.part3();
        // Tools.upsFn();   //UPS供电管理：001
        // Tools.smjfFn();//涉密机房：001
        // Tools.gjsFn(); //告警数  001
        // Tools.gjxxFn();//告警信息  001
        Tools.zcglFn(); //资产管理  ok
        Tools.jkdFn(); //健康度  ok
        Tools.part6();

        //关闭modal
        document.onkeydown = function (event) {
            var e = event || window.event || arguments.callee.caller.arguments[0];
            console.log(e.keyCode)
            if (e && e.keyCode == 27) {
                $("#part1PZ-modal").hide();
                $("#part5JSDD-modal").hide().empty();
                $("#part5YWYY-modal").hide().empty();
            }
        }
        //测试地图入口
        // Tools.part1PZ();
    },

    part3GetPos: function (callback) {
        return callback({
            width: +Math.floor((Math.random() + 0.2) * $("#leida").width() * 0.6),
            height: +Math.floor((Math.random() + 0.2) * $("#leida").height() * 0.6)
        })
    },

    part3: function () {
        createArea();
        //先渲染 所有设备数的光点
        var iii = 0;
        var timer0 = setInterval(function () {
            Tools.part3GetPos(function (pos) {
                $("#leida").append("<div class='point-success' style='left:" + pos.width + "px;top:" + pos.height + "px;'></div>")
            });
            iii++;
            if (iii > 30) {
                window.clearInterval(timer0);
            }
        }, 600)
        setInterval(function () {
            var countError = Tools.data.countError;//系统中存在的错误
            var countErrorNew = $(".point-error").length;//当前页面显示的错误point点数量
            var countErrorDif = countError - countErrorNew;
            if (countErrorDif > 0) {
                for (var i = 0; i < countErrorDif; i++) {
                    Tools.part3GetPos(function (pos) {
                        $("#leida").append("<div class='point-error' style='left:" + pos.width + "px;top:" + pos.height + "px;'></div>");
                        var len_success = $(".point-success").length;
                        var random_ = Math.floor(Math.random() * len_success);
                        $(".point-success:nth-child(" + random_ + ")").remove();
                    });
                }
            } else {
                var countErrorDif_ = Math.abs(countErrorDif);
                for (var i = 0; i < countErrorDif_; i++) {
                    Tools.part3GetPos(function (pos) {
                        $("#leida").append("<div class='point-success' style='left:" + pos.width + "px;top:" + pos.height + "px;'></div>");
                        var len_error = $(".point-error").length;
                        var random_ = Math.floor(Math.random() * len_error);
                        $(".point-error").eq(random_).remove();
                    });
                }
            }

            $("#part3-right").html(countError);
            //这里是当报警数 大于零的时候 给 告警数框添加样式
            if (countError == 0) {
                $("#part3-right").removeClass("fontError").addClass("fontSuccess");
                $("#part-3-warning").hide();
            } else {
                $("#part-3-warning").show();
                $("#part3-right").removeClass("fontSuccess").addClass("fontError");
            }
        }, 1000);

        function createArea() {
            var height = 2.48;
            var radarStyle = document.createElement("style");
            var str = "#radar:after {width: " + height + "rem;height: " + height + "rem;}";
            if (radarStyle.styleSheet) {         //ie下
                radarStyle.styleSheet.cssText = str;
            } else {
                radarStyle.innerHTML = str;
            }
            document.getElementsByTagName("head")[0].appendChild(radarStyle);
        }
    },

    partSetData: function (target, data, id) {
        $("#" + target).html(data);
        if (id) {
            $("#" + target).parent().data("target", id);
        }
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
    part6GetData: function (callback) {
        $.ajax({
            url: "../zcgl/getGdListDate",
            data: {
                start: 0,
                limit: 10
            },
            success: function (res) {
                var data = JSON.parse(res);
                return callback(data.root)
            }
        })
    },
    part6: function () {
        Tools.part6GetData(function (data) {
            var index = 5;
            var i = 0;
            animationFn();

            function animationFn() {
                $(".table-ul>li").removeClass("flipInX");
                var a = setInterval(function () {
                    if (index + i < data.length) {

						//1.assigneeInfo数组。name
						
						//2.assigneeInfo数组为空[]||null						
						
						//3.solver:!=null   solver.xingMing
						
						//4.else   未签收
						
						var name ="";// ((typeof data[index+i].assigneeInfo) =="object" && data[index+i].solver) ? (data[index+i].assigneeInfo.length>0?data[index+i].assigneeInfo[0].assignee.name:(data[index+i].solver?data[index+i].solver.xingMing:"无"):(data[index+i].solver?data[index+i].solver.xingMing: "未签收");
						 
						if((typeof data[index+i].assigneeInfo) =="object"){
							if(data[index+i].assigneeInfo.length>0){
								name = data[index+i].assigneeInfo[0].assignee?data[index+i].assigneeInfo[0].assignee.name:"代签收";
							}else if(data[index+i].solver){
								name=data[index+i].solver.xingMing;
							}else{
								name="无";
							}					
						}else{
							name = "未签收";
						}

                        $(".table-ul>li:nth-child(" + (i + 2) + ")").removeClass(".tr-status-1 .tr-status-2 .tr-status-3").addClass("flipInX" +
                            " tr-status-" + data[index + i].urgency.starNumber);
                        $(".table-ul>li:nth-child(" + (i + 2) + ")>div:nth-child(1)").html(i + 1).attr("title",(i+1));//单号
                        $(".table-ul>li:nth-child(" + (i + 2) + ")>div:nth-child(2)").html(name).attr("title",name);//
                        $(".table-ul>li:nth-child(" + (i + 2) + ")>div:nth-child(3)").html(data[index + i].category.name || "--").attr("title",data[index + i].category.name || "--");
                        $(".table-ul>li:nth-child(" + (i + 2) + ")>div:nth-child(4)").html(data[index + i].code).attr("title",data[index + i].code);//故障编码
                        $(".table-ul>li:nth-child(" + (i + 2) + ")>div:nth-child(5)").html((data[index + i].createdOn).split(" ")[0]).attr("title",(data[index + i].createdOn));
                        // $(".table-ul>li:nth-child(" + (i + 2) + ")>div:nth-child(6)").html(data[index + i].ext5);
                        i++;
                        if (i > 4) {
                            i = 0;
                            window.clearInterval(a)
                        }
                    }
                }, 300)
                index = (index == 5) ? 0 : 5;
            }

            setInterval(animationFn, 10000);
        })
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
     //   $("#part5JSDD-modal").show().html('<iframe frameborder="0" scrolling="no" src="jsdd" width="100%"' +
         //   ' height="100%"></iframe>');
        window.location.href="alert:"+window.location.origin+"/SjwProject/system/jsdd"
    },
    /**
     * 业务应用
     */
    part5YWYY: function () {
        Tools.partModalFn("part5YWYY-modal", "oa");

    },
    /**
     * 告警信息二级页面
     */
    partGJXX: function () {
        Tools.partModalFn("part3GJXX-modal", "gjxx");
    },
    /**
     * 资产管理二级页面
     */
    partZCGL: function (that) {
        var type = $(that).data("target");
        Tools.partModalFn("part2ZCGL-modal", "zcgl?type=" + type);
    },
    /**
     * 工单系统二级页面
     */
    partGDGL: function () {
        Tools.partModalFn("part6GDGL-modal", "gdgl");
    },
    partModalFn: function (id, html) {
        $("#" + id).show().html('<iframe frameborder="0" scrolling="no" src="' + html + '" width="100%"' +
            ' height="100%"></iframe>');
    },
	/**
	*可视化机房-第三方
	*/
	partKSHJFFn:function(){
		$("#part9KSHJF-modal").show().html(`<img src="../resources/dist/images/kshjf-image.jpg" style="width: 100%;height: 100%;">`);
		// Tools.partModalFn("part9KSHJF-modal", "http://156.8.11.22:8080/itims/room/view/view.jsp?mnSbj=topo&mnCMP=1_2&lunchFrom=start&lunchFuncID=roottopo_room");
	},
	
	
	/**
	*终端态势感知-第三方
	*/
	partTSGZFn:function(){
	    $.ajax({
            url:"../zcgl/GetWlywTsgzJumpUrl",
            success:function (data) {
                Tools.partModalFn("part3TSGZ-modal", data);
            }
        })

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
            var icon = (item.status == 1 ? "../resources/dist/images/map-icon-3.png" : (item.status == 2 ? "../resources/dist/images/map-icon-4.png" : "../resources/dist/images/map-icon-5.gif"));
            var myIcon = new BMap.Icon(icon, new BMap.Size(40, 40));
            var marker2 = new BMap.Marker(pt2, {icon: myIcon});  // 创建标注
            map.addOverlay(marker2); // 将标注添加到地图中
            ptList.push(pt2);
        })

        var pt_ = new BMap.Point(centX, centY);
        var myIcon_ = new BMap.Icon("../resources/dist/images/map-icon-2.png", new BMap.Size(50, 50));
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
            var icon = (item.status == 1 ? "../resources/dist/images/map-icon-3.png" : (item.status == 2 ? "../resources/dist/images/map-icon-4.png" : "../resources/dist/images/map-icon-5.gif"));
            var myIcon = new BMap.Icon(icon, new BMap.Size(40, 40));
            var marker2 = new BMap.Marker(pt2, {icon: myIcon});  // 创建标注
            map.addOverlay(marker2); // 将标注添加到地图中
            var label = new BMap.Label("<div class='marker-status-" + item.status + "'>" + item.name + "</div>", {offset: new BMap.Size(30, 0)});
            marker2.setLabel(label);
            ptList.push(pt2);
        })

        var pt_ = new BMap.Point(centX, centY);
        var myIcon_ = new BMap.Icon("../resources/dist/images/map-icon-2.png", new BMap.Size(50, 50));
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
     * @desc UPS供电系统  001
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
     * @desc 涉密机房   001
     */
    smjfFn: function () {
        $.ajax({
            url: "../ups/selectsmjfwsd",
            type: "post",
            success: function (data) {
                //还有一个字段：wdzt:默认值正常，该怎么使用 尚未确定
                //温度
                $("#con-part9-1").html(data.wd + "<span>℃</span>");
                //湿度
                $("#con-part9-2").html(data.sd + "<span>%</span>");

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
    gjsFn: function () {
        $.ajax({
            url: "../jgs/selectjgsnum",
            type: "post",
            success: function (data) {
                $("#part3-right").html(data.jgs);
                Tools.data.countError = +data.jgs;
                setTimeout(function () {
                    Tools.gjsFn();
                }, timeout)
            }
        })
    },
    /**
     * @desc 告警信息
     */
    gjxxFn: function () {
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
    /**
     * @desc 资产管理
     */
    zcglFn: function () {
        $.ajax({
            url: "../zcgl/getZcglAllDateForDp",
            success: function (res) {
                var data = JSON.parse(res);
                Tools.partSetData("part2-1-data", data.cagt_2_virtual_machine.count, 4);//虚拟化
                Tools.partSetData("part2-2-data", data.cagt_2_network_device.count, 1);//网络设备
                Tools.partSetData("part2-3-data", data.cagt_2_middle_application.count, 2);//中间件
                Tools.partSetData("part2-4-data", data.cagt_2_storage_device.count, 3);//存储
                Tools.partSetData("part4-1-data", data.cagt_2_security_device.count, 5);//安全设备
                Tools.partSetData("part4-2-data", data.cagt_2_server_device.count, 6);//服务器
                Tools.partSetData("part4-3-data", data.cagt_2_database_application.count, 7);//数据库
                Tools.partSetData("part4-4-data", data.otherCi.count, 8);//其他

                setTimeout(function () {
                    Tools.zcglFn();
                },timeout)
            }
        })
    },

    /**
     * 健康度
     */
    jkdFn: function () {
        $.ajax({
            url: "../zcgl/getJksDate",
            type: "post",
            success: function (res) {
                var data = JSON.parse(res);
                Tools.partSetData("part3-left", Math.floor((+data.score) * 100));
                setTimeout(function () {
                    Tools.jkdFn();
                }, timeout);
            },
            error: function (data) {
                console.error(JSON.stringify(data));
            }
        })
    }

}


Tools.init();