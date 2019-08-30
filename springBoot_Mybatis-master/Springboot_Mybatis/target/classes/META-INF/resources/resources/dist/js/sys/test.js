var no = 1;
setInterval(function () {
    var cur = Math.floor(1 + Math.random() * 4);
    if (no <= cur) {
        var timer = setInterval(function () {
            if (no < cur) {
                document.getElementById("cls-9" + no).setAttribute("opacity", 1)
                no++;
            } else {
                clearInterval(timer)
            }
        }, 100)
    } else {
        var timer = setInterval(function () {
            if (no > cur) {
                document.getElementById("cls-9" + no).setAttribute("opacity", 0.3)
                no--;
            } else {
                clearInterval(timer)
            }
        }, 100)
    }
}, 700)