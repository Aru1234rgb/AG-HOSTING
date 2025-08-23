// Username: "aryan" (owner), "admin" (admin)
const users = {
  "aryan": { password: "ghorpade", role: "owner" },
  "admin": { password: "minecraft", role: "admin" },
  "player": { password: "steve", role: "user" }
};

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  if (users[username] && users[username].password === password) {
    localStorage.setItem('aghostUser', username);
    localStorage.setItem('aghostRole', users[username].role);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById('error-msg').textContent = "Invalid credentials!";
  }
});