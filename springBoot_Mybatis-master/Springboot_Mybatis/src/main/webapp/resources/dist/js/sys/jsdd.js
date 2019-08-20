$(function(){
    document.onkeydown = function (event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == 27) {
            $(window.parent.document.getElementById("part5JSDD-modal")).hide().empty()
        }
    }
})