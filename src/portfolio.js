// https://www.typeitjs.com/

new TypeIt("#headline", {
  strings: [
    "Susanna M",
    "German ",
    "Front-end developer",
    "Based in Australia",
    "____________________",
  ],
  speed: 100,
  nextStringDelay: 100,
  loop: false,
  waitUntilVisible: true,
  cursor: false,
}).go();
