//CONNECT TO THE API
const BasketApi = 'https://tank01-fantasy-stats.p.rapidapi.com';

async function getPlayer() {
  let reqUrl = `${BasketApi}/getNBAPlayerInfo?playerName=a&statsToGet=totals`;
  let response = await fetch(reqUrl, {
    method: "GET",
    headers: {
      'X-RapidAPI-Key': '858e5279c6msh6e3a1c2186b0886p1835a0jsn83e6b753d7b2',
      'X-RapidAPI-Host': 'tank01-fantasy-stats.p.rapidapi.com'
    }
  });
  let responseBody = await response.json();
  let playerArray = Object.values(responseBody.body);
  return playerArray;
}

module.exports = {
  getPlayer
}
