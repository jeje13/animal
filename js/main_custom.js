$(function(){            
    var swiper = new Swiper('.swiper-container', {
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },
    });
    $('#sec_top02').hide();
    var li01=$('#bo>#num_btn>ul#num_btn_list>li#list01');
    var li02=$('#bo>#num_btn>ul#num_btn_list>li#list02');
    $(li02).on("click", function(){
        $('#sec_top02').show();
        $('#sec_top01').hide();
        $('.colorChange02').css('color','#444444')
        $('.colorChange01').css('color','#996b3a')
    });
    $(li01).on("click", function(){
        $('#sec_top01').show();
        $('#sec_top02').hide();
        $('.colorChange01').css('color','#444444')
        $('.colorChange02').css('color','#996b3a')
    });
    $("#main_txt").on("click",function(){
      location.href='main.html';
   });
})
