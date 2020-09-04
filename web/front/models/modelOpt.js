import axios from 'axios';

export default class {
    name = 'mod'

    data = {
        tableColumns: [{
            title: '名称',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: '描述',
            dataIndex: 'description',
            key: 'description'
        }, {
            title: '操作',
            dataIndex: 'opt',
            key: 'opt'
        }],
        tableData: [],
        editVisible: false,
        editModalData: {
            name: '',
            description: '',
            modelItem: [{
                key: 'name',
                label: '姓名'
            }],
            modelItemColumn: [{
                title: '序号',
                dataIndex: 'index',
                key: 'index'
            }, {
                title: '字段名',
                dataIndex: 'name',
                key: 'name'
            }, {
                title: '说明',
                dataIndex: 'description',
                key: 'description'
            }, {
                title: '操作',
                dataIndex: 'opt'
            }],
            modelItemData: [{
                index: 1,
                name: 'staffInfo',
                description: '员工信息'
            }]
        }
    }

    getModelList() {
        return axios.get('/async/modelList')
                .then((res) => {
                    return res.data;
                })
    }
}
