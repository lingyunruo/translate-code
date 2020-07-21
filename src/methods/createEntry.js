const fse = require('fs-extra');
const path = require('path');
const getCompiler = require('./getCompiler');

module.exports = (config, option) => {

    const targetPath = path.join(option.targetDir, 'main.js');
    const models = config.component.models;
    const compiler = getCompiler({
        template: option.template
    });

    const content = compiler({
        models: models || [],
        container: config.component.componentName,
        domId: 'root'
    });


    fse.outputFileSync(targetPath, content, {
        encoding: 'utf-8'
    });
}