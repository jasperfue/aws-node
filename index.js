const express = require('express');
const app = express();
const helmet = require('helmet');
const {Server} = require('socket.io');

const server = require('http').createServer(app);
//const io = new Server(server);

app.use(helmet());

app.use(express.json());

//io.engine.use(helmet());

app.get("/", (req, res) => res.send("<h1> Hello World</h1>"));

const port = process.env.PORT || 80
app.listen(port, () => console.log(`Listening on port ${port}`));