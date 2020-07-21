const fse = require('fs-extra');
const ejs = require('ejs');
const beautify = require('js-beautify');
const path = require('path');
const getCompiler = require('./getCompiler');

const createAction = (actions, options) => {
    const compiler = getCompiler({template: options.template});

    actions.forEach((action) => {
        const name = action.name;
        const init = action.init;
        const targetPath = path.join(options.targetDir, `actions/${name}.js`);

        let actionStr = compiler({
            methods: action.methods,
            init: init || ''
        });

        actionStr = beautify(actionStr, {
            'indent-size': 4
        });

        fse.outputFile(targetPath, actionStr, {
            encoding: 'utf-8'
        });

    });
}

module.exports = createAction;