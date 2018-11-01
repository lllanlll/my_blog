//雪花背景js
function snow() {
    var flake = $("<div>").css({
        "position": "absolute",
        "color": "#259"
    }).html("❄");

    var documentWidth = $(document).width();

    var documentHieght = $(document).height();

    var millisec = 100;
    setInterval(function() {
        var startLeft = Math.random() * documentWidth;

        var endLeft = Math.random() * documentWidth;

        var flakeSize = 5 + 20 * Math.random();

        var durationTime = 4000 + 7000 * Math.random();

        var startOpacity = 0.8 + 0.2 * Math.random();

        var endOpacity = 0.3 + 0.7 * Math.random();

        flake.clone().appendTo($("body")).css({
            "left": startLeft,
            "opacity": startOpacity,
            "font-size": flakeSize,
            "top": "-25px",
        }).animate({
            "left": endLeft,
            "opacity": endOpacity,
            "top": documentHieght
        }, durationTime, function() {
            $(this).remove();
        });
    }, millisec);
};
snow();
//雪花背景js结束

//当前时间js
window.onload=function () {
    var p1=document.getElementById("showTime1");
    p1.style.fontSize='35px';
    p1.style.color='#289';
    p1.style.position='absolute';
    p1.style.left='550px';
    showTime();
    var clickBig2=document.getElementById("para2");
        clickBig2.onclick = function () {
            this.style.background = "aquamarine";
            this.style.top = "100px";
            this.style.left = "500px";
            this.style.zIndex = "9";
            this.style.height = "1000px";
        }
        clickBig2.ondblclick = function () {
            this.style.background = "aliceblue";
            this.style.zIndex="0";
            this.style.top="150px";
            this.style.left="20px";
            this.style.height="300px";
        }
    var clickBig3=document.getElementById("para3");
        clickBig3.onclick = function () {
            this.style.background = "aquamarine";
            this.style.top = "100px";
            this.style.left = "500px";
            this.style.zIndex = "9";
            this.style.height = "1000px";
        }
        clickBig3.ondblclick = function () {
            this.style.background = "aliceblue";
            this.style.zIndex="0";
            this.style.top="150px";
            this.style.left="540px";
            this.style.height="300px";
        }
    var clickBig4=document.getElementById("para4");
        clickBig4.onclick = function () {
            this.style.background = "aquamarine";
            this.style.top = "100px";
            this.style.left = "500px";
            this.style.zIndex = "9";
            this.style.height = "1000px";
        }
        clickBig4.ondblclick = function () {
            this.style.background = "aliceblue";
            this.style.zIndex="0";
            this.style.top="150px";
            this.style.left="1060px";
            this.style.height="300px";
        }
    var clickBig5=document.getElementById("para5");
        clickBig5.onclick = function () {
            this.style.background = "aquamarine";
            this.style.top = "100px";
            this.style.left = "500px";
            this.style.zIndex = "9";
            this.style.height = "1000px";
        }
        clickBig5.ondblclick = function () {
            this.style.background = "aliceblue";
            this.style.zIndex="0";
            this.style.top="500px";
            this.style.left="20px";
            this.style.height="300px";
        }
    var clickBig6=document.getElementById("para6");
        clickBig6.onclick = function () {
            this.style.background = "aquamarine";
            this.style.top = "100px";
            this.style.left = "500px";
            this.style.zIndex = "9";
            this.style.height = "1000px";
        }
        clickBig6.ondblclick = function () {
            this.style.background = "aliceblue";
            this.style.zIndex="0";
            this.style.top="500px";
            this.style.left="540px";
            this.style.height="300px";
        }
    var clickBig7=document.getElementById("para7");
        clickBig7.onclick = function () {
            this.style.background = "aquamarine";
            this.style.top = "100px";
            this.style.left = "500px";
            this.style.zIndex = "9";
            this.style.height = "1000px";
        }
        clickBig7.ondblclick = function () {
            this.style.background = "aliceblue";
            this.style.zIndex="0";
            this.style.top="500px";
            this.style.left="1060px";
            this.style.height="300px";
        }
}

function showTime() {
    var nowdate=new Date();
    var year=nowdate.getFullYear(),
        month=nowdate.getMonth()+1,
        date=nowdate.getDate(),
        day=nowdate.getDay(),
        week=["星期天","星期一","星期二","星期三","星期四","星期五","星期六"],
        h=nowdate.getHours(),
        m=nowdate.getMinutes(),
        s=nowdate.getSeconds();
        h=checkTime(h);
        m=checkTime(m);
        s=checkTime(s);
        showTime1.innerHTML=year+"年"+month+"月"+date+"日"+week[day]+h+":"+m+":"+s;
        setTimeout(showTime,1000);
}
function checkTime(i) {
    if(i<10){
        i="0"+i;
    }
    return i;
}

//鼠标点击淡出

