document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  // Demo credentials (customize as you like)
  if (username === "admin" && password === "ghost123") {
    localStorage.setItem('aghostUser', username);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById('error-msg').textContent = "Invalid credentials!";
  }
});
