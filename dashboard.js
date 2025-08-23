window.onload = function() {
  const user = localStorage.getItem('aghostUser');
  const role = localStorage.getItem('aghostRole');
  if (!user || !role) {
    window.location.href = "index.html";
  } else {
    document.getElementById('userDisplay').textContent = user;
    document.getElementById('roleDisplay').textContent = role;
    // Show admin panel link to owner/admin
    if (role === "owner" || role === "admin") {
      document.getElementById('adminPanelLink').style.display = "block";
    }
  }
};
function logout() {
  localStorage.removeItem('aghostUser');
  localStorage.removeItem('aghostRole');
  window.location.href = "index.html";
}