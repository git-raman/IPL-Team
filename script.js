let winner = [
  {
    team: "CSK",
    captain: "Ruturaj Gaikwad",
    primary: "yellow",
    secondary: "blue",
  },
  {
    team: "MI",
    captain: "Hardik Pandya",
    primary: "blue",
    secondary: "gold",
  },
  {
    team: "RCB",
    captain: "Rajat Patidar",
    primary: "red",
    secondary: "black",
  },
  {
    team: "DC",
    captain: "KL Rahul",
    primary: "blue",
    secondary: "red",
  },
  {
    team: "PBKS",
    captain: "Shreyas Iyer",
    primary: "silver",
    secondary: "crimson",
  },
  {
    team: "LSG",
    captain: "Risabh Pant",
    primary: "darkblue",
    secondary: "orange",
  },
  {
    team: "KKR",
    captain: "Ajinkya Rahane",
    primary: "purple",
    secondary: "gold",
  },
  {
    team: "GT",
    captain: "Subhman Gill",
    primary: "navy",
    secondary: "gold",
  },
  {
    team: "RR",
    captain: "Sanju Samson",
    primary: "palevioletred",
    secondary: "royalblue",
  },
  {
    team: "SRH",
    captain: "Pat Cummins",
    primary: "orange",
    secondary: "black",
  },
];

let main = document.querySelector("#main");
let box = document.querySelector("#box");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let a = winner[Math.floor(Math.random() * winner.length)];
  h1.innerHTML = a.team;
  h2.innerHTML = a.captain;
  main.style.backgroundColor = a.primary;
  box.style.backgroundColor = a.secondary;
});
