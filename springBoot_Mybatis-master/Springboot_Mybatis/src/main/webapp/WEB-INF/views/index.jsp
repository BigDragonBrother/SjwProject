<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>吉林省纪委监委信息化运维平台</title>
    <link href="<%=request.getContextPath()%>/resources/dist/css/layout.style.css" rel="stylesheet" type="text/css">
    <link href="<%=request.getContextPath()%>/resources/dist/css/animate.min.css" rel="stylesheet" type="text/css">
    <link href="<%=request.getContextPath()%>/resources/dist/css/animation.style.css" rel="stylesheet" type="text/css">
    <link href="<%=request.getContextPath()%>/resources/dist/css/index.style.css" rel="stylesheet" type="text/css">
    <link href="<%=request.getContextPath()%>/resources/dist/css/modal.style.css" rel="stylesheet" type="text/css">
    <script type="text/javascript"
            src="http://api.map.baidu.com/api?v=3.0&ak=dPAplGZUNkhKNhwGBogEHXszowDRTbFk"></script>
</head>
<body>
<div class="container xKing">
    <!--Part-1:标题容器-->
    <div class="con-part0">
        <div class="con-part0-title">
            <img src="<%=request.getContextPath()%>/resources/dist/images/tit.png">
        </div>
        <div style="position: absolute;left: 25.5%;    width: 6%;top: 30%;">
            <object data="<%=request.getContextPath()%>/resources/dist/svg/header-points.svg" type="image/svg+xml" style="width: 100%;">
                <p>您的浏览器不支持SVG文件</p>
            </object>
        </div>
        <div style="position: absolute;right:23%;    width: 6%;top: 30%;">
            <object data="<%=request.getContextPath()%>/resources/dist/svg/header-points.svg" type="image/svg+xml"
                    style="width: 100%;transform: rotateY(180deg);">
                <p>您的浏览器不支持SVG文件</p>
            </object>
        </div>
    </div>
    <div class="con-part1">
        <div class="part-header">
            <img src="<%=request.getContextPath()%>/resources/dist/images/tit_left.png">
            <span>网络运行态势</span>
            <img src="<%=request.getContextPath()%>/resources/dist/images/tit_right.png">
        </div>
        <div class="part-body">
            <div class="con-part1-1" data-content="本级">
                <object data="<%=request.getContextPath()%>/resources/dist/svg/qsyxts0804.svg" type="image/svg+xml" style="width: 100%;">
                    <p>您的浏览器不支持SVG文件</p>
                </object>
                <div id="part1-1-data" class="con-part1-text fontSuccess fontNumber">89</div>
            </div>
            <div class="con-part1-2" data-content="派驻" onclick="Tools.part1PZ()">
                <object data="<%=request.getContextPath()%>/resources/dist/svg/qsyxts0804.svg" type="image/svg+xml" style="width: 100%;">
                    <p>您的浏览器不支持SVG文件</p>
                </object>
                <div id="part1-2-data" class="con-part1-text fontSuccess fontNumber">41</div>
            </div>
            <div class="con-part1-3" data-content="市县" onclick="doclick1();">
                <object data="<%=request.getContextPath()%>/resources/dist/svg/qsyxts0804.svg" type="image/svg+xml" style="width: 100%;">
                    <p>您的浏览器不支持SVG文件</p>
                </object>
                <div id="part1-3-data" class="con-part1-text fontSuccess fontNumber">70</div>
            </div>
        </div>
    </div>
    <div class="con-part2">
        <div class="part-header">
            <img src="<%=request.getContextPath()%>/resources/dist/images/tit_left.png">
            <span>资产管理</span>
            <img src="<%=request.getContextPath()%>/resources/dist/images/tit_right.png">
        </div>
        <div class="part-body">
            <div class="part-body-1">
                <div onclick="Tools.partZCGL(this)" data-target="0">
                    <object data="<%=request.getContextPath()%>/resources/dist/svg/ybp1.svg" type="image/svg+xml" style="width: 100%;">
                        <p>您的浏览器不支持SVG文件</p>
                    </object>
                    <div class="fontNumber ybp_data fontSuccess" id="part2-1-data">0</div>
                    <p>虚拟化</p>
                </div>
                <div onclick="Tools.partZCGL(this)" data-target="0">
                    <object data="<%=request.getContextPath()%>/resources/dist/svg/ybp1.svg" type="image/svg+xml" style="width: 100%;">
                        <p>您的浏览器不支持SVG文件</p>
                    </object>
                    <div class="fontNumber fontSuccess ybp_data" id="part2-2-data">0</div>
                    <p>网络设备</p>
                </div>
            </div>
            <div class="part-body-2">
                <div onclick="Tools.partZCGL(this)" data-target="0">
                    <object data="<%=request.getContextPath()%>/resources/dist/svg/ybp1.svg" type="image/svg+xml" style="width: 100%;">
                        <p>您的浏览器不支持SVG文件</p>
                    </object>
                    <div class="fontNumber fontSuccess ybp_data" id="part2-3-data">0</div>
                    <p>中间件</p>
                </div>
                <div onclick="Tools.partZCGL(this)" data-target="0">
                    <object data="<%=request.getContextPath()%>/resources/dist/svg/ybp1.svg" type="image/svg+xml" style="width: 100%;">
                        <p>您的浏览器不支持SVG文件</p>
                    </object>
                    <div class="fontNumber fontSuccess ybp_data" id="part2-4-data">0</div>
                    <p>存储</p>
                </div>
            </div>
        </div>
    </div>
    <div class="con-part3">
        <div class="part-header" style="">
            <img src="<%=request.getContextPath()%>/resources/dist/images/tit_left.png">
            <span>态势感知</span>
            <img src="<%=request.getContextPath()%>/resources/dist/images/tit_right.png">
        </div>
        <div class="part-body" id="radar">
            <div class="part-body-0" onclick="Tools.partTSGZFn()"></div>
            <object data="<%=request.getContextPath()%>/resources/dist/svg/leida.svg" type="image/svg+xml"
                    style="top: -1.5%;height: 91%;width: 100%;position: absolute;">
                <p>您的浏览器不支持SVG文件</p>
            </object>
            <div class="part-body-1" data-content="健康度">
                <img src="<%=request.getContextPath()%>/resources/dist/svg/ld_left.svg" style="width: 100%;">
                <div class="fontNumber fontSuccess" id="part3-left">0</div>
            </div>
            <div class="part-body-2" id="leida"></div>
            <div class="part-body-3" data-content="告警数" onclick="Tools.partGJXX()">
                <img src="<%=request.getContextPath()%>/resources/dist/svg/ld_right.svg" style="width: 100%;">
                <div class="fontNumber fontSuccess" id="part3-right">0</div>
            </div>
            <!--警号框-->
            <div id="part-3-warning" class="part-body-4" style="display: none;">
                <img src="<%=request.getContextPath()%>/resources/dist/images/jinggao.png" style="width:100%">
                <div id="part-3-warningInfo">
                    <marquee style="    transform: scale(0.8);" font-size="10px" behavior="scroll"
                             onMouseOut="this.start()" onMouseOver="this.stop()">提示：服务器01发生异常错误
                    </marquee>
                </div>
            </div>
        </div>
    </div>
    <div class="con-part4">
        <div class="part-header">
            <img src="<%=request.getContextPath()%>/resources/dist/images/tit_left.png">
            <span>资产管理</span>
            <img src="<%=request.getContextPath()%>/resources/dist/images/tit_right.png">
        </div>
        <div class="part-body">
            <div class="part-body-1">
                <div onclick="Tools.partZCGL(this)" data-target="0">
                    <!--<img src="dist/svg/ybp1.svg">-->
                    <object data="<%=request.getContextPath()%>/resources/dist/svg/ybp1.svg" type="image/svg+xml" style="width: 100%;">
                        <p>您的浏览器不支持SVG文件</p>
                    </object>
                    <div class="fontNumber ybp_data fontSuccess" id="part4-1-data">0</div>
                    <p>安全设备</p>
                </div>
                <div onclick="Tools.partZCGL(this)" data-target="0">
                    <!--<img src="dist/svg/ybp1.svg">-->
                    <object data="<%=request.getContextPath()%>/resources/dist/svg/ybp1.svg" type="image/svg+xml" style="width: 100%;">
                        <p>您的浏览器不支持SVG文件</p>
                    </object>
                    <div class="fontNumber ybp_data fontSuccess" id="part4-2-data">0</div>
                    <p>服务器</p>
                </div>
            </div>
            <div class="part-body-2">
                <div onclick="Tools.partZCGL(this)" data-target="0">
                    <object data="<%=request.getContextPath()%>/resources/dist/svg/ybp1.svg" type="image/svg+xml" style="width: 100%;">
                        <p>您的浏览器不支持SVG文件</p>
                    </object>
                    <div class="fontNumber ybp_data fontSuccess" id="part4-3-data">0</div>
                    <p>数据库</p>
                </div>
                <div onclick="Tools.partZCGL(this)" data-target="0">
                    <object data="<%=request.getContextPath()%>/resources/dist/svg/ybp1.svg" type="image/svg+xml" style="width: 100%;">
                        <p>您的浏览器不支持SVG文件</p>
                    </object>
                    <div class="fontNumber ybp_data fontSuccess" id="part4-4-data">0</div>
                    <p>其他</p>
                </div>
            </div>
        </div>
    </div>
    <div class="con-part5">
        <div class="part-header part-header-5-1">
            <img src="<%=request.getContextPath()%>/resources/dist/images/tit_left.png">
            <span>业务应用</span>
            <img src="<%=request.getContextPath()%>/resources/dist/images/tit_right.png">
        </div>
        <div class="part-header part-header-5-2">
            <img src="<%=request.getContextPath()%>/resources/dist/images/tit_left.png">
            <span>即时调度</span>
            <img src="<%=request.getContextPath()%>/resources/dist/images/tit_right.png">
        </div>
        <div class="part-body">
            <div class="part-body-1">
                <div id="part5-1">
                    <div class="part5-1" onclick="Tools.part5YWYY()"></div>
                </div>
                <div id="part5-2">
                    <div class="part5-2" onclick="Tools.part5JSDD()">
                        <canvas id="part5-2-canvas"></canvas>
                    </div>
                </div>
            </div>
            <div class="part-header part-header-5-3">
                <img src="<%=request.getContextPath()%>/resources/dist/images/tit_left.png">
                <span>UPS供电管理</span>
                <img src="<%=request.getContextPath()%>/resources/dist/images/tit_right.png">
            </div>
            <div class="part-body-2">
                <div id="part5-3">
                    <div class="part5-3-title1">电池温度</div>
                    <div id="part5-3-body1" class="part5-3-body1 fontNumber fontSuccess" data-content="℃">25</div>
                    <div id="part5-3-body2" class="part5-3-body2 fontNumber fontSuccess" data-content="M">533</div>
                    <div class="part5-3-title3">电池容量</div>
                    <div id="part5-3-body3" class="part5-3-body3 fontNumber fontSuccess" data-content="%">100</div>
                </div>
            </div>
        </div>
    </div>
    <!--Part-6:工单表格-->
    <div class="con-part6">
        <div class="part-header">
            <img src="<%=request.getContextPath()%>/resources/dist/images/tit_left.png">
            <span>工单系统</span>
            <img src="<%=request.getContextPath()%>/resources/dist/images/tit_right.png">
        </div>
        <div class="part-body" onclick="Tools.partGDGL()">
            <ul class="table-ul">
                <li class="table-th">
                    <div><i class="fa fa-bell-o"></i>序号</div>
                    <div>处理人</div>
                    <div>故障类型</div>
                    <div>故障编码</div>
                    <div>派单时间</div>
                </li>
                <li class="animated">
                    <div class="fontNumber"></div>
                    <div></div>
                    <div></div>
                    <div class="fontNumber"></div>
                    <div class="fontNumber"></div>
                </li>
                <li class="animated">
                    <div class="fontNumber"></div>
                    <div></div>
                    <div></div>
                    <div class="fontNumber"></div>
                    <div class="fontNumber"></div>
                </li>
                <li class="animated">
                    <div class="fontNumber"></div>
                    <div></div>
                    <div></div>
                    <div class="fontNumber"></div>
                    <div class="fontNumber"></div>
                </li>
                <li class="animated">
                    <div class="fontNumber"></div>
                    <div></div>
                    <div></div>
                    <div class="fontNumber"></div>
                    <div class="fontNumber"></div>
                </li>
                <li class="animated">
                    <div class="fontNumber"></div>
                    <div></div>
                    <div></div>
                    <div class="fontNumber"></div>
                    <div class="fontNumber"></div>
                </li>
            </ul>
        </div>
    </div>
    <!--Part-7:终端设备感知-->
    <div class="con-part7">
        <div class="part-header">
            <img src="<%=request.getContextPath()%>/resources/dist/images/tit_left.png">
            <span>终端设备感知</span>
            <img src="<%=request.getContextPath()%>/resources/dist/images/tit_right.png">
        </div>
        <div class="part-body">
            <div id="part7-1" data-content="委机关设备">
                <div class="fontNumber fontSuccess" id="part-7-1">20</div>
            </div>
            <div id="part7-2" data-content="派驻机构设备">
                <div class="fontNumber fontSuccess" id="part-7-2">8</div>
            </div>
        </div>
    </div>
    <!--Part-8:文件备份-->
    <div class="con-part8">
        <div class="part-body">
            <div id="con-part8-1" class="con-part8-1 fontNumber fontSuccess" data-content="业务备份">20%</div>
            <div id="con-part8-2" class="con-part8-2 fontNumber fontSuccess" data-content="文档管理">20%</div>
            <div id="con-part8-3" class="con-part8-3 fontNumber fontSuccess" data-content="容量存储">20%</div>
            <!--指针动画-->
            <div class="con-part8-1-point"><img src="<%=request.getContextPath()%>/resources/dist/svg/wjbf_zz1.svg">
            </div>
            <div class="con-part8-2-point"><img src="<%=request.getContextPath()%>/resources/dist/svg/wjbf_zz2.svg">
            </div>
            <div class="con-part8-3-point"><img src="<%=request.getContextPath()%>/resources/dist/svg/wjbf_zz3.svg">
            </div>
        </div>

        <div class="part-header">
            <img src="<%=request.getContextPath()%>/resources/dist/images/tit_left.png">
            <span>数据备份系统</span>
            <img src="<%=request.getContextPath()%>/resources/dist/images/tit_right.png">
        </div>
    </div>
    <!--Part-9:密码设备管理-->
    <div class="con-part9">
        <div class="part-header">
            <img src="<%=request.getContextPath()%>/resources/dist/images/tit_left.png">
            <span>可视化机房</span>
            <img src="<%=request.getContextPath()%>/resources/dist/images/tit_right.png">
        </div>
        <div class="part-body" id="part9">
            <div id="con-part9-1" class="con-part9-1 fontNumber fontSuccess" data-content="温度">22<span>℃</span></div>
            <div id="con-part9-3" class="con-part9-3 fontNumber fontSuccess" data-content="温度">22<span>℃</span></div>
            <div id="con-part9-5" class="con-part9-5 fontNumber fontSuccess" data-content="温度">22<span>℃</span></div>
            <div id="con-part9-7" class="con-part9-7 fontNumber fontSuccess" data-content="温度">22<span>℃</span></div>
            <div id="con-part9-2" class="con-part9-2 fontNumber fontSuccess" data-content="湿度">55<span>%RH</span></div>
            <div id="con-part9-4" class="con-part9-4 fontNumber fontSuccess" data-content="湿度">55<span>%RH</span></div>
            <div id="con-part9-6" class="con-part9-6 fontNumber fontSuccess" data-content="湿度">55<span>%RH</span></div>
            <div id="con-part9-8" class="con-part9-8 fontNumber fontSuccess" data-content="湿度">55<span>%RH</span></div>
            <div id="con-part9-9" class="con-part9-9" onclick="Tools.partKSHJFFn()"></div>
            <div id="con-part9-10" class="con-part9-10" onclick="Tools.partKSHJFFn()"></div>
            <div id="con-part9-11" class="con-part9-11" onclick="Tools.partKSHJFFn()"></div>
            <div id="con-part9-12" class="con-part9-12" onclick="Tools.partKSHJFFn()"></div>
            <div class="con-part9-13">
                <img src="<%=request.getContextPath()%>/resources/dist/svg/mmgl_six.svg">
            </div>
            <div id="con-part9-14" class="con-part9-14">涉密机房</div>
            <div id="con-part9-15" class="con-part9-15">A区机房</div>
            <div id="con-part9-16" class="con-part9-16">互联网机房</div>
            <div id="con-part9-17" class="con-part9-17">备份机房</div>

        </div>
    </div>
</div>
<!--part1:派驻-->
<div class="part-modal bmap" id="part1PZ-modal" style="display: none">
    <div id="allmap" class="allmap"></div>
</div>
<!--part5:即时调度-->
<div class="part-modal" id="part5JSDD-modal" style="display: none;"></div>
<%--part5:业务应用--%>
<div class="part-modal" id="part5YWYY-modal" style="display: none;"></div>
<%--资产管理--%>
<div class="part-modal" id="part2ZCGL-modal" style="display: none;"></div>
<%--工单管理--%>
<div class="part-modal" id="part6GDGL-modal" style="display: none;"></div>
<%--告警信息--%>
<div class="part-modal" id="part3GJXX-modal" style="display: none;"></div>
<div class="part-modal" id="part3TSGZ-modal" style="display: none;"></div>
<%--可视化机房--%>
<div class="part-modal" id="part9KSHJF-modal" style="display: none;bottom: 50%;transform: scale(1,2);transform-origin: top;">
    <img src="<%=request.getContextPath()%>/resources/dist/images/kshjf-image.jpg" style="width: 100%;height: 100%;">
</div>
<%--第三方页面：工单系统--%>
<div class="part-modal" id="gdgl-modal" style="display: none;"></div>
<%--第三方页面：资产管理--%>
<div class="part-modal" id="zcgl-modal" style="display: none;"></div>
<script src="<%=request.getContextPath()%>/resources/dist/js/common/jquery-3.3.1.min.js"></script>
<!--地图组件  begin-->
<script type="text/javascript" src="<%=request.getContextPath()%>/resources/dist/bmap/js/tilesInfo.js"></script>
<!--<script type="text/javascript" src="dist/bmap/js/BaiduApi_2.0.js"></script>-->
<!--<script type="text/javascript" src="dist/bmap/js/AreaRestriction_min.js"></script>-->
<!--<script type="text/javascript" src="dist/bmap/js/TextIconOverlay_min.js"></script>-->
<!--<script type="text/javascript" src="dist/bmap/js/DistanceTool_min.js"></script>-->
<!--<script type="text/javascript" src="dist/bmap/js/data_Map.js"></script>-->
<!--<script type="text/javascript" src="dist/bmap/js/RectangleZoom_min.js"></script>-->
<!--地图组件  end-->
<script src="<%=request.getContextPath()%>/resources/dist/js/common/tools.js"></script>
<script src="<%=request.getContextPath()%>/resources/dist/js/sys/index.js"></script>
<script>
    function doclick1(){
        window.location.href="http://localhost:8083/SjwProject/system/dashboad";
    }
</script>
</body>
</html>
