const grassSelector = document.querySelector('#field_grass');
const beachSelector = document.querySelector('#field_beach');
const canvasEndzone = document.querySelector('.field_endzone');
const canvasEndzone2 = document.querySelector('.field_endzone2');
const canvasField = document.querySelector('.field_middle');
const teamADropdown = document.querySelector('#selectTeamADropdown');
const teamBDropdown = document.querySelector('#selectTeamBDropdown');
const teamAPlayers = document.querySelector('#teamAPlayers');
const teamBPlayers = document.querySelector('#teamBPlayers');
const playsInput = document.querySelector('#playsInput');
const getPlayersByTeamButton = document.querySelector(
  '#getPlayersByTeamButton'
);
const addPlayButton = document.querySelector('#addPlayButton');
const field = document.querySelector('.left');
const fieldBackground = field.style;
let fieldBackgroundActive;

//HTTP request const
//Teams
let teamsID = '';
const baseURL = 'http://localhost:3000';
const TeamsURL = `${baseURL}/teams`;
const TeamsByIdURL = `${baseURL}/teams/${teamsID}`;
const addTeamURL = `${baseURL}/addteams`;
const deleteTeamURL = `${baseURL}/deleteteams`;
const updateTeamsByIdURL = `${baseURL}/updateteams/${teamsID}`;

//player
let playerID = '';
const PlayerURL = `${baseURL}/player`;
const PlayerByIdURL = `${baseURL}/player/${playerID}`;
const PlayerByTeamURL = `${baseURL}/playerTeam/${teamsID}`;
const addPlayerURL = `${baseURL}/addplayer`;
const deletePlayerURL = `${baseURL}/deleteplayer`;
const updatePlayerByIdURL = `${baseURL}/updateplayer/${playerID}`;

//plays
let playID = '';
const PlayURL = `${baseURL}/plays`;
const PlayByIdURL = `${baseURL}/plays/${playID}`;
const addPlayURL = `${baseURL}/addplays`;
const deletePlayURL = `${baseURL}/deleteplays`;
const updatePlayByIdURL = `${baseURL}/updateplays/${playID}`;

function fieldBeachChanging() {
  fieldBackground.backgroundImage = "url('sand.jpeg')";
  // canvasEndzone.style.border = '5px solid #ff0000';
  // canvasEndzone2.style.border = '5px solid #ff0000';
  canvasField.style.border = '5px solid #ff0000';
}

function fieldGrassChanging() {
  fieldBackground.backgroundImage = "url('grass.jpeg')";
  // canvasEndzone.style.border = '5px solid #ffffff';
  // canvasEndzone2.style.border = '5px solid #ffffff';
  canvasField.style.border = '5px solid #ffffff';
}

grassSelector.addEventListener('click', async function () {
  try {
    await fieldGrassChanging();
    fieldBackgroundActive = true;
    console.log('field background', fieldBackground);
  } catch (error) {
    console.error(error);
  }
});

beachSelector.addEventListener('click', async function () {
  try {
    await fieldBeachChanging();
    fieldBackgroundActive = false;
    console.log('field', field);
    console.log('field background', fieldBackground);
  } catch (error) {
    console.error(error);
  }
});

//Click on the canvas
function getMousePosGrass(canvasField, evt) {
  const rect = canvasField.getBoundingClientRect();
  return {
    x: (evt.clientX - rect.left) / 8.11, //number of conversion from pixels to meters
    y: (evt.clientY - rect.top) / 6.2, //number of conversion from pixels to meters
  };
}

function getMousePosBeach(canvasField, evt) {
  const rect = canvasField.getBoundingClientRect();
  return {
    x: (evt.clientX - rect.left) / 12.0, //number of conversion from pixels to meters
    y: (evt.clientY - rect.top) / 8.27, //number of conversion from pixels to meters
  };
}

//position of the player in the canvas beach & grass
function playerPosition(evt) {
  if (fieldBackgroundActive === false) {
    const pos = getMousePosBeach(canvasField, evt);
    console.log('middle field sand', pos);
    return pos;
  }
  if (fieldBackgroundActive) {
    const pos = getMousePosGrass(canvasField, evt);
    console.log('middle field', pos);
    return pos;
  } else return;
}

let xArray = [];
let yArray = [];

// Distance of the pass
function passDistance(evt) {
  if (xArray.length <= 2) {
    a1 = playerPosition(evt).x;
    b1 = playerPosition(evt).y;
    console.log('a1, b1', a1, b1);
    xArray.push(a1);
    yArray.push(b1);
    if (xArray.length == 2) {
      let a = xArray[0] - xArray[1];
      let b = yArray[0] - yArray[1];
      inputPlayArray.player_position = `(${xArray[0]}, ${yArray[0]})`;
      inputPlayArray.receiver_position = `(${xArray[1]}, ${yArray[1]})`;
      inputPlayArray.pass_distance = distancePassFunc(a, b);
      console.log('input array', inputPlayArray);
      xArray = [];
      yArray = [];
      countArray = [];
      console.log('arrays cleared', xArray, yArray);
      return xArray, yArray;
    } else return xArray, yArray;
  }
  console.log('arrays', xArray, yArray);
}

function distancePassFunc(a, b) {
  const distance = Math.sqrt(a * a + b * b);
  console.log('distancia', distance);
  return distance;
}

//Show the teams list in a dropdown
teamADropdown.addEventListener('click', async function () {
  try {
    if (teamADropdown.length === 1) {
      await displayDropdownOption(teamADropdown);
    }
    return;
  } catch (error) {
    console.error(error);
  }
});

teamBDropdown.addEventListener('click', async function () {
  try {
    if (teamBDropdown.length === 1) {
      await displayDropdownOption(teamBDropdown);
    }
    return;
  } catch (error) {
    console.error(error);
  }
});

const getTeams = async () => {
  const response = await fetch(TeamsURL, { method: 'GET' });
  const data = await response.json();
  return data;
};

const displayDropdownOption = async (dropdown) => {
  const teamDrop = dropdown;
  const resOpt = await getTeams();
  const options = resOpt;
  options.forEach((option) => {
    const newOption = document.createElement('option');
    newOption.value = option.teams_id;
    newOption.text = option.teams_name;
    console.log(newOption);
    teamDrop.appendChild(newOption);
  });
};

//Show team players
const getPlayers = async (teamId) => {
  const id = teamId;
  const url = PlayerByTeamURL + teamId;
  console.log(url);
  const response = await fetch(url, { method: 'GET' });
  const data = await response.json();
  return data;
};

const displayPlayersByTeam = async (dropdown, dropdownTable) => {
  try {
    const teamDrop = dropdown.value;
    const options = await getPlayers(teamDrop);
    console.log('get players by temas', options);
    const table = dropdownTable;
    const row = table.insertRow();
    for (var i = 0; i < options.length; i++) {
      console.log(options[i]);
      console.log(options[i].player_name);
      const unicRow = row.insertCell(i);
      const playerName = `#${options[i].player_name}, `;
      unicRow.innerHTML = playerName;
    }
  } catch (error) {
    console.error(error);
  }
};

getPlayersByTeamButton.addEventListener('click', async function () {
  try {
    await displayPlayersByTeam(teamADropdown, teamAPlayers);
    inputPlayArray.teams_id = teamADropdown.value;
    await displayPlayersByTeam(teamBDropdown, teamBPlayers);
  } catch (error) {
    console.error(error);
  }
});

//Create input play
// Example input
let inputPlayArray = {
  game_id: null,
  //teams_id done
  teams_id: null,
  player_id: null,
  tournamemnt: 'windmill',
  team: 'krakens',
  opponent: 'sharks',
  game_point_number: 1,
  player_action: 'pass',
  //player_position done
  player_position: '(1,2)',
  //receiver_position done
  receiver_position: '(1,2)',
  deffensive_player_position: null,
  pass_type: 'forehand',
  catch_type: 'one hand',
  defense_type: null,
  pass_distance: 33.433,
  assistance: 0,
  team_score: 0,
  opposite_team_score: 0,
  total_score: 0,
  pass_completed: true,
};

addPlayButton.addEventListener('click', async function () {
  try {
    console.log('inputPlayArray before sending', inputPlayArray);
    await postData(addPlayURL, inputPlayArray);
  } catch (error) {
    console.error(error);
  }
});

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
