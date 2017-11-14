
goodshow.component.Style = goodshow.component.Root.extend({
	
	initialize: function(options) {
		
		goodshow.component.Root.prototype.initialize.call(this);
		this.options = options;
	},
   
	install: function(entity) {
		
		goodshow.component.Root.prototype.install.call(this, entity);
		Object.keys(this.options).forEach(function(key) {
			entity.element.style[key] = this.options[key];
		}.bind(this));
	},
   
	draw: function(entity) {
		
		goodshow.component.Root.prototype.draw.call(this, entity);
	}
});
