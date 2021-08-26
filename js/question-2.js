const apiUrl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=93930dbbba9f4c73a9272ff8495f7956";

const corsUrl = "https://noroffcors.herokuapp.com/";

const proxy = corsUrl + apiUrl;

/*const options = { "headers": {
    "x-rapidapi-key": "20322fc9f1d848dcb8c05015fd877883",
}};*/

const resultsContainer = document.querySelector(".result");

const errorContainer = document.querySelector(".error");

async function getGames() {
    try {
        const response = await fetch(proxy);
        const results = await response.json();

        for (let i = 0; i < results.length; i++) {
            console.log(results[i].name);

            resultsContainer.innerHTML += `<div class="result">${results[i].name}</div>`
        }
        console.log(results);

    } catch (error) {
        console.log("an error occurred");
        errorContainer.innerHTML = apiError("An error occurred when calling the API");
    }
}
getGames();

