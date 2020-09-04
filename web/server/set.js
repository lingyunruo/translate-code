const express = require('express');
const ejs = require('ejs');
const path = require('path');

module.exports = (app) => {
    app.use('/static', express.static(path.join(__dirname, '../../example/build')));
    app.engine('html', ejs.renderFile);
    app.set('views', path.join(__dirname, './template/'));
    app.set('view engine', 'ejs');
}