$(document).ready(() =>{

    //script para fazer apresentação do sub-menu
    //não está sendo usado. (somente para estudo)
    // $(".l2").mouseenter(function() {
    //     $(this).addClass('sub-effects');
    //     $(this).find('.sub1').fadeIn(600);
    // });
    // $(".l2").mouseleave(function() {
    //     $(this).removeClass('sub-effects');
    //     $(this).find('.sub1').hide();
    // });


    $(".btn-login").click(function() {
        var box = $(".control-login-options");
        if(box.hasClass("d-none")){
            box.removeClass("d-none");
        }else{
            box.addClass("d-none");
        }
    });
});