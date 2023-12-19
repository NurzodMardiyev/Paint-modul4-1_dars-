let flag = document.querySelector(".flag"),
  arrowDownIcon = document.querySelector(".arrow-down"),
  flagsPlus = document.querySelector(".flagsPlus"),
  flagEng = document.querySelector("#flagEng"),
  flagUzb = document.querySelector("#flagUzb"),
  flagUsa = document.querySelector("#flagUsa");

flag.addEventListener("click", () => {
  arrowDownIcon.classList.toggle("arrowRotate");
  // console.log("hello");

  flagsPlus.classList.toggle("flagsDisplay");
});

flagUzb.addEventListener("click", () => {
  console.log("lek");
  flag.innerHTML = `
  <img
      src="../Images/flagUzb.jpg"
      alt="Flag"
      class="flagIcon"
      id="flagUzb"
    />
    <img src="./Images/arrow_drop_down.svg" alt="arrow down" /
    class="arrow-down">
  `;
  flagsPlus.innerHTML = `
  <img
      src="./Images/flagEng.png"
      alt="Flag"
      class="flagIcon"
      id="flagEng"
    />
    <img
      src="./Images/flagUsa.png"
      alt="Flag"
      class="flagIcon"
      id="flagUsa"
    />
  `;
});

flagUsa.addEventListener("click", () => {
  console.log("lek");
  flag.innerHTML = `
  <img
      src="../Images/flagUsa.png"
      alt="Flag"
      class="flagIcon"
      id="flagUsa"
    />
    <img src="./Images/arrow_drop_down.svg" alt="arrow down" /
    class="arrow-down">
  `;
  flagsPlus.innerHTML = `
  <img
      src="./Images/flagUzb.jpg"
      alt="Flag"
      class="flagIcon"
      id="flagUzb"
    />
    <img
      src="./Images/flagUsa.png"
      alt="Flag"
      class="flagIcon"
      id="flagUsa"
    />
  `;
});

// Reduction Section
let minusIcons = document.querySelectorAll("#minus");
cardPs = document.querySelectorAll(".style__card-p");

minusIcons.forEach((item) => {
  item.addEventListener("click", () => {
    cardPs.forEach((element) => {
      element.classList.toggle("displayNone");
      // console.dir(classList);
    });

    // cardP.classList.toggle("displayNone");
    if (item.src == "http://127.0.0.1:5500/Images/iconPlus.png") {
      item.src = "./Images/iconMinus.png";
    } else {
      item.src = "./Images/iconPlus.png";
      console.dir(minusIcons);
    }
  });
});

console.dir(cardPs[0].classList);
// minusIcon.addEventListener("click", () => {
//   cardP.classList.toggle("displayNone");

//   minusIcon.forEach((element) => {
//     if (element.src == "http://127.0.0.1:5500/Images/iconPlus.png") {
//       minusIcon.src = "./Images/iconMinus.png";
//     } else {
//       element.src = "./Images/iconPlus.png";
//       console.dir(minusIcon);
//     }
//   });
// });
