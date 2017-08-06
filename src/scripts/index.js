import devices from './devices.js'
import streamVideo from './stream-video.js'
import recordVideo from './record-video.js'
import takePhoto from './take-photo.js'

const routes = {
  devices,
  'stream-video': streamVideo,
  'record-video': recordVideo,
  'take-photo': takePhoto,
}

try {
  routes[window.location.toString().match(/pages\/(.+)\.html/)[1]]()
}
catch (error) {
  console.error(error)
}
