Ext.define('nordantech2.model.Activities', {
    extend: 'Ext.data.Model',
    idProperty:'Id',
    /**
     * @requires nordantechApp2.model.CsvReader
     */
    requires: [
        'nordantech2.model.CsvReader'
    ],
    schema: {
        id: 'schema2',
        namespace: 'nordantech2.model',
    },
            proxy: {
                type: 'ajax',
                useDefaultXhrHeader: false,
                cors: true,
                url:'https://jsonplaceholder.typicode.com/albums',//'resources/activities.csv',
                reader: {
                    type:'json'
                }
    },
    fields: [
        {name: 'userId', type: 'string'},
        {name: 'id', type: 'string'},
        {name: 'title', type: 'string'}
    ]
});