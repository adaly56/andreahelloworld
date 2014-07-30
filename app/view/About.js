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
                align:'left'
           },
    
        items: [
		{
                dock: 'top',
                xtype: 'toolbar',
                title: 'About',
		cls:'title'
                },
      
            {
            	
                html: [ '<br/>',
			"<div class='myContainer'>",
			'<br/>',
                       	"<div  id='who'  class='aboutText'>Hello World!</div>",
                       	'<br/> ',
				"<div id='what' class='aboutText'>NAME: andrea</div>",
                       	'<br/>',
				"<div id='why' class='aboutText'>AGE: 40+</div>",
                       	'<br/>',
				"<div id='when' class='aboutText'>FROM: glasgow</div>",
                       	'<br/>',
				"<div id='where' class='aboutText'>STAR SIGN: libra</div>",
                       	'<br/>',
                "<div id='where' class='aboutText'>BIGGEST ACHIEVEMENT: motherhood</div>",
                       	'<br/>',
                "<div id='where' class='aboutText'>FAVOURITE CAKE: fresh cream meringue</div>",
                         '<br/>',
                "<div id='where' class='aboutText'>DEVELOPER YEARS: 10+</div>",
                         '<br/>',
                        '</div>'
                       	//'<img src="resources/images/home.png" height="500px" class="jqPuzzle"/>'
                        //'<img src="http://src.sencha.io/http://andreasappexample.cloudcontrolled.com/resources/images/home.png"  class="myCls"/>'
					].join("")
                
            }
        ]
    }
});
