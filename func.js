const container = document.getElementById("container");

function createBox(size) {
  resetGrid();

  const containerComputedStyle = window.getComputedStyle(container);
  const containerBorderWidth =
    parseInt(containerComputedStyle.getPropertyValue("border-left-width")) +
    parseInt(containerComputedStyle.getPropertyValue("border-right-width"));
  const containerPaddingWidth =
    parseInt(containerComputedStyle.getPropertyValue("padding-left")) +
    parseInt(containerComputedStyle.getPropertyValue("padding-right"));
  const containerTotalWidth =
    container.offsetWidth - containerBorderWidth - containerPaddingWidth;

  const boxSize = containerTotalWidth / size;

  for (let i = 0; i < size * size; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = box.style.height = boxSize + "px";
    box.style.border = "1px solid black";

    box.addEventListener("mouseenter", () => {
      box.style.backgroundColor = "orange";
    });

    container.appendChild(box);
  }
}

function resetGrid() {
  container.innerHTML = "";
}

function chooseSize() {
  console.log("chooseSize function called");
  const button = document.querySelector(".btn");
  console.log("Button:", button);
  button.addEventListener("click", () => {
    console.log("Button clicked");
    let size = prompt("Type in Size (max 64): ");
    size = parseInt(size);
    console.log("Size:", size);
    if (!isNaN(size) && size > 0 && size <= 64) {
      createBox(size);
    } else {
      alert("Please enter a valid number between 1 and 64.");
    }
  });
}

chooseSize();
