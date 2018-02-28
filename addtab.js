let existingbutton = $('#nav-music');
let newbutton = existingbutton.clone();
newbutton.find('.nav-text').html("Website");
newbutton.appendTo($('#nav-buttons'));
newbutton.find('.nav-bg-image').attr("style","background-position: 0;background-image: url(https://corp.netsapiens.com/SiPbx/getimage.php?filename=menu_logo.gif);");

newbutton.find('a').click(function(e) {
  e.preventDefault();
  $("#nav-buttons li").removeClass("nav-link-current");
  existingbutton.removeClass("nav-link-current");
  newbutton.addClass("nav-link-current");
  $('.navigation-title').html("Website");
  $('#content').html("<iframe src='https://netsapiens.com' width='100%' height='600px' style='border-width: 0px;'></iframe>");
  return false;
});
