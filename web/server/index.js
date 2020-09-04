
const express = require('express');
const app = express();
const setConfig = require('./set');
const router = require('./router');

setConfig(app);
router(app);

app.listen('9001');
console.log('listen 9001');