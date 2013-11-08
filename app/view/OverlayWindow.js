/* 
 * Just a window to show the overlay image
 */

Ext.define('Flickr.view.OverlayWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.floverlaywindow',
    
    modal: true,
    //layout: 'fit',
    maxWidth: 1000,
    maxHeight: 600,
    constrain: true,
    shrinkWrap: true,
    autoShow: true,
    maximizable: true
});
