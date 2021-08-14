$(function() {
    $(".settingsBox").on("click", 'a', function(){
        event.preventDefault();
        var divBox = $(this).attr("href");
        $(".settingsBox a").removeClass('active');
        $(this).addClass('active');
        $(".descHolder").removeClass("active");
        $(divBox).addClass('active');
        var category =  $(divBox+" .rLeft").data("category")
        console.log(divBox)
        $(".categoryBox a").removeClass('active');
        $(divBox+" .rLeft").addClass('active');
        $(divBox+" #"+category).addClass('active');
    });

    $(".categoryBox").on("click","a", function(){
        var category = $(this).data("category");
         $(".categoryBox a").removeClass('active');
        $(this).addClass('active');
        $(".catDetails").removeClass("active");
        $(".catDetails#"+category).addClass("active");
    })

    $('.selected').on('click', function(){
        $(".ttsDetais ul").fadeOut();
        if($(this).parent().find('ul').is(":visible")){
            $(this).parent().find('ul').fadeOut();
        }else{
            $(this).parent().find('ul').fadeIn();
        }
    })
    $(".ttsDetais ul li").on('click',function(){
        var value = $(this).data("value");
        $(this).parents().eq(1).find('.selected').text(value);
        $(".ttsDetais .settingsBox ul").fadeOut();
    })
    $('.slideHolder').on('click',function(){
        $(this).toggleClass('active');
    })
    $('.pos').on('click',function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active')
        }else{
            $(this).parent().find('.pos').removeClass('active');
            $(this).addClass('active')
        }
    })
    $(".navbar-toggle").on('click', function(){
        $('.menuHolder').fadeToggle('slow');
    })
 });