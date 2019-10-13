<%--
  Created by IntelliJ IDEA.
  User: lenovo
  Date: 2019/7/28
  Time: 17:35
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <script type="text/javascript">
        function doclick(){
            var url = "http://www.baidu.com";
            window.location.href = "openIE:" + url ;// 使用IE打开
            console.log("进来了")
        }
    </script>
</head>
<body>
<h2>views页面测试热部署111333444555</h2>
<button type="button" onclick="doclick()" >点击我</button>
<p><a href="openIE:www.baidu.com">第一版打开ie</a></p>
<p><a href="alert:www.baidu.com">百度新方法需执行alert.ext</a></p>
</body>
</html>
