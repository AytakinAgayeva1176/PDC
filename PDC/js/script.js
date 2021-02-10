$(function () {
    
    $('.accord-content').hide();
$(document).on("click", ".accord", function () {
    $(this).toggleClass('hide-accord');
    if ($(this).hasClass("hide-accord")) {
        $(this).find('i').removeClass("fa-chevron-down").addClass("fa-chevron-up");
        $(this).closest('li').find('.accord-content').css("width" ,"200px");
        $(this).closest('li').find('.accord-content').show(200);
    }
    else {
        $(this).find('i').removeClass("fa-chevron-up").addClass("fa-chevron-down");
        $(this).closest('li').find('.accord-content').css("width" ,"0");
        $(this).closest('li').find('.accord-content').hide(200);

    }
})

$(document).on("click", ".nav-icon", function () {
   $(".main-menu-inner").removeClass("d-none")
    $(".nav-icon").removeClass("active")
    $(this).addClass("active")
    $(".menu-body>div").addClass("d-none")
    $(".menu-body>div").eq($(this).index()).removeClass("d-none")
    $(".page-wrapper").css({"width" : "calc( 100vw - 270px)", "margin-left" : "270px"})
})

$(document).on("click", ".close", function () {
    $(".main-menu-inner").addClass("d-none")
     $(".nav-icon").removeClass("active")
   $(".page-wrapper").css({"width" : "calc( 100vw - 70px)", "margin-left" : "70px"})
 })

 $(document).on("click", ".languages a", function () {
    $(".languages a").removeClass("activeLanguage")
     $(this).addClass("activeLanguage")
 })
 
});