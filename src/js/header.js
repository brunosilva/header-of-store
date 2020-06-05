
function explodesNav(level, sub){
    var le = level;
    var su = sub;

    $(`#${le}`).mouseenter(() => {
        $(`#${su}`).fadeIn(700, () =>{
            $('.sub1').addClass('sub-effects');
        });
    });
    $(`#${le}`).mouseleave(() => {
        $(`#${su}`).hide();
        $('.sub1').removeClass('sub-effects');
    });
};

//$(window).load(() =>{
    

    //function explodesNav(level){
        //alert(level)
        // var le = level;
        // var su = sub;

        // $(`#${le}`).mouseenter(() => {
        //     $(`#${su}`).fadeIn(700);
        // });
        // $(`#${le}`).mouseleave(() => {
        //     $(`#${su}`).hide();
        // });
    //};
//});