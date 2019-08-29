$(function () {
    $("#tabs").tabs(); //标签
    $("#tab").tabs(); //标签

    //个人介绍部分
    $("#pic").draggable(); //拖动

    $("#ul-1").droppable({
        classes: {
            "ui-droppable-hover": "ui-state-hover"
        },
        drop: function (event, ui) {
            $(this).addClass("ul-1"),
                $(".ul-1").html("<p>个人简介</p><li>朱一龙 Zhu Yi Long </li><li>中国 湖北武汉 演员</li> <li> 北京电影学院2006级表演系 </li><li>1988 年4月16日 白羊座</li><li> O型 180 cm 62 kg </li>")
        },
    });

    $("#ul-2").droppable({
        classes: {
            "ui-droppable-hover": "ui-state-hover"
        },
        drop: function (event, ui) {
            $(this)
                .addClass("ul-2"),
                $(".ul-2").html("<p>获奖记录</p> <li> 电视剧南方盛典 年度男配角 </li><li>亚洲影响力东方盛典 最具潜力男演员 </li> <li> 2018 微博电影之夜 微博人气演员 </li><li>福布斯中国2018年30岁以下精英榜</li>")
        },
    });

    $("#ul-3").droppable({
        classes: {
            "ui-droppable-hover": "ui-state-hover"
        },
        drop: function (event, ui) {
            $(this)
                .addClass("ul-3"),
                $(".ul-3").html("<p>主要作品</p> <li>《镇魂》</li><li>《新萧十一郎》</li> <li> 《许你浮生若梦 </li><li>《御姐归来》</li> <li> 《情定三生》 </li>")
        },
    });
    //角色排序
    $("#panel")
        .accordion({
            header: "> div > h3"
        })
        .sortable({
            axis: "y",
            handle: "h3",
            stop: function (event, ui) {
                ui.item.children("h3").triggerHandler("focusout");
                $(this).accordion("refresh");
            }
        });

    //图片合集动画
    $("#but-1").click(function () {
        $("#img-1").toggle("blind"); //百叶窗
    });
    $("#but-2").click(function () {
        $("#img-2").toggle("bounce", {
            times: 3
        }, "slow") //弹跳
    });
    $("#but-3").click(function () {
        $("#img-3").toggle("clip"); //剪裁隐藏或显示
    });
    $("#but-4").click(function () {
        $("#img-4").toggle({
            effect: "scale",
            direction: "horizontal"
        }); //规模效应
    });
    $("#but-5").click(function () {
        $("#img-5").toggle("explode"); //爆炸效果
    });
    $("#but-6").click(function () {
        $("#img-6").toggle("fade"); //淡化
    });
    $("#but-7").click(function () {
        $("#img-7").toggle("fold"); //折叠效果
    });
    $("#but-8").click(function () {
        $("#img-8").effect("shake"); //摇动
    });
    $("#but-9").click(function () {
        $("#img-9").toggle("puff"); //泡芙效应
    });
    $("#but-10").click(function () {
        $("#img-10").toggle("pulsate"); //脉动效应
    });

});