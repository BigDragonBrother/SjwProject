// var pageSize = 10;
var iDisplayLength = 12;
var Tools = {
    data: {
        title: {
            type4: "虚拟化",
            type1: "网络设备",
            type2: "中间件",
            type3: "存储",
            type5: "安全设备",
            type6: "服务器",
            type7: "数据库",
            type8: "其他",
            loginUrl:""
        },

        //4:虚拟化	1：网络设备		2：中间件		3：存储		5：安全设备		6：服务器		7：数据库		8：其他
        header: {
            type4: ["序号", "资产编号", "资产名称", "状态", "管理IP", "主机", "保密级别", "操作系统", "CPU", "内存", "存储", "用途"],
            type1: ["序号", "资产编号", "资产名称", "状态", "管理IP", "保密级别", "品牌", "型号", "位置", "用途"],
            type2: ["序号", "资产编号", "资产名称", "状态", "软件名称", "软件版本", "运行设备", "服务端口", "用途"],
            type3: ["序号", "资产编号", "资产名称", "状态", "品牌", "型号", "保密级别", "用途"],
            type5: ["序号", "资产编号", "资产名称", "状态", "管理IP", "保密级别", "品牌", "型号", "位置", "用途"],
            type6: ["序号", "资产编号", "资产名称", "状态", "管理IP", "保密级别", "操作系统", "品牌", "型号", "用途"],
            type7: ["序号", "资产编号", "资产名称", "状态", "软件名称", "软件版本", "运行设备", "服务端口", "用途"],
            type8: ["序号", "资产编号", "资产名称", "状态", "保密级别", "用途"]
        },
        body: {
            type4: ["assetNO", "name", "status", "apManageIP", "apPlaceHost", "secrecyLevel", "apOperatingSystem", "apCpuNumber", "apMemory", "apSize", "usage"],
            type1: ["assetNO", "name", "status", "apManageIP", "secrecyLevel", "brand", "model", "region.fullName", "usage"],
            type2: ["assetNO", "name", "status", "software.name", "apVersion", "runOn.name", "apUsePorts", "usage"],
            type3: ["assetNO", "name", "status", "brand", "model", "secrecyLevel", "usage"],
            type5: ["assetNO", "name", "status", "apManageIP", "secrecyLevel", "brand", "model", "region.fullName", "usage"],
            type6: ["assetNO", "name", "status", "apManageIP", "secrecyLevel", "apOperatingSystem", "brand", "model", "usage"],
            type7: ["assetNO", "name", "status", "software.name", "apVersion", "runOn.name", "apUsePorts", "usage"],
            type8: ["assetNO", "name", "status", "secrecyLevel", "usage"],
        }
    },
    QueryString: function (val) {
        var uri = window.location.search;
        var re = new RegExp("" + val + "\=([^\&\?]*)", "ig");
        return ((uri.match(re)) ? (uri.match(re)[0].substr(val.length + 1)) : null);
    },
    appendTitle: function () {
        var type = Tools.QueryString("type");
        $(".con-part0>span").html("资产管理-" + Tools.data.title["type" + type])
    },
    appendHeader: function (type, callback) {
        var type = Tools.QueryString("type");
        var header = Tools.data.header;
        $(".table-th").empty().append((function () {
            var str = "";
            $.each(header["type" + type], function (index, item) {
                if (index == 0) {
                    str += '<div><i class="fa fa-bell-o"></i> ' + item + '</div>'
                } else {
                    str += "<div>" + item + "</div>"
                }
            })
            return str;
        })());
        return callback();
    },
    init: function () {
        var type = Tools.QueryString("type");
        Tools.appendTitle();
        Tools.appendHeader(type, function () {
            Tools.getData(1, iDisplayLength);
        })
        Tools.getLoginUrl(function (data) {
            Tools.data.loginUrl = data;
        });
    },
    getData: function (offset, pageSize) {
        var type = Tools.QueryString("type");
        var bodyData = Tools.data.body;
        $.ajax({
            url: "../zcgl/getZcglListDateByType",
            data: {
                start: (offset - 1) * iDisplayLength,
                limit: pageSize,
                type: type
            },
            success: function (res) {
                var data = JSON.parse(res);
                if ($("#PageSize").val() == 0) {
                    $("#PageSize").val(pageSize);//每页显示数量
                    $("#countindex").val(Math.ceil(data.total / iDisplayLength) || 1);//总页数
                    pageEvent();
                }
                $(".table-ul>li:not(.table-th)").remove();
                $.each(data.root, function (index_, item_) {
                    // var str = `<li class="animated flipInX tr-status-${item_.urgency.starNumber}">
                    var str = `<li class="animated flipInX">
                        <div class="fontNumber">${(offset - 1) * iDisplayLength + index_ + 1}</div>`;
                    $.each(bodyData["type" + type], function (index, item) {
                        var point = item.indexOf(".");
                        if (point > 0) {
                            var key_ = item.split(".");
                            try {
                                str += `<div class="fontNumber">${item_[key_[0]]?item_[key_[0]][key_[1]] : "无"}</div>`
                            } catch (e) {
                                str += `<div class="fontNumber">无</div>`
                            }
                        } else {
                            str += `<div class="fontNumber">${item_[item] || "无"}</div>`
                        }
                    })
                    str += `</li>`;
                    $(".table-ul").append(str);
                })

            }
        })
    },
    goback: function () {
        $(window.parent.document.getElementById("part2ZCGL-modal")).hide().empty()
    },
    goNext: function () {
        $(window.parent.document.getElementById("zcgl-modal")).show().html(
            ` <iframe data-desc="资产管理" style="width: 100%; height:100%;border: 0;" src="${Tools.data.loginUrl}"></iframe>`
        );
    },

    /**
     *    获取免登录地址的接口
     */
    getLoginUrl: function (callback) {
        var type = Tools.QueryString("type");
        $.ajax({
            url: "../zcgl/zcglSelectOneJump",
            data:{type:type},
            success: function (data) {
                return callback(data);
            }
        })

    }
}

// 初始化分页控件
function pageEvent() {
    $.jqPaginator('#pagination', {
        totalPages: parseInt($("#countindex").val()),
        visiblePages: parseInt($("#visiblePages").val()),
        currentPage: 1,
        first: '<li class="first"><a href="javascript:;">首页</a></li>',
        prev: '<li class="prev"><a href="javascript:;"><i class="arrow arrow2"></i>上一页</a></li>',
        next: '<li class="next"><a href="javascript:;">	下一页<i class="arrow arrow3"></i></a></li>',
        last: '<li class="last"><a href="javascript:;">尾页</a></li>',
        page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
        onPageChange: function (num, type) {
            if (type == "change") {
                Tools.getData(num, iDisplayLength);
            }
        }
    });

}

$(function () {
    Tools.init();
})