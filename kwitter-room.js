const firebaseConfig = {
  apiKey: "AIzaSyA6qVBslXEJrPYtmqV29enks918HiiyD3I",
  authDomain: "kwitter-578e9.firebaseapp.com",
  databaseURL: "https://kwitter-578e9-default-rtdb.firebaseio.com",
  projectId: "kwitter-578e9",
  storageBucket: "kwitter-578e9.appspot.com",
  messagingSenderId: "1090662529777",
  appId: "1:1090662529777:web:722c57d756705160de8750",
  measurementId: "G-NV186V3L6G"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML= "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
  });
}
localStorage.setItem("room_name", room_name);


function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
  //Start code
  console.log("Room name" + Room_names);
  row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
  document.getElementById("output").innerHTML += row;
  //End code
  });});}

getData();


function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html"; 
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}


