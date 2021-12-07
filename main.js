$(function() {
  // Recup titre de la page
  var pageTitle = $("title").text();
  // Changement dynamique du title
  $(window).blur(function() {
  $("title").text("Coucou toi");
  });
  // Recup titre initial lorsque page active
  $(window).focus(function() {
  $("title").text(pageTitle);
  });
  });