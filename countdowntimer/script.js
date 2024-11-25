let countdownEntries = [];

// Load saved entries from local storage on page load
window.onload = function () {
  const savedEntries = JSON.parse(localStorage.getItem('countdownEntries'));
  if (Array.isArray(savedEntries) && savedEntries.length > 0) {
    countdownEntries = savedEntries;
    renderCountdownEntries();
  }
};

function addCountdownEntry() {
  // Existing code to add a new entry...

  countdownEntries.push({ label, hours, minutes, seconds });
  localStorage.setItem('countdownEntries', JSON.stringify(countdownEntries));
  renderCountdownEntries();
}

function renderCountdownEntries() {
  const countdownEntriesDiv = document.getElementById('countdownEntries');
  countdownEntriesDiv.innerHTML = ''; // Clear existing entries

  countdownEntries.forEach((entry, index) => {
    const newEntry = document.createElement('div');
    newEntry.classList.add('entry');

    // Existing code to create entry elements...

    // Create remove button for each entry
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => removeEntry(index);

    newEntry.appendChild(labelInput);
    newEntry.appendChild(hoursInput);
    newEntry.appendChild(minutesInput);
    newEntry.appendChild(secondsInput);
    newEntry.appendChild(startButton);
    newEntry.appendChild(timerDisplay);
    newEntry.appendChild(removeButton);

    countdownEntriesDiv.appendChild(newEntry);
  });
}

function removeEntry(index) {
  countdownEntries.splice(index, 1);
  localStorage.setItem('countdownEntries', JSON.stringify(countdownEntries));
  renderCountdownEntries();
}
