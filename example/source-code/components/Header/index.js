import React from 'react';
import 'components/Header/index.less';
import {
    render,
    connect
} from 'ader';


const compiler = render({
    actions: {}
});

export default compiler(({
    props,
    state,
    action
}) => {
    return (
        <div className="header-bar">
    {props.children}
</div>
    );
});