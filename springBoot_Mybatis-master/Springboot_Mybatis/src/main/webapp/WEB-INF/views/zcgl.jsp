<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>吉林省纪委监委信息化运维平台</title>
    <link href="<%=request.getContextPath()%>/resources/dist/css/layout.style.css" rel="stylesheet" type="text/css">
    <link href="<%=request.getContextPath()%>/resources/dist/css/common.style.css" rel="stylesheet" type="text/css">
    <link href="<%=request.getContextPath()%>/resources/dist/css/modal.style.css" rel="stylesheet" type="text/css">
    <%--<link href="<%=request.getContextPath()%>/resources/dist/css/layout.style.css" rel="stylesheet" type="text/css">--%>
</head>
<body   data-desc="资产管理">
<div class="container xKing">
    <div class="con-part0"><span>资产管理</span></div>
    <div class="con-part1">
        <ul class="table-ul">
            <li class="table-th"></li>
        </ul>
    </div>
    <div class="con-part2">
        <ul class="pagination" id="pagination"></ul>
        <input type="hidden" id="PageCount" runat="server" value="0" data-desc="数据条数"/>
        <input type="hidden" id="PageSize" runat="server" value="0" data-desc="每页显示的数量"/>
        <input type="hidden" id="countindex" runat="server" value="0" data-desc="总页数"/>
        <!--设置最多显示的页码数 可以手动设置 默认为7-->
        <input type="hidden" id="visiblePages" runat="server" value="7"/>
    </div>
    <div class="con-part3" onclick="Tools.goNext()">资产管理</div>
</div>

<script src="<%=request.getContextPath()%>/resources/dist/js/common/jquery-3.3.1.min.js"></script>
<script src="<%=request.getContextPath()%>/resources/dist/js/common/jqPaginator.min.js"></script>
<script src="<%=request.getContextPath()%>/resources/dist/js/common/tools.js"></script>
<script src="<%=request.getContextPath()%>/resources/dist/js/sys/zcgl.js"></script>
</body>
</html>
