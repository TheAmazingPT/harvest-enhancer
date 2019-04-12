import PopUpContainer from './popup-container.jsx';

const inputs = document.querySelectorAll('input.hui-input.js-compound-entry');
inputs.forEach(input => input.addEventListener('click', handleClick));

console.log(inputs.length);

function handleClick(event) {
  event.target.style.borderColor = '#336699';

  const data = extractData(event.target.dataset.uniqueName);
  console.log(data);

  openPopUp(event.target);
}

function extractData(raw) {
  const items = raw.split('_');

  return {
    day: items[0].slice(3),
    task: items[1].slice(7),
    project: items[2].slice(4)
  };
}

function openPopUp() {
  const popup = new PopUpContainer();
  popup.inject();
}
