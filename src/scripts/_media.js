import {log} from './_utils.js'

export const userMediaError = (error) => error => log(error.name)

export const video = (stream, handleLoadedMetaData = () => {}) => {
    let $video = document.createElement('video')

    $video.muted = true
    $video.srcObject = stream
    $video.addEventListener('loadedmetadata', () => $video.play())
    $video.addEventListener('loadedmetadata', handleLoadedMetaData)

    return $video
}
