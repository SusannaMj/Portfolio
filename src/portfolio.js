var headline = document.getElementById("headline");

var typewriter = new Typewriter(headline, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(10)
  .typeString("Hi")

  .pauseFor(300)

  .typeString("I am Susanna")
  .typeString("<strong>German </span> Front-end developer")
  .typeString("Based in Australia")
  .pauseFor(1000)
  .start();
