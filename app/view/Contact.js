Ext.define('HelloWorld.view.Contact',{
	
extend:'Ext.form.Panel'	,
xtype:'contactpage',
id:'contactForm',

config:
	   {
           title: 'Contact',
           iconCls: 'profile',
           
           url: 'contact.php',
           layout: 'vbox',

        	   items: [
  {
                dock: 'top',
                xtype: 'toolbar',
                title: 'Contact Us',
		cls:'title'
                },
                       {
                           xtype: 'fieldset',
                           title: 'Contact Us',
                           instructions: '(* all fields are mandatory)',
                           height: 500,
                           items: [
                               {
                                   xtype: 'textfield',
                                   label: 'Name'
                               },
                               {
                                   xtype: 'emailfield',
                                   label: 'Email'
                               },
                               {
                                   xtype: 'textareafield',
                                   label: 'Message'
                               }
                           ]
                       },
                       {
                           xtype: 'button',
                           text: 'Send',
                           ui: 'confirm',
                           action: 'submitContact',
			   cls:'btn'
                           
                       }
                   ]

       }
	
	
	
});