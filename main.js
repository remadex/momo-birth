$(function () {
  // Recup titre de la page
  var pageTitle = $("title").text();
  // Changement dynamique du title
  $(window).blur(function () {
    $("title").text("Goulagwe");
  });
  // Recup titre initial lorsque page active
  $(window).focus(function () {
    $("title").text(pageTitle);
  });

  function moveDiv() {
    var $span = $("#random");

    $span.fadeOut(1000, function () {
      var maxLeft = $(window).width() - $span.width();
      var maxTop = $(window).height() - $span.height();
      var leftPos = Math.floor(Math.random() * (maxLeft + 1))
      var topPos = Math.floor(Math.random() * (maxTop + 1))

      $span.css({
        left: leftPos,
        top: topPos
      }).fadeIn(1000);
    });
  };

  moveDiv();
  setInterval(moveDiv, 1000);

  $(document).mousemove(function(e) {
      let path = ["green", "orange", "black"]
      $(".landing").css('background-color', path[Math.floor(Math.random() * path.length)]);
      $(".landing > *").css('color', path[Math.floor(Math.random() * path.length)]);
    
  
  });

  $("#trolo").click(function() {
      var audio = document.getElementById("troll");
      audio.play();
  })
  $("#img-troll").click(function() {
      var audio = document.getElementById("trala");
      console.log('fdsukogf')
      audio.play();
  })
});
function play() {
  document.querySelector('.landing').style.opacity = "0"
  setTimeout(() => {
    document.querySelector('.main').style.display = "flex"
    setTimeout(() => {document.querySelector('.main').style.opacity = "1"}, 100)
  }, 1000)
  return "Bravo tu as trouvé";
}
