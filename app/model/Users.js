/**
 * Model class for users 
**/
Ext.define('nordantech2.model.Users', {
    extend: 'Ext.data.Model',
    idProperty:'Id',
    /**
     * @requires nordantechApp2.model.CsvReader
     */
    requires: [
        'nordantech2.model.CsvReader'
    ],
    schema: {
        id: 'schema1',
        namespace: 'nordantech2.model' 
    },
            proxy: {
                type: 'ajax',
                useDefaultXhrHeader: false,
                cors: true,
                url: 'https://jsonplaceholder.typicode.com/users',
                reader: {
                    type:'json'
                }
    },
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'username', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'address', mapping: 'address.street', type: 'string'},
        {name: 'phone', type: 'string'},
        {name: 'website', type: 'string'},
        {name: 'company', mapping: 'company.name',type: 'string'}
    ]
});