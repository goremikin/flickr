/**
 * Image viewer
 */
Ext.define('Flickr.view.ImageView', {
    extend: 'Ext.view.View',
    alias: 'widget.flimageview',
    autoScroll: true,
    padding: 10,
    baseCls: "fl-image-view",
    uses: [
        'Ext.util.Format',
        'Flickr.view.OverlayWindow',
        'Ext.Img'
    ],
    listeners: {
        itemclick: function(view, record) {
            var overlayWindow;
            overlayWindow = Ext.create('widget.floverlaywindow', {
                title: record.get("title") || "Image",
                items: {
                    xtype: "image",
                    listeners: {
                        render: function(img) {
                            img.el.on({
                                load: function(evt, ele, opts) {
                                    //img.setWidth(Ext.fly(ele).getWidth());
                                    //img.setHeight(Ext.fly(ele).getHeight());
                                    overlayWindow.doLayout();
                                    overlayWindow.center();
                                },
                                single: true
                            });
                        }

                    },
                    src: Ext.String.format(record.get("urlTemplate"), "z")
                }
            });
        }
    },
    emptyText: "No Data To Display",
    tpl: [
        '<tpl for=".">',
        '<div class="thumb-wrap" id="{id}">',
        '<div class="thumb"><img src="{url}" title="{title:htmlEncode}"></div>',
        '<div class="thumb-title">{title:htmlEncode}</div>',
        '</div>',
        '</tpl>'
    ],
    trackOver: true,
    overItemCls: 'x-item-over',
    itemSelector: 'div.thumb-wrap',
    prepareData: function(data) {
        var urlTemplate = Ext.String.format("http://farm{0}.staticflickr.com/{1}/{2}_{3}_{4}.jpg", data.farm, data.server, data.id, data.secret, "{0}");
        Ext.apply(data, {
            urlTemplate: urlTemplate,
            url: Ext.String.format(urlTemplate, "q")
        });
        return data;
    }
});
