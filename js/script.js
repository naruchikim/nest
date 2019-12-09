$(document).ready(function() {
    
    $('#go_about').click(function() {
        $('html, body').animate({
           scrollTop: $(".about").offset().top
       }, 900); 
    })
    
    $("#go_classes").click(function() {
       $('html, body').animate({
           scrollTop: $(".classes").offset().top
       }, 900); 
    })
    
    $("#go_reviews").click(function() {
       $('html, body').animate({
           scrollTop: $(".reviews").offset().top
       }, 900); 
    })
    
});