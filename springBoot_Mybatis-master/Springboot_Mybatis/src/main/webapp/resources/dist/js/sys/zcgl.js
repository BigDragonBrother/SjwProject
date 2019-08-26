// var pageSize = 10;
var iDisplayLength = 10;
var Tools = {
    data: {
        header: {
            type1: ["序号", "资产编号", "资产名称", "状态", "管理IP", "主机", "保密级别", "操作系统", "CPU", "内存", "存储", "用途"],
            type2: ["序号", "资产编号", "资产名称", "状态", "管理IP", "保密级别", "名牌", "型号", "位置", "用途"],
            type3: ["序号", "资产编号", "资产名称", "状态", "软件名称", "软件版本", "运行设备", "服务端口", "用途"],
            type4: ["序号", "资产编号", "资产名称", "状态", "品牌", "型号", "保密级别", "用途"],
            type5: ["序号", "资产编号", "资产名称", "状态", "管理IP", "保密级别", "名牌", "型号", "位置", "用途"],
            type6: ["序号", "资产编号", "资产名称", "状态", "管理IP", "保密级别", "操作系统", "品牌", "型号", "用途"],
            type7: ["序号", "资产编号", "资产名称", "状态", "软件名称", "软件版本", "运行设备", "服务端口", "用途"],
            type8: ["序号", "资产编号", "资产名称", "状态", "保密级别", "用途"]
        },
        body: {
            type1: ["assetNO", "name", "status", "apManageIP", "apPlaceHost", "secrecyLevel", "apOperatingSystem", "apCpuNumber", "apMemory", "apSize", "usage"],
            type2: ["assetNO", "name", "status", "apManageIP", "secrecyLevel", "brand", "model", "region.fullName", "usage"],
            type3: ["assetNO", "name", "status", "software.name", "apVersion", "runOn.name", "apUsePorts", "usage"],
            type4: ["assetNO", "name", "status", "brand", "model", "secrecyLevel", "usage"],
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
    appendHeader: function (type, callback) {
        var type = Tools.QueryString("type");
        console.log("type1:" + type);
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
        console.log("type2:" + type);
        Tools.appendHeader(type, function () {
            Tools.getData(1, iDisplayLength);
        })
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
                            str += `<div class="fontNumber">${item_[key_[0]][key_[1]]}</div>`
                        } else {
                            str += `<div class="fontNumber">${item_[item]}</div>`
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