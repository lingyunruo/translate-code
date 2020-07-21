const fse = require('fs-extra');
const path = require('path');
const beautify = require('js-beautify').css;
const getCompiler = require('./getCompiler');


module.exports = (config, options) => {

    const {template, targetDir} = options;
    const compiler = getCompiler({template});

    config.forEach((item) => {
        const outputPath = path.join(targetDir, item.fileName);

        let str = compiler({
            data: item.content,
            compiler: compiler
        });

        str = beautify(str, {
            'indent-size': 4
        });
        fse.outputFile(outputPath, str, {
            encoding: 'utf-8'
        });
    });


}