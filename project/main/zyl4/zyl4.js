$(function () {
            $("#pic").draggable(); //拖动
            $("#panel")
                .accordion({
                    header: "> div > h3"
                })
                .sortable({
                    axis: "y",
                    handle: "h3",
                    stop: function (event, ui) {
                        // IE doesn't register the blur when sorting
                        // so trigger focusout handlers to remove .ui-state-focus
                        ui.item.children("h3").triggerHandler("focusout");

                        // Refresh accordion to handle new order
                        $(this).accordion("refresh");
                    }
                });
            $("#tabs").tabs(); //标签
            $("#tab").tabs(); //标签
        });