const apiUrl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=93930dbbba9f4c73a9272ff8495f7956";

const corsUrl = "https://noroffcors.herokuapp.com/";

const proxy = corsUrl + apiUrl;

/*const options = { "headers": {
    "x-rapidapi-key": "20322fc9f1d848dcb8c05015fd877883",
}};*/

const nameContainer = document.querySelector(".name");
const ratingContainer = document.querySelector(".rating");
const tagsContainer = document.querySelector(".tags");

const errorContainer = document.querySelector(".error");

async function getGames() {
    try {
        const response = await fetch(proxy);
        const apiArray = await response.json();

        console.log(apiArray);

        const facts = apiArray.results;

        //nameContainer.innerHTML = "";

        for (let i = 0; i < facts.length; i++) {
            console.log(facts[i].name);
            console.log(facts[i].rating);
            console.log(facts.length);

            if (i === 8) {
                break;
            }

            nameContainer.innerHTML += `<div class="name">${facts[i].name}</div>`;
            ratingContainer.innerHTML += `<div class="rating">${facts[i].rating}</div>`;
            tagsContainer.innerHTML += `<div class="tags">${facts.length}</div>`;
        }
    } catch (error) {
        console.log("an error occurred");
        errorContainer.innerHTML = apiError("An error occurred when calling the API");
    } finally {
        console.log("Everything is OK");
    }
}
getGames();