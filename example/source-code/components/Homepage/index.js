import React from 'react';
import 'common/style/index.less';
import {
    render,
    connect
} from 'ader';
import mainAct from 'actions/mainAct';
import Header from 'components/Header';
import Logo from 'components/Logo';


const compiler = render({
    actions: {
        mainAct: mainAct
    }
});

export default connect(compiler(({
    props,
    state,
    action
}) => {
    return (
        <div className="page-wrapper">
    <Header nameAttr="lll">
        <Logo onClick={action.alert}>
            <img url="http://jjj">
            </img>
        </Logo>
        {props.children}
    </Header>
    <span>
        我是内容
    </span>
</div>
    );
}));