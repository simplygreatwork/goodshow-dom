
goodshow.List = goodshow.Panel.extend({
   
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background: '#ffffff',
			contain: {
				arranger: new goodshow.arranger.Vertical(),
				children: []
			},
			mask: {
				painters: [
					new goodshow.painter.Background({
						color: 0xFFFFFF
					})
				]
			},
			selection: {
				quantity: 0
			},
			scroll : {}
		}, options || {}));
	},
   
	draw: function() {
      
		goodshow.Panel.prototype.draw.call(this);
	}
});
