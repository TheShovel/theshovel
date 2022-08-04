https://sheeptester.github.io/javascripts/utilities.js
https://mwalters75.github.io/TurboFoolishness/TurboFoolishness.js
https://rixxyx.rixthetyrunt.repl.co/beta.js

fetch("https://packager.turbowarp.org/assets/default-icon.290e09e569a1cab8e61ba93b0d23863f.png")
  .then((r) => r.arrayBuffer())
  .then((arrayBuffer) => {
    const storage = vm.runtime.storage;
    vm.addCostume("this part doesnt matter but the file extension does.png", {
      name: "abc",
      asset: new storage.Asset(
        storage.AssetType.ImageBitmap,
        null,
        storage.DataFormat.PNG,
        new Uint8Array(arrayBuffer),
        true
      )
    })
  });