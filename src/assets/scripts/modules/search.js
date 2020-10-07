const DEBOUNCE_DELAY = 300
const MIN_CHARACTERS = 1
const HIDDEN_CLS = 'search__suggestions__hidden'

const searchInput = document.getElementById('search')
const suggestionsContainer = document.getElementById('search-suggestions')

let isFetchingSearchIndex = false
let promise
let searchIndex
let timer
let currentFocus = -1

const buildSuggestionItem = (caption, url) => {
  let item;
  if (typeof url !== 'string') {
    item = document.createElement('div')
  } else {
    item = document.createElement('a')
    item.href = url
    // item.rel = 'noopener'
    // item.setAttribute("role", "option")
  }

  item.classList.add("search__suggestions__item")
  item.innerText = caption

  return item
}

const clearSuggestionContainer = () => {
  while (suggestionsContainer.firstChild) {
    suggestionsContainer.removeChild(suggestionsContainer.firstChild);
  }
}

const hideSuggestionContainer = () => {
  suggestionsContainer.classList.add(HIDDEN_CLS)
}

const showSuggestionContainer = () => {
  suggestionsContainer.classList.remove(HIDDEN_CLS)
}


searchInput.addEventListener('keydown', (event) => {
  if (event.code === 'Tab') {
    return;
  }

  if (searchIndex === undefined && !isFetchingSearchIndex) {
    isFetchingSearchIndex = true
    promise = fetch('/search-data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Response has unexpected status ${response.status}: ${response.statusText}`)
        }
        return response.json()
      })
      .then(data => {
        searchIndex = data
      })
      .catch(err => {
        console.error(err);
        searchInput.disabled = true
      })
      .finally(() => {
        isFetchingSearchIndex = false
      })
  }

  if (timer) {
    clearTimeout(timer)
  }

  timer = setTimeout(async () => {
    const searchPhrase = event.target.value.toLowerCase().trim().replace(/\s+/ig, ' ')
    if (searchPhrase && searchPhrase.length >= MIN_CHARACTERS) {
      if (isFetchingSearchIndex) {
        suggestionsContainer.appendChild(buildSuggestionItem('ищем изо всех сил...'))
        showSuggestionContainer()
        await promise
      }

      clearSuggestionContainer()

      searchIndex
        .filter(article => article.title.toLowerCase().includes(searchPhrase))
        .slice(0, 5)
        .forEach(item => {
          suggestionsContainer.appendChild(buildSuggestionItem(item.title, item.url))
        })

      if (suggestionsContainer.children.length === 0) {
        suggestionsContainer.appendChild(buildSuggestionItem('Ничего не нашлось'))
      }

      showSuggestionContainer();
      let x = document.getElementById("search-suggestions");
      if (x) x = x.getElementsByTagName("a");

      if (event.key === "ArrowDown") {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (event.key === "ArrowUp") { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (event.key === "Enter" || event.keyCode === 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        event.preventDefault();

        // window.location.href = window.location.href + "bla-bla";
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }

      function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
      }

      function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (let i = 0; i < x.length; i++) {
          x[i].classList.remove("autocomplete-active");
        }
      }
    } else {
      hideSuggestionContainer()
    }
  }, DEBOUNCE_DELAY)
});

window.addEventListener('click', (event) => {
  if(event.target && event.target.className.indexOf('search') === 0) {
     return
  }

  hideSuggestionContainer()
})

searchInput.addEventListener('focus', () => {
  if (suggestionsContainer.innerText !== '') {
    showSuggestionContainer()
  }
})


