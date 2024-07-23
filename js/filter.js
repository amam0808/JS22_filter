$(function(){
    var $categorybtn = $('.category [data-filter]'),
    $categorylist = $('.categorylist [data-category]');
     
    $categorybtn.on('click', function(e) {
      e.preventDefault();
       
      var $categoryTxt = $(this).attr('data-filter');
       
      if ($categoryTxt == 'all'){
        $categorylist.fadeOut().promise().done(function() {
          $categorylist.addClass('animate').fadeIn();
        });
      } else {
        $categorylist.fadeOut().promise().done(function() {
          $categorylist.filter('[data-category = "' + $categoryTxt + '"]').addClass('animate').fadeIn();
        });
      }
    });
  });