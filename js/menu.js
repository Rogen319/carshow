//menu
var jq = jQuery.noConflict(); 

jq(document).ready(function(){
  
  jq('li.mainlevel').mousemove(function(){
  jq(this).find('ul').slideDown();//you can give it a speed
  });
  jq('li.mainlevel').mouseleave(function(){
  jq(this).find('ul').slideUp("fast");
  });
  
});

