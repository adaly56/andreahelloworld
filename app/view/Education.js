Ext.define('HelloWorld.view.Education',{
	extend: 'Ext.Carousel',
	xtype: 'educationcarousel',
	
	config:
	       {
	    	   title:'Education',
	    	   iconCls:'phone',
	    	   
	    	   items:[
	    	          {
	    	                dock: 'top',
	    	                xtype: 'toolbar',
	    	                title: 'Education',
	    			        cls:'title'
	    	          },
               {
                dock: 'top',
                xtype: 'toolbar',
               
		        cls:'title',
		        items: [{
                    xtype: 'segmentedbutton',
                    allowDepress: false,
                    items: [{
                        text: 'Tony',
                        pressed: true
                    }, {
                        text: 'Angela'
                    }, {
                        text: 'Samantha'
                        //disabled: true
                    }, {
                        text: 'Jonathan'
                       // disabled: true
                    }, {
                        text: 'Mona'
                       // hidden: true
                    }],
                    listeners: {
                        toggle: function (segBtn, btn, isPressed) {
                            Ext.Msg.alert('toggle', btn.getText() + ' was pressed.');
                        } // toggle
                    } // listeners
		          }]
                },
                {
	          		xtype: 'image',
	          		src:'resources/images/10.jpg'
	          	},
	          	
	          	
    	     	
             	{
                 	xtype: 'image',
                 	src:'resources/images/32.jpg'
                },
	    	     	
             	{
                 	xtype: 'image',
                 	src:'resources/images/33.jpg'
                },                
                {
                    xtype: 'image',
                    src:'resources/images/34.jpg'
                },                
                {
                    xtype: 'image',
                    src:'resources/images/36.jpg'
                },                
                              
                {
                    xtype: 'image',
                    src:'resources/images/38.jpg'
                },                
                {
                    xtype: 'image',
                    src:'resources/images/39.jpg'
                }
               ]
	       }
});
