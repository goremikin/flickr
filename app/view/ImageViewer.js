/**
 * Image viewer
 */
Ext.define('Flickr.view.ImageViewer', {
    extend: 'Ext.form.Panel',
    alias: 'widget.flimageviewer',
    
    requires: [
        'Flickr.view.ImageView',
        'Ext.layout.container.Fit',
        'Flickr.store.ImageStore',
        'Ext.toolbar.Paging'
    ],
    
    title: "Search Results",
    layout: "fit",
    
    items: {
        xtype: "flimageview"
    },
    
    /**
     * @private
     */
    constructor: function() {
        var me = this, store;
        
        me.store = store = Ext.create('Flickr.store.ImageStore', {});
        
        me.items = {
            xtype: "flimageview",
            store: store
        };

        me.dockedItems = [{
                xtype: 'pagingtoolbar',
                store: store,
                dock: 'bottom'
            }];
        
        me.callParent(arguments);
        
    }
});
