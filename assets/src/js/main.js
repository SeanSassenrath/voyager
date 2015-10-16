$(document).ready(function() {
  console.log('test18')
  $("#search").on("click", function() {
    $('html, body').animate({
      scrollTop: $('main').offset().top
    }, 3000)
  })
})