import {output, log, controls, control} from './_utils.js'
import {video, userMediaError} from './_media.js'

const controlType = (capability) => {
  if (capability.step !== undefined) {
    return 'range'
  }

  if (Array.isArray(capability)) {
    return 'select'
  }

  if (typeof capability === 'boolean') {
    return 'check'
  }
}

const onCapabilitiesReady = (streamTrack) => {
  const capabilities = streamTrack.getCapabilities()
  const settings = streamTrack.getSettings()

  log(capabilities)

  for (let key in capabilities) {
    controls(control({
      type: controlType(capabilities[key]),
      name: key,
      options: capabilities[key],
      currentValue: settings[key],
      onChange: (value) => streamTrack.applyConstraints({advanced: [{[key]: value}]}),
    }))
  }
}

const userMediaSuccess = stream => {
  const streamTrack = stream.getVideoTracks()[0]

  output(video(stream, () => {
    window.setTimeout(() => (
      onCapabilitiesReady(streamTrack)
    ), 500)
  }))
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
