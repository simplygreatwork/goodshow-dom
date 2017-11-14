
goodshow.component.Hover = goodshow.component.Root.extend({
	
	initialize: function(options) {
		
		goodshow.component.Root.prototype.initialize.call(this, options);
	},
	
	install: function(entity) {
		
		goodshow.component.Root.prototype.install.call(this, entity);
		if (entity.options.paint === undefined) {
			entity.options.paint = new goodshow.component.Paint({
				painters: []
			});
		}
		entity.options.paint.painters.push(this.painter = new goodshow.painter.Hover({
			color: '#000000',
			alpha: 0
		}));
      entity.element.style['pointer-events'] = 'auto';
      entity.element.addEventListener('mouseover', function(event) {
			this.painter.alpha = 0.2;
			entity.draw();
      }.bind(this));
      entity.element.addEventListener('mouseout', function(event) {
			this.painter.alpha = 0;
			entity.draw();
      }.bind(this));
	},
	
	draw: function(entity) {
		
		goodshow.component.Root.prototype.draw.call(this, entity);
	}
});
