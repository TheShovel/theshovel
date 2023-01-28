class IpInfo {

  constructor() {}

  getInfo() {
    return {
      id: 'IpInfo',
      name: 'yes',

      color1: '#a87e85',

      blocks: [
        {
          opcode: 'IP',

          blockType: Scratch.BlockType.REPORTER,

          text: 'Ip adress',
          arguments: {
          }
        },

      ]
    }
  }

  IP() {
    return fetch("https://api.db-ip.com/v2/free/self").then(res => res.text())
      .catch(err => '');
  }
  
}

Scratch.extensions.register(new IpInfo());

