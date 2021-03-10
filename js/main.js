//change navbar background when scrolling down
$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

var breakpoint = 991;
var bgHeight = function() {
    $('#bg').css('height', $(window).height() + 'px');
}; bgHeight();
var windowWidth = $(window).height();
$(window).on('resize', function() {
    if ((($(this).width() <= breakpoint) && ($(this).width() != windowWidth))
        || ($(this).width() > breakpoint)) {
        bgHeight();
    }
    windowWidth = $(window).width();
});

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});


(function() {
  const interval = 1000;
  const timeout = 10;
  let idleCounter = 0;
  window.onload = document.onmousemove = document.onkeypress = function() {
    idleCounter = 0;
    document.documentElement.classList.remove('idle');
  };
  window.setInterval(function() {
    if (++idleCounter >= timeout) {
      document.documentElement.classList.add('idle');
      idleCounter = 0;
    }
  }, interval);
})();



var quote = new Array();
       quote[0] = ['"','Even a broke clock is right twice a day','"', ' — Kanye West'];
       quote[1] = ['"',"Idle time is the devil's play.",'"', " — Mark Dayton"];
       quote[2] = ['"',"Don't spend time beating on a wall, hoping to transform it into a door.",'"', " — Coco Chanel"];
       quote[3] = ['"','Things do not happen. Things are made to happen.','"', ' — John F. Kennedy'];
       quote[4] = ['"','Perception precedes reality.','"', ' — Andy Warhol'];
       quote[5] = ['"','A man who wins, is a man who thinks he can.','"', ' — Roger Federer'];
       quote[6] = ['"',"Nothing is impossible, the word itself says I'm possible.",'"', " — Audrey Hepburn"];


       var qlen = quote.length;
       var firstDate = new Date(2005,0,1);//start date (yyyy,m,d) - m=0=January, m=1=February
       var today = new Date();//today
       var dif = Math.floor((today-firstDate)/1000/60/60/24);//difference in days
       while(dif>=qlen){//calculate the index of the quote of the day
           dif=dif-qlen;//restart the array index if the difference is greater that the array's length
       }

       var todayQuote = quote[dif];

       $('.ml12 span .letters').html(todayQuote);
       onload = function(){document.getElementById('q').firstChild.data = todayQuote};

window.addEventListener('load',
 function() {
   var win = $(this); //this = window
   if (win.width()< 500) { $('#dog').removeClass('navbar-fixed-left'); }
 }, false);

$(window).on('resize', function(){
          var win = $(this); //this = window
          if (win.width()< 500) { $('#dog').removeClass('navbar-fixed-left'); }
     });

$(window).on('resize', function(){
         var win = $(this); //this = window
         if (win.width()> 500) { $('#dog').addClass('navbar-fixed-left'); }
    });

    window.addEventListener('load',
     function() {
       var win = $(this); //this = window
       if (win.width()< 500) { $('#cat').removeClass('navbar-fixed-left'); }
     }, false);

    $(window).on('resize', function(){
              var win = $(this); //this = window
              if (win.width()< 500) { $('#cat').removeClass('navbar-fixed-left'); }
         });

    $(window).on('resize', function(){
             var win = $(this); //this = window
             if (win.width()> 500) { $('#cat').addClass('navbar-fixed-left'); }
        });
