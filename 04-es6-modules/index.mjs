import { season, temperature } from "./named-exports.mjs";
import { isRaining, humidiry } from "./inline-exports.mjs";
import getDataFromServer from "./default-export.mjs";
import DEFAULT_SERVER, { USERNAME as MY_USERNAME, PASSWORD as MY_PASSWORD } from "./mixed-exports.mjs";

console.log(season)
console.log(temperature)
console.log(isRaining)
console.log(humidiry)

// try {
//     console.log(await getDataFromServer("https://jsonplaceholder.typicode.com/posts/1"))
// } catch (error) {
//     console.error(error)
// }

getDataFromServer("https://jsonplaceholder.typicode.com/posts/1")
    .then((post) => console.log(post))
    .catch((error) => console.log(error));

console.log(DEFAULT_SERVER, MY_USERNAME, MY_PASSWORD);