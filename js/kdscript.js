jQuery( document ).ready(function() {
  jQuery("#kdbutton").click(function(){
    if(jQuery("#kdbutton").hasClass("active")){

      jQuery("#kdbutton").removeClass("active");
      jQuery("#kdcztax").removeClass("actt");

    }else{

      jQuery("#kdbutton").addClass("active");
      jQuery("#kdcztax").addClass("actt");

    }
  });
});
