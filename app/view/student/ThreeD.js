/**
 * Chart for the effects csv 
**/
Ext.define('nordantech2.view.student.ThreeD', {
    extend: 'Ext.Panel',
    xtype: 'threed-bar',
    title: '3D Bar Chart',

    bodyStyle: 'background: transparent !important',
    layout: {
        type: 'vbox',
        pack: 'center'
    }, 

    themes: {
        classic: {
            percentChangeColumn: {
                width: 75
            }
        },
        neptune: {
            percentChangeColumn: {
                width: 100
            }
        }
    },

    initComponent: function() {
        var me = this;

        var myDataStore = Ext.create('Ext.data.JsonStore', {
            fields: ['month', 'data1' ] 
        });
        
        me.dockedItems = [{
            xtype: 'toolbar',
            dock: 'top',
        }];
        
        me.items = [{
            xtype: 'chart',
            width: '100%',
            height: 400,

            style: 'background: #fff',
            animate: true,
            store: myDataStore,
            axes: [{
                type: 'numeric3d',
                position: 'left',
                fields: ['data1'],
                label: {
                    renderer: function(v) { return v + '%'; } 
                },
                title: 'Data over time',
                grid: true,
                minimum: 0
            }, {
                type: 'category3d',
                position: 'bottom',
                fields: ['month'],
                title: 'Month of the Year'
            }],
            series: [{
                type: 'bar3d',
                axis: 'left',
                highlight: true,
                tips: {
                    trackMouse: true,
                    renderer: function(storeItem, item) {
                        this.setTitle(storeItem.get('month') + ': ' + storeItem.get('data1') + ' %');
                    }
                },
                xField: 'month',
                yField: 'data1'
            }]

        }, {
            style: 'padding-top: 10px;',
            title: 'Chart Source Data',
            xtype: 'gridpanel',
            height: 300,
            frame:true,
            columns : [
                { text: 'Time', dataIndex: 'month' },
                { text: 'Plan', dataIndex: 'data1' },
                { text: 'Actual', dataIndex: 'data1' }
            ],
            store: myDataStore,
            width: '27%'
        }];

        this.callParent();
        this.down('chart').getStore().loadData(this.generateData());
    },

    generateData: function(n, floor) {
        var data = [],
            p = (Math.random() *  11) + 1,
            i;
            
        floor = (!floor && floor !== 0)? 20 : floor;
        
        for (i = 0; i < (n || 12); i++) {
            data.push({
                month: Ext.Date.monthNames[i % 12].substring(0, 3),
                data1: Math.floor(Math.max((Math.random() * 100), floor))
            });
        }
        return data;
    }
});






