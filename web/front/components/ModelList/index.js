
import React from 'react';
import './index.less';
import {render, connect} from 'ader';
import modelOpt from '../../actions/modelOpt';
import {
    Table, 
    Button, 
    Modal, 
    Input,
    Row, 
    Col
} from 'antd';


let ModelList = render({
    actions: {
        moAct: modelOpt
    }
})(({props, state, action}) => {
    const {mod} = props;

    return (
        <div className="models-list">
            <div>
                <Button
                    onClick={action.moAct.showEdit}
                >
                    新增
                </Button>
            </div>
            <Table
                columns={action.moAct.renderOpt(mod.tableColumns)}
                dataSource={mod.tableData}
                rowKey="name"
                pagination={false}
            />
            <Modal
                title="编辑model"
                visible={mod.editVisible}
                onCancel={action.moAct.closeEdit}
                okText="保存"
                cancelText="取消"
                width={800}
            >
                <div className="edit-model-modal">
                    <Row>
                        <Col
                            span={10}
                        >
                            名称：
                            <Input 
                                className="model-item-wrapper"    
                                value={mod.editModalData.name}
                                onChange={action.moAct.changeEditData('name')}
                            />
                        </Col>
                        <Col
                            span={10}
                            offset={1}
                        >
                            描述：
                            <Input 
                                className="model-item-wrapper"
                                value={mod.editModalData.description}
                                onChange={action.moAct.changeEditData('description')}
                            />
                        </Col>
                        <Col>
                            <Button
                                type="primary"
                                onClick={action.moAct.addNewField}
                            >
                                新增变量
                            </Button>
                        </Col>
                    </Row>
                    <Table
                        columns={action.moAct.renderModalTableOpt(mod.editModalData.modelItemColumn)}
                        dataSource={mod.editModalData.modelItemData}
                        rowKey="index"
                        pagination={false}
                        tableLayout="fixed"
                        bordered={true}
                    />
                </div>
            </Modal>
        </div>
    );
});

export default connect(['mod'])(ModelList);