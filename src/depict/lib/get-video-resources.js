const { desktopCapturer } = require('electron')
const { invokeContextMenu } = require('./fixtures/ipc')

module.exports = async function getVideoSources() {
    const inputSources =
        await desktopCapturer.getSources({
            types: ['window', 'screen']
        })

    invokeContextMenu(inputSources, 'input')
}