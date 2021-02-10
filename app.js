const init = () => {

  const unityInstance = window.UnityLoader.instantiate(
    'unityContainer',
    'Build/x-wing-webgl.json',
    { onProgress: window.UnityProgress }
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