const fse = require('fs-extra');
const ejs = require('ejs');

module.exports = (options) => {

    const {template} = options;


    const templateStr = fse.readFileSync(template, {
        encoding: 'utf-8'
    });

    const compiler = ejs.compile(templateStr);

    return compiler;
}