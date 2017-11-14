
goodshow.component.Text = goodshow.component.Root.extend({
	
	initialize: function(options) {
		
		goodshow.component.Root.prototype.initialize.call(this, Object.assign({
			text : '',
			font : '20px Roboto',
			fillStyle : 'black',
			textAlign : 'center',
			textBaseline : 'middle',
			wrap : false,
			lineHeight : 20
		}, options || {}));
		if (options.foreground) {
			options.fillStyle = options.foreground;
		}
	},
	
	install: function(entity) {
		
		goodshow.component.Root.prototype.install.call(this, entity);
		if (false) entity.context.alpha = false;
	},
	
	draw: function(entity) {
		
		goodshow.component.Root.prototype.draw.call(this, entity);
		var context = entity.context;
		context.font = this.font;
		context.fillStyle = this.fillStyle.valueOf();
		context.textAlign = this.textAlign;
		context.textBaseline = this.textBaseline;
		if (entity.options.bounds.width > 0) {
			if (this.height === undefined) {
				var maxWidth = entity.options.bounds.width;
				if (entity.options.constrain.extent.kind == 'flow') {
					this.height = this.calculateHeight(entity, maxWidth, this.lineHeight);
					entity.options.constrain.extent.value = this.height;
					window.setTimeout(function() {
						if (entity.parent && entity.parent.draw) {
							entity.parent.draw();
						}
					}.bind(this), 1);
				}
			}
		} else {
			window.setTimeout(function() {
				entity.parent.draw();
			}.bind(this), 1);
		}
		var x = entity.options.bounds.width / 2;
		var y = entity.options.bounds.height / 2;
		if (this.textAlign == 'left') {
			x = 0;
		} else if (this.textAlign == 'right') {
			x = entity.options.bounds.width;
		}
		if (this.wrap) {
			var maxWidth = entity.options.bounds.width;
			this.drawLines(context, x, y, maxWidth, this.lineHeight);
		} else {
			entity.context.fillText(this.text, x, y);
		}
	},
	
	drawLines : function(context, x, y, maxWidth, lineHeight) {
		
		y = lineHeight / 2;
		var lines = this.buildLines(context, maxWidth);
		lines.forEach(function(line) {
			context.fillText(line, x, y);
			y = y + lineHeight;
		}.bind(this));
	},
	
	calculateHeight : function(entity, maxWidth, lineHeight) {
		
		var result = 0;
		var context = entity.context;
		var lines = this.buildLines(context, maxWidth);
		lines.forEach(function(line) {
			result = result + lineHeight;
		}.bind(this));
		var margin = entity.options.constrain.margin;
		var padding = entity.options.constrain.padding;
		result = result + margin.top + margin.bottom;
		result = result + padding.top + padding.bottom;
		return result;
	},
	
	buildLines : function(context, maxWidth) {
		
		var result = [];
		var line = '';
		var words = this.text.split(' ');
		words.forEach(function(word, index) {
			var test = line + word + ' ';
			var metrics = context.measureText(test);
			if ((metrics.width > maxWidth) && (index > 0)) {
				result.push(line);
				line = word + ' ';
			} else {
				line = test;
			}
		}.bind(this));
		result.push(line);
		return result;
	}
});
