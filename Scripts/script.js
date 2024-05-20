displayMultiPlayerGames();
displaySinglePlayerGames();

function openSideBar(){
  const openSideBar = document.querySelector('.sideBar');
  openSideBar.style.display = "flex";
}

function closeSideBar(){
  const openSideBar = document.querySelector('.sideBar');
  openSideBar.style.display = "none";
}

function displayMultiPlayerGames() {
  let avc = "";
  multiPlayerItems.forEach((item) => {
    avc += `
  <div class="game">
    <div class="title">${item.title}</div>
    <div class="gameImage">
      <img src="${item.image}" alt="Game Image" />
    </div>
    <div class="rating">Rating : ${item.rating}</div>
    <div class="companyName">Company : ${item.companyName} </div>
    <div class="since">Since : ${item.Since}</div>
    <button onclick="transfer('${item.URL}')">Play Game</button>
  </div>
`;
  });

  let gameGridScript = document.querySelector(".gameGrid");
  gameGridScript.innerHTML = avc;
}

function displaySinglePlayerGames() {
  let innerHtml = "";
  singlePlayerItems.forEach(item =>{
    innerHtml += `
    <div class="game">
      <div class="title">${item.title}</div>
      <div class="gameImage">
        <img src="${item.image}" alt="Game Image" />
      </div>
      <div class="rating">Rating : ${item.rating}</div>
      <div class="companyName">Company : ${item.companyName} </div>
      <div class="since">Since : ${item.Since}</div>
      <button onclick="transfer('${item.URL}')">Play Game</button>
    </div>
    `;
  })
  let gameGridSingleScript = document.querySelector('.gameGridSingle');
  gameGridSingleScript.innerHTML = innerHtml;
}

function transfer(url) {
  window.location.href = url;
}

// https://www.crazygames.com/t/with-friends
