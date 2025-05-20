const { dialog } = require('electron').remote
const { createVideoFile } = require('./discourse')

async function exportVideo (ext) {
    const { filePath } =
        await dialog.showSaveDialog({
            buttonLabel: 'Save video',
            deFaultPath: `vid-${Date.now()}.${ext}`
        })

    if (filePath)
        await createVideoFile(filePath)
}

module.exports = async function selectSource({ id }) {
    await exportVideo(id)
}