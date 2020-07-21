const path = require('path');
const createComponent = require('./createComponent');
const templateDir = path.join(__dirname, './template/');
const fse = require('fs-extra');

const main = (config, project) => {

    createComponent(config, {
        templateDir: templateDir,
        project: project
    });
};



module.exports = main 