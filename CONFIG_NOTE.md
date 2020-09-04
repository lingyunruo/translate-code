rootComponent: true,
models: [{
    name: 'page1',
    data: {
        name: 'aaa',
        age: 111
    },
    methods: {
        alertName: `function() {alert(this.name)}`
    }
}, {
    name: 'model2',
    data: {
        name: '222' 
    },
    methods: {
        goName: `function() {alert(this.name)}`
    }
}],
actions: [{
    name: 'mainAct',
    init: `this.init`,
    methods: {
        init: `function() {
            this.models.page1.set({
                name: '阿拉蕾'
            });
        }`
    }
}, {
    name: 'secondAct',
    methods: {
        pushName: `function() {
            this.models.model2.set({
                name: []
            });
        }`
    }
}],
less: [{
    fileName: 'common/style/index.less',
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
        },
        'footer-box': {
            width: '100%',
            height: '100px'
        }
    }
}],
component: {
    componentName: 'Homepage',
    name: 'div',
    less: [
        'common/style/index.less'
    ],
    models: [
        'page1',
        'model2'
    ],
    actions: [
        'mainAct'
    ],
    props: {
        className: {
            type: 'string',
            content: 'page-wrapper'
        },
        children: [{
            name: 'Header',
            props: {
                nameAttr: {
                    type: 'string',
                    content: 'lll'
                },
                children: [{
                    name: 'Logo',
                    props: {
                        onClick: {
                            type: 'expression',
                            content: "action.alert"
                        },
                        children: [{
                            name: 'img',
                            props: {
                                url: {
                                    type: 'string',
                                    content: 'http://jjj'
                                }
                            }
                        }]
                    }
                }, '{props.children}']
            }
        }, {
            name: 'span',
            props: {
                children: ['我是内容']       
            }
        }]
    },
}