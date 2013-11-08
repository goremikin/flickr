/**
 * The image proxy. Uses flick API
 */
Ext.define('Flickr.data.ImageProxy', {
    extend: 'Ext.data.proxy.JsonP',
    alias: ['proxy.flimageproxy'],
    requires: [
        'Ext.data.reader.Json'
    ],
    callbackKey: 'jsoncallback',
    url: 'http://api.flickr.com/services/rest/',
    constructor: function(config) {
        config = config || {};

        Ext.apply(config, {
            reader: {
                type: 'json',
                totalProperty: 'photos.total',
                root: 'photos.photo',
                readRecordsOnFailure: false,
                successProperty: "success",
                messageProperty: "message"
            },
            extraParams: {
                method: 'flickr.photos.search',
                privacy_filter: 1,
                api_key: "33a09ca32b773bcd509a094e1039e9fe",
                safe_search: 1,
                format: 'json',
                nojsoncallback: 1
            }
        });

        this.callParent([config]);
    },
    extractResponseData: function(response) {
        //custom processing. If code is returned, return false
        if (response && response.code) {
            response.success = false;
        }

        return response;
    },
    buildRequest: function(operation) {
        var me = this, params = operation.params = Ext.apply({}, operation.params, me.extraParams);
        if (!params.text) {
            params.method = "flickr.photos.getRecent";
        }
        return me.callParent(arguments);
    },
    limitParam: "per_page"
});