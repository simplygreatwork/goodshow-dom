
goodshow.component.Ripple = goodshow.component.Root.extend({
	
	initialize: function(options) {
		
		goodshow.component.Root.prototype.initialize.call(this, Object.assign({
			maximum: 10,
			events: [],
			color: '#999999'
		}, options || {}));
	},
	
	install: function(entity) {
		
		goodshow.component.Root.prototype.install.call(this, entity);
		if (entity.options.paint === undefined) {
			entity.options.paint = new goodshow.component.Paint({
				painters: []
			});
		}
		entity.options.paint.painters.push(new goodshow.painter.Ripple({
			color: this.color
		}));
		entity.element.addEventListener('mousedown', function(event) {
			this.events.push({
				timeStamp: Date.now(),
				position: {
				   x : event.clientX,
				   y : event.clientY,
				}
			});
			if (this.events.length > 5) {
				this.events.splice(0, this.events.length - 5);
			}
			if (this.interval === undefined) {
				this.interval = window.setInterval(function() {
					entity.draw(); // review: using requestAnimFrame or Ticker instead
				}.bind(this), 1); // also need to stop interval when empty
			}
			if (this.timeout) {
				window.clearTimeout(this.timeout);
			}
			this.timeout = window.setTimeout(function() {
				if (this.interval) {
					window.clearInterval(this.interval);
					delete this.interval;
				}
			}.bind(this), 1000);
		}.bind(this));
	},
	
	draw: function(entity) {
		
		goodshow.component.Root.prototype.draw.call(this, entity);
	}
});
