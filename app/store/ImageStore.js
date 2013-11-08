/**
 * The main store used to store flicker image models
 */
Ext.define('Flickr.store.ImageStore', {
    extend: 'Ext.data.Store',
    model: 'Flickr.model.ImageModel',
    id: 'imagesStore',
    autoLoad: false,
    requires: [
        'Flickr.data.ImageProxy'
    ],
    proxy: {
        type: 'flimageproxy'
    },
    
    listeners: {
        //Apply saved params
        'beforeload': function(store, operation) {
            if(store.lastKeyWords) {
                if(!operation.params) {
                    operation.params = {};
                }
                if(!operation.params.text) {
                    operation.params.text = store.lastKeyWords;
                }
            }
        }
    }
});
