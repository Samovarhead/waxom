$(function(){
    var slidesCount = $('.slide').length;
    $('.arrow-left').click(function(){
        clearClasses();
        for(var i = 0; i < slidesCount; i++){
            if($('.slide').eq(i).hasClass('active')){
                if(i == 0){
                    $('.slide.active').removeClass('active').addClass('go-right');
                    $('.slide').eq(slidesCount - 1).addClass('active').addClass('go-from-left');
                    $('.dot').eq(slidesCount - 1).addClass('active');
                }else{
                    $('.slide.active').removeClass('active').addClass('go-right');
                    $('.slide').eq(i - 1).addClass('active').addClass('go-from-left');
                    $('.dot').eq(i - 1).addClass('active');
                }
                
                break;
            }
        }
    });
    $('.arrow-right').click(function(){
        clearClasses();
        for(var i = 0; i < slidesCount; i++){
            if($('.slide').eq(i).hasClass('active')){
                if(i == (slidesCount - 1)){
                    $('.slide.active').removeClass('active').addClass('go-left');
                    $('.slide').eq(0).addClass('active').addClass('go-from-right');
                    $('.dot').eq(0).addClass('active');
                }else{
                    $('.slide.active').removeClass('active').addClass('go-left');
                    $('.slide').eq(i + 1).addClass('active').addClass('go-from-right');
                    $('.dot').eq(i + 1).addClass('active');
                }
                break;
            }
        }
    });
    $('.dot').click(function(){
        if($(this).hasClass('active')){
            return;
        }
        clearClasses();
        $(this).addClass('active');
        for(var i = 0; i < slidesCount; i++){
            if($('.dot').eq(i).hasClass('active')){
                $('.slide.active').removeClass('active').addClass('go-right');
                $('.slide').eq(i).addClass('active').addClass('go-from-left');
            }
        }
    });
    function clearClasses(){
        $('.dot.active').removeClass('active');
        $('.slide').each(function(){
            $(this).removeClass('go-right').removeClass('go-left').removeClass('go-from-right').removeClass('go-from-left');
        });
    }
});