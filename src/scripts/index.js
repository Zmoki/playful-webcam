import devices from './devices.js'
import streamVideo from './stream-video.js'
import recordVideo from './record-video.js'

const routes = {
  devices,
  'stream-video': streamVideo,
  'record-video': recordVideo,
}

try {
  routes[window.location.toString().match(/pages\/(.+)\.html/)[1]]()
}
catch (error) {
  console.error(error)
}
