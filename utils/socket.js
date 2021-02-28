global.WebSocket = require('ws');
const Sockette = require('sockette');
const host = 'www.chapo.chat';
const wsEndpoint = 'api/v1/ws'

exports.initSocket = () => {
  const socket = new Sockette(`wss://${host}/${wsEndpoint}`, {
    timeout: 500,
    maxAttempts: 10,
    onopen: e => {
      socket.ws = e.target;
      isOpen = true;
      console.log('Connected!', e)
    },
    onmessage: e => {
      console.log('Received:', e)
    },
    onreconnect: e => console.log('Reconnecting...', e),
    onmaximum: e => console.log('Stop Attempting!', e),
    onclose: e => console.log('Closed!', e),
    onerror: e => console.log('Error:', e)
  })
  return socket;
}

