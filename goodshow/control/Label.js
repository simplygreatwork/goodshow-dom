
goodshow.Label = goodshow.Entity.extend({
	
	initialize: function(options) {
		
		options = Object.assign({
		   
		}, goodshow.enhance(options) || {});
		if (options.background) {
			options.paint = options.paint || {
				painters: []
			};
			options.paint.painters.unshift(new goodshow.painter.Background({
				color: options.background,
			}));
		}
      goodshow.Entity.prototype.initialize.call(this, Object.assign({
			contain: {
				arranger: new goodshow.arranger.Vertical(),
				children: []
			},
		}, options || {}));
	}
});
