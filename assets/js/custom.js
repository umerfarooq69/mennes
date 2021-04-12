$(document).ready(function () {
    $('.play1').click(function () {
      $(this).hide();
      playVid();
    });
  
    var vid = document.getElementById("myVideo");
    function playVid() {
      vid.play();
    }
  
    function pauseVid() {
      vid.pause();
    }
  
    $('.play2').click(function () {
      $(this).hide();
      playVid2();
    });
  
    var vid2 = document.getElementById("myVideo2");
    function playVid2() {
      vid2.play();
    }
    function pauseVid2() {
      vid.pause();
    }
});