const grassSelector = document.querySelector('#field_grass');
const beachSelector = document.querySelector('#field_beach');
const canvasEndzone = document.querySelector('.field_endzone');
const canvasEndzone2 = document.querySelector('.field_endzone2');
const canvasMiddle = document.querySelector('.field_middle');
const field = document.querySelector('.left');
const fieldBackground = field.style;

function fieldBeachChanging() {
  fieldBackground.backgroundImage = "url('sand.jpeg')";
  canvasEndzone.style.border = '5px solid #ff0000';
  canvasEndzone2.style.border = '5px solid #ff0000';
  canvasMiddle.style.border = '5px solid #ff0000';
}

function fieldGrassChanging() {
  fieldBackground.backgroundImage = "url('grass.jpeg')";
  canvasEndzone.style.border = '5px solid #ffffff';
  canvasEndzone2.style.border = '5px solid #ffffff';
  canvasMiddle.style.border = '5px solid #ffffff';
}

grassSelector.addEventListener('click', async function () {
  try {
    await fieldGrassChanging();
    console.log('field background', fieldBackground);
  } catch (error) {
    console.error(error);
  }
});

beachSelector.addEventListener('click', async function () {
  try {
    await fieldBeachChanging();
    console.log('field', field);
    console.log('field background', fieldBackground);
  } catch (error) {
    console.error(error);
  }
});
