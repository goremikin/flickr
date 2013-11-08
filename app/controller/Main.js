Ext.define('Flickr.controller.Main', {
    extend: 'Ext.app.Controller',
    
    uses: [
        'Ext.MessageBox'
    ],
    
    refs: [{
            ref: 'flview',
            selector: 'flimageviewer'
        }],
    init: function() {
        var me = this;

        me.control({
            'viewport > flsearchform': {
                searchform: me.onSearch
            }
        });
    },
    onSearch: function(cmp, criteria) {
        var me = this, view = me.getFlview(), params, store = view && view.store, limit;

        if (store) {
            if (criteria) {
                limit = parseInt(criteria.limit);
                if (!isNaN(limit) && store.pageSize !== limit) {
                    store.pageSize = limit;
                    store.currentPage = 1;
                }
                params = Ext.apply({
                    callback: me.onSearchCallback
                }, criteria);

                params.params = {
                    text: criteria.text
                };
                
                if(store.lastKeyWords !== criteria.text) {
                    store.currentPage = 1;
                }
                
                store.lastKeyWords = criteria.text;
            }
            

            store.load(params);
        }
    },
    onSearchCallback: function(records, operation, success) {
        if (!success) {
            Ext.MessageBox.show({
                title: 'Error Retreiving Data',
                msg: operation.getError(),
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.ERROR
            });
        }
    }

});
