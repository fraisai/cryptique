const express = require('express');
import { Request, Response } from 'express';
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const mongoose = require('mongoose');
const app = express();
// const { SignalingChannel } = require('rtconnect');
// const SFUSignalingChannel = require('./SFUSignalingChannel')

const PORT = 5000;
const authenticationRouter = require('./routes/authenticationRoutes');
const cryptApiRouter = require('./routes/cryptRoutes');

// MIDDLEWARE
app.use(
  cors({
    credentials: true,
  }),
);

app.use(cookieParser());
app.use(express.json()); // express's built in body-parser - parse JSON bodies, this gives ability to "read" incoming req.body/JSON object
app.use(express.urlencoded({ extended: true }));

app.use('/', authenticationRouter);
app.use('/crypt', cryptApiRouter);

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// app.get('/crypt/coins', (req: Request, res: Response) => {
//     return res.status(200).json('HEYY');
//   });

// app.use('/build', express.static(path.join(__dirname, '../build')));

// app.get('/', (req: Request, res: Response) => {
//   res.sendFile(path.resolve(__dirname, '../index.html'));
// });

// app.get('/', (req: Request, res: Response) => {
//     return res.status(400).sendFile(path.resolve(__dirname, '../build/index.html')); // how I fixed getting the trending page when I manually type in localhost:8080/trending and press enter
// })

const MONGO_URL = 'mongodb+srv://ray:ray@ts-auth.aakpcl3.mongodb.net/';
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error)); // https://www.youtube.com/watch?v=b8ZUb_Okxro 34:52

// RTC TEST
import WebSocket, { WebSocketServer } from 'ws';
import { Server } from 'http';
import { Server as httpsServer } from 'https';

const actions = {
  CONNECTION: 'CONNECTION',
  OFFER: 'OFFER',
  ANSWER: 'ANSWER',
  LOGIN: 'LOGIN',
  ICECANDIDATE: 'ICECANDIDATE',
  LEAVE: 'LEAVE',
  CREATE_ROOM: 'CREATE_ROOM',
  JOIN_ROOM: 'JOIN_ROOM',

  WECOME: 'WELCOME',
  USER_LEFT: 'USER_LEFT',
};

const { OFFER, ANSWER, ICECANDIDATE, LOGIN, LEAVE, USER_LEFT } = actions;

declare class MyWebSocket extends WebSocketServer {
  id?: string;
}

interface myClass {
  webSocketServer: MyWebSocket;
  peers: Map<string, MyWebSocket>;
  consumers: Map<string, MyWebSocket[]>;
}
class SFUSignalingChannel {
  webSocketServer: MyWebSocket;
  peers: Map<string, MyWebSocket>; // same as users
  consumers: Map<string, MyWebSocket[]>;

  constructor(server: Server | httpsServer | number) {
    this.webSocketServer = typeof server === 'number' ? new WebSocket.Server({ port: server }) : new WebSocket.Server({ server: server });
    this.peers = new Map();
    this.consumers = new Map();
  }

  initializeConnection() {
    this.webSocketServer.on('connection', (socket: MyWebSocket) => {
      let peerId = Math.random().toString();
      socket.id = peerId;
      console.log('A user has connected to the websocket server.', 'peerId:', peerId, 'socket: ', socket);

      socket.close = (event) => {
        //         const userToDelete = this.getByValue(this.peers, socket);
        // let user = '';
        // for (const [key, value] of this.peers.entries()) {
        //   if (value === socket) user = key;
        // }
        // const userToDelete = user;
        // this.peers.delete(userToDelete);
        // this.consumers.delete(userToDelete);
        // const userLeftPayload = {
        //     ACTION_TYPE: USER_LEFT,
        //     payload: socket.id
        // }
        // this.peers.forEach(function(peer) {
        //     if (peer.socket.readyState === WebSocket.OPEN) {
        //         this.peer.socket.send(JSON.stringify(userLeftPayload));
        //     }
        // })
      };
      // END onCLOSE
    });
  }
}

// const sc = new SignalingChannel(server);
// sc.initializeConnection();

const sc_SFU = new SFUSignalingChannel(server);
sc_SFU.initializeConnection();
