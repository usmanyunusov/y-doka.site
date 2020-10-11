const body = document.querySelector('body');
const aside = document.querySelector('aside');

function asideMoving() {
  const arrow = aside.querySelector('.footer__arrow-btn');
  arrow.addEventListener('click', toggleAside)
}

function toggleAside() {
  aside.classList.toggle("_hidden");
}

function asideOpener() {
  let postPath = window.location.pathname.split("/").filter(el => el)
  let [tmp, postSection, postType, postName] = postPath

  // TODO: оптимизировать
  aside.querySelector(`.aside__${postSection}`).open = "true"
  aside.querySelector(`.aside__${postSection}-${postType}`).open = "true"
  aside.querySelector(`[href*="${postName}"]`).classList.add("_active")
  aside.querySelector(`[href*="${postName}"]._active`).parentElement.scrollIntoView()
}

function asideClickHelper(target) {
  if (target.parentElement.classList.contains("aside__item")) {
    aside.querySelectorAll(".aside__item").forEach(el => {
      el.removeAttribute("open")
      el.querySelectorAll("details").forEach(el => el.removeAttribute("open"))
    });
  } else {
    target.closest(".aside__item").querySelectorAll("details").forEach(el => el.removeAttribute("open"))
  }
}

function hideEmpty() {
  let items = aside.querySelectorAll("details ul");
  items.forEach(item => item.children.length === 0 ? item.parentElement.style.display = "none" : item.parentElement.style.display = "block")
}

if (body.contains(aside)) {
  asideMoving()
  hideEmpty()
  aside.querySelector(".aside__navigation").addEventListener("click", (event) => asideClickHelper(event.target));
  asideOpener()
}
