
goodshow.TextArea = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		options = options || {};
		options.text = options.text || {};
		options.text.wrap = true;
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			contain: {
				arranger: new goodshow.arranger.Stack(),
				children: []
			},
			text : options.text
		}, options || {}));
	},
	
	draw: function() {
		
		goodshow.Panel.prototype.draw.call(this);
	}
});
