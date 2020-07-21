

const trans = require('../src/index');
const projectConfig = require('./project.config');

Object.values(projectConfig.components).forEach((key) => {

    const config = require(`./source-code/${key}/page.config.js`);

    trans(config, projectConfig);

});