$(document).ready(function(){
    
    



    
  
    
    $(document).scroll(function () {
        
    var x = $(this).scrollTop(),
        home = $('#page1'),
        about = $('#page2'),
       

    if (x >= home.offset().top && x < (home.offset().top + home.height())) {
        $('header').css("background-color", "rgba(0,0,0,0.2)");
    }
    if (x >= about.offset().top && x < (about.offset().top + about.height())) {
        $('header').css("background-color", "#6c5467");
    }
});

    

        
       
       
    
    

    

});