import {output} from './_utils.js'
import {video, userMediaError} from './_media.js'

export default () => {
  const constraints = {
    video: true,
    audio: true,
  }

  navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => output(video(stream)))
    .catch(userMediaError)
}
