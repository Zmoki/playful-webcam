/* eslint no-console: off */
const ngrok = require('ngrok')
const browserSync = require('browser-sync')
const fs = require('fs')

const config = {
  port: 3006,
  server: './src',
  files: './src',
  open: false,
}

browserSync(config, (error, bs) => {
  if (error) {
    throw new Error(error)
  }

  ngrok.connect(bs.options.get('port'), (error, url) => {
    if (error) {
      throw new Error(error)
    }

    console.log('Open in browser: ', url)
  })
})
