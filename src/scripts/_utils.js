export const log = (value) => {
  const $log = document.querySelector('.log')
  const $p = document.createElement('p')

  $p.innerText = JSON.stringify(value)

  $log.append($p)
}

export const output = (value) => {
  let $output = document.querySelector('.output')

  if (typeof value === 'string') {
    let $p = document.createElement('p')

    $p.innerText = JSON.stringify(value)

    $output.append($p)

    return
  }

  $output.append(value);
}
