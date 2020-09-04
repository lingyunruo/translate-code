import React from 'react';
import './index.less';
import {
    render,
    connect
} from 'ader';
import home from 'actions/home';
import {Tabs} from 'antd';
import ModelList from '../ModelList';

const {TabPane} = Tabs;

const compiler = render({
    actions: {
        homeAct: home
    }
});

export default connect(['home'])(compiler(({
    props,
    state,
    action
}) => {
    const {home} = props;

    return (
        <div className="page-wrapper">
            <Tabs
                type="card"
                activeKey={home.activeKey}
            >
                <TabPane
                    tab="model设计"
                    key="model"
                >
                    <ModelList />
                </TabPane>
            </Tabs>
        </div>
    );
}));