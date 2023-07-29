import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

//const fetchData = (apiEndPoint) => {
// fetch(apiEndPoint)
// .then((response) => response.json());

// .then((json) => console.log(json))
//.catch((error) => console.log(error));
async function fetchData(apiEndPoint) {
  console.log(apiEndPoint);
  let response = await fetch(apiEndPoint);
  try {
    const json = await response.json();
    console.log(json);
  } catch (err) {
    console.log(err);
  }
}
fetchData(jsonTypicode);
