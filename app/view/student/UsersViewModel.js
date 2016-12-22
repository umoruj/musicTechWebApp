/**
 * view model for both users and activites 
**/
Ext.define('nordantech2.view.student.UsersViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.users-viewmodel',
    stores:{
        Users:{
        	model: 'Users',
            autoLoad: true
        },
        Activities:{
            model: 'Activities',
            autoLoad: true
        }
    }
});