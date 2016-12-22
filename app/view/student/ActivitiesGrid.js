/**
 * Grid view for users
 *implementation actuals stll remains 
**/
//use renderer to detect when the task has been completed and how close to completion
Ext.define('nordantech2.view.student.ActivitiesGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'activitiesList',
    layout: 'fit',
    height: 750,
    frame:true,
    config: {},
    constructor: function (config) {
        return this.callParent(arguments);
    },
    /**
     * @requires School.view.student.UsersViewModel
     */
    requires: [
        'nordantech2.model.Activities',
        'nordantech2.view.student.UsersViewModel'
    ],
    title: 'Albums Grid',
    //controller: 'student-list',
    viewModel: {
        type: "users-viewmodel"
    },
    reference:'activitieslistgrid',
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
    store: '{Activities}' 
    },
    initComponent: function () {

        Ext.apply(this, {
            columns: [
            {
                text: "id",
                flex: 1,
                dataIndex: 'id',
                width: 35
            },
            {
                text: "User ID",
                flex: 1,
                dataIndex: 'userId'
            },
            {
                text: "Title",
                flex: 1,
                dataIndex: 'title'
            }]
            });

        this.callParent(arguments);
    }
});