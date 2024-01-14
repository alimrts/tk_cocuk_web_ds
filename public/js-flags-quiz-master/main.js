let correct;
let amtCorrect = 0;
let seconds = 30;
let amtIncorrect = 0;
function main() {
  let options = [];
  const maxOptions = 4;

  while (options.length < maxOptions) {
    let country = getRandomCountry();
    if (options.indexOf(country) === -1) {
      options.push(country);
    }
  }
  correct = options[Math.round(Math.random() * (options.length - 1))];
  for (let i = 0; i < options.length; i++) {
    get(`option${i + 1}label`).innerHTML = options[i].name;
    get(`option${i + 1}input`).value = options[i].name;
    get(`option${i + 1}input`).checked = false;
  }

  get("flag").src = correct.flag;
}

function getRandomCountry() {
  return countries[Math.round(Math.random() * (countries.length - 1))];
}

function get(id) {
  return document.getElementById(id);
}

function check() {
  let input;
  try {
    input = document.querySelector('input[name = "option"]:checked').value;
  } catch {
    return;
  }
  if (input === correct.name) {
    amtCorrect++;
    get("score").innerHTML = amtCorrect;
    get("cevap").innerHTML = "<span style='color: green;'>Doğru cevap!</span>";
  } else {
    amtIncorrect++;
    get("cevap").innerHTML =
      "<span style='color: red;'>Yanlış!</span><br/>Doğru cevap: " +
      correct.name;
  }

  setTimeout(() => {
    get("cevap").innerHTML = "-"; // Clear the text after 2 seconds
  }, 1000);
  // Introduce a delay of 2 seconds (adjust the value as needed)

  main();
}

function finish() {
  clearInterval(checkInterval);
  get("alert").style.display = "block";
  get("card").style.display = "none";
  get("alertscore").innerHTML = amtCorrect;
  get("cevap").innerHTML = "-";
  let percentage = Math.round((amtCorrect / (amtCorrect + amtIncorrect)) * 100);
  if (isNaN(percentage)) percentage = 100;
  get("alertaccuracy").innerHTML = `${percentage}%`;
}

function timer() {
  setTimeout(finish, seconds * 1000);
  get("time").innerHTML = "Süre: " + seconds;
  let countdown = setInterval(function () {
    seconds--;
    get("time").textContent = "Süre: " + seconds;
    if (seconds <= 0) clearInterval(countdown);
    if (seconds === 5) get("time").style.color = "#ff0000";
  }, 1000);
}

function refresh() {
  location = location;
}

let checkInterval = setInterval(check, 50);
main();
timer();
