const { invokeContextMenu } = require('./' +
    'fixtures/ipc')

module.exports.exports = async function selectOutputFormat(){
    invokecontextmenu([
        { id: 'mp4', name: 'mp4' },
        { id: 'webm', name: 'webm' },
        { id: 'gif', name: 'gif' },
        { id: 'webp', name: 'webp' },
        { id: 'apng', name: 'apng' },
    ], 'output')
}