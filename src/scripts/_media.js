import {createElement, log} from './_utils.js'

export const userMediaError = (error) => error => log(error.name)

export const video = (stream, handleLoadedMetaData = () => {}) => {
    const $video = createElement('video', {
      muted: true,
      srcObject: stream,
    })

    $video.addEventListener('loadedmetadata', () => $video.play())
    $video.addEventListener('loadedmetadata', handleLoadedMetaData)

    return $video
}
