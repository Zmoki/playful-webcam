import devices from './devices.js'

const routes = {
  devices,
}

try {
  routes[window.location.toString().match(/pages\/(.+)\.html/)[1]]()
}
catch (error) {
  console.error(error)
}
