$(function () {
    // side nav active
    $("aside li a").click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active')

    })

    // table checked box
    function setCheck(o, c) {
        o.prop("checked", c)
        if (c) {
            o.closest("tr").addClass("checked")
        } else {
            o.closest("tr").removeClass("checked")
        }
    }

    function setCheckAll(o, c) {
        o.each(function () {
            setCheck($(this), c)
        })
        if (c) {
            $(".check_all").prop("title", "Check All")
        } else {
            $(".check_all").prop("title", "Uncheck All")
        }
    }

    $(".check_all").on('change', function () {
        setCheckAll($("tbody input[type='checkbox']"), $(this).prop("checked"))
    })
    $("tbody tr").on("click", function (e) {
        var chk = $("[type='checkbox']", this)
        setCheck(chk, !$(this).hasClass("checked"))
    })


    // aside responsive
    $("#open").click(function () {
        $("aside").addClass("open")
    })
    $("#close").click(function () {
        $("aside").removeClass("open")
    })

    // profile responsive
    $("#profile").click(function () {
        $(".profile").addClass("open")
    })
    $("#closeprofile").click(function () {
        $(".profile").removeClass("open")
    })
})