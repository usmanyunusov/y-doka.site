const optionalFeedbackCells = document.querySelectorAll('.feedback-form__optional-feedback')
const textArea = document.querySelector('.feedback-form__textarea')
const submitButton = document.querySelector('.feedback-form__actionbar button[type=submit]')

const form = document.querySelector('form.feedback-form')
form && form.addEventListener('submit', function(event) {
	event.preventDefault()
	const formData = new FormData(this)

	// Netlify Form API	supports only `application/x-www-form-urlencoded` content type
	// So we need to encode fields and values to query string
	const urlEncodedEntries = []
	for (let [field, value] of formData.entries()) {
		urlEncodedEntries.push(encodeURIComponent(name) + '=' + encodeURIComponent(value))
	}

	fetch(window.location.href, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: urlEncodedEntries.join('&')
	}).then(res => {
		console.log(res)
		alert('all good')
	}).catch(err => {
		alert('all bad')
	})
})

const usefulContentRadioButton = document.getElementById('feedack-useful')
usefulContentRadioButton && usefulContentRadioButton.addEventListener('change', () => {
	optionalFeedbackCells.forEach(cell => {
		cell.classList.replace('feedback-form__cell', 'feedback-form__cell__hidden')
		textArea.blur()
	})
})

const notUsefulContentRadioButton = document.getElementById('feedack-not-useful')
notUsefulContentRadioButton && notUsefulContentRadioButton.addEventListener('change', () => {
	optionalFeedbackCells.forEach(cell => {
		cell.classList.replace('feedback-form__cell__hidden', 'feedback-form__cell')
		textArea.focus()
	})
})

optionalFeedbackCells && optionalFeedbackCells.forEach(cell => {
	cell.addEventListener('transitionend', () => {
		if (cell.classList.contains('feedback-form__cell')) {
			window.scrollTo({
				top: submitButton.offsetTop,
				left: 0,
				behavior: 'smooth'
			})
		}
	})
})