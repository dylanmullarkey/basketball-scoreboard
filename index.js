const homeButton1 = document.getElementById("home1")
const homeButton2 = document.getElementById("home2")
const homeButton3 = document.getElementById("home3")

const awayButton1 = document.getElementById("away1")
const awayButton2 = document.getElementById("away2")
const awayButton3 = document.getElementById("away3")

const homeScoreBoard = document.getElementById("homeTeam")
const awayScoreBoard = document.getElementById("awayTeam")

let homeScore = 0
let awayScore = 0

function add1Home() {
  homeScore += 1
  highlightLeader()
  homeScoreBoard.innerText = homeScore
}

function add2Home() {
  homeScore += 2
  highlightLeader()
  homeScoreBoard.innerText = homeScore
}

function add3Home() {
  homeScore += 3
  highlightLeader()
  homeScoreBoard.innerText = homeScore
}

function add1Away() {
  awayScore += 1
  highlightLeader()
  awayScoreBoard.innerText = awayScore
}

function add2Away() {
  awayScore += 2
  highlightLeader()
  awayScoreBoard.innerText = awayScore
}

function add3Away() {
  awayScore += 3
  highlightLeader()
  awayScoreBoard.innerText = awayScore
}

function highlightLeader() {
  if (homeScore > awayScore) {
    homeScoreBoard.style.border = "3px dotted yellow"
    awayScoreBoard.style.border = ""
  }
  else if (homeScore < awayScore) {
    homeScoreBoard.style.border = ""
    awayScoreBoard.style.border = "3px dotted yellow"
  }
  else {
      homeScoreBoard.style.border = ""
      awayScoreBoard.style.border = ""
  }
}
