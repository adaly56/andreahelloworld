Ext.define('HelloWorld.view.Test',{

extend: 'Ext.Panel',
xtype: 'testpanel',
fullscreen:true,
	
config:{
	title:'Test',
	iconCls:'puzzle',
	cls:'title',
	layout:{
		type:'vbox',
		align:'center'
	},

	items:[{
		dock:'top',
		xtype:'toolbar',
		title:'test'
		}]
	}



});