$(function () {
    //数字、letter部分隐藏
    $('.area').one('mouseover', function () {
        alert("别走，再看我一眼QAQ");
    });

     //雪花特效
     //页面index雪花特效 
     $("#snow").fallingSnow({
         flakeSizeAdjust: 2, //片状大小
         flakeSpeedAdjust: 1, //片状速度
         drift: 400, //漂移
         stopOnClick: false, //点击停止,ture为停止
     });

    //p1文字动画特效
    $(".p1").textillate({
        minDisplayTime: 2000,
        initialDelay: 0,
        autoStart: true,
        inEffects: [],
        outEffects: [],
        in: {
            effect: 'bounce',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false,
            reverse: false,
        },
        type: 'char'
    });

    /* 当p1.textillate结束时触发淡出函数,倒计时显示 */

    setTimeout(function () {
        $(".p1").fadeOut('1000');
        $(".p1").css({
            'display': 'none',
            'width': '0px',
            'height': '0px',
        });
    }, 3000)

    setTimeout(function () {
        $('.count-down').css("visibility", "visible");
    }, 3500)

    var num1 = document.getElementById("num");
    setTimeout(function () {
        var countDown = setInterval(function () {
            ++num1.innerHTML;
            if (num1.innerHTML == 60) {
                clearInterval(countDown);
                $('.num0').text('19');
                $('#num').text('00');
            }
        }, 1000);
    }, 3500)

    //20：19：00显示1秒钟，消失
    setTimeout(function () {
        $('.count-down').hide();
        $(".count-down").css({
            'display': 'none',
            'width': '0px',
            'height': '0px'
        });
    }, 9500);

    setTimeout(function () {
        $(".p3").textillate({
            loop: true,
            minDisplayTime: 2000,
            initialDelay: 0,
            autoStart: true,
            inEffects: [],
            outEffects: [],
            in: {
                effect: 'fadeInDownBig',
                delayScale: 1.5,
                delay: 50,
                sync: false,
                shuffle: false,
                reverse: false,
            },
            out: {
                effect: 'bounceOut',
                delayScale: 0.5,
                delay: 50,
                sync: false,
                shuffle: true,
                reverse: false,
            },
            type: 'char' //中文汉字要用char
        });
    }, 9500);

    setTimeout(function () {
        $('.p3').hide();
        $(".p3").css({
            'display': 'none',
            'width': '0px',
            'height': '0px'
        });
    },14000);

    setTimeout(function () {
        $(".p4").textillate({
            loop: true,
            minDisplayTime: 2000,
            initialDelay: 0,
            autoStart: true,
            inEffects: [],
            outEffects: [],
            in: {
                effect: 'fadeIn',
                delayScale: 2.5,
                delay: 50,
                sync: false,
                shuffle: true,
                reverse: false,
            },
            out: {
                effect: 'hinge',
                delayScale: 0.5,
                delay: 50,
                sync: false,
                shuffle: true,
                reverse: false,
            },
            type: 'char' //中文汉字要用char
        });
    }, 14000);

    //文字动画结束后黑屏
    setTimeout(function () {
        $('#snow').hide();
        $('body').removeClass("body");
        $('body').css('background-color', 'black');
        $('html').click(function () {
            alert("(。・`ω´・)别怕，你电脑没坏！只是想告诉你，屏幕上这个人最好看啦~2019年也会幸福快乐！Happy New Year！");
        });
    }, 25500);

})

