define(["underscore", "backbone"], 
		function(_, Backbone)
{
	
	var BasicRouter = Backbone.Router.extend({
		routes:
		{
			"help": 					"help", 	// #help
			"search/:query": 			"search", 	// #search/kiwis
			"search/:query/p:page": 	"search", 	// #search/kiwis/p7
			"download/*path":     		"download",
		},

		initialize: function()
		{
			Backbone.history.start();
		},

		help: function()
		{
			logger.debug("help");
		},

		search: function(query, page)
		{
			logger.debug("searh, query: ", query, ", page: ", page);
		},

		download: function(path)
		{
			logger.debug("download, path: ", path);
		}
	});
	return BasicRouter;
	
});