let guestList = [];
let guestNameInput = document.getElementById('newGuest');
let guestListElement = document.querySelector('ul');
let emptyList = document.getElementById('empty-list');
let police = document.getElementById('police');

document.getElementById('add').addEventListener('click', function() {
  let guestName = guestNameInput.value;
  if (!guestName) {
    return;
  }

  // проверяем, пришел ли уже гость
  if (guestList.includes(guestName)) {
    police.classList.remove('hide');
    guestNameInput.classList.add('lie');
  } else {
    police.classList.add('hide');
    guestNameInput.classList.remove('lie');
    emptyList.classList.add('hide');
    guestList.push(guestName);
    addGuest(guestName);
  }
});

function addGuest(name) {
  let mask = ['👻','💀','🤖', '🤡', '🐶'];
  let item = document.createElement('li');
  let maskIndex = Math.floor(Math.random()*mask.length);
  item.textContent = mask[maskIndex] + ' ' + name;
  guestListElement.appendChild(item);
}