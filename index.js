window.addEventListener('load', start);

// wait the DOM content be loaded before start manipulations
function start() {
  function setValues(r, g, b) {
    rValue.value = r;
    gValue.value = g;
    bValue.value = b;
  }

  function handleSliderChange() {
    rSlider.addEventListener('change', () => {
      setValues(rSlider.value, gSlider.value, bSlider.value);
      setBackgroundColor(rSlider.value, gSlider.value, bSlider.value);
    });

    gSlider.addEventListener('change', () => {
      setValues(rSlider.value, gSlider.value, bSlider.value);
      setBackgroundColor(rSlider.value, gSlider.value, bSlider.value);
    });

    bSlider.addEventListener('change', () => {
      setValues(rSlider.value, gSlider.value, bSlider.value);
      setBackgroundColor(rSlider.value, gSlider.value, bSlider.value);
    });
  }

  function setBackgroundColor(r, g, b) {
    square[0].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }

  const rSlider = document.getElementById('r-slider');
  const gSlider = document.getElementById('g-slider');
  const bSlider = document.getElementById('b-slider');

  const rValue = document.getElementById('r-value');
  const gValue = document.getElementById('g-value');
  const bValue = document.getElementById('b-value');

  const square = document.getElementsByClassName('square');

  setValues(rSlider.value, gSlider.value, bSlider.value);
  handleSliderChange();
}
