  
Ext.define('HelloWorld.view.Feed',{
extend:'Ext.dataview.NestedList',
xtype: 'feedpage',

config:{
	
    
    title: 'News',
    cls:'title',
    iconCls: 'rss',
    displayField: 'title',
    
    listConfig: {
  	
  	itemHeight: 150

	}
   
     }


});