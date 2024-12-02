let userDataArray = [];

const nameForm = document.getElementById('nameForm');
const nameTable = document.getElementById('nameTable');

function renderTable() {
  nameTable.innerHTML = ''; 
  userDataArray.forEach((data, index) => {
    nameTable.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${data.name}</td>
        <td>${data.age}</td>
        <td>${data.birthDate}</td>
        <td>${data.birthTime}</td>
        <td>${data.rasi}</td>
        <td>${data.nachathiram}</td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="editData(${index})">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteData(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

nameForm.addEventListener('submit', (e) => {
  e.preventDefault(); 

  const name = document.querySelector('#nameInput').value.trim();
  const age = document.querySelector('#ageInput').value.trim();
  const birthDate = document.querySelector('#dobInput').value.trim();
  const birthTime = document.querySelector('#timeInput').value.trim();
  const rasi = document.querySelector('#rasiInput').value.trim();
  const nachathiram = document.querySelector('#nachaInput').value.trim();

  if (!name || !age || !birthDate || !birthTime || !rasi || !nachathiram) {
    alert('All fields are required!');
    return;
  }

  userDataArray.push({ name, age, birthDate, birthTime, rasi, nachathiram });
  nameForm.reset();
  renderTable();
});

function editData(index) {
  const userData = userDataArray[index];
  const name = prompt('Edit Name:', userData.name);
  const age = prompt('Edit Age:', userData.age);
  const birthDate = prompt('Edit Birth Date:', userData.birthDate);
  const birthTime = prompt('Edit Birth Time:', userData.birthTime);
  const rasi = prompt('Edit Rasi:', userData.rasi);
  const nachathiram = prompt('Edit Nachathiram:', userData.nachathiram);

  if (name && age && birthDate && birthTime && rasi && nachathiram) {
    userDataArray[index] = { name, age, birthDate, birthTime, rasi, nachathiram };
    renderTable();
  }
}

function deleteData(index) {
  if (confirm('Are you sure you want to delete this record?')) {
    userDataArray.splice(index, 1); 
    renderTable(); 
  }
}

renderTable();