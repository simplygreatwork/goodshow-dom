
goodshow.Main = Class.extend({
   
   initialize : function() {
      
      this.initializeResizing();
   },
   
   initializeResizing : function() {
      
		window.onresize = function() {
			window.container.options.bounds = {
			   x : 0,
			   y : 0,
			   width : window.innerWidth,
			   height : window.innerHeight
			};
			window.container.draw();
		}.bind(this);
   },
   
	initializeSubscribing: function() {
		
		goodshow.Broadcast.subscribe('arranger.invalidate', function(options) {
			window.setTimeout(function() {
				console.log('arranger.invalidate');
				options.entity.draw();
			}.bind(this), 1);
		}.bind(this));
	}
});
