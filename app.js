createUnityInstance(document.querySelector("#unity-canvas"), {
  dataUrl: "Build/x-wing-1_01.data.unityweb",
  frameworkUrl: "Build/x-wing-1_01.framework.js.unityweb",
  codeUrl: "Build/x-wing-1_01.wasm.unityweb",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "Sriram Sivarajah",
  productName: "X-Wing Miniatures",
  productVersion: "1.01",
})
.then((unityInstance) => {
  unityInstance.SendMessage("Loader", "clientIsWebGL")

  document.querySelector('body').addEventListener('paste', event => {
    unityInstance.SendMessage(
      'Loader',
      'pasteFromBrowser',
      event.clipboardData.getData("Text")
    )
  })
});

setTimeout(() => {
  window.alert('Load xws data from raithos.github.io or any other squad builder')
}, 1000)
