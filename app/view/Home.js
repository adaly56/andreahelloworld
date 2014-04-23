//public_html

Ext.define('HelloWorld.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homepanel',
    fullscreen: true,

    
    config: {
    	
    	title:'Home',
    	iconCls:'home',
    	cls:'title',
  layout:{
                type:'vbox',
                align:'center'
           },
    
        items: [
		{
                dock: 'top',
                xtype: 'toolbar',
                title: 'Home'
                },
      
            {
            	
                html: [
                       //	"<div id='div1' class='myCls'>hi</div>",
                       	'<br/>',
                       	'<img src="resources/images/home2.png"  class="jqPuzzle"/>'
                       // '<img src="http://src.sencha.io/http://andreasappexample.cloudcontrolled.com/resources/images/home2.png"  class="myCls"/>'
					].join("")
                
            }
        ]
    }
});
