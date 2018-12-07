$(document).ready(function() {
  // check for if loaded in iframe
  function inIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }

  // if mobile browser and in an iFrame remove full content and show image to open in a new window outside of blackboard
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && inIframe() ) {
    $('body').html('\
      <div class="col-xs-12">\
        <div>\
          <a href="' + window.location.href + '" target="_blank">\
            <img class="img-responsive" src="images/Mobile_FPO.jpg" alt="Tap to Open Module Introduction">\
          </a>\
        </div>\
      </div>\
    ');
  } else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // if mobile browser and not in iframe show full content without navigation
    $('nav').remove();
    $('.instructions').remove();
  } else {
    // else show full content
    var showId = 1;
    var n = $("section").length;

    $('html, body').animate({scrollTop: $("#1").offset().top}, 0);

    $(".cd-prev").click(function() {
      if(showId <= 1){
        return false;
      } else {
        showId -= 1;
        $('html, body').animate({
          scrollTop: $("#" + showId).offset().top
        }, 1000);
        if(showId < n){
          $('a.cd-next').removeClass('inactive');
        }
        if(showId <= 1){
          $('a.cd-prev').addClass('inactive');
        }
        return false;
      }
    });

    $(".cd-next").click(function() {
      if(showId >= n){
        return false;
      } else {
        showId += 1;
        $('html, body').animate({
          scrollTop: $("#" + showId).offset().top
        }, 1000);
        if(showId > 1 && showId < n){
          $('a.cd-prev').removeClass('inactive');
        }
        if(showId >= n){
          $('a.cd-next').addClass('inactive');
        }
        return false;
      }
    });
  }

});
