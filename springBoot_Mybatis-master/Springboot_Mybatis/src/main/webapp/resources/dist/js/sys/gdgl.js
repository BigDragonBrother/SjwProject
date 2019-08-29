// var pageSize = 10;
var iDisplayLength = 10;
var Tools = {
    data: {},
    init: function () {
        $(".table-th").empty().append(`
		<div><i class="fa fa-bell-o"></i>序号</div>
            <div>故障编码</div>
            <div>处理人</div>
            <div>发生时间</div>
            <div>故障类型</div>
            <div>故障描述</div>
            <div>报告方式</div>
            <div>报告人</div>
            <div>联系信息</div>
            <div>紧急程度</div>
            <div>优先级</div>
            <div>重大故障</div>
		`);

        $("head").append(`<style>
			.table-ul > li > div:nth-child(6) {
				flex: 5 !important;
			}
			.table-ul > li > div:nth-child(9) {
				flex: 3 !important;
			}
			.table-ul > li > div:nth-child(10),.table-ul > li > div:nth-child(11),.table-ul > li > div:nth-child(2) ,.table-ul > li > div:nth-child(4) {
				flex: 2 !important;
			}
		</style>`)
        Tools.getData(1, iDisplayLength);

        Tools.getLoginUrl(function (data) {
            Tools.data.loginUrl = data;
        });
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
                    if ((typeof item.assigneeInfo) == "object") {
                        if (item.assigneeInfo.length > 0) {
                            name = item.assigneeInfo[0].assignee.name;
                        } else if (item.solver) {
                            name = item.solver.xingMing;
                        } else {
                            name = "无";
                        }
                    } else {
                        name = "未签收";
                    }

                    $(".table-ul").append(`<li class="animated flipInX tr-status-${item.urgency.starNumber}">
                        <div class="fontNumber">${(offset - 1) * iDisplayLength + index + 1}</div>
                        <div class="fontNumber">${item.code}</div>
						<div class="fontNumber">${name}</div>
						<div class="fontNumber">${item.createdOn}</div>
                        <div>${item.category.name || '--'}</div>
                        <div class="fontNumber">${item.summary}</div>
                        <div class="fontNumber">${item.reportWay}</div>
                        <div class="fontNumber">${item.applicationClient.name || '--'}</div>
                        <div class="fontNumber">${item.contact.name || ""}：${item.contact.mobilePhone || ""}</div>
                        <div class="fontNumber">${item.urgency.name || "--"}</div>
                        <div class="fontNumber">${item.priority.name || "--"}</div>
                        <div class="fontNumber">${item.isMajor}</div>
                    </li>`);
                })
            }
        })
    },
    goback: function () {
        $(window.parent.document.getElementById("part6GDGL-modal")).hide().empty()
    },
    goNext: function () {
        $(window.parent.document.getElementById("gdgl-modal")).show().html(` <iframe data-desc="工单管理" style="width: 100%; height:100%;border: 0;" src="${Tools.data.loginUrl}"></iframe>`);
    },

    /**
     *    获取免登录地址的接口
     */
    getLoginUrl: function (callback) {
        $.ajax({
            url: "../zcgl/zcglGdJump",
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