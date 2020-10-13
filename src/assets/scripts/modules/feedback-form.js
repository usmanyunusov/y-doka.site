const optionalFeedbackCells = document.querySelectorAll('.feedback-form__optional-feedback')
const textArea = document.querySelector('.feedback-form__textarea')
const submitButton = document.querySelector('.feedback-form__actionbar button[type=submit]')

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
		if (cell.classList.has('feedback-form__cell')) {
			window.scrollTo({
				top: submitButton.offsetTop,
				left: 0,
				behavior: 'smooth'
			})
		}
	})
})