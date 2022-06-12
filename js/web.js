$(function(){
    $('.tabSet').each(function(){
        var anchor = $(this).find('.tabs a')
        var anchor_on = $(this).find('.tabs a.on');
        var href_on = anchor_on.attr('href');
        var panel = $(this).find('.panel');

        $(href_on).show();
        anchor.each(function(){
            /*a 중 하나를 클릭 >> a 모두 removeClass >>this만 addClass
            href.show*/
            var href_this = $(this).attr('href');
            $(this).click(function(e){
                e.preventDefault();
                panel.hide();
                anchor.removeClass('on');
                $(this).addClass('on');
                $(href_this).show();
            })//click
        })//each-2  
    })//each
    $(document).ready(function() {
        $('#container').pinterest_grid({
            no_columns:4
        });
    });
    
})//ready