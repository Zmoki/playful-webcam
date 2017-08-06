import devices from './devices.js'
import streamVideo from './stream-video.js'

const routes = {
  devices,
  'stream-video': streamVideo,
}

try {
  routes[window.location.toString().match(/pages\/(.+)\.html/)[1]]()
}
catch (error) {
  console.error(error)
}
