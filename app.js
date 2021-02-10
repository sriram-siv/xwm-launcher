const init = () => {

  const unityInstance = window.UnityLoader.instantiate(
    'unityContainer',
    'Build/x-wing-webgl.json',
    {
      onProgress: (instance, progress) => {
        if (progress >= 1) {
          setTimeout(() => instance.SendMessage('Loader', 'clientIsWebGL'), 5000)
        }
      }
    }
  )

  const getClipboard = event => {
    return event.clipboardData.getData('Text')
  }

  document.querySelector('body').addEventListener('paste', event => {
    unityInstance.SendMessage(
      'Loader',
      'pasteFromBrowser',
      getClipboard(event)
    )
  })

}

window.addEventListener('DOMContentLoaded', init)