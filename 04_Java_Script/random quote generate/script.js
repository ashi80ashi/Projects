const url = "https://stoicquotesapi.com/v1/api/quotes/random";

let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let random = document.querySelector(".generate");

function Quote() {
  fetch(url)
    .then((response) => response.json())
    .then((object) => {
      quote.innerHTML = `${object.body}`;
      author.innerHTML = `${object.author}`;
      console.log(object);
    })
    .catch();
}

random.addEventListener("click", () => Quote());
onload = Quote();
