/**
 * Flickr model. Contains of the url, name (as per API)
 */
Ext.define('Flickr.model.ImageModel', {
    extend: 'Ext.data.Model',
    
    idProperty: 'id',
    
    fields: [{
            name: 'id'
        }, {
            name: 'title'
        }, {
            name: 'secret'
        }, {
            name: 'server'
        }, {
            name: 'farm',
            type: "int"
        }
    ]
});
