/**
 * Created by Administrator on 2016/5/18.
 */
$(function () {
    //设置自动轮播时，一秒钟滚动一下
    $('#ad-carousel1').carousel({interval: 3000});
    $('#menu-nav .navbar-collapse html').click(function (e) {
        var href = $(this).attr('href');
        var tabId = $(this).attr('data-tab');
        if ('#' !== href) {
            e.preventDefault();
            $(document).scrollTop($(href).offset().top - 70);
            if (tabId) {
                $('#feature-tab html[href=#' + tabId + ']').tab('show');
            }
        }
    });
});