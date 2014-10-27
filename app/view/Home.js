//public_html

Ext.define('HelloWorld.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homepanel',
    fullscreen: true,

    
    config: {
    	
    	title:'Home',
    	iconCls:'puzzle',
    	cls:'title',
  layout:{
                type:'fit',
                align:'left'
           },
    
        items: [
		{
                dock: 'top',
                xtype: 'toolbar',
                title: 'Home'
                },
      
            {
            	
                html: [
                       '<div class="block"><div class="centered"><div class="myHomeContainer" style="width: 900px; margin-left: auto; margin-right: auto;"><iframe width="100%" height="800px" frameBorder="0" style="-webkit-transform:scale(0.6);	 -moz-transform: scale(0.6); " class="noScrolling" scrolling="no" seamless="seamless" src="http://ladybugdesign.co.uk/slidingpuzzle/index.html"></iframe></div></div></div>'
                      // '<iframe width="100%" height="800px" class="noScrolling" scrolling="no" seamless="seamless" src="http://ladybugdesign.co.uk/slidingpuzzle/index.html"></iframe>'
                     //  '<div id="tops"><iframe width="100%" height="800px" frameBorder="0" style="-webkit-transform:scale(0.7);	 -moz-transform: scale(0.7); " class="noScrolling" scrolling="no" seamless="seamless" src="http://ladybugdesign.co.uk"></iframe></div>'
                       //	"<div id='div1' class='myCls'>hi</div>",
                       	//'<br/>',
                       	//'<img src="resources/images/home2.png"  class="jqPuzzle"/>'
                       // '<img src="http://src.sencha.io/http://andreasappexample.cloudcontrolled.com/resources/images/home2.png"  class="myCls"/>'
					].join("")
                
            }
        ]
    }
});
