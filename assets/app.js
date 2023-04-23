const button = document.querySelector(".btn");

button.addEventListener("click", (e) => {
  button.remove();
});

const imgTask = document.createElement("img");
imgTask.setAttribute(
  "src",
  "https://fastly.picsum.photos/id/405/1400/800.jpg?hmac=4CRI7OpfDWtP4EydVd4Z-1NKSGhBmpZq8OaEXVu3be8"
);
imgTask.setAttribute("alt", "Old Street");
document.body.prepend(imgTask);

const sectionSelect = document.querySelector("#images-list");
const myButton = document.querySelector("#seeMore");

function renderResultJs() {
  const imagesFromJs = results.map((ress) => {
    return `
            <div class="card">
                <div class="imgContainer">
                    <img  src="${ress.webImage.url}">
                </div>
                <div class="txt">
                    <h3>${ress.title}</h3>
                    <p class="longTitle">${ress.longTitle}</p>
                </div>
                <div class="buttons">
                    <button class="green" id="seeMore">see more details</button>
                    <button class="pink">remove card</button>
                </div>
            </div>
        `;
  });

  sectionSelect.innerHTML = imagesFromJs.join("");

  const removeCardButtons = document.querySelectorAll(".pink");
  removeCardButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const cardElement = event.target.closest(".card");
      cardElement.remove();
    });
  });

  const addTitle = document.querySelectorAll(".green");
  addTitle.forEach((button, index) => {
    button.addEventListener("click", () => {
      window.location.href = results[index].links.web;
    });
  });
}

renderResultJs();
