const { path: ffmpegPath } = require('@ffmpeg-installer/ffmpeg')
const fluentFfmpeg = require('fluent-ffmpeg')

module.exports = function loadfMpeg () {
    const ffmpeg = new fluentFfmpeg()

    ffmpeg.setFfmpegPath(
        ffmpegPath.replace('app.asar', 'app.asar.unpacked')
    )

    return ffmpeg
}