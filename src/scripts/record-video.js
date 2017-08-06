import {output, controls, createElement} from './_utils.js'
import {video, userMediaError} from './_media.js'

const userMediaSuccess = (stream) => {
  output(video(stream))

  let chunks = []
  const mediaRecorder = new MediaRecorder(stream)
  const $record = createElement('button', {
    type: 'button',
    innerText: 'Record',
    onclick: () => {
      mediaRecorder.start()
      $record.hidden = true
      $stop.hidden = false
    }
  })
  const $stop = createElement('button', {
    type: 'button',
    innerText: 'Stop',
    hidden: true,
    onclick: () => {
      mediaRecorder.stop()
      $record.hidden = false
      $stop.hidden = true
    }
  })

  mediaRecorder.onstop = () => output(createElement('video', {
    src: URL.createObjectURL(new Blob(chunks, {'type': 'video/webm'})),
    controls: true,
  }))

  mediaRecorder.ondataavailable = (e) => chunks.push(e.data)

  controls($record)
  controls($stop)
}

export default () => {
  const constraints = {
    video: true,
    audio: true,
  }

  navigator.mediaDevices.getUserMedia(constraints)
    .then(userMediaSuccess)
    .catch(userMediaError)
}
