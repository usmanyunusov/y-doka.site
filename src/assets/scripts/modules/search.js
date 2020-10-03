const DEBOUNCE_DELAY = 300
const MIN_CHARACTERS = 3
const HIDDEN_CLS = 'search__suggestions__hidden'

const searchInput = document.getElementById('search')
const suggestionsContainer = document.getElementById('search-suggestions')

let isFetchingSearchIndex = false
let promise
let searchIndex
let timer

const buildSuggestionItem = (caption, url) => {
  let item;
  if (typeof url !== 'string') {
    item = document.createElement('div')
  } else {
    item = document.createElement('a')
    item.href = url
    item.rel = 'noopener'
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

      showSuggestionContainer()
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
