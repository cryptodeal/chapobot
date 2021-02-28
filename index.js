global.WebSocket = require('ws');
const Sockette = require('sockette');
const {initSocket} = require('./utils/socket');
const {constructComment} = require('./utils/opHelpers');
const host = 'www.chapo.chat';
const wsEndpoint = 'api/v1/ws';
const userSocketInstances = [];

//declare some temp constants for testing purposes
const user = {
  jwt: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NjQxOCwidG9rZW5faWQiOiI1OTUzMWViNy0zODcyLTQyN2UtYTBlNC03OTFhYjY4NGI4ZTIiLCJpc3MiOiJ3d3cuY2hhcG8uY2hhdCJ9.MrrzeWZ-x3fgo6nbD0koVKLzkW_o5Ww9peOLzkA4RTY",
  id: 6418
}
const post = {
  id: 88066
}
const commentBody = "asdlkfj"


const userLifeCycle = (user, commentBody, post, next) => {
  const userSocket = initSocket();
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

userLifeCycle(user, commentBody, post)


