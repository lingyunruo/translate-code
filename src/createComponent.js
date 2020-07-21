const path  = require('path');
const createModels = require('./methods/createModel');
const createAction = require('./methods/createActions');
const createLess = require('./methods/createLess');
const createComponent = require('./methods/createComFile');
const createEntry = require('./methods/createEntry');

module.exports = (config, options) => {
    const {templateDir, project} = options;
    const targetDir = project.baseDir;

    if(config.models) {
        createModels(config.models, {
            template: path.join(templateDir, 'models/model.ejs'),
            targetDir: targetDir
        });
    }
    if(config.actions) {
        createAction(config.actions, {
            template: path.join(templateDir, 'actions/action.ejs'),
            targetDir: targetDir
        });
    }
    if(config.less) {
        createLess(config.less, {
            template: path.join(templateDir, 'style/less.ejs'),
            targetDir: targetDir
        });
    }
    if(config.component) {
        createComponent(config.component, {
            template: path.join(templateDir, 'components/component.ejs'),
            targetDir: targetDir,
            project: project
        });
    }

    config.rootComponent && createEntry(config, {
        template: path.join(templateDir, 'main/main.ejs'),
        targetDir: targetDir
    });
}