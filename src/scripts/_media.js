import {createElement, log, controls} from './_utils.js'

export const userMediaError = (error) => log(error.name)

export const video = (stream, onLoadedMetaData) => {
  const $video = createElement('video', {
    muted: true,
    srcObject: stream,
  })

  $video.addEventListener('loadedmetadata', () => $video.play())
  $video.addEventListener('loadedmetadata', onLoadedMetaData)

  return $video
}

export const record = (stream, onStop) => {
  let chunks = []
  const mediaRecorder = new MediaRecorder(stream)
  const $record = createElement('button', {
    type: 'button',
    innerText: 'Record',
    onclick: () => {
      mediaRecorder.start()
      $record.hidden = true
      $stop.hidden = false
    },
  })
  const $stop = createElement('button', {
    type: 'button',
    innerText: 'Stop',
    hidden: true,
    onclick: () => {
      mediaRecorder.stop()
      $record.hidden = false
      $stop.hidden = true
    },
  })

  mediaRecorder.onstop = () => onStop(chunks)

  mediaRecorder.ondataavailable = (e) => chunks.push(e.data)

  controls($record)
  controls($stop)
}
