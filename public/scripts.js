const getTeamsButton = document.getElementById('getTeamsButton');
const teamsTable = document.getElementById('teamsTable');
const teamsName = document.getElementById('tname');
const teamsNumber = document.getElementById('number');
const sendButton = document.getElementById('sendButton');

const TeamsURL = 'http://localhost:3000/teams';

function teamsData(x, y) {
  const a = x.value;
  const b = y.value;
  const c = { teams_name: a, team_player_number: b };
  console.log('numero ', c);
  return c;
}

getTeamsButton.addEventListener('click', async function () {
  try {
    const response = await fetch(TeamsURL, { method: 'GET' });
    responseT = await response.json();
    teamsTable.innerHTML = JSON.stringify(responseT);
  } catch (error) {
    console.error(error);
  }
});

sendButton.addEventListener('click', async function () {
  try {
    //await postData(TeamsURL, dataTeams);
    await postData(TeamsURL, teamsData(teamsName, teamsNumber));
    //console.log('estas mierdads', TeamsURL, dataTeams);
  } catch (error) {
    console.error(error);
  }
});

//FUNCTION INTERACTION

// Example POST method implementation:
async function postData(url, data) {
  // Default options are marked with *
  try {
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  } catch (error) {
    console.error(error);
  }
}
