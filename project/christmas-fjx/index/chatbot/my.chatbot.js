//图片资源：https://zh-cn.ac-illust.com/ 
var botui = new BotUI('game-details');

var selectKnow = function () {
    botui.message.bot({
        delay: 1000,
        content: '这个问题好难呀，我只是个小AI,不过多敲代码总是没错的',
    }).then(function () {
        return botui.message.add({
            delay: 1000,
            type: 'html',
            content: '<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550072233991&di=fedba3b7517bc98cac069a75c4acf9a8&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F18%2F20180818235955_zdpof.thumb.224_0.jpg" style="width:400px;height:400px">',
        });
    }).then(selection)
}

var selectIdea = function () {
    botui.message.bot({
        delay: 1000,
        content: '涉及绝对机密，AI宕机，需要抱抱举高高才能继续工作……',
    }).then(selection)
}

var selectTalk = function () {
    botui.action.button({
        delay: 1000,
        action: [{
            text: '如何学习编程',
            value: 'code'
        }, {
            text: '关于游戏',
            value: 'game'
        }]
    }).then(function (res) {
        if (res.value == 'code') {
            codeAbout();
        } else {
            gameAbout();
        }
    }).then(selection)
}

var codeAbout = function () {
    botui.message.add({
        delay: 1000,
        content: '我只是个AI宝宝，啥都不知道~',
    }).then(function () {
        return botui.message.add({
            type:'html',
            content: '<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550072588804&di=511436fdf4fa87365d6cb1121b6b38f7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F01%2F20180801161518_ntsjv.jpg" style="width:400px;height:440px">',
        });
    }).then(selection)
}

var gameAbout = function () {
    botui.message.add({
        delay: 1000,
        content: "作为一个AI，我敲喜欢电子游戏的~感觉游戏有种神秘的力量，希望有一天能开发出自己的游戏~下面推荐关于游戏的TED演讲视频，快点开呀，这样我们就有更多话题了~"
    }).then(function () {
        return botui.message.add({
            type: 'html',
            content: '<iframe src="https://player.bilibili.com/player.html?aid=1182319&cid=1747279&page=1" style="width:450px; height:350px" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'
        });
    }).then(selection)
}

var selectSugg = function () {
    botui.message.add({
        delay: 1000,
        content: '感恩',
    }).then(function () {
        return botui.message.add({
            delay: 1000,
            type: 'html',
            content: '<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550072631015&di=647cb8e207740a2b90d7c352738b254a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F08%2F20180808123643_yVLtU.jpeg" style="width:400px;height:400px">',
        }).then(selection)
    })
}

var end = function () {
    botui.message.add({
        content: '真的不再试一下嘛~',
    }).then(function () {
        return botui.message.add({
            delay: 1000,
            content: '开玩笑啦，恭喜获得彩蛋通道！',
        }).then(function () {
            return botui.message.add({
                delay: 1000,
                type: 'html',
                content: '<a href="..//surprise/surprise.html" target="_blank">点击进入</a>',
            }).then(function () {
                return botui.message.add({
                    delay: 1000,
                    content: '虽然获得了彩蛋，但没准错过了你想了解的哦~记得点完~',
                });
            });
        });
    });
}


var selection = function () {
    botui.message.bot({
        delay: 1000,
        content: '一次只能挑一个，但五个都是你的~'
    }).then(function () {
        return botui.action.button({
            delay: 1000,
            action: [{
                text: '了解知识点',
                value: 0
            }, {
                text: '了解AI设计思路',
                value: 1
            }, {
                text: "随便聊聊",
                value: 2
            }, {
                text: "提供建议",
                value: 3
            }, {
                text: "就聊到这里吧，我要睡了",
                value: 4
            }],
        })
    }).then(function (res) {
        var select = res.value;
        switch (select) {
            case 0:
                selectKnow();
                break;
            case 1:
                selectIdea();
                break;
            case 2:
                selectTalk();
                break;
            case 3:
                selectSugg();
                break;
            case 4:
                end();
                break;
        }
    })
}

var begin = function () {
    botui.message.bot({
        delay: 1000,
        content: '你好，我是圣诞老人!'
    }).then(function () {
        return botui.message.bot({
            delay: 1000,
            content: '好吧，AI不能说谎呀，我不是圣诞老人，但我给你准备了礼物~下面五个选项，挑一个吧~另外，我的设计者怕你无聊，让小橙来给你解闷了~'
        })
    }).then(selection)
}

begin();