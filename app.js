const img = document.querySelector("img");
const btn = document.querySelector("button");

btn.addEventListener("click", getCat);

function getCat() {

fetch('https://cataas.com/cat')
    .then(function (response) {
        img.src = response.url;
        img.alt = response.url;
    })
    .catch(function (error) {
        img.alt = "Sorry, nothing found.";
    });
    
}


