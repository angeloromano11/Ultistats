const getTeamsButton = document.getElementById('getTeamsButton');
const teamsTableName = document.getElementById('teamsName');
const teamsTableCountry = document.getElementById('teamsCountry');
const teamsName = document.getElementById('tname');
const teamCountry = document.getElementById('country');
const sendButton = document.getElementById('sendButton');
const teamsTable = document.getElementById('teamsTable');
const tTable = document.getElementById('tTable');

//HTTP request
let teamsID = '';
const baseURL = 'http://localhost:3000';
const TeamsURL = `${baseURL}/teams`;
const TeamsByIdURL = `${baseURL}/teams/${teamsID}`;
const addTeamURL = `${baseURL}/addteams`;
const deleteTeamURL = `${baseURL}/deleteteams`;
const updateTeamsByIdURL = `${baseURL}/updateteams/${teamsID}`;

getTeamsTable();

function teamsData(x, y) {
  const a = x.value;
  const b = y.value;
  const c = { teams_name: a, team_country: b };
  console.log('team_data ', c);
  return c;
}

async function refreshTable() {
  teamsTable.innerHTML = '';
  tTable.innerHTML = '';
  await getTeamsTable();
}
getTeamsButton.addEventListener('click', async function () {
  try {
    await refreshTable();
  } catch (error) {
    console.error(error);
  }
});

async function getTeamsTable() {
  try {
    const response = await fetch(TeamsURL, { method: 'GET' });
    responseT = await response.json();
    let header = teamsTable.createTHead();
    let row = header.insertRow();
    let hIndexCol = row.insertCell(0);
    let hLeftCol = row.insertCell(1);
    let hRightCol = row.insertCell(2);
    let hDelCol = row.insertCell(3);
    hIndexCol.innerHTML = '#';
    hLeftCol.innerHTML = 'Team';
    hRightCol.innerHTML = 'Country';
    hDelCol.innerHTML = 'Action';
    for (var i = 0; i < responseT.length; i++) {
      let row = teamsTable.insertRow();
      let indexCol = row.insertCell(0);
      let leftCol = row.insertCell(1);
      let rightCol = row.insertCell(2);
      let delCol = row.insertCell(3);
      const items1 = await JSON.stringify(responseT[i]);
      const items = await JSON.parse(items1);
      console.log('items from get getTeamsTable', items);
      console.log('items name', items.teams_name);
      console.log('items country', items.team_country);
      indexCol.innerHTML = `${i}`;
      leftCol.innerHTML = items.teams_name;
      rightCol.innerHTML = items.team_country;
      delCol.innerHTML = 'DELETE';
    }
  } catch (error) {
    console.error(error);
  }
}

sendButton.addEventListener('click', async function () {
  try {
    //await postData(TeamsURL, dataTeams);
    await postData(addTeamURL, teamsData(teamsName, teamCountry));
    //await getLastValueTable();
    await refreshTable();
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
