$(document).ready(function () {
          $('#photosgrid img').mouseover(function () {
              $(this).animate({
                  opacity: 0.75,
                  // left: '+=50',
                  // height: 'toggle'
              }, 1000, function () {
                  // Animation complete.
              });
          });
      });