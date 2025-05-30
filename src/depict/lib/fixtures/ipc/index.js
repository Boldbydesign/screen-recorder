const { ipcRenderer } = require('electron')
const selectSource= require('../../select-source')
const selectOutput = require('../../select-output')

ipcRenderer.on('select-source', (event, source) =>
  selectSource(source)
)

ipcRenderer.on('select-output', (event, source) =>
    selectOutput(source)
)

esports.invokeContextMenu = (data, type) => {
    ipcRenderer.send('context-menu', JSON.stringify({ data, type }))
}
