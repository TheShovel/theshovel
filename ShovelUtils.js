(function(Scratch) {
  const vm = Scratch.vm;
  'use strict';
vm.extensionManager.loadExtensionURL("http://localhost:8000/beta.js")
vm.extensionManager.loadExtensionURL("http://localhost:8000/utilities.js")
vm.extensionManager.loadExtensionURL("http://localhost:8000/CloudLinkWS.js")
vm.extensionManager.loadExtensionURL("http://localhost:8000/files.js")
vm.extensionManager.loadExtensionURL("http://localhost:8000/runtime-options.js")
  class ShovelUtils {
    getInfo () {
      return { 
        id: 'ShovelUtils',
        name: 'ShovelUtils',
        blocks: [{
          opcode: 'importImage',
          blockType: Scratch.BlockType.COMMAND,
          text: "Import image from [TEXT] name [NAME]",
          arguments: {
           TEXT: {
             type: Scratch.ArgumentType.STRING,
             defaultValue: 'https://packager.turbowarp.org/assets/default-icon.290e09e569a1cab8e61ba93b0d23863f.png',
           },
           NAME: {
             type: Scratch.ArgumentType.STRING,
             defaultValue: 'Apple',
           }
         }
         },
         {
          opcode: 'importSprite',
          blockType: Scratch.BlockType.COMMAND,
          text: "Import sprite from [TEXT]",
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '0',
            }
         }
         },
         {
          opcode: 'importSound',
          blockType: Scratch.BlockType.COMMAND,
          text: "Import sound from [TEXT] name [NAME]",
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://theshovel.github.io/kewlab-data/char%20edit.mp3',
            },
            NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Apple',
            }
         }
         },
         {
          opcode: 'importProject',
          blockType: Scratch.BlockType.COMMAND,
          text: "Import project from [TEXT]",
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://theshovel.github.io/Bullet-Hell/Bullet Hell.sb3',
            }
         }
         },
         {
          opcode: 'loadExtension',
          blockType: Scratch.BlockType.COMMAND,
          text: "Load extension from [TEXT]",
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://theshovel.github.io/utilities.js',
            }
         }
         },
         
         {
          opcode: 'restartProject',
          blockType: Scratch.BlockType.COMMAND,
          text: "Restart project",
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '0',
            }
         }
         },
         
          
        
      ]
      }
    }

    importImage({TEXT,NAME}) {
      fetch(TEXT)
  .then((r) => r.arrayBuffer())
  .then((arrayBuffer) => {
    const storage = vm.runtime.storage;
    vm.addCostume(NAME+'.PNG', {
      name: NAME,
      asset: new storage.Asset(
        storage.AssetType.ImageBitmap,
        null, // asset id, doesn't need to be set here because of `true` at the end will make Scratch generate it for you
        storage.DataFormat.PNG,
        new Uint8Array(arrayBuffer),
        true
      )
    })
  });
  }

importSprite ({TEXT}) {
  fetch(TEXT)
  .then(r => r.arrayBuffer())
  .then(buffer => vm.addSprite(buffer))
  .then(() => {
    console.log("Done");
  })
  .catch((error) => {
    console.log("Error", error);
  });
}

importSound ({TEXT,NAME}) {
fetch(TEXT)
  .then((r) => r.arrayBuffer())
  .then((arrayBuffer) => {
    const storage = vm.runtime.storage;
    const asset = new storage.Asset(
      storage.AssetType.Sound,
      null,
      storage.DataFormat.MP3,
      new Uint8Array(arrayBuffer),
      true
    );
    vm.addSound({
      md5: NAME+'.mp3',
      asset: asset,
      name: NAME
    });
  });
}

importProject ({TEXT}) {
  fetch(TEXT)
  .then(r => r.arrayBuffer())
.then(buffer => vm.loadProject(buffer))
  .then(() => {
    console.log("Done");
    vm.greenFlag()
  })
  .catch((error) => {
    console.log("Error", error);
  });
}

restartProject(){
vm.greenFlag()
}

loadExtension({TEXT}){
  vm.extensionManager.loadExtensionURL(TEXT)
}

}


  Scratch.extensions.register(new ShovelUtils());
})(Scratch);
