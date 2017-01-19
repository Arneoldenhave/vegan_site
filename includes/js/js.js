$(document).ready(function () {
          $('#photosgrid img').mouseover(function () {
              $(this).animate({
                  opacity: 0.60,
                  // left: '+=50',
                  // height: 'toggle'
              }, 1000, function () {
                  // Animation complete.
              });
          });
      });

$(document).ready(function () {
          $('#photosgrid img').mouseleave(function () {
              $(this).animate({
                  opacity: 1,
                  // left: '+=50',
                  // height: 'toggle'
              }, 1000, function () {
                  // Animation complete.
              });
          });
      });






