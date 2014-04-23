Ext.define('HelloWorld.model.Vacancy', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['id', 'name'],

        proxy: {
            type: 'rest',
            url : 'TestUrl.json',
	    reader: {
                type: 'json',
                root: 'users'
            }
        }
    }
});
