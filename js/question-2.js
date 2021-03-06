const apiUrl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=93930dbbba9f4c73a9272ff8495f7956";

const corsUrl = "https://noroffcors.herokuapp.com/";

const proxy = corsUrl + apiUrl;

const nameContainer = document.querySelector(".name");
const ratingContainer = document.querySelector(".rating");
const tagsContainer = document.querySelector(".tags");
const loadingContainer = document.querySelector(".loading")
const errorContainer = document.querySelector(".error");

async function getGames() {
    try {
        const response = await fetch(proxy);
        const apiArray = await response.json();

        console.log(apiArray);

        const facts = apiArray.results;

        loadingContainer.innerHTML = "";

        for (let i = 0; i < facts.length; i++) {
            console.log(facts[i].name);
            console.log(facts[i].rating);
            console.log(facts[i].tags.length);

            if (i === 8) {
                break;
            }

            nameContainer.innerHTML += `<div class="name">${facts[i].name}</div>`;
            ratingContainer.innerHTML += `<div class="rating">${facts[i].rating}</div>`;
            tagsContainer.innerHTML += `<div class="tags">${facts[i].tags.length}</div>`;
        }
        
    } catch (error) {
        console.log("an error occurred");
        errorContainer.innerHTML = apiError("An error occurred when calling the API");
    }
}
getGames();