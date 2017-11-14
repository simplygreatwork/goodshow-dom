
goodshow.Button = goodshow.Entity.extend({
	
	initialize: function(options) {
		
		goodshow.Label.prototype.initialize.call(this, Object.assign({
			hover : {},
			mask : {},
			ripple : {
				color : '#999999',
				maximum : 10
			}
		}, options || {}));
	},
	
	install: function(entity) {
		
		goodshow.Entity.prototype.install.call(this, entity);
	},
	
	draw: function(entity) {
		
		goodshow.Entity.prototype.draw.call(this, entity);
	}
});
