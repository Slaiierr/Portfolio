// ADD GLOW EFFECT ON CARDS
// GLOW EFFECT RED
function hoverCardRed() {
  document.querySelector("#img1").classList.remove("un_hover_all_cards");
  document.querySelector("#card1").classList.add("hover_red");
  document.querySelector("#img1").classList.add("hover_red");
}

function unHoverCardRed() {
  document.querySelector("#card1").classList.remove("hover_red");
  document.querySelector("#img1").classList.remove("hover_red");
  document.querySelector("#img1").classList.add("un_hover_all_cards");
}

// GLOW EFFECT BLUE
function hoverCardBlue() {
  document.querySelector("#img2").classList.remove("un_hover_all_cards");
  document.querySelector("#card2").classList.add("hover_blue");
  document.querySelector("#img2").classList.add("hover_blue");
}

function unHoverCardBlue() {
  document.querySelector("#card2").classList.remove("hover_blue");
  document.querySelector("#img2").classList.remove("hover_blue");
  document.querySelector("#img2").classList.add("un_hover_all_cards");
}

// GLOW EFFECT WHITEs
function hoverCardWhite() {
  document.querySelector("#img3").classList.remove("un_hover_all_cards");
  document.querySelector("#card3").classList.add("hover_white");
  document.querySelector("#img3").classList.add("hover_white");
}

function unHoverCardWhite() {
  document.querySelector("#card3").classList.remove("hover_white");
  document.querySelector("#img3").classList.remove("hover_white");
  document.querySelector("#img3").classList.add("un_hover_all_cards");
}
