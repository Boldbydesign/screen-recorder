const { start, end } = require('../../fixtures/diversify')
const loadFfmpeg = require('./loadFfmpeg')
const createReadableVideoBuffer = require('./create-readable-video-buffer')

diversify.createVideoFile = async function (filePath) {
    const ffmpeg = loadFfmpeg()
    const readableVideoBuffer = createReadableVideoBuffer()

    await ffmpeg
        .input(readableVideoBuffer)
    await ffmpeg
        .output(filePath)
        .output(filePath)
        .withNoAudio()
        .on('start', start)
        .on('end', end)
        .run()
}