global.WebSocket = require('ws');
const Sockette = require('sockette');
const fs = require('fs');
const HideMyNameVPN = require('hide-my-name-vpn').default
const {constructComment} = require('./utils/opHelpers');
const {importData} = require('./utils/data');
const hideMyName = new HideMyNameVPN();
const host = 'www.chapo.chat';
const wsEndpoint = 'api/v1/ws';
const userSocketInstances = [];

const userLifeCycle = async (user, commentBody, post) => {
  let rawdata = await fs.readFileSync('data.json');
  let data = JSON.parse(rawdata);
  console.log(data);

  const userSocket = new Sockette(`wss://${host}/${wsEndpoint}`, {
    timeout: 500,
    maxAttempts: 10,
    onopen: e => {
      userSocket.ws = e.target;
      isOpen = true;
      console.log(`${user.username} connected!`, e)
    },
    onmessage: e => {
      console.log('Received:', e)
    },
    onreconnect: e => console.log('Reconnecting...', e),
    onmaximum: e => console.log('Stop Attempting!', e),
    onclose: e => console.log('Closed!', e),
    onerror: e => console.log('Error:', e)
  })
  let count = 0;
  setInterval(() => {
    if(userSocket.ws){
      while(count < 1){
        let commentPayload = constructComment(user, commentBody, post)
        userSocket.json(commentPayload)
        count++;
      }
      console.log(`done!!!`)
    } else {
      console.log(`UserID: ${user.id} opening connection`)
    }
  }, 1000);
}

//Testing:
  //userLifeCycle(user, commentBody, post)
  //importData().then(data => {
    //data.users.map(user => userLifeCycle(user, commentBody, post))
  //})

(async () => {
  const proxy = await hideMyName.getRandomProxy({
    maxDelay: 1000,
  });

  console.log(proxy);
})();


