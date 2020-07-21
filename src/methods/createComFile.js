const fse = require('fs-extra');
const path = require('path');
const beautify = require('js-beautify');
const getCompiler = require('./getCompiler');
const createJSX = require('./renderJSX');


function findChildrenName(children) {
    let names = [];
    children.forEach((item) => {
        if(typeof item === 'object' && item.name) {
            names.push(item.name);
            if(item.props && item.props.children && item.props.children.length > 0) {
                names = names.concat(findChildrenName(item.props.children));
            }
        }
    });

    return names;
}

module.exports = (config, options) => {

    const {template, targetDir, project} = options;
    const compiler = getCompiler({template});
    const compPath = path.join(targetDir, 'components', config.componentName, 'index.js');

    let childrenNames = config.props.children ? findChildrenName(config.props.children) : [];
    let children = {};

    childrenNames.forEach((name) => {
        if(project.components[name]) {
            children[name] = project.components[name]
        }
    });

    let content = compiler({
        lessPath: config.less,
        actions: config.actions,
        children: children,
        model: config.models.length > 0
    });

    content = beautify(content, {
        'indent-size': 4
    });

    content = content.replace('/*@@*/', createJSX({
        name: config.name,
        props: config.props,
        template: path.dirname(template)
    }));

    fse.outputFile(compPath, content, {
        encoding: 'utf-8'
    });
}