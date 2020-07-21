const fse = require('fs-extra');
const path = require('path');
const beautify = require('js-beautify');
const getCompiler = require('./getCompiler');

const createModel = (models, options) => {

    const {
        template, 
        targetDir
    } = options;
    const templateCompiler = getCompiler({template});

    models.forEach((model) => {

        const modelName = model.name;
        const targetFilePath = path.join(targetDir, 'models', `${modelName}.js`);

        Object.keys(model.data).forEach((key) => {
            if(typeof model.data[key] === 'string') {
                model.data[key] = `"${model.data[key]}"`
            }
        });

        let modelStr = templateCompiler({
            name: modelName,
            data: model.data,
            methods: model.methods
        });
        
        modelStr = beautify(modelStr, {
            'indent-size': 4
        });

        fse.outputFile(targetFilePath, modelStr, {
            encoding: 'utf8'
        })
    });

}

module.exports = createModel;