Ext.define('HelloWorld.view.Viewport',{
	extend: 'Ext.TabPanel',
	
	config:{
		fullscreen:true,
		tabBarPosition: 'bottom',
		
		items:[
		       {
		    	   xtype:'portfoliocarousel'
		    	  
		       },
		       {
		    	   xtype:'homepanel'
		       },

		       {
		    	   xtype: 'aboutpanel'
		       },

		     /*
		       
		       {
		    	   xtype:'workpanel'
		       },
		       
		       {
		    	   xtype:'voluntarypanel'
		       },*/
		       {
		    	   xtype:'communitypanel'
		       },/*
		       {
		    	   xtype:'educationcarousel'
		       },*/
		       {
		    	   xtype:'feedpage',

		    	   store:{
		    		   type: 'tree',
		    		   
		    		   fields:['title', 'link', 'author', 'contentSnippet', 'content',
		    		           {name: 'leaf', defaultValue: true} ],
		    		   root: {
		                       leaf: false
		                	 },
		               proxy: {
		                      type: 'jsonp',
		                      url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://www.codefirstgirls.org.uk/1/feed',
		                      reader: {
		                             type: 'json',
		                             rootProperty: 'responseData.feed.entries'
		                         }
		                     }

		    	   },

			    
	               detailCard: {
	                   xtype: 'panel',
	                   scrollable: true,
	                   styleHtmlContent: true
	               },

	               listeners: {
	                   itemtap: function(nestedList, list, index, element, post) {
	                       this.getDetailCard().setHtml(post.get('content'));
	                   }
	               }

		    	   
		       }
		       /*{
		    	   xtype: 'contactpage'
		       },
			{
		    	   xtype: 'resume'



		       }*/

		       ]
	}
	
	
});