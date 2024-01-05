// Get elements
let card = document.querySelector(".card");
let rates = document.querySelectorAll(".rate li");
let img = document.querySelector(".topImage");
let head = document.querySelector(".head");
let quest = document.querySelector(".quest");
let select = document.querySelector(".select");
let lists = document.querySelectorAll(".rate");
let hiddenList = document.querySelector(".rate");
let btn = document.querySelector("button");

rates.forEach((rate) => {
  rate.addEventListener("click", function (e) {
    selectedRate = this.textContent;
    rates.forEach((rate) => {
      rate.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

btn.addEventListener("click", function () {
  img.src = "images/illustration-thank-you.svg";
  img.classList.remove("star");
  card.classList.add("centred");
  select.classList.add("selected");
  select.textContent = `You selected ${selectedRate} out of 5`;
  head.textContent = "Thank you!";
  quest.textContent =
    "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
  btn.style.display = "none";
  hiddenList.style.display = "none";
});
