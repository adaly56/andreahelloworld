Ext.define('HelloWorld.view.Resume',{

extend: 'Ext.Panel',
xtype: 'resume',
fullscreen:true,
	
config:{
	title:'Test',
	iconCls:'info',
	cls:'title',
	layout:{
		type:'fit',
		align:'left'
	},

	items:[{
		dock:'top',
		xtype:'toolbar',
		title:'Resume'
		},

		{
			
			  html: [
                     
                     '<iframe width="100%" height="800px" class="noScrolling" scrolling="no" seamless="seamless" src="http://ladybugdesign.co.uk/resume.html"></iframe>'].join("")
            	
             /*   html: [
                       	"<div id='div1' class='myCls'>hi</div>",
                       	'<br/>',

 
"<link href='https://coderbits.com/content/widget/coderbits.css' media='all' rel='stylesheet' type='text/css'>",
"<script src='https://coderbits.com/content/widget/coderbits.js'></script>",
 

 
"<section id='coderbits' data-coderbits-username='<adaly56>'></section>"
                       //	'<img src="resources/images/home2.png"  class="jqPuzzle"/>'
                       // '<img src="http://src.sencha.io/http://andreasappexample.cloudcontrolled.com/resources/images/home2.png"  class="myCls"/>'
					].join("")*/
                
            }]
	}



});