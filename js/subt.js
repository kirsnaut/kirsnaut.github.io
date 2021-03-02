// Wrap every letter in a span
var textWrapper = document.querySelector('.ml12 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 2000
  })
  .add({
    targets: '.ml12 .line',
    translateX: [0, document.querySelector('.ml12 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 200,
    delay: 100
  }).add({
    targets: '.ml12 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 50,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml12',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 10000
  });
