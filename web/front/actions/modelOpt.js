// 操作model
import React from 'react';
import {Button, Input} from 'antd';

export default class {
    constructor() {
        this.rowKeyCount = 1;
    }
    

    getRowKey = () => {
    }
    addNewField = () => {
        const {mod} = this.models;
        const editModalData = mod.get('editModalData');

        editModalData.modelItemData.push({
            name: '',
            description: '',
            index: editModalData.modelItemData.length
        });
        editModalData.modelItemData = [...editModalData.modelItemData]

        mod.set({
            editModalData: {...editModalData}
        });
    }

    renderOpt = (columns) => {
        columns.forEach((col) => {
            if(col.dataIndex === 'opt') {
                col.render = (e, rowData, index) => {
                    return (
                        <Button
                            type="primary"
                            size="small"
                        >
                            编辑
                        </Button>
                    );
                }
            }
        });

        return columns;
    }

    changeItem = (rowIndex, key) => {
        return (e) => {
            const {mod} = this.models;
            const editModalData = mod.get('editModalData');
    
            editModalData.modelItemData[rowIndex][key] = e.target.value;
            editModalData.modelItemData = [...editModalData.modelItemData];

            mod.set({
                editModalData: editModalData
            });
        }
    }

    renderModalTableOpt(columns) {
        columns.forEach((col) => {
            if(col.dataIndex === 'opt') {
                col.render = (e, rowData, index) => {
                    return (
                        <Button
                            type="primary"
                            size="small"
                            onClick={this.deleteModelItem(index, col.dataIndex)}
                        >
                            删除
                        </Button>
                    );
                }
            }
            else if(col.dataIndex !== 'index') {
                col.render = (e, rowData, index) => {
                    return (
                        <Input
                            defaultValue={rowData[col.dataIndex]}
                            onChange={this.changeItem(index, col.dataIndex)}
                        />
                    );
                }
            }
        });

        return columns;
    }

    deleteModelItem = (rowIndex, key) => {
        return () => {
            const {mod} = this.models;
            const editModalData = mod.get('editModalData');
    
            editModalData.modelItemData.splice(rowIndex, 1);
            editModalData.modelItemData = [...editModalData.modelItemData]
    
            mod.set({
                editModalData: editModalData
            });
        }
    }
    
    didMount() {
        this.models.mod.getModelList()
            .then((res) => {
                this.models.mod.set({
                    tableData: res.data
                });
            });
    }

    showEdit = () => {
        this.models.mod.set({
            editVisible: true
        });
    }

    closeEdit = () => {
        this.models.mod.set({
            editVisible: false
        });
    }

    changeEditData = (field) => {
        return (e) => {
            const editModalData = this.models.mod.get('editModalData');
            editModalData[field] = e.target.value;

            this.models.mod.set({
                editModalData: editModalData
            });
        }
    }
}