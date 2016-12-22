/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('nordantech2.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    layout: 'fit',
    autoScroll: true,

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'nordantech2.view.main.MainController',
        'nordantech2.view.main.MainModel',
        'nordantech2.view.main.List',
        'nordantech2.view.student.UsersGrid',
        'nordantech2.view.student.ActivitiesGrid',
        'nordantech2.view.student.ThreeD'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Users Grid',
        iconCls: 'fa-users',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'usersList',
            reference: 'userslistgrid'
        }]
    }, {
        title: 'Albums Grid',
        iconCls: 'fa-users',
        items: [{
            xtype: 'activitiesList',
            reference: 'activitieslistgrid'
        }]
    }, {
        title: '3D Bar Chart',
        iconCls: 'fa-users',
        items: [{
            xtype: 'threed-bar'
        }]
    }]
});
