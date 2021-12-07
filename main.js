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


  function triptyrade(){

  }


  function moveDiv1() {
    var $span = $("#triptyrade1");

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
      audio.play();
  })
  $("#momo").click(function() {
      var audio = document.getElementById("momo-sound");
      audio.play();
  })
});
function play() {
  document.querySelector('.landing').style.opacity = "0"
  document.querySelector('.landing').style.display = "none"
  setTimeout(() => {
    document.querySelector('.main').style.display = "flex"
    setTimeout(() => {document.querySelector('.main').style.opacity = "1"}, 100)
    setTimeout(() => { showVideo()}, 200)
  }, 1000)
  return "Bravo tu as trouvé";
}
document.getElementById("douze").addEventListener("click", () => {
  var video = document.getElementById("video-max");
  video.play();
  var audio = document.getElementById("bonappetit");
  audio.play();
} )
function showVideo() {
  var video = document.getElementById("video-max");
  video.play();
  var audio = document.getElementById("bonappetit");
  audio.play();
}




$(document).ready(function(){
  animateDiv('.a');
  animateDiv('.b');
  animateDiv('.c');
  animateDiv('.d');
});

function makeNewPosition(){
  
  // Get viewport dimensions (remove the dimension of the div)
  var h = $(window).height() - 50;
  var w = $(window).width() - 50;
  
  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);
  
  return [nh,nw];    
  
}

function animateDiv(myclass){
  var newq = makeNewPosition();
  $(myclass).animate({ top: newq[0], left: newq[1] }, 1000,   function(){
    animateDiv(myclass);        
  });
  
};