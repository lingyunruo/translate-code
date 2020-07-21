const path = require('path');

module.exports = {
    models: [],
    actions: [],
    less: [{
        fileName: 'components/Header/index.less',
        content: {
            'page-wrapper': {
                width: 'auto',
                children: {
                    'header-bar': {
                        width: '100%',
                        height: '80px',
                        background: 'red'
                    }
                }
            }
        }
    }],
    component: {
        componentName: 'Header',
        name: 'div',
        less: [
            'components/Header/index.less'
        ],
        models: [],
        actions: [],
        props: {
            className: {
                type: 'string',
                content: 'header-bar'
            },
            children: ['{props.children}']
        }
    }
}