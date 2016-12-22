/**
 * Grid view for users 
**/
Ext.define('nordantech2.view.student.UsersGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'usersList',
    layout: 'fit',
    //height: 400,
    frame:true,
    config: {},
    constructor: function (config) {
        return this.callParent(arguments);
    },
    /**
     * @requires School.view.student.UsersViewModel
     */
    requires: [
        'nordantech2.model.Users'
    ],
    title: 'Users Grid',
    viewModel: {
        type: "users-viewmodel"
    },
    reference:'userslistgrid',
    selType: 'rowmodel',
    selModel:
    {
        mode: 'SINGLE'
    },
    viewConfig:
    {
        stripeRows: true
    },
    bind: {
    store: '{Users}' 
    },
    initComponent: function () {

        Ext.apply(this, {
    

            columns: [
            {
                text: "Id",
                flex: 1,
                dataIndex: 'id',
                width: 35
            },
            {
                text: "Name",
                flex: 1,
                dataIndex: 'name'
            },
            {
                text: "User Name",
                flex: 1,
                dataIndex: 'username'
            },
            {
                text: "Email",
                flex: 1,
                dataIndex: 'email'
            },
            {
                text: "Address",
                flex: 1,
                dataIndex: 'address',
                renderer: function (value, metadata, record, rowIndex, colIndex, store){
                    //console.log(record, "that way");
                    return value;
                }
            },
            {
                text: "Phone",
                flex: 1,
                dataIndex: 'phone'
            },
            {
                text: "Website",
                flex: 1,
                dataIndex: 'website'
            },
            {
                text: "Company",
                flex: 1,
                dataIndex: 'company'
            }]
            });

        this.callParent(arguments);
    }
});