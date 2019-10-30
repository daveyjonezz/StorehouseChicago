$( document ).ready(function() {
  $(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});
$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);

})