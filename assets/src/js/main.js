$(document).ready(function() {
  $("#search").on("click", function() {
    $('html, body').animate({
      scrollTop: $('main').offset().top
    }, 3000)
  })
})