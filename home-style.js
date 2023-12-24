$(document).ready(function () {
    $(".menu-mob-icon").click(function () {
      $(".rt, .black").show();
    });
    $(".black, .x-close").click(function () {
      $(".rt").hide();
      $(this).hide();
    });
    $(".brand-logo").click(function () {
      window.location.href = './home.html';
    });
  });
  