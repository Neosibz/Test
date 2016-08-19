$(document).ready(function(){
    
   
    $( ".Submit" ).click(function(e) {
         e.preventDefault();
        
       var name = $("#Nme").val();
       var surname = $("#SNme").val();
       var Telephone = $("#Nmbr").val();
       var Email = $("#Eadd").val();
       var NameMsg = "Please fill in your name";
        var SurnMess = "Please fill in your Surname";
        var TeleMsg = "Please fill in your telephone number";
        var EmailMsg = "Please fill in your email address";
        var success = "Your email has been sent!";
        
        
        
        if( name == ""){
            $(".Submit").attr("disabled", true);
            $(".notification").css('opacity', '0');
            $(".notification").css('z-index','9999');
            $(".notification").addClass('animated fadeInDown');
            $(".notification").html('<p>' + NameMsg + '</p>');
          
            setTimeout(function(){
              $(".notification").removeClass('animated fadeInDown');
              $(".notification").addClass('animated fadeOutUp');
            }, 3000);
            
            setTimeout(function(){
              $(".notification").css('z-index','99');
              $(".notification").css('opacity', '0').removeClass('animated fadeOutUp');
              $(".Submit").attr("disabled", false);
            }, 4000);
            
        }  else{
        
        
        
        if( surname == ""){
            $(".Submit").attr("disabled", true);
            $(".notification").css('opacity', '0');
            $(".notification").css('z-index','9999');
            $(".notification").addClass('animated fadeInDown');
            $(".notification").html('<p>' + SurnMess + '</p>');
          
            setTimeout(function(){
              $(".notification").removeClass('animated fadeInDown');
              $(".notification").addClass('animated fadeOutUp');
            }, 3000);
            
            setTimeout(function(){
              $(".notification").css('z-index','99');
              $(".notification").css('opacity', '0').removeClass('animated fadeOutUp');
              $(".Submit").attr("disabled", false);
            }, 4000);
            
        }else{
            
            
            
            if( Telephone == ""){
            $(".Submit").attr("disabled", true);
            $(".notification").css('opacity', '0');
            $(".notification").css('z-index','9999');
            $(".notification").addClass('animated fadeInDown');
            $(".notification").html('<p>' + TeleMsg + '</p>');
          
            setTimeout(function(){
              $(".notification").removeClass('animated fadeInDown');
              $(".notification").addClass('animated fadeOutUp');
            }, 3000);
            
            setTimeout(function(){
              $(".notification").css('z-index','99');
              $(".notification").css('opacity', '0').removeClass('animated fadeOutUp');
              $(".Submit").attr("disabled", false);
            }, 4000);
            
        }else{
            
            
            
            if( Email == ""){
            $(".Submit").attr("disabled", true);
            $(".notification").css('opacity', '0');
            $(".notification").css('z-index','9999');
            $(".notification").addClass('animated fadeInDown');
            $(".notification").html('<p>' + EmailMsg + '</p>');
          
            setTimeout(function(){
              $(".notification").removeClass('animated fadeInDown');
              $(".notification").addClass('animated fadeOutUp');
            }, 3000);
            
            setTimeout(function(){
              $(".notification").css('z-index','99');
              $(".notification").css('opacity', '0').removeClass('animated fadeOutUp');
              $(".Submit").attr("disabled", false);
            }, 4000);
            
        }else{
            
            $("#Nme").val('');
            $("#SNme").val('');
            $("#Nmbr").val('');
            $("#Eadd").val('');

            $(".notification").css('background-color', ' rgba(46, 138, 138, 1)');
            $(".notification").css('opacity', '0');
            $(".notification").addClass('animated fadeInDown');
            $(".notification").html('<p>' + success + '</p>');
            
            setTimeout(function(){
              $(".notification").css('opacity', '1').removeClass('animated fadeInDown');
              $(".notification").addClass('animated fadeOutUp');
             
            }, 4000);
            
            setTimeout(function(){
               $(".notification").css('background-color', ' rgba(255,0,0, 0.8)');
              ;
            }, 4000);
            
            
            
        }
            
            
            
            
            
            
        }
            
            
            
            
            
            
        }
        
        
        
        }
        
        
        
        
        
    });
    
});