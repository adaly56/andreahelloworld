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
                       
				"<div id='what' class='aboutText'>NAME:</div>",
						'<br/>',
						"<p class='myText'>Andrea Daly</p>",
                       	
				"<div id='why' class='aboutText'>SUMMARY:</div>",
                       	'<br/>',
                       	"<p class='myText'>Mid-level software developer with varied commercial technical experience spanning ten years.</p>",
			           
                    	"<div  id='who'  class='aboutText'>BACKGROUND:</div>",
                    	'<br/>',
                    	  "<p class='myText'>Microsoft technologies including Visual Basic,  .Net and SQL Server. </p>",
			            
                     
			"<div id='when' class='aboutText'>INTERESTS:</div>",
                       	'<br/>',
                        "<p class='myText'> Mobile development frameworks including IOS, Android and Sencha Touch.</p>",
			          
				"<div id='where' class='aboutText'>STRENGTHS:</div>",
                       	'<br/>',
                        "<p class='myText'>Analytical skills and adaptibility.</p>",
                        '<br/>',
                        '<br/>',
                        '</div>'
                       	//'<img src="resources/images/home.png" height="500px" class="jqPuzzle"/>'
                        //'<img src="http://src.sencha.io/http://andreasappexample.cloudcontrolled.com/resources/images/home.png"  class="myCls"/>'
					].join("")
                
            }
        ]
    }
});
