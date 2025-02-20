const titles = [
  "L",
  "Lv",
  "Lve",
  "Lver",
  "Lver:",
  "Lver: L",
  "Lver: Li",
  "Lver: Lin",
  "Lver: Link",
  "Lver: Link i",
  "Lver: Link in",
  "Lver: Link in B",
  "Lver: Link in Bi",
  "Lver: Link in Bio",
  "Lver: Link in Bio!",
  "Lver: Link in Bio! <",
  "Lver: Link in Bio! <3",
  "Lver: Link in Bio! <",
  "Lver: Link in Bio!",
  "Lver: Link in Bio",
  "Lver: Link in Bi",
  "Lver: Link in B",
  "Lver: Link in",
  "Lver: Link i",
  "Lver: Link",
  "Lver: Lin",
  "Lver: Li",
  "Lver: L",
  "Lver:",
  "Lver",
  "Lve",
  "Lv"
];
let currentIndex = 0;

function changeTitle() {
  document.title = titles[currentIndex];
  currentIndex = (currentIndex + 1) % titles.length;
}

setInterval(changeTitle, 500);
