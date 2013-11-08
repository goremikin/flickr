/**
 * Search panel to enter details
 */
Ext.define('Flickr.view.SearchForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.flsearchform',
    requires: [
        'Ext.button.Button',
        'Ext.form.field.Text',
        'Ext.form.field.Number'
    ],
    title: "Search Panel",
    bodyPadding: 10,
    defaults: {
        labelWidth: 110,
        msgTarget: "side"
    },
    
    /**
     * @private
     */
    constructor: function() {
        var me = this;

        me.items = [{
            xtype: 'textfield',
            name: 'text',
            anchor: "100%",
            empryText: "Please search",
            fieldLabel: 'Key Words',
            listeners: {
                specialkey: me.onFieldSpecialKey,
                scope: me
            }
        }, {
            xtype: 'numberfield',
            minValue: 1,
            value: 25,
            width: 200,
            allowBlank: false,
            maxValue: 500,
            name: 'limit',
            fieldLabel: 'Pictures per Page',
            listeners: {
                specialkey: me.onFieldSpecialKey,
                scope: me
            }
        }];

        me.buttons = [{
                formBind: true,
                disabled: true,
                text: "Search",
                handler: me.applySearch,
                scope: me
            }];

        me.callParent(arguments);
    },
    onFieldSpecialKey: function(field, e) {
        if (e.getKey() === e.ENTER) {
            this.applySearch();
        }
    },
    /**
     * Apply search run from the search button
     */
    applySearch: function() {
        var me = this, form = me.getForm(), formValues;

        if (form && form.isValid()) {
            formValues = form.getValues();

            me.fireEvent("searchform", me, formValues);
        }
    }
});