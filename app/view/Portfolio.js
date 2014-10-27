Ext.define('HelloWorld.view.Portfolio',{
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
	          		src:'resources/images/glasgow2014.png'
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
                }
               ]
	       }
});
