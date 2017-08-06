import {log, output} from './_utils.js'

export default () => {
  navigator.mediaDevices.enumerateDevices()
    .then((devices) => devices.forEach((device) => output(`${device.kind}: ${device.label} id = ${device.deviceId}`)))
    .catch((err) => log(`${err.name}: ${err.message}`))
}
