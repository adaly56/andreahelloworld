//public_html

/*Ext.define('HelloWorld.view.VoluntaryWork', {
    extend: 'Ext.Panel',
    xtype: 'voluntarypanel',
    fullscreen: true,

    
    config: {
    	
    	title:'VoluntaryWork',
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
                title: 'VoluntaryWork'
                },
      
            {
            	
                html: ['</br/></br/>',
                       "<div class='myContainer'>",
                       '</br/>',
                     //  '<iframe width="100%" height="800px" class="noScrolling" scrolling="no" seamless="seamless" src="http://ladybugdesign.co.uk/slidingpuzzle/index.html"></iframe>'
                       '<iframe width="100%" height="650px" frameBorder="0" style="-webkit-transform:scale(0.75);	 -moz-transform: scale(0.75);  left:0px;" class="noScrolling" scrolling="no" seamless="seamless" src="http://ladybugdesign.co.uk/Portfolios/Web/index.html"></iframe>',
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
*/

Ext.define('HelloWorld.view.VoluntaryWork',{
	extend: 'Ext.Carousel',
	xtype: 'portfoliocarousel',
	
	config:
	       {
	    	   title:'Portfolio',
	    	   iconCls:'phone',
	    	   
	    	   items:[

  {
                dock: 'top',
                xtype: 'toolbar',
                title: 'Portfolio',
		cls:'title'
                },
                
	    	    {
	          		xtype: 'image',
	          		src:'resources/images/discovery2013.png'
	          	},
	          	
	          	{
	          		xtype: 'image',
	          		src:'resources/images/discovery2013ios.png'
	          	},
	          	
	          	{
	          		xtype: 'image',
	          		src:'resources/images/sims2013.png'
	          	},
	          	
 	      		{
	          		xtype: 'image',
	          		src:'resources/images/pure2013.png'
	          	},
	          	
     	   		{
	          		xtype: 'image',
	          		src:'resources/images/daisyhockeyaoo.png'
	          	},
	          	
           		{
	          		xtype: 'image',
	          		src:'resources/images/phillips2013.png'
	          	},
	          	
             	{
                 	xtype: 'image',
                 	src:'resources/images/phillipsbcdtestflight.png'
                } ,
                
                {
                    xtype: 'image',
                    src:'resources/images/simsweb.png'
                },
                
                {
                    xtype: 'image',
                    src:'resources/images/cms.png'
                },
                {
	          		xtype: 'image',
	          		src:'resources/images/glasgow2014.png'
	          	}
               ]
	       }
});