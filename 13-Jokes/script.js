const jokeDisplay = document.getElementById("display-joke");
const getJokeBtn = document.getElementById("getJoke");
const spinner = document.getElementById("spinner");

const fetchJoke = async () => {
  jokeDisplay.textContent = "";
  spinner.style.display = "block";

  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    if (!response.ok) throw new Error("Failed to fetch joke");

    const data = await response.json();
    jokeDisplay.textContent = data.value;
  } catch (error) {
    jokeDisplay.textContent = "Oops! Couldn't load a joke. Try again.";
  } finally {
    spinner.style.display = "none";
  }
};

getJokeBtn.addEventListener("click", fetchJoke);
window.addEventListener("DOMContentLoaded", fetchJoke);
