function t(){
  var a=new Date();
  var b=document.getElementById('time');
  
  var h=a.getHours();
  var m=a.getMinutes();
  var s=a.getSeconds();
  if(h<12){
    var as="AM";
  }
  else{
    var as="PM"
  }
  
  h=h % 12 || 12;
  
  b.innerHTML=""+h+":"+m+":"+s+" "+as;
  
}

setInterval(t,1);

(function($){
    $.fn.backgroundMove=function(options){
            var defaults={
            movementStrength:'50'
        },
        options=$.extend(defaults,options);

         var $this = $(this);

           var movementStrength = options.movementStrength;
            var height = movementStrength / $(window).height();
            var width = movementStrength / $(window).width();
            $this.mousemove(function(e){
                      var pageX = e.pageX - ($(window).width() / 2);
                      var pageY = e.pageY - ($(window).height() / 2);
                      var newvalueX = width * pageX * -1 - 25;
                      var newvalueY = height * pageY * -1 - 50;
                      $this.css("background-position", newvalueX+"px     "+newvalueY+"px");
            });

        }
})(jQuery);