const initialState = [
  'then',
  'then',
  'catch',
  'then',
  'then',
  'catch',
  'catch',
  'then',
]

const container = document.getElementById('promise-chain')
const insertZone = document.createElement('div')
insertZone.classList.add('insert-zone')
insertZone.textContent = ''
let draggedElement;
container.ondragend = (event) => {
  event.preventDefault()
  colorElements()
  draggedElement.style.scale = '1'
}


const clearContainer = () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

const dragStartHandler = (event) => {
  draggedElement = event.target;
  draggedElement.style.scale = '1.2'
  event.dataTransfer.setDragImage(insertZone, 0, 0)
  return false
}

const dragOverHandler = (event) => {
  event.preventDefault()
  const hoveredEl = event.target
  const midPoint = hoveredEl.offsetTop + hoveredEl.offsetHeight / 2
  if (event.pageY <= midPoint) {
    hoveredEl.before(draggedElement)
  } else {
    hoveredEl.after(draggedElement)
  }
  colorElements()
}

const onDropHandler = (event) => {
  event.preventDefault()
  draggedElement.style.scale = '1'
  event.target.before(draggedElement)
}

const render = (state) => {

  const renderBlock = (name, isDragAndDropSupported = true) => {
    const block = document.createElement('div')
    block.classList.add(`block-${name}`)
    block.textContent = `.${name}(...)`
    if (isDragAndDropSupported) {
      block.draggable = true
      block.addEventListener('dragstart', dragStartHandler)
      block.addEventListener('dragover', dragOverHandler)
      block.addEventListener('drop', onDropHandler)
    }

    container.appendChild(block)
  }

  const renderThen = () => renderBlock('then')
  const renderCatch = () => renderBlock('catch')

  clearContainer()
  state.forEach(block => {
    switch (block) {
      case 'then':
        renderThen()
        break
      case 'catch':
        renderCatch()
        break
    }
  });
}

const blockColors = ['rgba(255, 168, 0, .15)', 'rgba(235, 0, 255, .15)', 'rgba(0, 0, 255, .15)', 'rgba(0, 255, 0, .15)']

const colorElements = () => {
  let colorPos = 0
  const nodes = container.children
  let isLastBlockProcessed = false;
  for (let i = nodes.length - 1; i >= 0; --i) {
    const node = nodes[i]
    if (!isLastBlockProcessed) {
      if (node.classList.contains('block-catch')) {
        isLastBlockProcessed = true
      } else {
        node.style.backgroundColor = ''
      }
    } else if (node.classList.contains('block-then')) {
      const isFirstInBlock = node.nextSibling !== null && node.nextSibling.classList.contains('block-catch')
      if (isFirstInBlock) {
        const color = blockColors[colorPos]
        colorPos++
        node.style.backgroundColor = color
      } else {
        node.style.backgroundColor = node.nextSibling.style.backgroundColor
      }
    }
  }

}

render(initialState)
colorElements()
