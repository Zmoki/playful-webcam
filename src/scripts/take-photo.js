import {log, output, createElement, controls} from './_utils.js'
import {video, userMediaError} from './_media.js'

const takePhotoSuccess = (blob) => output(createElement('img', {
  src: URL.createObjectURL(blob),
  onload: (e) => URL.revokeObjectURL(e.target.src),
}))

const takePhotoError = (error) => log(error.message)

const userMediaSuccess = stream => {
  output(video(stream))

  const imageCapture = new ImageCapture(stream.getVideoTracks()[0])

  controls(createElement('button', {
    type: 'button',
    innerText: 'Take photo',
    onclick: () => imageCapture.takePhoto()
      .then(takePhotoSuccess)
      .catch(takePhotoError)
  }))
}

export default () => {
  const constraints = {
    video: true,
    audio: false,
  }

  navigator.mediaDevices.getUserMedia(constraints)
    .then(userMediaSuccess)
    .catch(userMediaError)
}
