document
    .getElementById('stopBtn')
    .addEventListener('click', ({ target }) => {
        const startBtn = document.getElementById('startBtn')
        const SaveBtn = document.getElementById('saveBtn')
        const videoSelectBtn = document.getElementById('videoSelectBtn')

        window.mediaRecorder.stop()

        startBtn
            .classList
            .remove('is-danger')

        startBtn.textContent = 'Start'

        target.setAttribute('disabled', 'disabled')

        startBtn.removeAttribute('disabled')
        save.Btn.removeAttribute('disabled')
        videoSelectBtn.removeAttribute('disabled')
    })