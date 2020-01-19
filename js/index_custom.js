function funLoad(){
    var Cheight = $(window).height();
    $('#wrap').css({'height':Cheight+'px'});
}
window.onload = funLoad;
window.onresize = funLoad;

$(function(){
            
function imgChange(){
    var imgStr = $("#viewImg").attr("src");
    var imgArr = ["images/bg1.jpg","images/bg2.jpg"]
    if(imgStr===""){
        $("#viewImg").attr("src",imgArr[1]);
    }
    if(imgStr===imgArr[0]){
        $("#viewImg").attr("src",imgArr[1]);
    }else{
        $("#viewImg").attr("src",imgArr[0]);
    }
    window.setTimeout(imgChange, 1000);
}
imgChange();


})
