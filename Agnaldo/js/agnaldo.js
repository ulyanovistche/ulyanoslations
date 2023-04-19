<script>
  var audio = document.getElementById("audio");
  var playBtn = document.getElementById("playBtn");

  function playAudio() {
    if (audio.paused) {
      audio.play();
      playBtn.style.display = "none";
    } else {
      audio.pause();
      playBtn.style.display = "block";
    }
  }
</script>
