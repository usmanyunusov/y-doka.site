const mainpageMain = document.querySelector(".mainpage__main")

if (document.contains(mainpageMain)) {
  const togglerHTML = mainpageMain.querySelector(
    ".mainpage__search-toggler_html"
  )
  const togglerCSS = mainpageMain.querySelector(".mainpage__search-toggler_css")
  const togglerJS = mainpageMain.querySelector(".mainpage__search-toggler_js")

  function changeToggler() {
    this.classList.toggle("mainpage__search-toggler_active")
  }

  togglerHTML.addEventListener("click", changeToggler)
  togglerCSS.addEventListener("click", changeToggler)
  togglerJS.addEventListener("click", changeToggler)
}
