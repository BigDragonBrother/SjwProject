<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>吉林省纪委监委信息化运维平台</title>
    <link href="<%=request.getContextPath()%>/resources/dist/css/layout.style.css" rel="stylesheet" type="text/css">
    <link href="<%=request.getContextPath()%>/resources/dist/css/common.style.css" rel="stylesheet" type="text/css">
    <%--<link href="<%=request.getContextPath()%>/resources/dist/css/layout.style.css" rel="stylesheet" type="text/css">--%>
</head>
<body   data-desc="告警信息监控管理">
<div class="container xKing">
    <div class="con-part0"><span>告警信息监控系统</span></div>
    <div class="con-part1">
        <ul class="table-ul">
            <li class="table-th">
                <div><i class="fa fa-bell-o"></i> 单号</div>
                <div>姓名</div>
                <div>故障类型</div>
                <div>故障编码</div>
                <div>派单时间</div>
            </li>
            <li class="animated tr-status-3 flipInX tr-status-1">
                <div class="fontNumber">6</div>
                <div>王德凯</div>
                <div>存储检测异常</div>
                <div class="fontNumber">C-00CCSB0001</div>
                <div class="fontNumber">2019.6.25</div>
            </li>
            <li class="animated tr-status-2 flipInX tr-status-1">
                <div class="fontNumber">7</div>
                <div>张明会</div>
                <div>中间件异常</div>
                <div class="fontNumber">Z-00ZJJ0006</div>
                <div class="fontNumber">2019.6.21</div>
            </li>
            <li class="animated tr-status-2">
                <div class="fontNumber">3</div>
                <div>刘明哲</div>
                <div>存储设备异常</div>
                <div class="fontNumber">C-00CCSB0004</div>
                <div class="fontNumber">2019.7.13</div>
            </li>
            <li class="animated tr-status-3">
                <div class="fontNumber">4</div>
                <div>王德凯</div>
                <div>安全设备告警</div>
                <div class="fontNumber">A-00AQSB0001</div>
                <div class="fontNumber">2019.7.1</div>
            </li>
            <li class="animated tr-status-1">
                <div class="fontNumber">5</div>
                <div>王智达</div>
                <div>网络连接异常</div>
                <div class="fontNumber">W-00WLLJ0010</div>
                <div class="fontNumber">2019.6.30</div>
            </li>
        </ul>
    </div>
    <div class="con-part2">
        <ul class="pagination" id="pagination"></ul>
        <input type="hidden" id="PageCount" runat="server" value="500" data-desc="数据条数"/>
        <input type="hidden" id="PageSize" runat="server" value="10" data-desc="每页显示的数量"/>
        <input type="hidden" id="countindex" runat="server" value="50" data-desc="总页数"/>
        <!--设置最多显示的页码数 可以手动设置 默认为7-->
        <input type="hidden" id="visiblePages" runat="server" value="7"/>
    </div>
    <div class="con-part3">返回首页</div>
</div>
<script src="<%=request.getContextPath()%>/resources/dist/js/common/jquery-3.3.1.min.js"></script>
<script src="<%=request.getContextPath()%>/resources/dist/js/common/jqPaginator.min.js"></script>
<script src="<%=request.getContextPath()%>/resources/dist/js/common/tools.js"></script>
<script>
    pageEvent();
</script>
</body>
</html>
