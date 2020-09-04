import React from 'react';
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
        <span>
    我是logo
</span>
    );
});