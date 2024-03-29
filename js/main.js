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


//idle animation
(function() {
  const interval = 1000;
  const timeout = 100;
  let idleCounter = 0;
  window.onload = document.onmousemove = document.onkeypress = function() {
    idleCounter = 0;
    document.documentElement.classList.remove('idle');
    document.getElementById('zzz').innerHTML = '';
    $('#cat').addClass('dropdown-divider');
  };
  window.setInterval(function() {
    if (++idleCounter >= timeout) {
      document.documentElement.classList.add('idle');
      document.getElementById("zzz").innerHTML=" Zzz..";
      $('#cat').removeClass('dropdown-divider');
      idleCounter = 0;
    }
  }, interval);
})();


//qoute of the day generator
var quote = new Array();
       quote[0] = ['"','Even a broke clock is right twice a day','"', ' — Kanye West'];
       quote[1] = ['"',"Idle time is the devil's play.",'"', " — Mark Dayton"];
       quote[2] = ['"',"Don't spend time beating on a wall, hoping to transform it into a door.",'"', " — Coco Chanel"];
       quote[3] = ['"','Things do not happen. Things are made to happen.','"', ' — John F. Kennedy'];
       quote[4] = ['"','Perception precedes reality.','"', ' — Andy Warhol'];
       quote[5] = ['"','A man who wins, is a man who thinks he can.','"', ' — Roger Federer'];
       quote[6] = ['"',"You only live once, but if you do it right, once is enough.",'"', " — Mae West"];
       quote[7] = ['"',"Nothing is impossible, the word itself says I'm possible.",'"', " — Audrey Hepburn"];
       quote[8] = ['"',"All that we see or seem is but a dream within a dream.",'"', " — Edgar Allan Poe"];
       quote[9] = ['"',"It isn't where you came from; it's where you're going that counts.",'"', " — Ella Fitzgerald"];
       quote[10] = ['"',"Showing off is the fool's idea of glory.",'"', " — Bruce Lee"];
       quote[11] = ['"',"Most good ideas are simple.",'"', " — Anonymous"];



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

//adjust navbar position in mobile web view
window.addEventListener('load',
 function() {
   var win = $(this); //this = window
   if (win.width()< 500) { $('#dog').removeClass('navbar-fixed-left'); $('#cat').removeClass('dropdown-divider'); $('#dog').addClass('navbar-expand');}
 }, false);

$(window).on('resize', function(){
          var win = $(this); //this = window
          if (win.width()< 500) { $('#dog').removeClass('navbar-fixed-left');
                                $('#dog').addClass('navbar-expand');
          }
     });

$(window).on('resize', function(){
         var win = $(this); //this = window
         if (win.width()> 500) { $('#dog').addClass('navbar-fixed-left ');  $('#dog').removeClass('navbar-expand'); }
    });
$(window).on('resize', function(){
          var win = $(this); //this = window
          if (win.width()< 500) { $('#dog').removeClass('navbar-fixed-left');  $('#dog').addClass('navbar-expand');   }
     });
$(window).addEventListener('load',
 function() {
   var win = $(this); //this = window
   if (win.width()< 500) { $('#dog').removeClass('navbar-fixed-left');  $('#dog').addClass('navbar-expand'); }
 }, false);

 $(window).addEventListener('load',
  function() {
    var win = $(this); //this = window
    if (win.width()>500) { $('#dog').addClass('navbar-fixed-left');  $('#dog').removeClass('navbar-expand'); }
  }, false);




//return to top  button
$(window).scroll(function() {
    if ($(this).scrollTop() >= 20) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});

$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});



//Pagination
$(document).ready(function(){
$('.').Pagination({ // id to initial draw and use pagination
            size: 87, // size of list input
            pageShow: 2, // 5 page-item per page
            page: 1, // current page (default)
            limit: 10, // current limit show perpage (default)
    	}, function(obj){ // callback function, you can use it to re-draw table or something
            	$('#info').html('Current page: ' + obj.page);
    	});
});
