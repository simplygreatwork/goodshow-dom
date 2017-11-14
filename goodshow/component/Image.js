
goodshow.component.Image = goodshow.component.Root.extend({
	
	initialize: function(options) {
		
		goodshow.component.Root.prototype.initialize.call(this, Object.assign({
         
		}, options || {}));
	},
	
	install: function(entity) {
		
		goodshow.component.Root.prototype.install.call(this, entity);
		this.image = new Image();
      this.image.onload = function() {
      	this.image.loaded = true;
      	if (! this.drawn) {
				this.draw(entity);
      	}
		}.bind(this);
      this.image.src = this.path;
	},
	
	draw: function(entity) {
		
		goodshow.component.Root.prototype.draw.call(this, entity);
		if ((this.image.loaded) && (entity.options.bounds.width > 0)) {
 			if (entity.options.constrain.extent.kind == 'flow') {
				var height = entity.options.bounds.width / (this.image.width / this.image.height);
				entity.options.constrain.extent.value = height;
			}
			entity.context.drawImage(this.image, 0, 0, entity.options.bounds.width, entity.options.bounds.height);
			this.drawn = true;
		} else {
			window.setTimeout(function() {
				entity.parent.draw();
			}.bind(this), 100);
		}
	}
});
