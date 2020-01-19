$(function(){
    $("textarea.autosize").on('keydown keyup', function () {
    $(this).height(1).height( $(this).prop('scrollHeight')+12 );	
    });
    $("#main_txt").on("click",function(){
        location.href='main.html';
        
     });
})