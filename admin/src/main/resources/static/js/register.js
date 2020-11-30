if(window.top!==window.self){window.top.location=window.location};
layui.use(['element'], function () {
    var $ = layui.jquery;

    $(document).on('click', '.ajax-register', function (e) {
        e.preventDefault();
        var form = $(this).parents("form");
        var url = form.attr("action");
        var serializeArray = form.serializeArray();
        $.post(url, serializeArray, function (result) {
            if(result.code !== 200){
                $('.captcha-img').click();
            }
            $.fn.Messager(result);
        });
    });
    $('.layui-layer-loading').hide();
});