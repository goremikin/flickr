Ext.define('Flickr.Application', {
    name: 'Flickr',

    extend: 'Ext.app.Application',

    views: [
        'SearchForm',
        'ImageViewer'
    ],

    controllers: [
        'Main'
    ],

    stores: [
        'ImageStore'
    ],
    
    models: [
        'ImageModel'
    ]
});
