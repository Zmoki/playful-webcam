import {output, createElement} from './_utils.js'
import {video, record, userMediaError} from './_media.js'

const userMediaSuccess = (stream) => {
  output(video(stream))

  record(stream, (chunks) => output(createElement('audio', {
    src: URL.createObjectURL(new Blob(chunks, {'type' : 'audio/ogg; codecs=opus'})),
    controls: true,
  })))
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
