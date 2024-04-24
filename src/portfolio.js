// https://www.typeitjs.com/

new TypeIt("#headline", {
  strings: [
    "Hi",
    "I am Susanna",
    "German ",
    "Front-end developer",
    "Based in Australia",
  ],
  speed: 100,
  nextStringDelay: 100,
  loop: false,
  waitUntilVisible: true,
  cursor: false,
}).go();
