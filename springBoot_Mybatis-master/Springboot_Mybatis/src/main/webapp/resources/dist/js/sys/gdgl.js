// var pageSize = 10;
var iDisplayLength = 10;
var Tools = {
    data: {},
    init: function () {
        Tools.getData(1, iDisplayLength);
    },
    getData: function (offset, pageSize) {
        $.ajax({
            url: "../zcgl/getGdListDate",
            data: {
                start: (offset - 1) * iDisplayLength,
                limit: pageSize
            },
            success: function (res) {
                var data = JSON.parse(res);
                if ($("#PageSize").val() == 0) {
                    $("#PageSize").val(pageSize);//每页显示数量
                    // $("#totalPageNum").val(data.totalPage);//总页数
                    $("#countindex").val(Math.ceil(data.total / iDisplayLength) || 1);//总页数
                    pageEvent();
                }
                $(".table-ul>li:not(.table-th)").remove();
                $.each(data.root, function (index, item) {
                    $(".table-ul").append(`<li class="animated flipInX tr-status-${item.urgency.starNumber}">
                        <div class="fontNumber">${(offset - 1) * iDisplayLength + index + 1}</div>
                        <div class="fontNumber">${item.createdOn}</div>
                        <div>${item.category.name || '--'}</div>
                        <div class="fontNumber">${item.summary}</div>
                        <div class="fontNumber">${item.reportWay}</div>
                        <div class="fontNumber">${item.applicationClient.name || '--'}</div>
                        <div class="fontNumber">${item.contact.name || ""}<br/>${item.contact.mobilePhone || ""}</div>
                        <div class="fontNumber">${item.urgency.name || "--"}</div>
                        <div class="fontNumber">${item.priority.name || "--"}</div>
                        <div class="fontNumber">${item.isMajor}</div>
                    </li>`);
                })
            }
        })
    },
    goback:function () {
        $(window.parent.document.getElementById("part6GDGL-modal")).hide().empty()
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