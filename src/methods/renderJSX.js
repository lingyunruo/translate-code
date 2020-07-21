const fse = require('fs-extra');
const path = require('path');
const beautify = require('js-beautify').html;
const ejs = require('ejs');
const getCompiler = require('./getCompiler');
let templatePath = '';
let compiler = null

const renderJsx = ({name, props, template}) => {
    if(template) {
        templatePath = template;
        compiler = getCompiler({template: path.join(templatePath, 'jsx.ejs')});
    }
    const newProps = {};

    Object.keys(props).forEach((key) => {
        if(key !== 'children') {
            let type = props[key].type;
            if(type === 'string') {
                newProps[key] = `"${props[key].content}"`
            }
            else if(type === 'expression') {
                newProps[key] = `{${props[key].content}}`;
            }
        }
    });
    
    let jsx = compiler({
        name: name,
        props: newProps,
        renderJsx: renderJsx,
        children: props.children
    });
    
    jsx = beautify(jsx, {
        'indent-size': 4
    });

    return jsx;

}

module.exports = renderJsx;