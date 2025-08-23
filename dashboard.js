window.onload = function() {
  const user = localStorage.getItem('aghostUser');
  if (!user) {
    window.location.href = "index.html";
  } else {
    document.getElementById('userDisplay').textContent = user;
    document.getElementById('userCount').textContent = "1";
  }
};

function logout() {
  localStorage.removeItem('aghostUser');
  window.location.href = "index.html";
}
