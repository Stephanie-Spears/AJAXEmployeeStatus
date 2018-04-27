const xhr = new XMLHttpRequest();

xhr.open('GET', 'data/employees.json');

xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    let employees = JSON.parse(xhr.responseText);
    let statusHTML = '<ul class="bulleted">';
    for (let i=0; i<employees.length; i++) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.send();



const xhrRoomRequest = new XMLHttpRequest();

xhrRoomRequest.open('GET', 'data/rooms.json');

xhrRoomRequest.onreadystatechange = function () {
  if(xhrRoomRequest.readyState === 4 && xhrRoomRequest.status === 200) {
    let rooms = JSON.parse(xhrRoomRequest.responseText);
    let statusHTML = '<ul class="rooms">';
    for (let i=0; i<rooms.length; i++) {
      if (rooms[i].available === true) {
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
      }
      statusHTML += rooms[i].room;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML;
  }
};
xhrRoomRequest.send();