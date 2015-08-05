var socket = io();

var connectionCount = document.getElementById('connection-count');
var statusMessage = document.getElementById('status-message');
var userVote = document.getElementById('your-vote');
var a = document.getElementById('A')
var b = document.getElementById('B')
var c = document.getElementById('C')
var d = document.getElementById('D')

var buttons = document.querySelectorAll('#choices button');

socket.on('usersConnected', function (count) {
  connectionCount.innerText = 'Connected Users: ' + count;
});

socket.on('statusMessage', function (message) {
  statusMessage.innerText = message;
});

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    socket.send('voteCast', this.innerText);
    userVote.innerText = "Your current vote: " + this.innerText;
  });
}

socket.on('voteCount', function (votes) {
  a.innerText = "A: " + votes.A;
  b.innerText = "B: " + votes.B;
  c.innerText = "C: " + votes.C;
  d.innerText = "D: " + votes.D;
});