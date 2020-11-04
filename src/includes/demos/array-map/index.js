const SECOND = 1000;
const products = [1, 2, 3, 4, 5, 6, 7, 8]

function transformToSquare(num) {
  return num * num
}

function transformToCube(num) {
  return num * num * num
}


const container = document.getElementById("container");
const execute = document.getElementById("execute");
const result = document.getElementById("result");
const squareButton = document.getElementById("square");
const cubesButton = document.getElementById("cubes");
let isActive = false;

function createItem(content) {
  const itemElement = document.createElement("div");
  itemElement.classList.add("item");
  itemElement.textContent = content;

  return itemElement
}

products.forEach((product, index) => {
  const element = createItem(product)
  element.id = index + 1;

  container.appendChild(element);
});

function clearActive() {
  execute.textContent = ''
  const activeItem = document.querySelector(".active")

  if (activeItem) {
    activeItem.classList.remove("active")
  }
}

function createSquareIteration(num, order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      clearActive()

      const item = document.getElementById(order)
      item.classList.add("active")

      const square = transformToSquare(num);

      execute.textContent = `transformToSquares(${num}) -> ${square}`

      result.appendChild(createItem(square))

      resolve()
    }, SECOND * order);
  });
}

function createCubeIteration(num, order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      clearActive()

      const item = document.getElementById(order)
      item.classList.add("active")

      const cube = transformToCube(num);

      execute.textContent = `transformToCubes(${num}) -> ${cube}`

      result.appendChild(createItem(cube))

      resolve()
    }, SECOND * order);
  });
}

function getSquaresPromises() {
  const iterations = [];

  products.forEach((item, index) => {
    iterations.push(createSquareIteration(item, index + 1))
  });

  return iterations;
}

function getCubesPromises() {
  const iterations = [];

  products.forEach((item, index) => {
    iterations.push(createCubeIteration(item, index + 1))
  });

  return iterations;
}

squareButton.addEventListener("click", () => {
  if (!isActive) {
    isActive = true;
    result.innerText = ''
    const promises = getSquaresPromises()

    Promise.all(promises).then(() => {
      setTimeout(() => {
        clearActive()
        isActive = false
      }, SECOND)
    });
  }
});

cubesButton.addEventListener("click", () => {
  if (!isActive) {
    isActive = true;
    result.innerText = ''
    const iterations = getCubesPromises()

    Promise.all(iterations).then(() => {
      setTimeout(() => {
        clearActive()
        isActive = false
      }, SECOND)
    });
  }
});
