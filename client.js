console.log("_____client.js hi from client")
const WebSocket = require('ws')

const url = 'ws://88f60053fab4.ngrok.io'
const connection = new WebSocket(url)
 
connection.onopen = () => {
  connection.send('Message From Client')
}
 
connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`)
}
 
connection.onmessage = (e) => {
  console.log(e.data)
}