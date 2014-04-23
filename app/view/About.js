//public_html

Ext.define('HelloWorld.view.About', {
    extend: 'Ext.Panel',
    xtype: 'aboutpanel',
    fullscreen: true,

    
    config: {
    	
    	title:'About',
    	iconCls:'strategy',
    	cls:'about',
  layout:{
                type:'vbox',
                align:'center'
           },
    
        items: [
		{
                dock: 'top',
                xtype: 'toolbar',
                title: 'About Us',
		cls:'title'
                },
      
            {
            	
                html: [ '<br/>',
			"<div class='myContainer'>",
			'<br/>',
                       	"<div id='who' class='aboutText'>Who</div>",
                       	'<br/><br/>',
				"<div id='what' class='aboutText'>What</div>",
                       	'<br/><br/>',
				"<div id='why' class='aboutText'>When</div>",
                       	'<br/><br/>',
				"<div id='when' class='aboutText'>Why</div>",
                       	'<br/><br/>',
				"<div id='where' class='aboutText'>Where</div>",
                       	'<br/><br/>',
			
                        '</div>'
                       	//'<img src="resources/images/home.png" height="500px" class="jqPuzzle"/>'
                        //'<img src="http://src.sencha.io/http://andreasappexample.cloudcontrolled.com/resources/images/home.png"  class="myCls"/>'
					].join("")
                
            }
        ]
    }
});
