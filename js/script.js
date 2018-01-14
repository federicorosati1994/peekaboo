var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scroller").style.width = scrolled + "%";
}

new WOW().init();

$(function() {
  // Get page title
    var pageTitle = $("title").text();

  // Change page title on blur
  $(window).blur(function() {
    $("title").text("Ricordati di iscriverti...");
  });

  // Change page title back on focus
  $(window).focus(function() {
    $("title").text(pageTitle);
  });
});