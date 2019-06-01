/*
 SuperBox v1.0.2
 by Todd Motto: http://www.toddmotto.com
 Latest version: https://github.com/toddmotto/superbox

 Copyright 2013 Todd Motto
 Licensed under the MIT license
 http://www.opensource.org/licenses/mit-license.php

 SuperBox, the lightbox reimagined. Fully responsive HTML5 image galleries.
 */
;
(function ($) {

  $.fn.SuperBox = function (clientOptions) {

    var superbox, superboximg,
        options = {
          superbox: '<div class="superbox-show"></div>',
          superboximg: '<img src="" class="superbox-current-img">',
          superboxclose: '<div class="superbox-close"></div>'
        };

    $.extend(options, clientOptions);
    superbox = $(options.superbox);
    superboximg = $(options.superboximg);

    superbox.append(superboximg).append($(options.superboxclose));

    return this.each(function () {

      $(this).on('click', '.superbox-list', function () {

        var currentimg = $(this).find('.superbox-img');
        var imgData = currentimg.data('img');
        superboximg.attr('src', imgData);

        if ($('.superbox-current-img').css('opacity') == 0) {
          $('.superbox-current-img').animate({opacity: 1});
        }

        if ($(this).next().hasClass('superbox-show')) {
          superbox.toggle();
        } else {
          superbox.insertAfter(this).css('display', 'block');
        }

        $('html, body').animate({
          scrollTop: superbox.position().top - currentimg.width()
        }, 'medium');

      });

      $(this).on('click', '.superbox-close', function () {
        $('.superbox-current-img').animate({opacity: 0}, 200, function () {
          $('.superbox-show').slideUp();
        });
      });

    });
  };
})(jQuery);