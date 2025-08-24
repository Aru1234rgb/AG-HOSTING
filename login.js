const users = {
  "aryan": { password: "ghorpade", role: "owner", coins: 1000, rank: "Emerald" },
  "admin": { password: "minecraft", role: "admin", coins: 500, rank: "Diamond" },
  "player": { password: "steve", role: "user", coins: 100, rank: "Iron" }
};

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  if (users[username] && users[username].password === password) {
    localStorage.setItem('aghostUser', username);
    localStorage.setItem('aghostRole', users[username].role);
    localStorage.setItem('aghostCoins', users[username].coins);
    localStorage.setItem('aghostRank', users[username].rank);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById('error-msg').textContent = "Invalid credentials!";
  }
});