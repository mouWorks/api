"use strict";

const express = require('express');
const app = express();

let version = '0004';
let message = 'Api @port 3005 : ver' + version;

app.get('/', (req, res) => res.send(message));

app.listen(3005, () => console.log('Listening on 3005 port'));