const rateBtn = document.querySelector("#SubmitBtn");
const rating = document.querySelector("#rating");
const rated = document.querySelector("#Wegot")

rateBtn.addEventListener('click', (e) => {
    document.querySelector(".rate-us").classList.toggle("hidden");
    document.querySelector(".thank-you").classList.toggle("hidden");
});

rating.addEventListener("click", (e) => {
    rated.innerText = e.target.innerText;
    e.target.style.backgroundColor = 'gray';
    e.target.style.color = 'white';
});