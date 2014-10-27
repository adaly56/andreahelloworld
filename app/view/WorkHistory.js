//public_html

Ext.define('HelloWorld.view.WorkHistory', {
    extend: 'Ext.Panel',
    xtype: 'workpanel',
    fullscreen: true,

    
    config: {
    	
    	title:'Work',
    	iconCls:'puzzle',
    	cls:'title',
  layout:{
                type:'vbox',
                align:'left'
           },
    
        items: [
		{
                dock: 'top',
                xtype: 'toolbar',
                title: 'Work'
                },
      
            {
            	
                html: ['</br/></br/>',
                       "<div class='myContainer'>",
                       '</br/>',
                     //  '<iframe width="100%" height="800px" class="noScrolling" scrolling="no" seamless="seamless" src="http://ladybugdesign.co.uk/slidingpuzzle/index.html"></iframe>'
                       '<iframe width="100%" height="650px" frameBorder="0" style="-webkit-transform:scale(0.75);	 -moz-transform: scale(0.75);  left:0px;" class="noScrolling" scrolling="no" seamless="seamless" src="http://ladybugdesign.co.uk/Portfolios/Dev/index.html"></iframe>',
                       "</div>"
                       //	"<div id='div1' class='myCls'>hi</div>",
                       	//'<br/>',
                       	//'<img src="resources/images/home2.png"  class="jqPuzzle"/>'
                       // '<img src="http://src.sencha.io/http://andreasappexample.cloudcontrolled.com/resources/images/home2.png"  class="myCls"/>'
					].join("")
                
            }
        ]
    }
});
