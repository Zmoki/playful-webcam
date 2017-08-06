export const q = (selector) => Array.prototype.slice.apply(document.querySelectorAll(selector))

export const createElement = (tagName, options = {}) => {
  const $el = document.createElement(tagName)

  for (let key in options) {
    $el[key] = options[key]
  }

  return $el
}

export const log = (value) =>
  q('.log')[0].append(createElement('p', {innerText: JSON.stringify(value)}))

export const output = (value) =>
  q('.output')[0].append((typeof value === 'string') ? createElement('p', {innerText: value}) : value)

export const controls = ($control) => q('.controls')[0].append($control)

export const control = (props) => {
  const {type} = props

  switch (type) {
    case 'button':
      return createElement('button', {
        type: 'button'
      })
      break
    default:
      return null
      break
  }
}
