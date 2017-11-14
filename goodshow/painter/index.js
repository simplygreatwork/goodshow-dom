
goodshow.painter = {};

goodshow.painter.Root = Class.extend({
   
   initialize : function(options) {
      
      Object.assign(this, options || {});
   },
   
	paint: function(entity) {
      
      
	}
});

goodshow.painter.Background = goodshow.painter.Root.extend({
   
   initialize : function(options) {
      
      goodshow.painter.Root.prototype.initialize.call(this, options);
   },
   
	paint: function(entity) {
      
      var context = entity.context;
      var bounds = entity.options.bounds;
      context.fillStyle = entity.options.background.valueOf();
      context.fillRect(0, 0, bounds.width, bounds.height);
	}
});

goodshow.painter.Hover = goodshow.painter.Root.extend({
	
	initialize: function(options) {
		
		goodshow.painter.Root.prototype.initialize.call(this, Object.assign({
			color: '#ffffff',
			alpha: 1
		}, options || {}));
	},
	
	paint: function(entity) {
		
		var context = entity.context;
		context.save();
		var bounds = entity.options.bounds;
		context.globalAlpha = this.alpha;
		context.fillStyle = this.color;
      context.fillRect(0, 0, bounds.width, bounds.height);
		context.restore();
	}
});

goodshow.painter.Select = goodshow.painter.Root.extend({ // dead code
	
	initialize: function(options) {
		
		goodshow.painter.Root.prototype.initialize.call(this, Object.assign({
			color: 0x6666FF,
			alpha: 1
		}, options || {}));
	},

	paint: function(entity) {

		if (entity.options.selected) {
			entity.beginFill(this.color, this.alpha);
			this.drawRectangle(entity, entity.options.bounds);
		}
	}
});

goodshow.painter.Circular = goodshow.painter.Root.extend({
	
	initialize: function(options) {
		
		goodshow.painter.Root.prototype.initialize.call(this, Object.assign({
			color: '#dddddd',
			alpha: 1
		}, options || {}));
	},
	
	paint: function(entity) {
		
		var bounds = entity.options.bounds;
		var x = bounds.width / 2;
		var y = bounds.height / 2;
		var radius = bounds.width / 2;
		if (bounds.height < bounds.width) {
			radius = bounds.height / 2
		}
		var context = entity.context;
      context.fillStyle = this.color;
		context.beginPath();
		context.arc(x, y, radius, 0, Math.PI * 2, true);
		context.fill();
		context.clip();
	}
});

goodshow.painter.Avatar = goodshow.painter.Circular;

goodshow.painter.Divider = goodshow.painter.Root.extend({

	initialize: function(options) {
      
		goodshow.painter.Root.prototype.initialize.call(this, Object.assign({
			color: '#cccccc'
		}, options || {}));
	},
   
	paint: function(entity) {
      
		var bounds = entity.options.bounds;
		var context = entity.context;
      context.beginPath();
      context.strokeStyle = this.color;
      context.moveTo(0, bounds.height - 1);
      context.lineTo(bounds.width, bounds.height - 1);
      context.stroke();
	}
});

goodshow.painter.Ripple = goodshow.painter.Root.extend({
	
	initialize: function(options) {
		
		this.options = Object.assign({
			color: 0x999999
		}, options || {});
	},
	
	paint: function(entity) {
		
		var now = new Date().getTime();
		if (entity.options.ripple && entity.options.ripple.events) {
			var events = entity.options.ripple.events;
			events.forEach(function(event) {
				var diff = now - event.timeStamp;
				if (diff < 1000) {
					var alpha = 0.3 * ((1000 - diff) / 1000);
					var bounds = entity.options.bounds;
					var radius = (entity.options.ripple.radius || Math.max(bounds.width, bounds.height)) * (diff / 1000) * 1.1
					var position = event.position;
					var context = entity.context;
					context.fillStyle = this.options.color;
					context.beginPath();
					var x = event.position.x - entity.options.bounds.x;
					var y = event.position.y - entity.options.bounds.y;
					context.save();
					context.globalAlpha = alpha;
					context.arc(x, y, radius, 0, Math.PI * 2, true);
					context.fill();
					context.restore();
				}
			}.bind(this));
		}
	}
});

goodshow.painter.Shadow = goodshow.painter.Root.extend({
	
	initialize: function(options) {
		
		goodshow.painter.Root.prototype.initialize.call(this, Object.assign({
			color: 0x000000,
			alpha: 1
		}, options || {}));
	},
	
	paint: function(entity) {
		
		var context = entity.context;
		context.save();
		context.shadowBlur = 4;
		context.shadowColor = '#cccccc';
		context.shadowOffsetX = 4;
		context.shadowOffsetY = 4;
		context.fillStyle = 'white';
      context.fillRect(
         5,
         5,
         entity.options.bounds.width - 10,
         entity.options.bounds.height - 10,
      );

	}
});
