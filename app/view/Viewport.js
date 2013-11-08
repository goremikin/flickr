Ext.define('Flickr.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.layout.container.Border'
    ],
    layout: {
        type: 'border'
    },
    items: [{
            region: 'west',
            xtype: 'flsearchform',
            width: 300,
            margin: {
                right: 10
            }
        }, {
            region: 'center',
            xtype: 'flimageviewer'
        }]
});
