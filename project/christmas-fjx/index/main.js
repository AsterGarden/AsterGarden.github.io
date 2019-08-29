$(function () {

    //页面index雪花特效 
    $("#snow").fallingSnow({
        flakeSizeAdjust: 2, //片状大小
        flakeSpeedAdjust: 1, //片状速度
        drift: 400, //漂移
        stopOnClick: false, //点击停止,ture为停止
    });
    alert("BGM(背景音)睡着了吗？点击页面任意处唤醒，一起跳舞！")

    //页面音效
    //自动播放背景音,chrome需点击页面
    var sound = new Howl({
        src: ['index/bgmusic0.mp3'],
        loop: true,
        onplayerror: function () {
            sound.once('unlock', function () {
                sound.play();
            });
        }

    });
    sound.play();

    //跳转到游戏页面
    $(".p2").on('click', function () {
        window.location.href = '../christmas-fjx/index/game/game.html';
    });

    //p1文字动画特效
    $(".p1").textillate({
        loop: true,
        minDisplayTime: 2000,
        initialDelay: 0,
        autoStart: true,
        inEffects: [],
        outEffects: [],
        in: {
            effect: 'flip',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false,
            reverse: false,
        },
        out: {
            effect: 'bounce',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false,
            reverse: false,
        },
        type: 'char'
    });


    //p2文字动画特效
    $(".p2").textillate({
        loop: true,
        minDisplayTime: 2000,
        initialDelay: 0,
        autoStart: true,
        inEffects: [],
        outEffects: [],
        in: {
            effect: 'fadeIn',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false,
            reverse: false,
        },
        out: {
            effect: 'flash',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false,
            reverse: false,
        },
        type: 'word'
    });


})