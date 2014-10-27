//public_html

Ext.define('HelloWorld.view.Community', {
    extend: 'Ext.Panel',
    xtype: 'communitypanel',
    fullscreen: true,

    
    config: {
    	
    	title:'Badges',
    	iconCls:'info',
    	cls:'title',
  layout:{
                type:'vbox',
                align:'left'
           },
    
        items: [
		{
                dock: 'top',
                xtype: 'toolbar',
                title: 'Badges'
                },
      
            {
            	
                html: [
                       '</br/></br/>',
                       "<div class='myContainer'>",
                       '</br/>',
                     //  '<iframe width="100%" height="800px" class="noScrolling" scrolling="no" seamless="seamless" src="http://ladybugdesign.co.uk/slidingpuzzle/index.html"></iframe>'
                       '<iframe width="100%" height="800px" frameBorder="0" style="-webkit-transform:scale(0.8);	 -moz-transform: scale(0.8); " class="noScrollingbg" scrolling="yes" seamless="seamless" src="https://beta.openbadges.org/share/b9e908e2c9357b9b10fb1cbefbfeaf97/"></iframe>'
                       //	"<div id='div1' class='myCls'>hi</div>",
                       	//'<br/>',
                       	//'<img src="resources/images/home2.png"  class="jqPuzzle"/>'
                       // '<img src="http://src.sencha.io/http://andreasappexample.cloudcontrolled.com/resources/images/home2.png"  class="myCls"/>'
					].join("")
                
            }
        ]
    }
});
