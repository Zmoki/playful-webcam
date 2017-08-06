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

const controlInput = (props) => {
  const {type, options, name, currentValue, onChange} = props

  switch (type) {
  case 'range':
    return createElement('input', {
      type: 'range',
      id: name,
      min: options.min,
      max: options.max,
      step: options.step,
      value: currentValue,
      onchange: (e) => onChange(e.target.value),
    })
    break
  case 'select':
    const $select = createElement('select', {
      id: name,
      onchange: (e) => onChange(e.target.value),
    })

    options.forEach(option => $select.add(createElement('option', {
      value: option,
      text: option,
      selected: option === currentValue,
    })))

    return $select
    break
  case 'check':
    return createElement('input', {
      type: 'checkbox',
      id: name,
      checked: options === currentValue,
      onchange: (e) => onChange(e.target.checked),
    })
    break
  }
}

export const control = (props) => {
  const {name} = props
  const $p = createElement('p')

  $p.append(createElement('label', {
    innerText: name,
    for: name,
  }))

  $p.append(controlInput(props))

  return $p
}
