window.onload = function() {
  const user = localStorage.getItem('aghostUser');
  const role = localStorage.getItem('aghostRole');
  const coins = localStorage.getItem('aghostCoins');
  const rank = localStorage.getItem('aghostRank');
  if (!user || !role) {
    window.location.href = "index.html";
  } else {
    document.getElementById('userDisplay').textContent = user;
    document.getElementById('roleDisplay').textContent = role;
    document.getElementById('coinsDisplay').textContent = coins;
    document.getElementById('rankDisplay').textContent = rank;
    if (role === "owner" || role === "admin") {
      document.getElementById('adminPanelLink').style.display = "block";
    }
  }
};

function logout() {
  localStorage.removeItem('aghostUser');
  localStorage.removeItem('aghostRole');
  localStorage.removeItem('aghostCoins');
  localStorage.removeItem('aghostRank');
  window.location.href = "index.html";
}

// Simulate git clone reward
function gitCloneReward() {
  let coins = parseInt(localStorage.getItem('aghostCoins'));
  coins += 50; // reward amount
  localStorage.setItem('aghostCoins', coins);
  document.getElementById('coinsDisplay').textContent = coins;
  document.getElementById('cloneMsg').textContent = "You cloned the repo and earned 50 coins!";
}