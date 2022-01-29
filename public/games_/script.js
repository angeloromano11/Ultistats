const grassSelector = document.querySelector('#field_grass');
const beachSelector = document.querySelector('#field_beach');
const canvasEndzone = document.querySelector('.field_endzone');
const canvasEndzone2 = document.querySelector('.field_endzone2');
const canvasField = document.querySelector('.field_middle');
const field = document.querySelector('.left');
const fieldBackground = field.style;
let fieldBackgroundActive;

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
      distancePassFunc(a, b);
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
