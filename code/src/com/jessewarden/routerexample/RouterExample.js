define(["underscore", "backbone", "com/jessewarden/routerexample/BasicRouter"], 
		function(_, Backbone, BasicRouter)
{
	var RouterExample = Backbone.View.extend(
	{
		el: "#content",
		basicRouter: null,

		initialize: function()
		{
			this.onShowHelp = _.bind(this.onShowHelp, this);
			this.onShowSearch = _.bind(this.onShowSearch, this);
			this.onShowDownload = _.bind(this.onShowDownload, this);
			
			this.basicRouter = new BasicRouter();
			this.basicRouter.on("route:help", this.onShowHelp);
			this.basicRouter.on("route:search", this.onShowSearch);
			this.basicRouter.on("route:download", this.onShowDownload);

			this.render();
		},

		getLinks: function()
		{
			var s = '';
			s += '<a href="#help">Help</a> |';
			s += '<a href="#search/cow">Search</a> |';
			s += '<a href="#download/moo">Download</a><br />';
			return s;
		},

		render: function()
		{
			this.$el.html("Main Page.<br />" + this.getLinks());
		},

		onShowHelp: function()
		{
			this.$el.html("Help.<br />" + this.getLinks());
		},

		onShowSearch: function()
		{
			this.$el.html("Search.<br />" + this.getLinks());
		},

		onShowDownload: function()
		{
			this.$el.html("Download.<br />" + this.getLinks());
		},
	});
	return RouterExample;
});