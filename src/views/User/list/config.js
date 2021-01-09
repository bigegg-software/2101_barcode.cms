module.exports = {
        columns: [
            {
                title: '用户名',
                dataIndex: 'username',
                scopedSlots: { customRender: 'name' }
            },
        
            {
                title: '手机号',
                dataIndex: 'phone',
                scopedSlots: { customRender: 'phone' }
            },
        {
        title: "操作",
        dataIndex: "__action",
        scopedSlots: { customRender: "__action" }
    }
        ],
        setting:{"username":{"type":"input"},"password":{"type":"input"}}
    }