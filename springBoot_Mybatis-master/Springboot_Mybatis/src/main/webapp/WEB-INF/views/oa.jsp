<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>吉林省纪委监委信息化运维平台</title>
    <link href="<%=request.getContextPath()%>/resources/dist/css/layout.style.css" rel="stylesheet" type="text/css">
    <link href="<%=request.getContextPath()%>/resources/dist/css/oa.style.css" rel="stylesheet" type="text/css">
    <link href="<%=request.getContextPath()%>/resources/dist/css/test.css" rel="stylesheet" type="text/css">
</head>
<body  >
<%--假数据版  需要删除--%>
<%--<div class="container xKing">--%>
<%--    <div class="con-part0">OA运维监控系统</div>--%>
<%--    <div class="con-part1">--%>
<%--        <div class="con-part1-copy">--%>
<%--            <div class="con-part-header">--%>
<%--                <span class="color-title">收发文概况</span>--%>
<%--                <span>发文总数：<span class="color-title title-count">2363</span>件</span>--%>
<%--                <span>收文总数：<span class="color-title title-count">5563</span>件</span>--%>
<%--            </div>--%>
<%--            <div class="con-part-body1">--%>
<%--                <div class="con-part-body-title" data-content="TOP6">部门发文</div>--%>
<%--                <div class="con-part-body-content" id="part1-1"></div>--%>
<%--            </div>--%>
<%--            <div class="con-part-body2">--%>
<%--                <div class="con-part-body-title" data-content="TOP6">部门收文</div>--%>
<%--                <div class="con-part-body-content" id="part1-2"></div>--%>
<%--            </div>--%>
<%--        </div>--%>
<%--    </div>--%>
<%--    <div class="con-part2">--%>
<%--        <div class="con-part2-copy">--%>
<%--            <div class="con-part-header">--%>
<%--                <span class="color-title">督办件概况</span>--%>
<%--                <span></span>--%>
<%--                <span>督办件总数：<span class="color-title title-count">2363</span>件</span>--%>
<%--            </div>--%>
<%--            <div class="con-part-body1" id="part2-1"></div>--%>
<%--        </div>--%>
<%--    </div>--%>
<%--    <div class="con-part3">--%>
<%--        <div class="con-part3-1">--%>
<%--            <div class="fontNumber" style="color: #f4537c !important;  font-size: 0.9rem;text-align: center;">32</div>--%>
<%--            <div style="color: #fff;font-size: 0.3rem;text-align: center;">机构总数</div>--%>
<%--        </div>--%>
<%--        <div class="con-part3-2">--%>
<%--            <div class="fontNumber" style="color: #765dfa !important;  font-size: 0.9rem;text-align: center;">39</div>--%>
<%--            <div style="color: #fff;font-size: 0.3rem;text-align: center;">派驻机构</div>--%>
<%--        </div>--%>
<%--        <div class="con-part3-3">--%>
<%--            <div class="fontNumber" style="color: #0cd693 !important;  font-size: 0.9rem;text-align: center;">23</div>--%>
<%--            <div style="color: #fff;font-size: 0.3rem;text-align: center;">部门总数</div>--%>
<%--        </div>--%>
<%--        <div class="con-part3-4">--%>
<%--            <div class="fontNumber" style="color: #2099ff !important;  font-size: 0.9rem;text-align: center;">422</div>--%>
<%--            <div style="color: #fff;font-size: 0.3rem;text-align: center;">用户总数</div>--%>
<%--        </div>--%>
<%--        <div class="con-part3-5">--%>
<%--            <div class="fontNumber con-part3-5-center">355</div>--%>
<%--            <div style="color: #fff;font-size: 0.3rem;text-align: center;">当前在线人数</div>--%>
<%--        </div>--%>
<%--    </div>--%>
<%--    <div class="con-part4">--%>
<%--        <div class="con-part4-copy">--%>
<%--            <div class="con-part-header">--%>
<%--                <span class="color-title">信息报送</span>--%>
<%--                <span>总得分：<span class="color-title title-count">2363</span>分</span>--%>
<%--                <span>总报送条数：<span class="color-title title-count">5563</span>件</span>--%>
<%--            </div>--%>
<%--            <div class="con-part-body1">--%>
<%--                <div class="con-part-body-title" data-content="">各地区得分情况：</div>--%>
<%--                <div class="con-part-body-content" id="part4-1"></div>--%>
<%--            </div>--%>
<%--            <div class="con-part-body2">--%>
<%--                <div class="con-part-body-title" data-content="">各地区报送及被采用情况：</div>--%>
<%--                <div class="con-part-body-content" id="part4-2"></div>--%>
<%--            </div>--%>
<%--        </div>--%>
<%--    </div>--%>
<%--    <div class="con-part5">--%>
<%--        <div class="con-part5-copy">--%>
<%--            <div class="con-part-header">--%>
<%--                <span class="color-title">会议概况</span>--%>
<%--                <span></span>--%>
<%--                <span>本年会议总数：<span class="color-title title-count">63</span>次</span>--%>
<%--            </div>--%>
<%--            <div class="con-part-body1">--%>
<%--                <div class="con-part-body-content">--%>
<%--                    <div class="list-style-1">--%>
<%--                        <div class="list-style-no">1</div>--%>
<%--                        <div class="list-style-content">--%>
<%--                            <div>会议主题会议主题会议主题会议主题会议主题会议主题会议主题会议主题会议主题会议主题</div>--%>
<%--                            <div>--%>
<%--                                <div class="list-style-desc">--%>
<%--                                    <div>开会时间：<span class="color-title">2019-03-26 12:30</span></div>--%>
<%--                                    <div>开会位置：<span class="color-title">第三会议室</span></div>--%>
<%--                                </div>--%>
<%--                                <div class="list-style-date">倒计时：<span class="fontNumber color-orange">05:32</span></div>--%>
<%--                            </div>--%>
<%--                        </div>--%>
<%--                    </div>--%>

<%--                    <div class="list-style-1">--%>
<%--                        <div class="list-style-no">2</div>--%>
<%--                        <div class="list-style-content">--%>
<%--                            <div>会议主题会议主题会议主题会议主题会议主题会议主题会议主题会议主题会议主题会议主题</div>--%>
<%--                            <div>--%>
<%--                                <div class="list-style-desc">--%>
<%--                                    <div>开会时间：<span class="color-title">2019-03-26 12:30</span></div>--%>
<%--                                    <div>开会位置：<span class="color-title">第三会议室</span></div>--%>
<%--                                </div>--%>
<%--                                <div class="list-style-date">倒计时：<span class="fontNumber color-orange">05:32</span></div>--%>
<%--                            </div>--%>
<%--                        </div>--%>
<%--                    </div>--%>
<%--                </div>--%>
<%--            </div>--%>
<%--        </div>--%>
<%--    </div>--%>
<%--    <div class="con-part6">--%>
<%--        <div class="con-part6-copy">--%>
<%--            <div class="con-part-header">--%>
<%--                <span class="color-title">党建中心</span>--%>
<%--                <span></span>--%>
<%--                <span>本年会议总数：<span class="color-title title-count">63</span>次</span>--%>
<%--            </div>--%>
<%--            <div class="con-part-body1">--%>
<%--                <div class="con-part-body-title" data-content="">各部门党员情况：</div>--%>
<%--                <div class="con-part-body-content" id="part6-1"></div>--%>
<%--            </div>--%>
<%--            <div class="con-part-body2">--%>
<%--                <div class="con-part-body-title has-bg" data-content="">--%>
<%--                    <span class="color-title">组织活动</span>--%>
<%--                    <span>活动总数：<span class="color-title title-count">236</span></span>--%>
<%--                    <span>参加总人数：<span class="color-title title-count">836</span></span>--%>
<%--                </div>--%>
<%--                <div class="con-part-body-content">--%>
<%--                    <ul class="table-ul">--%>
<%--                        <li class="animated">--%>
<%--                            <div class="fontNumber"></div>--%>
<%--                            <div class="fontNumber"></div>--%>
<%--                        </li>--%>
<%--                        <li class="animated">--%>
<%--                            <div class="fontNumber"></div>--%>
<%--                            <div class="fontNumber"></div>--%>
<%--                        </li>--%>
<%--                    </ul>--%>
<%--                </div>--%>
<%--            </div>--%>
<%--        </div>--%>
<%--    </div>--%>
<%--</div>--%>
<%--正式版 备份--%>
<div class="container">
    <div class="con-part0"><img style="width:12%" src="<%=request.getContextPath()%>/resources/dist/images/oanewtitleimg.png"></div>
    <div class="con-part1">
        <div class="con-part1-copy">
            <div class="con-part-header">
                <span class="color-title">收发文概况</span>
                <span>发文总数：<span class="color-title title-count" id="fwzs">2363</span>件</span>
                <span>收文总数：<span class="color-title title-count" id="swzs">5563</span>件</span>
            </div>
            <div class="con-part-body1">
                <div class="con-part-body-title" data-content="TOP6">部门发文</div>
                <div class="con-part-body-content" id="part1-1"></div>
            </div>
            <div class="con-part-body2">
                <div class="con-part-body-title" data-content="TOP6">部门收文</div>
                <div class="con-part-body-content" id="part1-2"></div>
            </div>
        </div>
    </div>
    <div class="con-part2">
        <div class="con-part2-copy">
            <div class="con-part-header">
                <span class="color-title" onclick="doclick();">督办件概况</span>
                <span></span>
                <span>督办件总数：<span class="color-title title-count">31</span>件</span>
            </div>
            <div class="con-part-body1" id="part2-1"></div>
        </div>
    </div>
    <div class="con-part3">
        <div class="con-part3-1">
            <div class="fontNumber"id="orgNum" style="color: #f4537c !important;  font-size: 0.9rem;text-align: center;">--</div>
            <div style="color: #fff;font-size: 0.3rem;text-align: center;" >机构总数</div>
        </div>
        <div class="con-part3-2">
            <div class="fontNumber" id="StationedNum" style="color: #765dfa !important;  font-size: 0.9rem;text-align: center;">--</div>
            <div style="color: #fff;font-size: 0.3rem;text-align: center;" >派驻机构</div>
        </div>
        <div class="con-part3-3">
            <div class="fontNumber" id="deptNum" style="color: #0cd693 !important;  font-size: 0.9rem;text-align: center;">--</div>
            <div style="color: #fff;font-size: 0.3rem;text-align: center;" >部门总数</div>
        </div>
        <div class="con-part3-4">
            <div class="fontNumber" id="peopleNum" style="color: #2099ff !important;  font-size: 0.9rem;text-align: center;">--</div>
            <div style="color: #fff;font-size: 0.3rem;text-align: center;" >用户总数</div>
        </div>
        <div class="con-part3-5">
            <div id="onlineNum" class="fontNumber con-part3-5-center">--</div>
            <div style="color: #fff;font-size: 0.3rem;text-align: center;" >当前在线人数</div>
        </div>
    </div>
    <div class="con-part4">
        <div class="con-part4-copy">
            <div class="con-part-header">
                <span class="color-title">信息报送</span>
                <span>总得分：<span class="color-title title-count" id="totalScore">0</span>分</span>
                <span>总报送条数：<span class="color-title title-count" id="totalCount">0</span>件</span>
            </div>
            <div class="con-part-body1">
                <div class="con-part-body-title" data-content="">各地区得分情况：</div>
                <div class="con-part-body-content" id="part4-1"></div>
            </div>
            <div class="con-part-body2">
                <div class="con-part-body-title" data-content="">各地区报送及被采用情况：</div>
                <div class="con-part-body-content" id="part4-2"></div>
            </div>
        </div>
    </div>
    <div class="con-part5">
        <div class="con-part5-copy">
            <div class="con-part-header">
                <span class="color-title">会议概况</span>
                <span></span>
                <span>本年会议总数：<span class="color-title title-count">63</span>次</span>
            </div>
            <div class="con-part-body1">
                <div class="con-part-body-content" id="meeting-con"></div>
            </div>
        </div>
    </div>
    <div class="con-part6">
        <div class="con-part6-copy">
            <div class="con-part-header">
                <span class="color-title">党建中心</span>
                <span></span>
<%--                <span>本年会议总数：<span class="color-title title-count" id="bnhyzs">63</span>次</span>--%>
            </div>
            <div class="con-part-body1">
                <div class="con-part-body-title" data-content="">各部门党员情况：</div>
                <div class="con-part-body-content" id="part6-1"></div>
            </div>
            <div class="con-part-body2">
                <div class="con-part-body-title has-bg" data-content="">
                    <span class="color-title">组织活动</span>
                    <span>活动总数：<span class="color-title title-count" id="Allactivities">0</span></span>
                    <span>参加总人数：<span class="color-title title-count" id="enter_counts">0</span></span>
                </div>
                <div class="con-part-body-content">
                    <ul class="table-ul">
                        <li class="animated">
                            <div class="fontNumber"></div>
                            <div class="fontNumber"></div>
                        </li>
                        <li class="animated">
                            <div class="fontNumber"></div>
                            <div class="fontNumber"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="<%=request.getContextPath()%>/resources/dist/js/common/jquery-3.3.1.min.js"></script>
<script src="<%=request.getContextPath()%>/resources/dist/js/common/echarts.min.js"></script>
<script src="<%=request.getContextPath()%>/resources/dist/js/common/amcharts/amcharts.js" type="text/javascript"></script>
<script src="<%=request.getContextPath()%>/resources/dist/js/common/amcharts/serial.js" type="text/javascript"></script>
<script src="<%=request.getContextPath()%>/resources/dist/js/common/tools.js"></script>
<script src="<%=request.getContextPath()%>/resources/dist/js/sys/oa.js"></script>
<script>

    function doclick(){
        window.location.href="http://localhost:8083/SjwProject/system/dashboad";
    }
</script>
</body>
</html>
