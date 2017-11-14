
goodshow.Floater = goodshow.Entity.extend({
	
	initialize: function(options) {
		
		goodshow.Entity.prototype.initialize.call(this, Object.assign({
			foreground: '#000000',
			background: '#aa0000',
			paint: {
				painters: [
					this.painter = new goodshow.painter.Circular({
						color: options.background
					})
				]
			},
			ripple: {
				color: '#ffffff',
				maximum: 10
			}
		}, options || {}));
	}
});
