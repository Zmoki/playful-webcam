import {output} from './_utils.js'
import {video, userMediaError} from './_media.js'

const userMediaSuccess = stream => output(video(stream))

export default () => {
  const constraints = {
    video: true,
    audio: true,
  }

  navigator.mediaDevices.getUserMedia(constraints)
    .then(userMediaSuccess)
    .catch(userMediaError)
}
