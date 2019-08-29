$(function () {
    
    //小橙特效和文字特效
    $("#left0").mouseover(function () {
        $("#left0").fadeOut('slow');
        $("#left0").attr("src", "../game/ui.img/left1.png");
        $("#left0").fadeIn('fast');

        return $(".p1").textillate({
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
    });

    $("#right0").mouseover(function () {
        $("#right0").fadeOut('slow');
        $("#right0").attr("src", "../game/ui.img/right1.png");
        $("#right0").fadeIn('fast');

        return $(".p4").textillate({
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
    });

    $(".p3").textillate({
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