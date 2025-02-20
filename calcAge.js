function calculateAge(birthYear, birthMonth, birthDay) {
  let today = new Date();
  let age = today.getFullYear() - birthYear;
  let monthDiff = today.getMonth() - (birthMonth - 1);
  let dayDiff = today.getDate() - birthDay;

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
}

let birthYear = 2009;
let birthMonth = 6;
let birthDay = 28;

let age = calculateAge(birthYear, birthMonth, birthDay);

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById(
    "bio2"
  ).innerText = `Lver, more commonly known as Sky by his friends and family, is a teenage (${age} years old) male. His pronouns are He/Him/His`;
});
