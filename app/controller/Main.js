Ext.define('HelloWorld.controller.Main',{
	extend:'Ext.app.Controller',
	//items should be placed in config other way depreceated
	config:{
		views:['Home', 'Portfolio', 'Feed', 'Contact', 'About', 'Test'],
		models:['Vacancy']
}	,


refs:[{
	ref: 'contactForm',
	selector:'#contactForm'
}],
        
	init: function(){
		console.log('initialised');
		
		this.control({
			'button[action=submitContact]':{
				tap: 'submitContactForm'
			}
		});
	},
	
	submitContactForm: function(){
		console.log('test');









	/*Ext.Ajax.request({
    		url: 'TestUrl.json',

		success: function(response) {
        		console.log("Spiffing, everything worked");
        		console.log(response.responseText);
    			},

    		failure: function(response) {
        		console.log("Curses, something terrible happened");
    			}
	});*/


		/*var form = this.getContactForm();
		console.log(form);
		form.submit({
			url:'contact.php'
		});*/
	}
});